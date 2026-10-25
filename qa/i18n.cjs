const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync(__dirname+'/../dist/index.html','utf8');
const helper=fs.readFileSync(__dirname+'/../i18n.js','utf8');
const inline=html.slice(html.indexOf('// UI_I18N_START'),html.indexOf('// UI_I18N_END')+'// UI_I18N_END'.length);
assert.equal(inline.trim(),helper.trim(),'Keep the self-contained HTML and translation source in sync');
function translations(search='',saved=null){const context=vm.createContext({location:{search},localStorage:{getItem(){return saved;}},URLSearchParams});vm.runInContext(helper+'\nthis.api={translate:translateUi,language:uiLocale};',context);return context.api;}
const en=translations('?lang=en'),pl=translations('?lang=pl','en');
assert.equal(en.language,'en');assert.equal(pl.language,'pl');assert.equal(translations('','en').language,'en');assert.equal(translations().language,'pl');
assert.equal(pl.translate('Twoje imię'),'Twoje imię');
assert.equal(en.translate('1 minuta, 2 sekundy'),'1 minute, 2 seconds');assert.equal(en.translate('0 minut, 0 sekund'),'0 minutes, 0 seconds');
const name='Farby <script> & Żaneta';
assert.equal(en.translate(name+', w Twoim worku: 2 szt. prezentów. Oby renifery miały wolny termin.'),name+', your sack contains 2 gifts. Let us hope the reindeer have a free slot.','Treat the user name as opaque content');
assert.equal(en.translate('List wysłany | Świąteczna lista życzeń'),'Letter sent | Christmas wish list');
assert.match(en.translate('Gratulacje! Twój udział otrzymał numer 25. Wygrywasz symboliczną nagrodę w naszej loterii!'),/25.*You’ve won a symbolic prize/);
assert.ok(en.translate('Dodaj do worka: Fotel masujący do biura').startsWith(en.translate('Dodaj do worka')),'Fixed add-button name includes its visible label');
assert.notEqual(en.translate('Twoje imię'),en.translate('Identyfikator petenta'),'Keep the deliberate Label in Name mismatch');
assert.notEqual(en.translate('Wyślij list'),en.translate('Zatwierdź formularz'));
assert.notEqual(en.translate('Biorę udział w loterii'),en.translate('Aktywuj szczęście'));
assert.equal(en.translate('to znowu ja.'),'it’s me again.');
assert.equal(en.translate('Twój worek: 1 szt.'),'Your sack: 1 item');
assert.equal(en.translate('Twój worek: 2 szt.'),'Your sack: 2 items');
assert.equal(en.translate('Łącznie: 11 szt.'),'Total: 11 items');
assert.equal(en.translate('Łącznie: 21 szt.'),'Total: 21 items');
const opaque='Farby 1 items <script> & Żaneta';
assert(en.translate(opaque+', w Twoim worku: 2 szt. prezentów. Oby renifery miały wolny termin.').startsWith(opaque+','));
assert(!en.translate('Bo jestem sobie sterem, żeglarzem i okrętem. I najlepiej wiem, co ucieszy mnie pod choinką.').includes('shopping list'));
const products=vm.runInNewContext(html.match(/const products=(\[[\s\S]*?\]);\nconst byId/)[1]);
const engine=fs.readFileSync(__dirname+'/../elf-engine.js','utf8');
const context=vm.createContext({byId:new Map(products.map(p=>[p.id,p]))});
vm.runInContext(engine+'\nthis.reply=getElfReply;',context);
const cases=[
 ['Hello','greeting','Hello!'],['Thank you','thanks','welcome'],
 ['Why do I need a 3D printer?','product','extra pair of hands'],
 ['How do I add the massage chair?','add','For the team'],
 ['What is in my sack?','bag','office massage chair'],
 ['How do I send the letter?','submit','accept the wish fulfilment terms'],
 ['When will my gifts arrive?','delivery','24 December'],
 ['How does delivery work?','delivery','Reindeer'],
 ['What is the price?','price','imaginary'],
 ['How do I remove a gift?','remove','X button'],
 ['What are the terms?','terms','required'],
 ['What happens to the session?','grinch','Grinch'],
 ['Tell me about the lottery','tokens','No real tokens'],
 ['How does screen reader accessibility work?','accessibility','names, roles'],
 ['Change the quantity for the team','quantity','1 to 99'],
 ['I do not want headphones','alternative','how about'],
 ['Recommend a gift','recommend','debugging duck'],
 ['Something entirely unrelated','fallback','do not have an answer'],
 ['What does the Not our problem button do?','product','Not our problem']
];
for(const [query,intent,fragment] of cases){const response=context.reply(query,{bag:{chair:3},hasName:true,termsAccepted:false,delivery:'reindeer'});assert.equal(response.intent,intent,query);const translated=en.translate(response.text);assert.ok(translated.includes(fragment),query+': '+translated);assert.ok(!/[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/.test(translated),query+': untranslated reply');}
const alternative=en.translate(context.reply('I do not want headphones',{}).text);
assert(alternative.includes('how about a rubber debugging duck or a USB tea warmer'));
console.log('OK: language defaults and URL precedence, titles, timer wording, opaque name, lottery, intentional name mismatches and 19 English chat scenarios, natural greeting, singular/plural units and alternatives.');
