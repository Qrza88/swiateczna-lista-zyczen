import { getStore, getDeployStore } from '@netlify/blobs';
import { createPrivateStatistics, createVisitHandler, statisticsStoreName } from '../lib/private-statistics.mjs';
let handler;
export default async (request, context) => {
  try {
    if (!context?.deploy?.context) throw new Error('Missing deploy context');
    if (!handler) {
      const options = { name: statisticsStoreName, consistency: 'strong', region: 'us-east-2' };
      const store = context.deploy.context === 'production' ? getStore(options) : getDeployStore(options);
      handler = createVisitHandler(createPrivateStatistics(store));
    }
    return await handler(request);
  } catch { return Response.json({ error: 'Statistics temporarily unavailable' }, { status: 503, headers: { 'Cache-Control': 'no-store' } }); }
};
export const config = { path: '/api/visits' };
