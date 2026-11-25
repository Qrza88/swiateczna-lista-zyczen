import {getStore,getDeployStore} from '@netlify/blobs';
import {createPrivateCounterEndpoint} from '../lib/letter-count.mjs';

export default async (request,context)=>{
 if(request.method==='GET')return new Response('Method not allowed',{status:405,headers:{Allow:'POST','Cache-Control':'no-store'}});
 if(!context?.deploy?.context)return Response.json({error:'Missing deploy context'},{status:503});
 const options={name:'pp-letter-receipts',consistency:'strong',region:'us-east-2'};
 return createPrivateCounterEndpoint(()=>context.deploy.context==='production'?getStore(options):getDeployStore(options))(request);
};
