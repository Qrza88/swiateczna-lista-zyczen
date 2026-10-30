// Sprawdza rzeczywiste funkcje zegara z HTML przy kontrolowanym czasie.
const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const html=fs.readFileSync(__dirname+'/../dist/index.html','utf8');
const script=html.match(/<script>([\s\S]*?)<\/script>/)[1];
const clocks=script.slice(script.indexOf('const formatTime='),script.indexOf("$('start-show').addEventListener"));
let now=0,opens=0,expirations=0;
const elements=new Map();
const get=id=>{if(!elements.has(id))elements.set(id,{textContent:'',hidden:true,disabled:false,attrs:{},setAttribute(k,v){this.attrs[k]=v;}});return elements.get(id);};
assert.equal(vm.runInNewContext(script.match(/const GRINCH_COUNTDOWN_MS=[^;]+;/)[0]+'\nGRINCH_COUNTDOWN_MS'),30000,'Odliczanie Grincha trwa 30 sekund');
const initial=script.match(/const show=([^;]+);/)[1];
const show=vm.runInNewContext('('+initial+')',{performance:{now:()=>now}});
assert.equal(show.running,true);assert.equal(show.started,true);assert.equal(show.startedAt,0);
const session={open:false,remaining:30000,startedAt:0,running:false,expired:false,pausedByShow:false};
const minutes=vm.runInNewContext(script.match(/const DEMO_PROFILE=[\s\S]*?const GRINCH_DELAY_MINUTES=[^;]+;/)[0]+"\nGRINCH_DELAY_MINUTES");
assert.ok([2,7].includes(minutes));
const threshold=minutes*60000;
const context=vm.createContext({$,show,session,warnGrinchTime(){},expireGrinch(){expirations++;session.expired=true;session.running=false;session.remaining=0;},GRINCH_DELAY_MINUTES:minutes,performance:{now:()=>now},writeUiText(el,value){el.textContent=value;},announce(){},openGrinch(){opens++;show.grinchUsed=true;}});
function $(id){return get(id);}
vm.runInContext(clocks+'\nthis.timer={tick,toggleShow,elapsed,formatTime};',context);
const {tick,toggleShow,elapsed,formatTime}=context.timer;
now=threshold-1;tick();assert.equal(opens,0,'Nie otwieramy przed 2:00');
now=threshold;tick();assert.equal(opens,1,'Wyzwolenie przy progu 2:00');
now=900000;tick();assert.equal(opens,1,'Tylko jedno automatyczne wyzwolenie');
show.grinchUsed=false;tick();assert.equal(opens,2,'Opóźniona obsługa nie gubi progu');
show.elapsed=0;show.startedAt=now;show.running=true;
now+=10000;toggleShow();assert.equal(elapsed(),10000,'Pauza zachowuje upływ');
now+=70000;assert.equal(elapsed(),10000,'Pauza nie liczy czasu');
toggleShow();now+=5000;assert.equal(elapsed(),15000,'Wznowienie kontynuuje czas');
session.open=true;session.remaining=30000;session.startedAt=now;session.running=true;
now+=10000;tick();assert.equal(get('session-clock-digits').textContent,'00:20','Osobny czas sesji');
assert.equal(get('session-clock-text').textContent,'0 minut, 20 sekund','Czytelna dla czytnika wartość odliczania');
context.updateClock('show-clock',62000);assert.equal(get('show-clock-digits').textContent,'01:02');assert.equal(get('show-clock-text').textContent,'1 minuta, 2 sekundy','Wartość dostępna odpowiada wizualnej');
toggleShow();now+=30000;tick();assert.equal(get('session-clock-digits').textContent,'00:20','Pauza pokazu zatrzymuje sesję');
toggleShow();now+=20001;tick();assert.equal(session.expired,true,'Wygaśnięcie sesji');
assert.equal(expirations,1,'Wygaśnięcie wywołuje psikus raz');tick();assert.equal(expirations,1,'Kolejne odświeżenie zegara nie powtarza psikusa');
assert.equal(formatTime(420000),'07:00');
console.log('OK: automatyczny start po otwarciu, próg 2:00, jednorazowość, opóźniona obsługa, pauza/wznawianie, niezależna sesja i wygaśnięcie.');

const publicShow={elapsed:119999,startedAt:0,running:false,started:true,grinchUsed:false};
const publicContext=vm.createContext({$,show:publicShow,session:{open:false},GRINCH_DELAY_MINUTES:2,performance:{now:()=>0},writeUiText(el,value){el.textContent=value;},openGrinch(){publicShow.grinchUsed=true;},announce(){}});
vm.runInContext(clocks+'\ntick();',publicContext);assert.equal(publicContext.show.grinchUsed,false);publicContext.show.elapsed=120000;publicContext.show.running=true;vm.runInContext('tick();',publicContext);assert.equal(publicContext.show.grinchUsed,true);
console.log('OK: profil publiczny ma osobny próg 2:00.');

publicShow.grinchUsed=false;get('confirmation').hidden=false;vm.runInContext('tick();',publicContext);assert.equal(publicShow.grinchUsed,false,'Automatyczny Grinch nie przerywa ekranu sukcesu');

// Ostrzeżenie: dokładny próg, jednorazowość, pauza i opóźniona obsługa.
let warningNow=0;const warnings=[];
const warningSession={open:true,remaining:30000,startedAt:0,running:true,expired:false,warned20:false};
const warningScope=vm.createContext({$,show:{running:false,elapsed:0},session:warningSession,GRINCH_DELAY_MINUTES:2,performance:{now:()=>warningNow},writeUiText(el,value){el.textContent=value;},warnGrinchTime(rem){warnings.push(rem);},expireGrinch(){warningSession.expired=true;warningSession.running=false;},announce(){}});
vm.runInContext(clocks,warningScope);
warningNow=9999;vm.runInContext('tick()',warningScope);assert.equal(warnings.length,0);
warningNow=10000;vm.runInContext('tick()',warningScope);assert.equal(warnings.length,1);assert.equal(warnings[0],20000);
warningNow=11000;vm.runInContext('tick()',warningScope);assert.equal(warnings.length,1);
warningSession.remaining=19000;warningSession.running=false;warningNow=50000;vm.runInContext('tick()',warningScope);assert.equal(warnings.length,1);
warningSession.startedAt=warningNow;warningSession.running=true;vm.runInContext('tick()',warningScope);assert.equal(warnings.length,1);
warningNow=71000;vm.runInContext('tick()',warningScope);assert(warningSession.expired);assert.equal(warnings.length,1);
warningSession.expired=false;warningSession.running=true;warningSession.warned20=false;warningSession.remaining=30000;warningSession.startedAt=warningNow;
warningNow+=15000;vm.runInContext('tick()',warningScope);assert.equal(warnings.length,2);assert.equal(warnings[1],15000,'Spóźniona obsługa przekazuje rzeczywisty pozostały czas');
console.log('OK: ostrzeżenie przy 20 sekundach, raz na atak, bez powtórki po pauzie i bez nieaktualnego komunikatu po wygaśnięciu.');
