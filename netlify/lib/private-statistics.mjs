import { createHash } from 'node:crypto';

const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const hashPattern = /^[0-9a-f]{64}$/;
const dayFormatter = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Warsaw', year: 'numeric', month: '2-digit', day: '2-digit' });
export const hashIdentifier = id => createHash('sha256').update(id.toLowerCase()).digest('hex');
export const statisticsStoreName = 'christmas-private-statistics-v1';

// Immutable receipts, never a shared read/modify/write counter.
export function createPrivateStatistics(store, { historicalCompletions = [], now = () => new Date() } = {}) {
  let migration;
  const migrate = () => migration ||= Promise.all(historicalCompletions.map(receipt => {
    if (!hashPattern.test(receipt.hash)) throw new Error('Invalid historical receipt');
    return store.setJSON(`completions/${receipt.hash}`, { language: receipt.language, day: receipt.day, source: 'postgres-snapshot' }, { onlyIfNew: true });
  })).catch(error => { migration = undefined; throw error; });
  return {
    async recordVisit(visitId) {
      await migrate();
      const day = dayFormatter.format(now());
      return store.setJSON(`visits/${day}/${hashIdentifier(visitId)}`, { day }, { onlyIfNew: true });
    },
    async record(hash, language) {
      if (!hashPattern.test(hash)) throw new Error('Invalid completion hash');
      await migrate();
      const day = dayFormatter.format(now());
      const { modified } = await store.setJSON(`completions/${hash}`, { language, day, source: 'game' }, { onlyIfNew: true });
      return { recorded: true, created: modified };
    }
  };
}

export function createVisitHandler(statistics) {
  return async request => {
    const respond = (body, status) => Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } });
    if (request.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST', 'Cache-Control': 'no-store' } });
    if (request.headers.get('origin') && request.headers.get('origin') !== new URL(request.url).origin) return respond({ error: 'Origin not allowed' }, 403);
    try {
      const raw = await request.text();
      if (Buffer.byteLength(raw) > 256) return respond({ error: 'Request too large' }, 413);
      let body;
      try { body = JSON.parse(raw); } catch { return respond({ error: 'Invalid JSON' }, 400); }
      if (!body || Object.keys(body).length !== 1 || typeof body.visitId !== 'string' || !uuid.test(body.visitId)) return respond({ error: 'Invalid visit identifier' }, 400);
      await statistics.recordVisit(body.visitId);
      return new Response(null, { status: 204, headers: { 'Cache-Control': 'no-store' } });
    } catch { return respond({ error: 'Statistics temporarily unavailable' }, 503); }
  };
}
