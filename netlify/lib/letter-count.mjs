// Atomowy zapis przypisuje osobny numer listu i udziału, bez treści formularza.
export function createCounterHandler(getStore){
 const json=(body,status=200)=>Response.json(body,{status,headers:{'Cache-Control':'no-store'}});
 return async function handler(request){
  if(!['GET','POST'].includes(request.method))return json({error:'Method not allowed'},405);
  if(request.method==='POST'){const origin=request.headers.get('origin');if(origin&&origin!==new URL(request.url).origin)return json({error:'Invalid origin'},403);}
  try{
   const store=getStore();let submissionId,participates=false;
   if(request.method==='POST'){
    const text=await request.text();if(text.length>512)return json({error:'Invalid body'},400);
    let body;try{body=JSON.parse(text);}catch{return json({error:'Invalid JSON'},400);}
    if(!body||Object.keys(body).length!==2||!Object.hasOwn(body,'submissionId')||typeof body.participates!=='boolean'||typeof body.submissionId!=='string'||!(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i).test(body.submissionId))return json({error:'Invalid submission'},400);
    submissionId=body.submissionId.toLowerCase();participates=body.participates;
   }
   for(let attempt=0;attempt<40;attempt++){
    const entry=await store.getWithMetadata('counter-v1',{type:'json'}),current=entry?.data||{total:0,lotteryTotal:0,receipts:{}};
    if(!Number.isSafeInteger(current.total)||current.total<0||!current.receipts)return json({error:'Counter unavailable'},503);
    const lotteryTotal=current.lotteryTotal??0;
    if(!Number.isSafeInteger(lotteryTotal)||lotteryTotal<0)return json({error:'Counter unavailable'},503);
    if(!submissionId)return json({total:current.total,lotteryTotal,winningInterval:5});
    const previous=current.receipts[submissionId],receipt=typeof previous==='number'?{ordinal:previous,lotteryOrdinal:null}:previous;
    if(receipt&&(!participates||receipt.lotteryOrdinal!==null))return json({total:current.total,lotteryTotal,...receipt,winningInterval:5});
    if(entry&&!entry.etag)return json({error:'Counter unavailable'},503);
    const ordinal=receipt?.ordinal??current.total+1,lotteryOrdinal=participates?lotteryTotal+1:null;
    const next={total:current.total+(receipt?0:1),lotteryTotal:lotteryTotal+(participates?1:0),receipts:{...current.receipts,[submissionId]:{ordinal,lotteryOrdinal}}};
    const result=await store.setJSON('counter-v1',next,entry?{onlyIfMatch:entry.etag}:{onlyIfNew:true});
    if(result.modified)return json({total:next.total,lotteryTotal:next.lotteryTotal,ordinal,lotteryOrdinal,winningInterval:5});
    await new Promise(resolve=>setTimeout(resolve,2+Math.floor(Math.random()*18)));
   }
   return json({error:'Counter busy; retry with the same submissionId'},503);
  }catch{return json({error:'Counter unavailable'},503);}
 };
}
