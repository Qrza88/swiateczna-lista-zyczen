// WINNER_COMMENTS_START
function createWinnerComments(random=Math.random){
 const comments=[
  "I co teraz? Zapytaj AI, co zrobić z milionem tokenów. Tylko pilnuj, żeby nie zużyła wszystkich na odpowiedź.",
  "Pilnuj swoich tokenów. Grinch już pisze: „Mam tylko jedno krótkie pytanie…”.",
  "Wreszcie możesz dopisać „proszę” i „dziękuję” bez sprawdzania salda.",
  "Powinno wystarczyć na jeden projekt i wszystkie jego „jeszcze tylko drobne poprawki”.",
  "Elfy zalecają rozsądne gospodarowanie. Znamy kogoś, kto wydał wszystko na wybór nazwy zmiennej.",
  "Możesz już wygenerować odpowiedź na maila „OK, dzięki”. W siedmiu wersjach. Z analizą tonu."
];
 const chosen=new Map();
 return entry=>{if(!Number.isSafeInteger(entry)||entry<1)return '';if(!chosen.has(entry))chosen.set(entry,comments[Math.floor(random()*comments.length)]);return chosen.get(entry);};
}
// WINNER_COMMENTS_END
