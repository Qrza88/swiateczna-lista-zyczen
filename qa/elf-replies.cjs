const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const html=fs.readFileSync(__dirname+'/../dist/index.html','utf8');
const products=html.slice(html.indexOf('const products=['),html.indexOf('const state='));
const engine=html.slice(html.indexOf('// ELF_REPLY_ENGINE_START'),html.indexOf('// ELF_REPLY_ENGINE_END'));
const scope=vm.createContext({});
vm.runInContext(products+engine+'\nthis.answer=getElfReply;',scope);
const answer=scope.answer;
const empty={bag:{},hasName:false,termsAccepted:false,delivery:'reindeer'};
const scenarios=[
 ['Po co mi drukarka 3D?','product','printer'],
 ['Do czego jest sweterek na myszkę?','product','mouse'],
 ['Czy podgrzewacz utrzyma herbatę podczas daily?','product','tea'],
 ['Chcę dzień bez spotkań','product','calendar'],
 ['Czy macie słuchawki?','product','headphones'],
 ['Gdzie znajdę fotel masujący?','product','chair'],
 ['Dla całego zespołu potrzebuję kilka sztuk','quantity',null],
 ['Kiedy dotrą prezenty?','delivery',null],
 ['Jaką dostawę wybrać?','delivery',null],
 ['Nie mogę wysłać listu','submit',null],
 ['Jak zaakceptować regulamin?','terms',null],
 ['Czy elfy wysyłają ankiety?','terms',null],
 ['Co jest w moim worku?','bag',null],
 ['Usuń prezent z worka','remove',null],
 ['Dodaj mi drukarkę','add','printer'],
 ['Nie chcę drukarki, poleć coś innego','alternative',null],
 ['Ile kosztuje ta drukarka?','price','printer'],
 ['Jaki będzie jutro kurs euro?','fallback',null],
 ['Kiedy zacznie się konferencja?','fallback',null],
 ['Co polecasz?','recommend',null],
 ['Dziękuję','thanks',null],
 ['Co z Grinchem?','grinch',null]
];
for(const [question,intent,product] of scenarios){const out=answer(question,empty);assert.equal(out.intent,intent,question);assert.equal(out.product,product,question);assert.ok(out.text.length>20,question);}
const followup={...empty,previousProduct:'printer'};
assert.equal(answer('Jak ją dodać?',followup).product,'printer');
assert.equal(answer('A kiedy?',followup).intent,'delivery');
assert.equal(answer('Kiedy zacznie się konferencja?',followup).intent,'fallback');
assert.match(answer('Co jest w worku?',empty).text,/pusty/);
const ready={bag:{printer:1,chair:3},hasName:true,termsAccepted:true,delivery:'teleport'};
const before=JSON.stringify(ready);
assert.match(answer('Co jest w worku?',ready).text,/Łącznie: 4 szt/);
assert.match(answer('Jak wysłać list?',ready).text,/są już gotowe/);
assert.match(answer('Jak wysłać list?',empty).text,/imię.*prezent.*akceptację/);
assert.match(answer('Jaka dostawa?',ready).text,/Teleportem/);
assert.equal(answer('Po co mi drukarka?',ready).intent,'product');
assert.match(answer('Po co mi drukarka?',ready).text,/Masz już w worku: 1 szt/);
assert.equal(JSON.stringify(ready),before,'Czat nie zmienia worka ani formularza');
assert.ok(!answer('Nie chcę drukarki',empty).text.includes('przyjęte do realizacji'));
assert.ok(!answer('Pytanie o coś całkiem innego',empty).text.includes('Zgłoszenie przyjęte'));
console.log('OK: 22 tematy, polskie znaki, pytanie o daily, negacja, doprecyzowania, aktualna zawartość worka i warunki wysłania.');
