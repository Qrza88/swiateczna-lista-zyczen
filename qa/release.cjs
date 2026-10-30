const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync(__dirname+'/../dist/index.html','utf8');
const helper=fs.readFileSync(__dirname+'/../winner-comments.js','utf8');
assert.equal(html.match(/\/\/ WINNER_COMMENTS_START[\s\S]*?\/\/ WINNER_COMMENTS_END/)[0].trim(),helper.trim());
for(const [file,marker] of [['elf-engine.js','ELF_REPLY_ENGINE'],['bag-feedback.js','BAG_FEEDBACK']]){
 const source=fs.readFileSync(__dirname+'/../'+file,'utf8');
 assert.equal(html.match(new RegExp('// '+marker+'_START[\\s\\S]*?// '+marker+'_END'))[0].trim(),source.trim(),file+' matches the self-contained page');
}
const context=vm.createContext({});vm.runInContext(helper+'\nthis.factory=createWinnerComments;',context);
let draws=0;const comments=context.factory(()=>{return (draws++%6)/6;});
const seen=new Set();for(let entry=5;entry<=30;entry+=5){const comment=comments(entry);seen.add(comment);assert.equal(comments(entry),comment);}
assert.equal(seen.size,6);assert.equal(draws,6,'Repeated render does not redraw a comment');
for(const invalid of [null,0,-1,1.5,NaN])assert.equal(comments(invalid),'');
const dictionary=fs.readFileSync(__dirname+'/../i18n.js','utf8');
const translations=vm.createContext({location:{search:'?lang=en'},localStorage:{getItem(){return null;}},URLSearchParams});
vm.runInContext(dictionary+'\nthis.translate=translateUi;',translations);
for(const comment of seen){const english=translations.translate(comment);assert.notEqual(english,comment);assert(!/[ąćęłńóśźż]/i.test(english));}
assert.equal(translations.translate('Wygrana! Milion tokenów jest Twój!'),'You won! A million tokens are yours!');
// Exercise the actual result renderer with consecutive callbacks.
const nodes=new Map();const get=id=>{if(!nodes.has(id))nodes.set(id,{hidden:true,checked:false,textContent:'',classList:{toggle(){}}});return nodes.get(id);};
get('confirmation').hidden=false;get('join-lottery').checked=true;
let update;const renderer=vm.createContext({$:get,createWinnerComments:context.factory,createLetterCounter(options){update=options.onChange;return {};},counterStorage:{},counterSession:{},makeLetterId(){},counterServer:false,fetch(){},writeUiText(el,value,append=false){el.textContent=(append?el.textContent:'')+value;}});
vm.runInContext(html.slice(html.indexOf('const winnerCommentFor='),html.indexOf('void letterCounter.load();')),renderer);
update({total:5,lotteryOrdinal:5,winningInterval:5,server:true,error:false});
assert.equal(get('lottery-result-title').textContent,'Wygrana! Milion tokenów jest Twój!');
const first=get('lottery-result-text').textContent;assert(first.startsWith('Twój udział ma numer 5. '));
update({total:6,lotteryOrdinal:5,winningInterval:5,server:true,error:false});assert.equal(get('lottery-result-text').textContent,first);
update({total:6,lotteryOrdinal:6,winningInterval:5,server:true,error:false});assert.equal(get('lottery-result-title').textContent,'Wynik loterii');assert(!seen.has(get('lottery-result-text').textContent));
update({total:6,lotteryOrdinal:null,winningInterval:5,server:true,error:true});assert.match(get('lottery-result-text').textContent,/chwilowo niedostępny/);
get('join-lottery').checked=false;get('lottery-result').hidden=true;update({total:7,lotteryOrdinal:null,winningInterval:5,server:true,error:false});assert(get('lottery-result').hidden);
// Grinch removes gifts, keeps two actions, and handles empty sacks without a hidden focus target.
assert(!html.includes('pause-session'));
const actions=new Map();let focused=null;
const action=id=>{if(!actions.has(id))actions.set(id,{hidden:false,textContent:'',focus(){focused=id;},closest(){return this.hidden?this:null;}});return actions.get(id);};
const prankSource=fs.readFileSync(__dirname+'/../grinch-prank.js','utf8');
const scope=vm.createContext({$:action,state:{bag:new Map([['chair',3]])},session:{},document:{activeElement:null},writeUiText(el,value){el.textContent=value;},clearGrinchTimeWarning(){},renderBag(){},syncGrinchRecovery(){},syncGrinchSemantics(){},revealGrinchFocus(){},announceGrinchResult(){}});
vm.runInContext(prankSource+'\nconst grinchPrank=createGrinchPrank();\n'+html.slice(html.indexOf('function expireGrinch(){'),html.indexOf('function restoreGrinchGifts('))+'\nthis.expire=expireGrinch;',scope);
scope.expire();assert.equal(scope.state.bag.size,0);assert.equal(action('extend-session').textContent,'Odzyskaj prezenty');assert.equal(action('end-session').hidden,false);
const emptyScope=vm.createContext({$:action,state:{bag:new Map()},session:{},document:{activeElement:action('end-session')},writeUiText(el,value){el.textContent=value;},clearGrinchTimeWarning(){},renderBag(){},syncGrinchRecovery(){},syncGrinchSemantics(){},revealGrinchFocus(){},announceGrinchResult(){}});
vm.runInContext(prankSource+'\nconst grinchPrank=createGrinchPrank();\n'+html.slice(html.indexOf('function expireGrinch(){'),html.indexOf('function restoreGrinchGifts('))+'\nthis.expire=expireGrinch;',emptyScope);
emptyScope.expire();assert.equal(action('extend-session').textContent,'Wróć do listy życzeń');assert(action('end-session').hidden);assert.equal(focused,'extend-session');
const close=action('close-grinch');const extend=action('extend-session');const end=action('end-session');
action('grinch-window').querySelectorAll=()=>[close,extend,end];
emptyScope.document.activeElement=extend;
vm.runInContext(html.match(/function modalKeys\(e,id,close\)[^\n]+/)[0]+'\nthis.keys=modalKeys;',emptyScope);
let prevented=false;emptyScope.keys({key:'Tab',shiftKey:false,preventDefault(){prevented=true;}},'grinch-window',()=>{});assert(prevented);assert.equal(focused,'close-grinch','Tab wraps past the hidden redundant return button');
console.log('OK: six translated winner comments, stable per entry, result states, helper consistency, Grinch actions after expiry, empty-sack focus and Tab cycle.');
