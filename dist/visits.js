(() => {
  if (!['https:', 'http:'].includes(location.protocol) || ['localhost', '127.0.0.1'].includes(location.hostname)) return;
  const key = 'christmas-visit-v1';
  const lifetime = 30 * 60 * 1000;
  const now = Date.now();
  let visit;
  try { visit = JSON.parse(sessionStorage.getItem(key) || 'null'); } catch {}
  if (!visit || typeof visit.id !== 'string' || !Number.isFinite(visit.started) || now - visit.started >= lifetime || now < visit.started) {
    visit = { id: crypto.randomUUID(), started: now, recorded: false };
  }
  if (visit.recorded) return;
  const save = () => { try { sessionStorage.setItem(key, JSON.stringify(visit)); } catch {} };
  save();
  fetch('/api/visits', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ visitId: visit.id }), keepalive: true })
    .then(response => { if (response.ok) { visit.recorded = true; save(); } }).catch(() => {});
})();
