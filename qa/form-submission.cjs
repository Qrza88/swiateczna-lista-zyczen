const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync(__dirname+'/../dist/index.html','utf8');
const tag=html.match(/<button\b[^>]*\bid="send-letter"[^>]*>/)?.[0];
assert(tag,'The visible send action exists');
assert.match(tag,/\btype="button"/,'The send action is not the browser default submit control');
const source=html.match(/\/\/ LETTER_SUBMISSION_START[\s\S]*?\/\/ LETTER_SUBMISSION_END/)?.[0];
assert(source,'Submission wiring is present in the actual self-contained page');
const listeners=new Map(),calls=[];
const node=id=>({id,addEventListener(type,handler){const key=id+':'+type;if(!listeners.has(key))listeners.set(key,[]);listeners.get(key).push(handler);}});
const nodes=new Map([['letter-form',node('letter-form')],['send-letter',node('send-letter')]]);
let valid=true;
vm.runInNewContext(source,{$:id=>{assert(nodes.has(id),'Only the letter form and send action are wired');return nodes.get(id);},hideConfirmation(){calls.push('hide');},refreshErrors(){calls.push('validate');return valid;},showConfirmation(){calls.push('confirm');}});
const dispatch=(id,type,event={})=>{for(const handler of listeners.get(id+':'+type)||[])handler(event);};
// Any implicit form submission is cancelled without validation, focus changes
// or confirmation, even when the browser supplies a default submitter.
for(const submitter of [null,nodes.get('send-letter')]){
 let cancelled=false;calls.length=0;
 dispatch('letter-form','submit',{submitter,preventDefault(){cancelled=true;}});
 assert(cancelled,'Native submission is cancelled');
 assert.deepEqual(calls,[],'Implicit submit cannot change the screen or trigger validation');
}
// Native button activation produces click for a pointer, Enter, Space and AT.
for(const detail of [0,1]){
 valid=true;calls.length=0;
 dispatch('send-letter','click',{detail});
 assert.deepEqual(calls,['hide','validate','confirm'],'Explicit activation validates and displays success');
}
valid=false;calls.length=0;
dispatch('send-letter','click',{detail:0});
assert.deepEqual(calls,['hide','validate'],'Invalid data cannot reach confirmation');
assert(!listeners.has('letter-form:click'),'Clicks on fields cannot activate sending');
assert(!listeners.has('letter-form:keydown'),'Keyboard defaults of other controls remain native');
assert(!listeners.has('send-letter:keydown'),'The native button handles Enter and Space');
const lottery=html.match(/<input\b[^>]*\bid="join-lottery"[^>]*>/)?.[0];
assert.match(lottery,/\btype="checkbox"/);
assert(!/\bon(?:change|click|keydown)=/.test(lottery),'Selecting participation has no inline send action');
assert(!html.includes("$('letter-form').addEventListener('submit',()=>{stopGiftFlight();queueMiniSync();});"),'Animation cleanup follows explicit sending');
assert(html.includes("$('send-letter').addEventListener('click',()=>{stopGiftFlight();queueMiniSync();});"));
// Exercise the real validation function with a complete name and a gift, so
// the required consent is the first and only error.
const requiredTag=html.match(/<input\b[^>]*\bid="elf-terms"[^>]*>/)?.[0];
assert.match(requiredTag,/\btype="checkbox"/);
assert.match(requiredTag,/\brequired\b/,'Consent retains native required semantics');
const fields=new Map();let focused=null;
const field=id=>{if(!fields.has(id))fields.set(id,{id,value:'',checked:false,hidden:true,attributes:new Map(),focus(){focused=id;},setAttribute(k,v){this.attributes.set(k,v);},removeAttribute(k){this.attributes.delete(k);}});return fields.get(id);};
field('author-name').value='Próba';
const validation=vm.createContext({$:field,state:{validationAttempted:false,bag:new Map([['headphones',1]]),category:'self'},setPanelDescription(){}});
const validationSource=html.match(/function refreshErrors\(focus=true\)[^\n]+/)?.[0];
assert(validationSource,'Actual field validation exists');
vm.runInContext(validationSource+'\nthis.validate=refreshErrors;',validation);
assert.equal(validation.validate(),false,'Missing consent blocks the action');
assert.equal(focused,'elf-terms','Focus reaches the missing required consent');
assert.equal(field('elf-terms').attributes.get('aria-invalid'),'true');
assert.equal(field('elf-terms-error').hidden,false);
assert(field('elf-terms').attributes.get('aria-describedby').split(' ').includes('elf-terms-error'),'Inline error is connected to its checkbox');
assert(field('elf-terms').attributes.get('aria-describedby').split(' ').includes('elf-terms-note'),'The rules remain connected');
field('elf-terms').checked=true;
assert.equal(validation.validate(false),true,'Checked consent allows explicit sending');
assert.equal(focused,'elf-terms','Updating an error does not move focus');
assert(!field('elf-terms').attributes.has('aria-invalid'));
assert.equal(field('elf-terms-error').hidden,true);
assert.equal(field('elf-terms').attributes.get('aria-describedby'),'elf-terms-note');
field('elf-terms').checked=false;
assert.equal(validation.validate(false),false,'Removing required consent blocks sending again');
assert.equal(focused,'elf-terms');
console.log('OK: implicit submission is inert; explicit activation validates; required consent has native semantics, a connected inline error and correct focus; native keyboard/AT click activation is preserved.');
