// ELF_REPLY_ENGINE_START
// Odpowiedzi offline. Silnik podpowiada; nie dodaje prezentów i nie wysyła listu.
function normalizeElfText(text){return text.toLocaleLowerCase('pl').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ł/g,'l').replace(/[^\p{L}\p{N}\s]/gu,' ').replace(/\s+/g,' ').trim();}
const elfProductTopics=[
{id:'printer',test:/\bdrukark|\bdodatkow[a-z]* (?:pare? )?(?:rak|rece)\b|\bpar[aey] rak\b/,summary:'Dodatkowa para rąk do pracy. Nowy etat nie przeszedł akceptacji, więc próbujemy z drukarką.'},
{id:'headphones',test:/\bsluchaw|\bzatycz/,summary:'Wyglądają jak słuchawki, działają jak zatyczki. „Nie mam odsłuchu” staje się uczciwą odpowiedzią.'},
{id:'coffee',test:/\b(?:kaw[aeoy]|kawe|dolewk|kofein)/,summary:'Dolewka kawy XL. Wystarczy na spokojne popołudnie albo kilka minut na produkcji.'},
{id:'mouse',test:/\bmysz|\bsweter/,summary:'Wełniany sweterek jest dla myszki komputerowej. Kursor od niego nie przyspieszy, ale stanowisko zyska zimową stylizację.'},
{id:'tea',test:/\bherbat|\bpodgrzewacz|\busb\b/,summary:'Podgrzewacz USB pilnuje herbaty podczas przeciągającego się daily. Długości spotkania, niestety, nie zmienia.'},
{id:'duck',test:/\bkacz(?:usz|k)/,summary:'Gumowa kaczuszka do debugowania. Możesz jej opowiedzieć o błędzie. Nie odpowie „zróbmy calla”.'},
{id:'mug',test:/\bkubek|\bu mnie dziala\b/,summary:'Kubek „U mnie działa”. Certyfikat jakości obejmuje dokładnie jedno urządzenie.'},
{id:'chair',test:/\bfotel|\bmasuj/,summary:'Fotel masujący do domowego biura. Tego, które po godzinach ponownie staje się salonem.'},
{id:'clone',test:/\bklon/,summary:'Klon do udziału w spotkaniach. Potakuje, nie ma uwag i jest za. Do pracy poza spotkaniami potrzebny będzie oryginał.'},
{id:'calendar',test:/\b(?:dzien|dnia|dniu) bez spotkan|\bbez spotkan\b/,summary:'Zespołowy dzień bez spotkań jest w katalogu. Organizacja takiego dnia zapewne zacznie się od spotkania.'},
{id:'button',test:/\bto nie u nas\b/,summary:'Przycisk „To nie u nas” przekazuje zgłoszenie do innego zespołu. Losowo, żeby każdy miał szansę.'},
{id:'blocks',test:/\blego\b|\bklock/,summary:'Zestaw LEGO dla dzieci podczas Twojego home office. Spotkanie trwa. Budowa też.'},
{id:'coloring',test:/\bkolorow/,summary:'Kolorowanki dla dzieci podczas pracy rodzica. Do końca spotkania prosimy nie wychodzić za kontur.'},
{id:'paint',test:/\bfarb/,summary:'Farby dla dzieci podczas home office. Dzieci malują, Ty wyłączasz kamerę.'},
{id:'clay',test:/\bplastelin/,summary:'Plastelina zapewnia chwilę ciszy. Pamiątka w dywanie może zostać na dłużej.'}
];
function getElfReply(message,context={}){
 const q=normalizeElfText(message),bag=context.bag||{};
 const found=elfProductTopics.filter(p=>p.test.test(q));
 const remembered=elfProductTopics.find(p=>p.id===context.previousProduct);
 const topic=found[0]||remembered;
 const reply=(text,intent,product=topic)=>({text,intent,product:product?product.id:null});
 const entries=Object.entries(bag).filter(([id,n])=>byId.has(id)&&n>0);
 const total=entries.reduce((sum,[,n])=>sum+n,0);
 const categoryName={self:'Dla mnie',team:'Dla zespołu',peace:'Dla świętego spokoju'};
 const productLocation=p=>'Znajdziesz ten prezent w zakładce „'+categoryName[byId.get(p.id).category]+'”.';
 if(/^(?:czesc|hej|hejka|witaj|halo|dzien dobry|dobry wieczor)(?: elfie| elf)?$/.test(q))return reply('Cześć! Pomogę Ci z prezentami, workiem, dostawą i wysłaniem listu. Od czego zaczynamy?','greeting',null);
 if(/^(?:dzieki|dziekuje|super|ok|okej|swietnie|fajnie)(?: bardzo| elfie)?$/.test(q))return reply('Do usług! Gdyby coś jeszcze nie działało, winą obarczymy świąteczną magię.','thanks',null);
 if(/\b(?:usun|usuw|wyrzuc|zabierz|wyjmij)/.test(q))return reply('Prezent usuniesz przyciskiem z krzyżykiem przy jego pozycji w worku. Usuwa on całą pozycję wraz z jej liczbą sztuk.','remove');
 if(/\b(?:nie chce|nie potrzebuje|nie chodzi mi o|nie podoba)/.test(q)){
  const exclude=new Set(found.map(p=>p.id));if(!found.length&&remembered)exclude.add(remembered.id);
  const alternatives=['duck','tea','mouse','coffee'].filter(id=>!exclude.has(id)).slice(0,2).map(id=>byId.get(id).name);
  return reply('W takim razie może '+alternatives.join(' albo ')+'? Oba prezenty są w zakładce „Dla mnie”.','alternative',null);
 }
 if(/\b(?:dodaj|dodac|dodaw|dorzuc|zamow|zamowic)/.test(q)){
  const chosen=found.length===1?found[0]:found.length===0?remembered:null;
  if(chosen){const p=chosen,product=byId.get(p.id);return reply(productLocation(p)+' Użyj przy nim „Dodaj do worka”.'+(product.category==='team'?' Najpierw możesz ustawić liczbę sztuk od 1 do 99.':''),'add',p);}
  return reply('Prezent dodasz przyciskiem „Dodaj do worka” w katalogu. Dla zespołu możesz wcześniej ustawić liczbę sztuk. Napisz, który prezent masz na myśli, a wskażę zakładkę.','add',null);
 }
 if(/\b(?:wysl|wysyl|wyslan|przesl)/.test(q)&&!/\bankiet/.test(q)){
  const missing=[];if(!context.hasName)missing.push('imię w sekcji „O mnie”');if(!total)missing.push('co najmniej jeden prezent w worku');if(!context.termsAccepted)missing.push('akceptację zasad realizacji życzeń');
  return reply(missing.length?'Przed wysłaniem uzupełnij jeszcze: '+missing.join('; ')+'. Potem wybierz „Wyślij list”.':'Imię, prezent i akceptacja zasad są już gotowe. Wybierz „Wyślij list”. Ekran z lecącą kopertą potwierdzi powodzenie.','submit',null);
 }
 if(/\b(?:wor(?:ek|ka|ku|kiem)|koszyk[a-z]*)\b/.test(q))return reply(total?'W Twoim worku: '+entries.map(([id,n])=>byId.get(id).name+' — '+n+' szt.').join('; ')+' Łącznie: '+total+' szt.':'Twój worek jest jeszcze pusty. Wybierz prezent w katalogu i użyj „Dodaj do worka”. Renifery na razie nie zgłaszają przeciążenia.','bag',null);
 if(/\b(?:cen|koszt|ile zaplac|platn|darmo)/.test(q))return reply('W tym demonstracyjnym katalogu ceny są umowne i nie ma płatności. Budżet elfów pozostaje tajemnicą służbową.','price');
 if(/\b(?:reklamac|pomyl|zwrot|ankiet)/.test(q))return reply('Zasady elfów znajdziesz przed „Wyślij list”: bez ankiet satysfakcji i odpowiedzialności za pomyłki. Każda pomyłka jest dodatkową niespodzianką. W tej demonstracji nie składamy prawdziwej reklamacji.','terms',null);
 if(/\b(?:zgod|akcept|regulamin|zasad)/.test(q))return reply('Przed wysłaniem zaznacz „Akceptuję zasady realizacji życzeń”. To wymagany checkbox w sekcji „Podpis i wysyłka”. Osobne oświadczenie o zasługiwaniu na prezent jest opcjonalne.','terms',null);
 if(/\b(?:kiedy|termin|dotr|dorecz)/.test(q)&&(/\b(?:prezent|list|zamow|dostaw|dotr|dorecz|swiat)/.test(q)||found.length||(remembered&&/^(?:a )?(?:kiedy|jaki termin|kiedy dotrze|kiedy przyjdzie)(?: on| ona| to)?$/.test(q))))return reply('Świąteczny termin realizacji to 24 grudnia. W tej demonstracji wysłanie listu pokazuje ekran sukcesu; prawdziwej paczki ani śledzenia przesyłki nie uruchamiamy. Renifery też mają prawo do odpoczynku.','delivery',null);
 if(/\b(?:dostaw|renifer|elfomat|teleport|dostarc)/.test(q)){const selected={reindeer:'Reniferem',parcel:'Elfomatem',teleport:'Teleportem'}[context.delivery]||'Reniferem';return reply('W sekcji „Dostawa z Bieguna Północnego” wybierzesz: Reniferem, Elfomatem albo Teleportem. Aktualnie wybrane: '+selected+'. Tylko jedna opcja naraz; renifery nie uznają współdzielenia trasy.','delivery',null);}
 if(/\b(?:grinch|sesj)/.test(q))return reply('Zegar rusza po otwarciu strony. Czas do jednorazowego ataku Grincha sprawdzisz w panelu prowadzącej; pauza zatrzymuje odliczanie. „Przedłuż sesję” lub „Zamknij” kończy jego atak i zachowuje list. W panelu prowadzącej możesz wywołać go od razu.','grinch',null);
 if(/\b(?:upomnien|ladown|trzec|trzy prezenty|swiety widzi)/.test(q))return reply('Po osiągnięciu trzech sztuk w worku Mikołaj przypomina o ładowności reniferów. Zamknij okno albo wybierz „Wybieram dalej”. Prezenty zostaną w worku, a upomnienie wróci dopiero po pełnym resecie.','santa',null);
 if(/\btoken/.test(q))return reply('To żartobliwa reklama przy worku: oferta nielimitowanych tokenów obowiązuje do pierwszej rozmowy o architekturze systemu. Tokenów faktycznie nie przyznajemy. Architekt pewnie już nadchodzi.','tokens',null);
 if(/\b(?:nvda|wcag|czytnik|aria|dostepnos)/.test(q))return reply('Na górze strony przełączysz „Wersję z błędami” i „Wersję poprawioną”, zachowując dane. Możesz porównać nazwy, role i stany tych samych kontrolek.','accessibility',null);
 if(/\b(?:ile sztuk|ilosc|liczbe sztuk|liczba sztuk|dla zespolu|dla calego zespolu|dla kilku osob)/.test(q))return reply('W zakładce „Dla zespołu” każdy prezent ma pole „Liczba sztuk” od 1 do 99. Ustaw ilość, potem wybierz „Dodaj do worka”. Kolejne dodanie zwiększa liczbę w istniejącej pozycji.','quantity',null);
 if(found.length>1&&/\b(?:czy|lepsz|wybr|porown)/.test(q))return reply(found.slice(0,2).map(p=>'„'+byId.get(p.id).name+'”: '+p.summary).join(' '),'compare',null);
 if(found.length){const p=found[0];const count=bag[p.id]||0;return reply(p.summary+' '+productLocation(p)+(count?' Masz już w worku: '+count+' szt.':''),'product',p);}
 if(remembered&&/\b(?:dostepn|jest dostepn|na stanie|gdzie go|gdzie ja|gdzie jest|znajde|ten prezent)/.test(q))return reply('„'+byId.get(remembered.id).name+'” jest w katalogu. '+productLocation(remembered),'product',remembered);
 if(/\b(?:polec|doradz|co wybrac|co propon|pomysl na prezent|nie wiem co)/.test(q))return reply('Na początek: kaczuszka do debugowania, jeśli potrzebujesz słuchacza; podgrzewacz USB, jeśli stygnie Ci herbata; albo drukarka 3D do dodatkowej pary rąk. Wszystkie są w „Dla mnie”.','recommend',null);
 return reply('Nie mam jeszcze odpowiedzi na to pytanie. Mogę pomóc z prezentami, zawartością worka, dostawą i wysłaniem listu. Doprecyzuj pytanie albo wybierz jeden z tematów poniżej.','fallback',null);
}
// ELF_REPLY_ENGINE_END
