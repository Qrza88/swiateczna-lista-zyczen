import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {createCounterHandler} from '../netlify/lib/letter-count.mjs';
const source=await readFile(new URL('../counter-client.js',import.meta.url),'utf8');
const scope=vm.createContext({});vm.runInContext(source+'\nthis.factory=createLetterCounter;',scope);
const factory=scope.factory;
const memory=()=>{const data=new Map();return{getItem:key=>data.get(key)||null,setItem:(key,value)=>data.set(key,value)};};
const id=n=>'00000000-0000-4000-8000-'+String(n).padStart(12,'0');
const url='https://demo.example/.netlify/functions/letter-count';
const post=(handler,n,participates=false)=>handler(new Request(url,{method:'POST',headers:{Origin:'https://demo.example'},body:JSON.stringify({submissionId:id(n),participates})}));
function atomicStore(){let data=null,version=0;return{async getWithMetadata(){return data?{data:structuredClone(data),etag:String(version)}:null;},async setJSON(key,next,options){if(options.onlyIfNew&&data||options.onlyIfMatch&&options.onlyIfMatch!==String(version))return{modified:false};data=structuredClone(next);version++;return{modified:true};}};}
test('Lokalny licznik liczy list raz, także po odświeżeniu; reset zaczyna nowy list',async()=>{
 const storage=memory(),session=memory();let serial=0,last;
 const counter=factory({storage,session,makeId:()=>id(++serial),onChange:x=>last=x});
 await counter.record();await counter.record();assert.equal(last.total,1);assert.equal(last.ordinal,1);
 const reloaded=factory({storage,session,makeId:()=>id(++serial),onChange:x=>last=x});
 await reloaded.record();assert.equal(last.total,1);assert.equal(last.ordinal,1);
 reloaded.resetDraft();await reloaded.record();assert.equal(last.total,2);assert.equal(last.ordinal,2);
});
test('Podwójne wysłanie współdzieli żądanie; po błędzie ponawia ten sam identyfikator',async()=>{
 let calls=0,last,fail=true;const sent=[];
 const counter=factory({storage:memory(),session:memory(),makeId:()=>id(1),server:true,onChange:x=>last=x,fetchFn:async(url,options)=>{calls++;sent.push(JSON.parse(options.body));await Promise.resolve();return{ok:!fail,json:async()=>({total:7,ordinal:7,lotteryOrdinal:null})};}});
 await Promise.all([counter.record(),counter.record()]);assert.equal(calls,1);assert.equal(last.error,true);
 fail=false;await counter.record();assert.equal(calls,2);assert.equal(last.total,7);assert.equal(last.ordinal,7);assert.deepEqual(sent,[{submissionId:id(1),participates:false},{submissionId:id(1),participates:false}]);
});
test('Spóźnione GET nie nadpisuje numeru po wysłaniu',async()=>{
 let resolveGet,last;const counter=factory({storage:memory(),session:memory(),makeId:()=>id(1),server:true,onChange:x=>last=x,fetchFn:async(url,{method})=>method==='GET'?new Promise(resolve=>resolveGet=()=>resolve({ok:true,json:async()=>({total:3})})):{ok:true,json:async()=>({total:4,ordinal:4})}});
 const pending=counter.load();await counter.record();resolveGet();await pending;assert.equal(last.total,4);assert.equal(last.ordinal,4);
});
test('Równoległe powtórki jednego listu mają ten sam numer',async()=>{
 const store=atomicStore(),handler=createCounterHandler(()=>store);
 const results=await Promise.all(Array.from({length:8},()=>post(handler,1).then(r=>r.json())));
 assert.ok(results.every(x=>x.total===1&&x.ordinal===1));
});
test('500 równoległych udziałów i listy bez udziału: wygrane 100, 200, 300, 400, 500',async()=>{
 const store=atomicStore(),handler=createCounterHandler(()=>store);
 await Promise.all(Array.from({length:12},(_,n)=>post(handler,1000+n)));
 const responses=await Promise.all(Array.from({length:500},(_,n)=>post(handler,n+1,true)));
 assert.ok(responses.every(r=>r.status===200));const results=await Promise.all(responses.map(r=>r.json()));
 assert.deepEqual(results.map(x=>x.lotteryOrdinal).sort((a,b)=>a-b),Array.from({length:500},(_,n)=>n+1));
 assert.equal(new Set(results.map(x=>x.ordinal)).size,500);
 assert.deepEqual(results.filter(x=>x.lotteryOrdinal%x.winningInterval===0).map(x=>x.lotteryOrdinal).sort((a,b)=>a-b),[100,200,300,400,500]);
 assert.equal((await (await handler(new Request(url))).json()).total,512);
 const duplicate=await(await post(handler,1)).json();assert.equal(duplicate.total,512);assert.equal(duplicate.ordinal,results[0].ordinal);
});
test('Zaplecze odrzuca inne dane formularza, obce pochodzenie i nieprawidłowe metody',async()=>{
 const handler=createCounterHandler(()=>atomicStore());
 const invalid=await handler(new Request(url,{method:'POST',body:JSON.stringify({submissionId:id(1),name:'Nie wysyłamy imienia'})}));assert.equal(invalid.status,400);
 const foreign=await handler(new Request(url,{method:'POST',headers:{Origin:'https://elsewhere.example'},body:JSON.stringify({submissionId:id(1)})}));assert.equal(foreign.status,403);
 assert.equal((await handler(new Request(url,{method:'DELETE'}))).status,405);
});

test('Udział dopisany do wysłanego listu nie zwiększa liczby listów ani nie dubluje udziału',async()=>{
 const store=atomicStore(),handler=createCounterHandler(()=>store);
 assert.equal((await(await post(handler,1)).json()).lotteryOrdinal,null);
 const joined=await(await post(handler,1,true)).json();assert.equal(joined.total,1);assert.equal(joined.lotteryOrdinal,1);
 const again=await(await post(handler,1,true)).json();assert.equal(again.lotteryTotal,1);assert.equal(again.lotteryOrdinal,1);
});
test('Lokalna numeracja loterii pomija list bez udziału, liczy udział raz i wygrywa co 100',async()=>{
 const storage=memory(),session=memory();let serial=0,last;
 const counter=factory({storage,session,makeId:()=>id(++serial),onChange:x=>last=x});
 await counter.record(false);assert.equal(last.lotteryOrdinal,null);
 await counter.record(true);assert.equal(last.total,1);assert.equal(last.lotteryOrdinal,1);
 await counter.record(true);assert.equal(last.lotteryOrdinal,1);
 const winners=[];for(let n=2;n<=500;n++){counter.resetDraft();await counter.record(true);if(last.lotteryOrdinal%last.winningInterval===0)winners.push(last.lotteryOrdinal);}
 assert.deepEqual(winners,[100,200,300,400,500]);assert.equal(last.total,500);
});
