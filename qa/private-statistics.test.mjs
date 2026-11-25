import test from 'node:test';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { createPrivateStatistics, createVisitHandler, hashIdentifier } from '../netlify/lib/private-statistics.mjs';

function fixture(options) {
  const entries = new Map();
  const store = { async setJSON(key, body, conditions) {
    await new Promise(resolve => setImmediate(resolve));
    assert.deepEqual(conditions, { onlyIfNew: true });
    if (entries.has(key)) return { modified: false };
    entries.set(key, body);
    return { modified: true };
  } };
  return { entries, store, statistics: createPrivateStatistics(store, options) };
}
const post = (path, payload, headers = {}) => new Request(`https://game.example/api/${path}`, { method: 'POST', headers: { 'Content-Type': 'application/json', ...headers }, body: JSON.stringify(payload) });

test('500 concurrent completions and their retries retain every unique receipt once', async () => {
  const { statistics, entries } = fixture();
  const hashes = Array.from({ length: 500 }, () => hashIdentifier(randomUUID()));
  const results = await Promise.all(hashes.flatMap(hash => [statistics.record(hash, 'pl'), statistics.record(hash, 'en')]));
  assert.equal(entries.size, 500);
  assert.equal(results.filter(result => result.created).length, 500);
  assert.ok([...entries.keys()].every(key => /^completions\/[0-9a-f]{64}$/.test(key)));
});

test('migration preserves old receipts and deduplicates a returning old browser', async () => {
  const hash = hashIdentifier(randomUUID());
  const original = { hash, language: 'pl', day: '2026-11-02' };
  const { entries, statistics } = fixture({ historicalCompletions: [original] });
  assert.deepEqual(await statistics.record(hash, 'en'), { recorded: true, created: false });
  assert.equal(entries.size, 1);
  assert.deepEqual(entries.get(`completions/${hash}`), { language: 'pl', day: '2026-11-02', source: 'postgres-snapshot' });
});

test('retry after a lost response does not create a second completion', async () => {
  const { statistics, entries } = fixture();
  const hash = hashIdentifier(randomUUID());
  await statistics.record(hash, 'pl');
  assert.equal((await statistics.record(hash, 'pl')).created, false);
  assert.equal(entries.size, 1);
});

test('visits are partitioned by Warsaw date, without UUIDs or personal data in stored content', async () => {
  const id = randomUUID();
  const { statistics, entries } = fixture({ now: () => new Date('2026-12-01T23:30:00Z') });
  await Promise.all(Array.from({ length: 20 }, () => statistics.recordVisit(id)));
  assert.equal(entries.size, 1);
  assert.deepEqual(entries.get(`visits/2026-12-02/${hashIdentifier(id)}`), { day: '2026-12-02' });
  assert.ok(!JSON.stringify([...entries]).includes(id));
});

test('visit endpoint is write-only and rejects invalid, oversized and cross-origin submissions', async () => {
  const { statistics, entries } = fixture();
  const handler = createVisitHandler(statistics);
  assert.equal((await handler(new Request('https://game.example/api/visits'))).status, 405);
  assert.equal((await handler(post('visits', { visitId: 'wrong' }))).status, 400);
  assert.equal((await handler(post('visits', { visitId: randomUUID(), email: 'do not store' }))).status, 400);
  assert.equal((await handler(post('visits', { visitId: randomUUID(), padding: 'x'.repeat(300) }))).status, 413);
  assert.equal((await handler(post('visits', { visitId: randomUUID() }, { Origin: 'https://elsewhere.example' }))).status, 403);
  assert.equal((await handler(new Request('https://game.example/api/visits', { method: 'POST', body: '{' }))).status, 400);
  assert.equal(entries.size, 0);
  const response = await handler(post('visits', { visitId: randomUUID() }));
  assert.equal(response.status, 204);
  assert.equal(await response.text(), '');
  assert.equal(response.headers.get('Cache-Control'), 'no-store');
});

test('storage outage returns a retryable failure and never prevents the game from finishing', async () => {
  const handler = createVisitHandler({ recordVisit: async () => { throw new Error('offline'); } });
  assert.equal((await handler(post('visits', { visitId: randomUUID() }))).status, 503);
});

const visitCode = readFileSync(new URL('../dist/visits.js', import.meta.url), 'utf8');
test('visit client sends once per tab session, ignores reloads, renews after 30 minutes and has no polling', async () => {
  const storage = new Map(), calls = [];
  let timestamp = 1000000;
  const sandbox = { location: { protocol: 'https:', hostname: 'game.example' }, crypto: { randomUUID }, Date: { now: () => timestamp }, sessionStorage: { getItem: key => storage.get(key), setItem: (key, value) => storage.set(key, value) }, fetch: async (...args) => { calls.push(args); return { ok: true }; } };
  const run = async () => { vm.runInNewContext(visitCode, sandbox); await new Promise(resolve => setImmediate(resolve)); };
  await run(); await run();
  assert.equal(calls.length, 1);
  timestamp += 30 * 60 * 1000;
  await run();
  assert.equal(calls.length, 2);
  assert.notEqual(JSON.parse(calls[0][1].body).visitId, JSON.parse(calls[1][1].body).visitId);
  assert.ok(!/setInterval|setTimeout/.test(visitCode));
});

test('visit client retries the same identifier on next load after failure and tolerates blocked storage', async () => {
  const storage = new Map(), ids = [];
  const sandbox = { location: { protocol: 'https:', hostname: 'game.example' }, crypto: { randomUUID }, Date, sessionStorage: { getItem: key => storage.get(key), setItem: (key, value) => storage.set(key, value) }, fetch: async (_, options) => { ids.push(JSON.parse(options.body).visitId); throw new Error('offline'); } };
  vm.runInNewContext(visitCode, sandbox); await new Promise(resolve => setImmediate(resolve));
  vm.runInNewContext(visitCode, sandbox); await new Promise(resolve => setImmediate(resolve));
  assert.equal(ids[0], ids[1]);
  sandbox.sessionStorage = { getItem() { throw new Error('blocked'); }, setItem() { throw new Error('blocked'); } };
  assert.doesNotThrow(() => vm.runInNewContext(visitCode, sandbox));
  await new Promise(resolve => setImmediate(resolve));
});

test('public page hides aggregate totals and does not load them on entry', () => {
 const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
 assert.match(html, /id="letter-counter" hidden/);
 assert.ok(!html.includes('void letterCounter.load();'));
 assert.match(html, /src="visits.js"/);
});
