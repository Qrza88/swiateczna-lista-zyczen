# Świąteczna lista życzeń — wymagania WEB i MOBILE

**Event:** Kalendarz Programisty  
**Odbiorcy:** dorośli, szczególnie osoby pracujące w IT  
**Czas prezentacji:** 15 minut  
**Języki:** polski i angielski  
**Strona:** https://swiateczna-lista-zyczen.netlify.app/  
**Repozytorium:** https://github.com/Qrza88/swiateczna-lista-zyczen

## 1. Cel i styl

Strona jest żartobliwym listem do Mikołaja oraz demonstracją WCAG 2.5.3 „Etykieta w nazwie” i 4.1.2 „Nazwa, rola, wartość”. Dwa warianty pokazują te same funkcje z celowymi błędami i po ich poprawie. Wysyłka ma charakter umowny; nie tworzy zamówienia ani prawdziwej przesyłki. Humor jest skierowany do dorosłych i nawiązuje do pracy w IT.

- Motyw papierowego formularza Biura Obsługi Życzeń: jasna kartka, ciemnozielone tło, grafitowy tekst, bordowe akcenty i rysunki o komiksowej kresce.
- Tytuł formularza: „Świąteczna lista życzeń”.
- Nad tytułem: „Biuro Obsługi Życzeń · termin realizacji: 24 grudnia”.
- Podtytuł: „System obsługi życzeń. Wdrożony w piątek przed świętami”.
- Nagłówek marki: „BIURO OBSŁUGI ŻYCZEŃ · OD 1931”; po angielsku „WISH FULFILMENT OFFICE · SINCE 1931”. Data odnosi się do kampanii Mikołaja Haddona Sundbloma dla Coca-Coli. Motyw domu Mikołaja na biegunie północnym jest starszy i nie jest przypisywany Coca-Coli.
- Przyciski „Dodaj do worka” mają zielone tło `#163d32`, jasny tekst `#fffdf6` i znak plusa.
- Checkboxy mają białe tło i zielony znak zaznaczenia.
- Odręczne dopiski są krótkimi akcentami. Teksty potrzebne do obsługi formularza mają prosty, czytelny krój.
- Dymek ilustracji zawiera dwie wyśrodkowane linie: „Na wczoraj?” i „Oczywiście.”. Tekst jest HTML, bez kursywy; mieści się w obrysie dymka. Mobilna ilustracja ma szerokość do 280 px, ograniczoną szerokością dostępnego miejsca.
- Ilustracja Mikołaja i scena lotu listu mają teksty alternatywne, które przekazują świąteczny żart. Pozostałe dekoracyjne rysunki i ikony są ukryte przed czytnikiem. Pieczątka „Przyjęto warunkowo, Elf nr 200” jest tekstem dostępnym do odczytu na ekranie sukcesu; jej wygląd nie wymaga osobnego opisu grafiki.

## 2. Układ WEB i MOBILE

WEB oznacza szerokości powyżej 760 px CSS, MOBILE — do 760 px CSS.

| Obszar | WEB | MOBILE |
| --- | --- | --- |
| Panel prowadzącej | Na samej górze kartki, przed nagłówkiem Biura Obsługi Życzeń. | Ta sama pozycja. |
| Instrukcja dla odwiedzających | Osobny, początkowo zwinięty panel „Jak korzystać ze strony”, bezpośrednio pod panelem prowadzącej, przed nagłówkiem Biura Obsługi Życzeń. | Ta sama pozycja; panele jeden pod drugim, pełna dostępna szerokość. Zakres wydania 2026-10-30: punkt 14.14. |
| Wybór języka | W nagłówku: nazwany przycisk z bieżącym językiem, rozwijający wybór Polski / English. Stan rozwinięcia dostępny wyłącznie w wariancie poprawionym. | Ten sam mechanizm, obsługiwany także dotykiem i czytnikiem. Zakres wydania 2026-10-30: punkt 14.15. |
| Wybór wariantu WCAG | Dwa równe pola z pełnym tłem wybranego wariantu. | Ta sama zasada; tekst może się zawijać bez wyjścia poza tło i obszar kliknięcia. |
| Kategorie | Zakładki obok siebie. | Rozwijany przycisk wyboru kategorii. |
| Tło katalogu | Jedna biała powierzchnia obejmuje zakładki, opis kategorii, karty prezentów i dopisek „Ceny umowne. Potrzeby autentyczne. Realizacja zależy od reniferów”. | Ta sama powierzchnia obejmuje rozwijany wybór kategorii, opis, prezenty i dopisek o cenach. |
| Prezenty | Dwie karty w rzędzie; od 1600 px — trzy. | Jedna karta w rzędzie. |
| Pełny worek | Boczna kolumna; w DOM i kolejności fokusu po katalogu 02, przed zachowaniem 03. | W głównym przepływie po katalogu 02, przed zachowaniem 03. |
| Potwierdzenie dodania | Przy bocznym worku. | W mini worku, z krótką animacją. |
| Mini worek | Niewidoczny. | U góry widoku podczas przeglądania katalogu. |
| Komunikaty pod kartami prezentów | Brak dodatkowych bloków potwierdzających dodanie. | Ta sama zasada. |
| Dostawa | Trzy opcje obok siebie. | Jedna opcja w rzędzie. |
| Opis wysyłki | Pod przyciskiem, jako jeden akapit bez wymuszonego łamania linii. | Pod przyciskiem; zawija się naturalnie. |

Kolejność dokumentu i nawigacji klawiaturą na WEB i MOBILE: O mnie (01) → katalog (02) → pełny worek z loterią → zachowanie (03) → dostawa (04) → podpis i wysyłka (05) → czat. Worek występuje raz, w stałym miejscu DOM. Na komputerze CSS zachowuje boczną kolumnę, a na telefonie prezentuje worek w głównym przepływie po katalogu. Zmiana szerokości nie przenosi worka ani fokusu.

### 2.1. Typografia i kontrast

- Podpowiedzi, instrukcje, opisy kategorii i prezentów oraz komunikaty błędów mają co najmniej 1 rem, domyślnie 16 px, i interlinię co najmniej 1,5.
- Dopiski z gwiazdką i teksty drobnego druku mogą mieć 0,875 rem, domyślnie 14 px. Informacje wymagane do wypełnienia formularza pozostają wyraźnie czytelne.
- Opis pod przyciskiem wysyłki ma 0,875 rem i pełny kontrast tekstu.
- „Loteria z dreszczykiem” ma prosty krój, rozmiar 1 rem i grubość 700. Liczby sztuk przy prezentach mają prosty krój 1 rem i grubość 600, suma 1,5 rem i grubość 700, a cyfra w nagłówku worka co najmniej 1,125 rem i grubość 700. Te same zasady obowiązują na WEB i MOBILE.
- Pieczątka „Przyjęto warunkowo, Elf nr 200” i oznaczenia „NADANO”, „TRYB: ŚWIĄTECZNY” oraz „ODBIORCA: ŚWIĘTY MIKOŁAJ” mają wyraźny krój Georgia, grubość 700 i rozmiar 1,125 rem (domyślnie 18 px). Oznaczenia mają jasne, jednolite tło, obramowanie 2 px i wysokość co najmniej 48 px. Tekst zawija się na telefonie bez obcinania.
- „Biegun Północny” na ekranie sukcesu ma 1,5 rem. „Wydział spraw pilnych” ma 1 rem, wyraźny krój i jest widoczny również na telefonie. Obie linie znajdują się nad ilustracją.
- Tekst ma kontrast co najmniej 4,5:1. Istotne nietekstowe granice, ikony i stany kontrolek mają kontrast co najmniej 3:1.
- Rozmiary względne respektują ustawienia użytkownika. Powiększenie tekstu do 200% oraz zmiana odstępów zgodnie z 1.4.12 nie powodują utraty treści ani obsługi.
- Szerokość 320 px CSS nie wymaga poziomego przewijania całej strony. Teksty zawijają się, a dekoracje mieszczą w kontenerach.

### 2.2. Cele interakcji i fokus

- Prostokątne kontrolki mają aktywny obszar co najmniej 44 × 44 px CSS. Okrągłe przyciski usuwania mają średnicę 44 px i mieszczą kwadrat 24 × 24 px.
- Checkbox może mieć znak kontrolki 20 px; cała etykieta jest klikalna i ma wysokość co najmniej 44 px. Aktywna jest cała karta wyboru dostawy.
- Przyciski −/+ oraz pole liczby sztuk mają wysokość co najmniej 44 px.
- Fokus jest widoczny, a element z fokusem nie jest zasłonięty mini workiem, oknem ani innym elementem interfejsu.
- Wszystkie działania są dostępne z klawiatury w obu wariantach WCAG. Celowe błędy semantyczne nie blokują aktywacji kontrolek.

## 3. Warianty, język i struktura

- Domyślny wariant to „Wersja z błędami”. Przełącznik jest natywną, nazwaną grupą radiową i działa poprawnie w obu wariantach.
- Zmiana wariantu zachowuje imię, wiadomość, worek, ilości, kategorię, dostawę, suwak, checkboxy, rozmowę i czas. Fokus pozostaje przy przełączniku.
- Pełny reset przywraca początkowe wartości formularza i wyzwalacze okien, czyści rozmowę oraz zegary i tworzy nowy identyfikator listu. Zachowuje język, wariant WCAG i sumę wysłanych listów.
- Strona zawiera informację: „To interaktywna demonstracja WCAG z celowymi błędami dostępności. Porównaj wersję z błędami i wersję poprawioną”.
- Jeden widoczny `h1`: formularza albo ekranu sukcesu. `h2` dla głównych sekcji i obu okien modalnych; `h3` dla prezentów i podsekcji.
- Jeden `header` o roli banner, jeden `main` i jeden `footer` o roli contentinfo. Formularz jest nazwany przez główny nagłówek. Sekcje, worek i czat mają odpowiednie nagłówki i nazwy obszarów.
- Skróty w panelu prowadzącej są nazwanym `nav`. Dostępny jest link pomijający do treści.
- Widoczne etykiety pól są powiązane przez `label`; grupy pól przez `fieldset` i `legend`. Nagłówek sekcji nie zastępuje etykiety kontrolki.

| Widok | Tytuł PL | Tytuł EN |
| --- | --- | --- |
| Formularz | Świąteczna lista życzeń | Christmas wish list |
| Sukces | List wysłany &#124; Świąteczna lista życzeń | Letter sent &#124; Christmas wish list |

- Tytuły formularza i sukcesu są odczytywane jako pełne nagłówki `h1`. Wymuszone znaczniki `br` nie dzielą ich treści; zawijanie wizualne wynika z dostępnego miejsca. W każdym widoku tylko jego aktualny `h1` jest dostępny dla czytnika.
- Na początku formularza występują trzy skip linki w kolejności klawiaturowej: „Przejdź do treści”, „Przejdź do worka z prezentami” i „Przejdź do pomocy technicznej z elfem”. Drugi prowadzi do `#bag-title`, a trzeci do `#chat-title`. Oba przenoszą fokus na odpowiedni nagłówek i przewijają go do widocznego miejsca. Działają na WEB i MOBILE, w obu wariantach oraz językach. Skip link do elfa nie rozwija automatycznie czatu.
- Skip linki do worka i pomocy z elfem są ukryte na ekranie sukcesu, gdy ich cele są niedostępne, i wracają po powrocie do formularza. Link do treści wskazuje aktualny widok.

### 3.1. Polski i English

- Wybór języka znajduje się w nagłówku i ma widoczną, powiązaną nazwę oraz informację o bieżącym języku. Wybór jest przyciskiem rozwijającym dwie opcje języka; w poprawnym wariancie ma aktualne `aria-expanded`, a w wariancie z błędami ten atrybut jest pominięty (punkt 14.15). Dokument ma odpowiednio `lang="pl"` albo `lang="en"` w obu wariantach.
- Pierwsza wizyta domyślnie po polsku. Jawny `?lang=pl` lub `?lang=en` ma pierwszeństwo przed zapamiętaną preferencją `pp-language`.
- Zmiana języka działa bez przeładowania i utraty danych, rozmowy, czasu lub wyniku. Reset zachowuje język i wariant WCAG.
- Tłumaczenie obejmuje treść interfejsu, nazwy i opisy dostępne, błędy, zegary, suwak, okna, czat, loterię i oba tytuły dokumentu.
- Imię i własne wiadomości użytkownika nie są tłumaczone ani interpretowane jako HTML.
- Angielska wersja używa naturalnych sformułowań i spójnej pisowni brytyjskiej. Żarty zachowują sens, bez dosłownego przenoszenia polskich konstrukcji.
- Dopisek do listu: „Dear Santa, it’s me again.”. Opis kategorii „Dla mnie” odnosi się do własnej listy życzeń, bez określenia „shopping list”.
- Jednostki są odmienne dla liczby pojedynczej i mnogiej: „1 item”, „2 items”. Opisy alternatywnych prezentów są poprawnymi zdaniami.
- Nazwy w poprawnym wariancie zawierają widoczne etykiety również po angielsku. Celowe rozbieżności w błędnym wariancie mają angielskie odpowiedniki.

## 4. Katalog prezentów

Karty prezentów nie zawierają dekoracyjnych kodów ani numerów katalogowych, takich jak „PP/01”. Ta sama zasada obowiązuje w obu językach, wariantach WCAG oraz układach WEB i MOBILE.

Trzy kategorie: „Dla mnie”, „Dla zespołu”, „Dla świętego spokoju”. Ich opisy są widoczne nad kartami. W poprawnym wariancie opisy „Dla mnie” i „Dla świętego spokoju” są powiązane programowo z panelem. Opis „Dla zespołu” pozostaje treścią panelu bez dodatkowego `aria-describedby`, aby ograniczyć powtórzenia przy wybieraniu liczby sztuk. Niewybrany panel jest ukryty z odczytu i kolejności fokusu.

### 4.1. Dla mnie

Widoczny opis panelu: „Bo jestem sobie sterem, żeglarzem i okrętem. I najlepiej wiem, co ucieszy mnie pod choinką.”

| Prezent | Dopisek |
| --- | --- |
| Słuchawki z funkcją zatyczek | „Nie mam odsłuchu”. Tym razem to prawda. |
| Dolewka kawy XL | Na jedno spokojne popołudnie albo pięć minut na produkcji. |
| Drukarka 3D do dodatkowej pary rąk | Nowy etat nie przeszedł akceptacji. |
| Wełniany sweterek na myszkę komputerową | Ocieplenie stosunków z peryferiami. |
| Podgrzewacz do herbaty na USB | Na daily, które miało potrwać 15 minut. |
| Gumowa kaczuszka do debugowania | Słucha. Nie proponuje spotkania. |
| Kubek „U mnie działa” | Potwierdzone na jednym urządzeniu. |

Drukarka drukuje dodatkową parę rąk do pracy.

### 4.2. Dla zespołu

Widoczny opis panelu: „Jeden za wszystkich, wszyscy za jednego. Wybierz prezenty dla zespołu i ustaw, ile sztuk ma trafić do worka.”

| Prezent | Dopisek |
| --- | --- |
| Fotel masujący do biura | Do biura. Tego, które masz w salonie. |
| Klon do udziału w spotkaniach | Potakuje. Nie ma uwag. Jest za. |
| Zespołowy dzień bez spotkań | Wdrożenie wymaga spotkania organizacyjnego. |
| Przycisk „To nie u nas” | Przekazuje zgłoszenie do innego zespołu. Losowo. |

Każdy prezent w tej zakładce ma wybór liczby sztuk:

- początkowa liczba: 1;
- zakres: 1–99 sztuk, liczby całkowite;
- pole pozwala wpisać liczbę bezpośrednio; obok są osobne przyciski „−” i „+”, każdy 44 × 44 px;
- etykieta oraz nazwa dostępna jednoznacznie wskazują liczbę sztuk i właściwy prezent;
- pole i przyciski mają własne nazwy z nazwą prezentu; otaczający je kontener nie otrzymuje dodatkowej roli `group` ani powielonej nazwy;
- karta w „Dla zespołu” zachowuje natywny `article` i widoczny nagłówek `h3`, bez ponownego nazywania całego artykułu przez ten sam nagłówek;
- opis kategorii „Dla zespołu” pozostaje widoczną treścią panelu i jest dostępny w zwykłej nawigacji czytnika. Nie jest dodatkowo dołączony jako `aria-describedby` do panelu ani kontrolek liczby sztuk;
- kontrolka jest natywnym polem liczbowym, obsługiwanym klawiaturą oraz NVDA; nie wprowadzamy w niej dodatkowego celowego błędu;
- aktywacja „Dodaj do worka” dodaje wybraną liczbę sztuk danego prezentu;
- ilości pozostają zachowane przy zmianie zakładki oraz wariantu dostępności; pełny reset przywraca 1;
- przy osiągnięciu granicy przycisk −/+ przekazuje `aria-disabled` i nie zmienia liczby poza zakresem; fokus pozostaje na nim, a próba przekroczenia granicy otrzymuje komunikat.

### 4.3. Dla świętego spokoju

To prezenty dla dzieci przebywających w domu podczas pracy rodzica zdalnie. Nad produktami pokazujemy opis: „Prezenty dla dzieci, których rodzice pracują zdalnie. Na dni wolne od szkoły i te, kiedy katar zatrzymuje dzieci w domu”. Nazwa zakładki i dopiski są pisane z perspektywy dorosłego odbiorcy. W poprawionym wariancie panel zakładki ma ten opis powiązany programowo.

| Prezent | Dopisek |
| --- | --- |
| Zestaw LEGO | Spotkanie trwa. Budowa też. |
| Kolorowanki | Do końca spotkania proszę nie wychodzić za kontur. |
| Farby | Dzieci malują. Ty wyłączasz kamerę. |
| Plastelina | Chwila ciszy. Pamiątka w dywanie na lata. |

## 5. Formularz i walidacja

| Pole lub wybór | Wartość początkowa i wymaganie |
| --- | --- |
| Twoje imię | Puste; wymagane; `autocomplete="given-name"`. |
| Wiadomość do Mikołaja | Pusta; opcjonalna. |
| Worek | Pusty; co najmniej jedna sztuka przed wysłaniem. |
| Ilości zespołowe | 1; liczby całkowite od 1 do 99. |
| Poziom grzeczności | 50%; zakres 0–100%, krok 10. |
| Potwierdzam, że zasługuję na prezent | Niezaznaczone; opcjonalne. |
| Dostawa | Reniferem; jedna opcja spośród Reniferem, Elfomatem i Teleportem. |
| Akceptuję zasady realizacji życzeń | Niezaznaczone; wymagane. |
| Biorę udział w loterii | Niezaznaczone; opcjonalne. |

- Wizualna wartość procentowa ma prosty krój, rozmiar 1,25 rem, grubość 700, jasne tło i ciemnozieloną ramkę. Podpisy krańców mają prosty krój, grubość 600 i pełny kontrast, w obu układach.
- Suwak ma etykietę „Poziom grzeczności w tym roku”, instrukcję „Ustaw samoocenę od 0 do 100%, co 10 punktów procentowych” oraz opisane krańce „0% · Zdecydowanie do poprawy” i „100% · Wzorowe zachowanie”.
- `aria-labelledby` wskazuje etykietę suwaka, `aria-describedby` instrukcję i krańce. W poprawnym wariancie wartość dostępna i `aria-valuetext` odpowiadają pozycji suwaka. Dopisek: „Ocena własna. Mikołaj może mieć inne dane”.
- Przed wysyłką widoczne są zasady: „Elfy nie wysyłają ankiet satysfakcji z dostawy ani jakości prezentów i nie ponoszą odpowiedzialności za pomyłki. Każda pomyłka jest dodatkową niespodzianką”.
- Akceptacja zasad jest natywnym checkboxem `required` w obu wariantach.
- Przycisk „Wyślij list” ma powiązany przez `aria-describedby` opis: „Termin odpowiedzi: przed świętami. Nie precyzujemy, którymi”. Opis znajduje się pod przyciskiem i nie zastępuje jego nazwy.
- Przycisk wysłania jest aktywny także przy pustym formularzu. Uruchomienie walidacji pokazuje błędy przy odpowiednich elementach i przenosi fokus do pierwszego błędu. Osobne podsumowanie błędów nie występuje.

| Błąd | Komunikat i powiązanie |
| --- | --- |
| Brak imienia lub same spacje | „Twoje imię: wpisz imię, aby wysłać list”. Fokus na polu; `required`, `aria-invalid="true"` i `aria-describedby="author-error author-note"`. |
| Pusty worek | „Dodaj przynajmniej jeden prezent do worka”. Powiązanie z katalogiem; fokus na jego nagłówku, jeśli to pierwszy błąd. |
| Ilość poza zakresem albo ułamek | „Wpisz liczbę sztuk od 1 do 99”. Fokus na polu liczbowym; `aria-invalid` i powiązany komunikat. |
| Brak akceptacji zasad | „Zaakceptuj zasady realizacji życzeń, aby wysłać list”. `required`, `aria-invalid` i opis błędu przed opisem zasad; fokus na checkboxie, jeśli to pierwszy błąd. |

Po poprawieniu danych błąd i stan niepoprawności znikają. Opcjonalne checkboxy nie blokują wysłania. Walidacja jest poprawna w obu wariantach WCAG; celowo błędna nazwa pola imienia pozostaje przykładem 2.5.3.

## 6. Worek i potwierdzenie dodania

- Karta prezentu zawiera nazwę, ilustrację, dopisek i akcję „Dodaj do worka”. Standardowe dodanie obejmuje jedną sztukę; dla zespołu — wybraną liczbę całkowitą 1–99. Kolejne dodanie zwiększa liczbę tej samej pozycji.
- Worek pokazuje nazwy, ilości i sumę sztuk. Pusty worek zawiera tekst „Tu jest jeszcze miejsce. Na życzenia. I na dodatkową parę rąk”.
- Potwierdzenie występuje wyłącznie przy worku. Pod kartami prezentów nie pojawiają się dodatkowe komunikaty ani bloki tekstu.
- Dodanie ogłasza pełny kontekst przez jeden kanał `role="status"`, np. „Dodano: Podgrzewacz do herbaty USB · 2 szt. W worku: 5 szt.”. Fokus pozostaje na użytej akcji, poza otwarciem upomnienia po trzeciej sztuce.
- Poprawka fokusu po dodaniu prezentu obejmuje wyłącznie MOBILE w wariancie z błędami. Linki w tym układzie wskazują własną kontrolkę, a aktywacja zachowuje miejsce wywołania. WEB w obu wariantach i MOBILE w wariancie poprawionym zachowują dotychczasową obsługę dodawania. Celowo błędna rola pozostaje zachowana. Szczegóły: punkt 14.17.
- Ikonowy przycisk usuwa całą pozycję. Fokus przechodzi do kolejnej odpowiedniej akcji, a po usunięciu ostatniej pozycji — do nagłówka worka. Zmiana jest ogłaszana.
- Opis „Święty widzi, na co masz chrapkę” występuje w ostrzegającym oknie, bez powtórzenia w worku.

### 6.1. Mini worek na MOBILE

- Mini worek znajduje się u góry widoku, w prawym rogu, podczas przeglądania katalogu. Pozycja uwzględnia bezpieczny obszar ekranu i nie koliduje z oznaczeniem „Powered by Netlify” u dołu.
- Zawiera ikonę, aktualną sumę „Twój worek: 5 szt.” i krótkie potwierdzenie „Dodano: 2 szt.”. Cały element jest odnośnikiem „Przejdź do worka”.
- Odnośnik przewija pełny worek do widoku i ustawia fokus na jego nagłówku. Ma widoczny fokus i aktywny obszar co najmniej 44 × 44 px.
- Suma jest wspólna z pełnym workiem i odpowiada dodaniu, usunięciu, resetowi, zmianie kategorii, języka, wariantu i szerokości. Liczy sztuki, nie różne rodzaje prezentów.
- Poza katalogiem mini worek jest ukryty, o ile nie zawiera fokusu. Ukrywanie nie usuwa aktualnie używanego odnośnika. Podczas modalu należy do nieaktywnego tła.
- Mini worek nie zasłania elementów z fokusem, kategorii, czatu ani pól przy klawiaturze ekranowej. Pozycja i przewijanie uwzględniają powiększenie tekstu oraz obie orientacje telefonu.
- Mini worek nie ma osobnego regionu live i nie powiela odczytu potwierdzenia.

### 6.2. Animacja dodania

- Na MOBILE mała ilustracja prezentu przelatuje od użytej akcji do ikony mini worka przez około 520 ms. Po lądowaniu ikona i licznik poruszają się przez około 300 ms.
- Aktualizacja liczby sztuk następuje natychmiast, niezależnie od zakończenia animacji. Efekt jest pojedynczy, bez zapętlania, ukryty przed czytnikiem i nie przejmuje fokusu.
- `prefers-reduced-motion: reduce` wyłącza przelot i ruch worka. Liczba sztuk, krótki tekst i komunikat dla czytnika pozostają dostępne.
- Brak API animacji nie blokuje dodania prezentu.
- Kolejne szybkie dodanie anuluje poprzedni przelot. Reset, usunięcie, przewinięcie, zmiana szerokości, języka lub preferencji ruchu usuwa trwający efekt.
- Upomnienie Mikołaja po trzeciej sztuce ma pierwszeństwo przed przelotem i komunikatem dodania.

## 7. Kategorie WEB i MOBILE

### 7.1. Zakładki WEB

W poprawnym wariancie: nazwany `tablist`, przyciski `tab`, aktualne `aria-selected`, `aria-controls` i powiązane `tabpanel`. Jeden aktywny tab jest w tabulatorze. Strzałki oraz Home/End zmieniają fokus; Enter/Spacja aktywują wybraną kategorię. Niewidoczne panele są poza odczytem i tabulatorem.

W błędnym wariancie kategorie są działającymi przyciskami bez ról zakładek i bez `aria-selected`.

### 7.2. Rozwijany wybór MOBILE

- Natywny przycisk „Kategoria prezentów: [nazwa]” rozwija trzy nazwane przyciski, bez ról `menu` lub `listbox`.
- Wyraźna strzałka ma stały rozmiar, jest ukryta przed czytnikiem i zmienia kierunek zgodnie ze stanem rozwinięcia w obu wariantach.
- W obu wariantach działa `aria-controls`; w poprawnym dodatkowo aktualne `aria-expanded="false"` albo `"true"`. Błędny wariant pomija wyłącznie informację `aria-expanded`.
- Aktualna kategoria ma stan `aria-pressed`. Wybór aktualizuje panel i tekst wyzwalacza, zamyka listę oraz przywraca fokus na przycisk rozwijania.
- Enter/Spacja aktywują kontrolki, Tab przechodzi po opcjach, Escape zamyka listę i przywraca fokus. Strzałki oraz Home/End wspierają poruszanie się między opcjami.
- Kliknięcie poza listą zamyka ją bez przechwytywania fokusu. Ukryte opcje są poza odczytem i kolejnością tabulatora.
- Panel kategorii ma nazwę i programowo powiązany opis.

## 8. Okna, panel prowadzącej i zegary

Na stronie występują dwa okna modalne. Jednocześnie widoczne jest jedno. Każdy pasek tytułowy ma wyłącznie działający, nazwany przycisk „X”; bez atrap minimalizacji lub maksymalizacji.

| Profil | Próg Grincha | Zastosowanie |
| --- | --- | --- |
| `presentation` | 7:00 aktywnego czasu pokazu | Lokalne nagranie prezentacji. |
| `public` | 2:00 aktywnego czasu pokazu | Publiczna strona do samodzielnej zabawy. |

Panel prowadzącej jest na samej górze kartki. Zawiera czas, start nowej próby, pauzę/wznowienie, ręczny test Grincha, reset oraz skróty do przykładów. Pod nim znajduje się osobny panel „Jak korzystać ze strony”, z krótkim wyjaśnieniem celu i obsługi demonstracji (punkt 14.14). Szczegółowa instrukcja prowadzenia prezentacji i techniczna mapa celowych błędów występują wyłącznie w dokumentacji.

Zegar startuje po otwarciu strony. Pauza zachowuje upływ czasu i zatrzymuje również trwającą sesję Grincha. Pełny reset ustawia 0:00 i wymaga ręcznego uruchomienia następnej próby. Zwinięcie panelu nie zatrzymuje zegara.

Zegary mają `role="timer"`, stałą nazwę i `aria-live="off"`. Wizualne MM:SS jest uzupełnione równoważnym tekstem, np. „1 minuta, 2 sekundy”. Kolejne sekundy nie są ogłaszane automatycznie. Generyczny kontener bez odpowiedniej roli nie otrzymuje nazwy przez `aria-label`.

Zegar pokazu znajduje się poza kontrolką rozwijającą panel prowadzącej, jako osobny timer. Nie należy do `summary` ani innego przycisku; jego obszar nie nakłada się na aktywny obszar wyzwalacza. Ikona plusa/minusa wyzwalacza jest dekoracyjna i ukryta przed czytnikiem. Szczegóły poprawki: punkt 14.16.

### 8.1. Upomnienie Mikołaja

- Tytuł `h2`: „Święty widzi, na co masz chrapkę!”. Opis: „Zostaw trochę dla innych. Renifery mają ograniczoną ładowność”.
- Otwarcie po osiągnięciu co najmniej 3 sztuk w worku, również po jednorazowym dodaniu 3 sztuk zespołowych. Jedno upomnienie do pełnego resetu.
- W obu wariantach poprawny `dialog` z `aria-modal="true"`, nazwą z nadtytułu i tytułu (`aria-labelledby="santa-kicker santa-title"`) oraz powiązanym opisem. Nadtytuł brzmi „Poczta Północna · kontrola ładowności”. Opis dialogu obejmuje także aktualną liczbę prezentów.
- Licznik w oknie ma jasne tło i ciemnozieloną ramkę. Etykieta ma prosty krój i grubość 600; liczba sztuk jest pogrubiona (700), ma co najmniej 1,5 rem (domyślnie 24 px) i pozostaje wyraźna w widoku mobilnym. Licznik zawija się bez obcinania; treść jest dostępna po polsku i angielsku.
- Fokus na „Wybieram dalej”. Ten przycisk, „X” i Escape zamykają okno, zachowują worek i przywracają poprzedni fokus.

### 8.2. Grinch

- Pasek tytułowy: „Nieoczekiwany gość” / „Unexpected guest”, bez technicznego prefiksu. Tytuł `h2`: „Grinch przejął sesję”.
- Odliczanie do psikusa trwa 30 sekund od otwarcia okna. Zakres i odbiór opisuje punkt 14.11.
- Opis: „Za 30 sekund opróżnię Twój worek z prezentami. Tyle planowania, a wystarczy jeden Grinch. Pozdrawiam bez świątecznej serdeczności.”
- Automatyczne otwarcie raz przy progu odpowiedniego profilu. Ręczny test korzysta z tego samego okna i zużywa automatyczny atak do resetu.
- Przy 20 sekundach pozostałego odliczania pojawia się widoczne ostrzeżenie: „Pozostało 20 sekund. Wybierz »Przedłuż sesję«, aby zatrzymać Grincha”. Osobny, pusty od początku `role="alert"` z `aria-atomic="true"` ogłasza ten sam komunikat. Ostrzeżenie jest jednorazowe w obu wariantach WCAG i obu językach; pauza i wznowienie go nie powtarzają. Kolejne ręczne otwarcie rozpoczyna nową próbę.
- Przy opóźnionym wywołaniu progu komunikat mówi „Pozostało mniej niż 20 sekund”, zamiast podawać nieaktualny czas. Ostrzeżenie jest usuwane przy zakończeniu odliczania, zamknięciu i resecie.
- Jeśli podczas progu otwarte jest upomnienie Mikołaja, Grinch czeka na jego zamknięcie. Jego osobne 30 sekund rozpoczyna się dopiero po otwarciu.
- Poprawny kontener ma `role="alertdialog"`, `aria-modal="true"`, `aria-labelledby="grinch-kicker grinch-title"` i `aria-describedby="grinch-description"`. Nazwa obejmuje nadtytuł „Nieoczekiwany gość” i aktualny nagłówek `h2`. Tytuł i opis mają unikalne identyfikatory oraz aktualną treść w języku strony.
- Semantyka i widoczność są ustawione przed przekazaniem fokusu na „Przedłuż sesję”. Otwarcie udostępnia czytnikowi rolę, nazwę i ostrzeżenie; osobny region `alert` nie powiela całego okna.
- Tło jest nieaktywne. Tab i Shift+Tab pozostają w oknie, Escape i „X” zamykają je, a fokus wraca do poprzedniego miejsca.
- „Wróć do listy życzeń” / „Back to the wish list” zamyka okno; komunikat odpowiada stanowi przed psikusem lub po nim. Okno posługuje się językiem tworzenia listu życzeń, bez określeń zakupów i zamówienia.
- „Przedłuż sesję” i zamknięcie okna przed końcem 30 sekund kończą atak bez opróżniania worka. Okno nie zawiera osobnego przycisku „Zatrzymaj odliczanie” ani „Wznów odliczanie” (punkt 14.13). Pauza i wznowienie pozostają w panelu prowadzącej.
- Po upływie odliczania Grinch opróżnia worek, a elfy zachowują kopię pozycji i ich ilości w pamięci karty. Imię, wiadomość, pozostałe pola i licznik wysłanych listów pozostają zachowane. Pusty worek otrzymuje osobny, zgodny ze stanem komunikat.
- Główny przycisk w oknie po psikusie ma tekst „Odzyskaj prezenty”. Drugi przycisk o tej samej nazwie jest przy pełnym worku, pod jego zawartością, razem z krótkim komunikatem o zachowanej kopii. Pozostaje dostępny po zamknięciu okna.
- Odzyskanie przywraca wszystkie zabrane sztuki i zachowuje prezenty dodane później. Nie powiela sztuk przy kolejnym kliknięciu. Komunikat i przycisk przy worku znikają po odzyskaniu; fokus z tego przycisku przechodzi do nagłówka worka. Pełny reset usuwa także kopię.
- W poprawnym wariancie opis dialogu po zakończeniu odliczania wskazuje aktualny wynik psikusa. W obu wariantach jedno automatyczne ogłoszenie `polite` informuje, że czas minął, podaje rzeczywisty wynik psikusa i możliwość odzyskania, jeśli istnieje kopia prezentów.
- Regiony ostrzeżenia i wyniku znajdują się wewnątrz aktywnego okna Grincha, poza obszarem tła wyłączanym przez `inert` i poza zegarem z `aria-live="off"`. Są puste przed zdarzeniem i pozostają dostępne przez cały czas otwarcia okna. Komunikat wyniku następuje po aktualizacji treści oraz ewentualnego fokusu; zamknięcie, reset i nowa próba anulują oczekującą zapowiedź.
- Przy zabranych prezentach komunikat brzmi: „Czas minął. Grinch opróżnił worek. Elfy zachowały kopię. Możesz odzyskać prezenty”. Przy pustym worku: „Czas minął. Grinch zajrzał do worka, ale był pusty. Tym razem nie miał czego zabrać”. Wersja angielska przekazuje ten sam stan i te same możliwości.
- Zmiana `h2` ani wyświetlenie `00:00` nie zastępują automatycznego ogłoszenia. Fokus nie przeskakuje do komunikatu. Kolejne sekundy nie są ogłaszane.
- Wynik psikusa jest przekazywany przez istniejący komunikat. Nie dodajemy osobnej automatycznej zapowiedzi zmienionego `h2`, aby nie powielać tej samej informacji.
- Próba użytkowniczki: czytnik odczytuje czerwone komunikaty w oknie Grincha, ale nie ogłasza automatycznie zmiany nagłówka. To zachowanie pozostaje zachowane. Środowisko i wersje narzędzi oraz osobne potwierdzenie konkretnych komunikatów pozostają do uzupełnienia w odbiorze z czytnikiem.
- Po upływie czasu ostrzeżenie o przyszłym opróżnieniu jest ukryte. Okno pokazuje aktualny wynik psikusa; kolejne otwarcie przywraca ostrzeżenie.
- Po psikusie tytuł `h2` zmienia się na „Grinch wyjął Twoje prezenty z worka” / „The Grinch took your gifts out of the sack”. Jeśli worek był pusty, brzmi „Grinch nie miał czego zabrać” / „There was nothing for the Grinch to take”. Nazwa kontenera w obu wariantach nadal obejmuje nadtytuł i aktualny nagłówek. Ponowne ręczne otwarcie przywraca początkowy tytuł „Grinch przejął sesję”.
- Automatyczny Grinch nie otwiera się na ekranie sukcesu wysyłki.
- W wariancie z błędami kontener Grincha ma `role="group"` i nazwę z nadtytułu oraz nagłówka (`aria-labelledby="grinch-kicker grinch-title"`). Brak właściwej roli dialogu i informacji o modalności pozostaje celowym przykładem 4.1.2. Nazwa jest udostępniona na roli dopuszczającej nazywanie; nie nadajemy `aria-label` ani `aria-labelledby` generycznemu elementowi bez odpowiedniej roli. Przyciski i klawiatura działają w obu wariantach.

## 9. Czat z elfem

- Czat jest rozwijanym panelem w przepływie strony. W wariancie poprawionym natywny przycisk ma nazwę „Porozmawiaj z elfem”, aktualne `aria-expanded="false"` / `"true"` i `aria-controls="chat-panel"`.
- W wariancie z błędami przycisk nie ma nazwy ani `aria-expanded`, zarówno po uruchomieniu strony, jak i po rozwinięciu lub zwinięciu panelu. `aria-controls="chat-panel"` pozostaje w obu wariantach. Brak informacji o stanie rozwinięcia jest dodatkowym celowym przykładem 4.1.2 na WEB i MOBILE.
- Zmiana wariantu przy otwartym lub zamkniętym czacie natychmiast aktualizuje semantykę przycisku. Widoczność panelu, treść rozmowy i dane listu pozostają zachowane. W wariancie z błędami przycisk nadal działa myszą, dotykiem, Enterem i Spacją.
- Czat nie jest dialogiem. Nie ma `role="dialog"`, `aria-modal` ani `aria-haspopup`.
- Po otwarciu fokus pozostaje na wyzwalaczu. Zwinięcie z wnętrza panelu przywraca fokus na wyzwalacz. Ukryta treść jest poza odczytem i tabulatorem.
- Historia jest nazwanym `role="log"` z `aria-live="off"`, `aria-relevant="additions"` i `aria-atomic="false"`; zawiera semantyczną listę wiadomości.
- Osobny, pusty od początku dokumentu `role="status"`, z `aria-live="polite"` i `aria-atomic="true"`, ogłasza tylko nową odpowiedź elfa, z nazwą nadawcy. Aktualizacja następuje po ustawieniu fokusu, z krótkim opóźnieniem około 100 ms.
- Wysłanie pozostawia fokus w polu wiadomości. Puste wiadomości nie są dodawane. Reset usuwa rozmowę i anuluje oczekujący komunikat.
- Historia, własna wiadomość i odpowiedź nie są ogłaszane podwójnie. Atrybut `aria-log` nie występuje.
- Przykładowe pytania dotyczą drukarki 3D, worka, terminu dostawy i wysłania listu.
- Odpowiedzi są lokalne i korzystają z rzeczywistej zawartości formularza. Elf rozróżnia produkty, ilości, zasady, dostawę, Mikołaja i Grincha, obsługuje proste negacje i doprecyzowania oraz pytania PL/EN. Nieznane pytanie otrzymuje prośbę o doprecyzowanie.
- Elf nie dodaje prezentów, nie wysyła listu i nie potwierdza nieistniejącego zgłoszenia. Czat nie korzysta z zewnętrznego modelu AI.

## 10. Loteria i licznik

### 10.1. Interfejs loterii

- Nagłówek: „Loteria z dreszczykiem”. Oferta: „Nielimitowana liczba tokenów na cały rok!*”.
- Udział przez opcjonalny checkbox „Biorę udział w loterii”, początkowo niezaznaczony. Wynik pojawia się wyłącznie po prawidłowym wysłaniu listu, na ekranie sukcesu.
- Opis: „Wynik poznasz po wysłaniu listu.” Opcjonalność jest oznaczona przy checkboxie, bez powtórzenia w opisie. Panel nie zawiera częstotliwości wygranej ani przykładów numerów wygrywających udziałów.
- Dopisek: „*Wygrana symboliczna.” Wyjaśnienie braku rzeczywistych tokenów i kredytów usług AI znajduje się przy wyniku.
- Komunikat wygranej podaje numer udziału i informację o symbolicznej nagrodzie, bez objaśniania algorytmu.
- Wygrana ma nagłówek „Wygrana! Milion tokenów jest Twój!” i jeden losowany komentarz z punktu 14.12. Numer udziału i dotychczasowe wyjaśnienie symbolicznej nagrody pozostają przy wyniku.
- Przegrana korzysta z kilku żartobliwych odpowiedzi o reniferze, dodatkowym spotkaniu i cierpliwości. Wynik nie otwiera kolejnego modalu.

### 10.2. Mechanizm loterii

- Wygrywa co 5. udział w loterii: 5, 10, 15, 20 i kolejne wielokrotności 5.
- Numeracja dotyczy udziałów w loterii, a nie wszystkich listów ani unikalnych osób. List bez udziału nie przesuwa numeru wygranej.
- Jeden list otrzymuje jeden numer udziału. Ponowienie nie nalicza go ponownie. Późniejsze dopisanie udziału do tego samego listu nie zwiększa liczby listów.
- Klient, licznik lokalny i funkcja serwerowa używają tego samego interwału 5. Podgląd roboczy ma osobną numerację i nie dopisuje zgłoszeń do produkcji.

### 10.3. Licznik listów i dane

- Licznik wysłanych listów znajduje się dyskretnie w prawym dolnym obszarze stopki. Na telefonie pozostaje w przepływie strony, bez stałej nakładki.
- Publiczna strona korzysta ze wspólnego licznika. Wersja lokalna i podgląd mają wyraźnie opisany licznik lokalny lub próbny.
- Powtórzenie tego samego identyfikatora listu nie zwiększa sumy. Pełny reset tworzy nowy identyfikator, bez zerowania wspólnego licznika.
- Samo odświeżenie czyści formularz, lecz zachowuje identyfikator listu w tej samej karcie oraz lokalny licznik.
- Do funkcji trafia wyłącznie losowy UUID i logiczna flaga udziału. Imię, treść listu, wiadomości czatu, prezenty i pozostałe checkboxy pozostają w pamięci karty.
- Serwer stosuje spójny odczyt i warunkowy atomowy zapis, bez dublowania numerów przy równoczesnych zgłoszeniach. Odpowiedzi licznika mają `Cache-Control: no-store`.
- Niedostępność licznika nie blokuje ekranu sukcesu. Stan niedostępności jest jawny; globalna liczba nie jest zastępowana lokalną bez informacji. Ponowienie zachowuje identyfikator listu.

## 11. Ekran sukcesu

- Nagłówek `h1`: „Twój list frunie na Biegun Północny!”. Dokument otrzymuje odpowiedni tytuł, a fokus trafia na ten nagłówek.
- Formularz jest ukryty przed czytnikiem i klawiaturą. Powrót przywraca formularz z danymi, tytuł dokumentu i fokus na wysyłce.
- „Wróć do listu” ma wyraźną strzałkę w lewo o wymiarach około 26 × 26 px, ukrytą przed czytnikiem. Kształt strzałki nie zależy od czcionki; nazwa przycisku wynika z widocznego tekstu.
- Animacja koperty trwa około 2–3 sekund. Ograniczenie ruchu ma spokojny odpowiednik bez przelotu.
- Scena lotu listu jest pojedynczą grafiką z tekstem alternatywnym opisującym kopertę z czerwoną pieczęcią, skrzynkę i cel: Biegun Północny, Wydział Spraw Pilnych. Opis pozostaje stały podczas ruchu i przy jego ograniczeniu, bez `aria-live` i bez ogłaszania poszczególnych klatek.
- „Biegun Północny” i „Wydział spraw pilnych” znajdują się nad ilustracją, bez nakładania na drogowskaz i rysunek.
- Pieczątka „Przyjęto warunkowo, Elf nr 200” znajduje się wyłącznie na sukcesie i ma własne jasne tło. Oznaczenia nadania są wyraźne również na telefonie.
- Tekst pieczątki jest zwykłym akapitem w kolejności czytania, poza grafiką lotu listu. Nie ma `aria-hidden`, dodatkowej roli obrazu, `tabindex` ani osobnego komunikatu na żywo. Jest dostępny w obu wariantach i językach na WEB oraz MOBILE.
- Oznaczenia „NADANO”, „TRYB: ŚWIĄTECZNY” i „ODBIORCA: ŚWIĘTY MIKOŁAJ” tworzą listę `ul` z trzema elementami `li`, poza grafiką lotu listu. `role="list"` zachowuje semantykę listy także w konfiguracjach Safari/VoiceOver, które pomijają ją przy `list-style:none`. Każdy wpis pozostaje samodzielnie dostępny podczas czytania treści. Bez dodatkowych przystanków Tab i bez dołączania całej listy do nazwy przycisku powrotu.
- Wynik opcjonalnej loterii jest częścią sukcesu. Licznik nie nalicza listu ponownie po odświeżeniu i ponowieniu.

## 12. Mapa celowych błędów

| Zakres | Element / kryterium | Wersja z błędami | Wersja poprawiona |
| --- | --- | --- | --- |
| WEB + MOBILE | Twoje imię · 2.5.3 | Nazwa „Identyfikator petenta” nadpisuje istniejący `label`. | Nazwa pochodzi z widocznej etykiety. |
| WEB + MOBILE | Wyślij list · 2.5.3 | Nazwa „Zatwierdź formularz”. | Nazwa „Wyślij list”; dopisek pozostaje opisem. |
| WEB + MOBILE | Udział w loterii · 2.5.3 | Checkbox nazwany „Aktywuj szczęście”. | Nazwa z „Biorę udział w loterii”. |
| WEB + MOBILE | Dodawanie · 4.1.2 | Akcje jako linki; przy drukarce fokusowalny `span` bez interaktywnej roli. | Wszystkie akcje to natywne przyciski z nazwą „Dodaj do worka: [prezent]”. |
| WEB + MOBILE | Usunięcie / czat · 4.1.2 | Ikonowe przyciski bez nazwy. | „Usuń z worka: [prezent]” / „Porozmawiaj z elfem”. |
| WEB + MOBILE | Rozwijanie czatu · 4.1.2 | Przycisk bez `aria-expanded` niezależnie od widoczności panelu. | `aria-expanded="false"` przy zwinięciu i `"true"` przy rozwinięciu. |
| WEB + MOBILE | Rozwijanie wyboru języka · 4.1.2 | Nazwany przycisk bez `aria-expanded` w obu stanach. | Nazwany przycisk z `aria-expanded="false"` albo `"true"`, zgodnie z widocznością opcji. |
| WEB + MOBILE | Dostawa · 4.1.2 | Własne elementy bez roli radio i dostępnego zaznaczenia. | Natywne radio, `fieldset`/`legend`, etykiety i aktualne `checked`. |
| WEB + MOBILE | Suwak · 4.1.2 | Wygląd się zmienia, dostępna wartość i tekst pozostają 50%. | Natywny suwak z bieżącą wartością, opisem i kontekstem skali. |
| WEB + MOBILE | Oświadczenie o zasługiwaniu · rezerwa 4.1.2 | Własny checkbox stale przekazuje `aria-checked="false"`. | Natywny checkbox z aktualnym zaznaczeniem. |
| WEB + MOBILE | Grinch · 4.1.2 | Nazwana grupa zamiast dialogu; brak informacji o modalności. | Nazwany `alertdialog`, modalność, nagłówek i opis. Nazwa w obu wariantach obejmuje nadtytuł i h2. |
| Tylko WEB | Zakładki · rezerwa 4.1.2 | Przyciski bez `tab` i `aria-selected`. | Pełny wzorzec zakładek. |
| Tylko MOBILE | Rozwijanie kategorii · 4.1.2 | Brak `aria-expanded`. | Stan zgodny z widocznością listy. |

Struktura nagłówków, landmarki, kontrast, rozmiary celów, klawiatura, walidacja, upomnienie Mikołaja, komunikaty worka i czatu oraz ekran sukcesu działają poprawnie w obu wariantach. Natywny element udostępnia swoją rolę bez jawnego atrybutu `role`.

2.5.3 dotyczy zgodności widocznej etykiety z nazwą dostępną. 3.3.2 dotyczy etykiet i instrukcji. 4.1.2 dotyczy nazwy, roli oraz odpowiednich stanów i wartości komponentu. 1.3.1 dotyczy relacji i struktury; 4.1.3 — komunikatów o stanie. Sama rozbieżność etykiety i nazwy nie jest automatycznie dodatkowym zgłoszeniem 4.1.2.

## 13. Prezentacja — 15 minut

Ścieżka pokazu: nazwy → dostawa → suwak → Grinch → czat → sukces → porównanie wariantów. Zakładki WEB, rozwijanie kategorii MOBILE, loteria i opcjonalny checkbox są materiałem dodatkowym lub zamiennikiem części pokazu.

| Czas odcinka | Czas części | Co pokazujemy | Co wyjaśniamy |
| --- | --- | --- | --- |
| 0:00–1:00 | 1:00 | Wygląd i nagłówki; zegar rusza po otwarciu strony. | Kontekst świątecznej demonstracji i dwa warianty. |
| 1:00–2:00 | 1:00 | Legenda: etykieta, nazwa, rola, stan, wartość. | Różnica 2.5.3 / 4.1.2. |
| 2:00–4:00 | 2:00 | Imię jako „Identyfikator petenta”, ikonowe usuwanie; dodanie 3 sztuk. | Rozbieżność etykiety i nazwy oraz brak nazwy. Upomnienie Mikołaja zamykamy krótko. |
| 4:00–6:00 | 2:00 | Wybór dostawy i odczyt NVDA. | Brak roli radio i stanu zaznaczenia. |
| 6:00–7:00 | 1:00 | Zmiana poziomu grzeczności. | Dostępna wartość pozostaje 50%; przygotowanie na Grincha. |
| 7:00–8:00 | 1:00 | Automatyczny Grinch; fokus w oknie. | Brak roli i nazwy dialogu. Zamknięcie/przedłużenie kończy atak do resetu. |
| 8:00–9:30 | 1:30 | Ikonowy czat i jedna odpowiedź elfa. | Brak nazwy i stanu rozwinięcia przycisku; w wersji poprawionej nazwa i aktualne `aria-expanded`. Czat pozostaje panelem w przepływie strony. |
| 9:30–10:00 | 0:30 | Akceptacja zasad i wysłanie. | Ekran sukcesu, fokus i ewentualny wynik loterii bez nowego okna. |
| 10:00–12:30 | 2:30 | Wariant poprawiony i ręczny Grinch. | Poprawne nazwy, radio, wartość i semantyka okna. |
| 12:30–14:00 | 1:30 | Najważniejsze wnioski. | Nazwa zawiera etykietę; rola pasuje do działania; stan i wartość odpowiadają rzeczywistości. |
| 14:00–15:00 | 1:00 | Zapas. | Wolniejszy odczyt, przewinięcie, śmiech i przejścia. |

Zegar nagrania działa w profilu 7 minut. Pauza służy przygotowaniu kadru; po resecie start jest ręczny. Porównanie Grincha wymaga zamknięcia okna, zmiany wariantu i ponownego otwarcia. Pełna instrukcja i mapa przykładów pozostają poza interfejsem strony.

## 14. Kryteria odbioru

- WEB i MOBILE: oba warianty WCAG oraz oba języki, z zachowaniem danych przy przełączaniu.
- Pusty formularz: aktywna wysyłka, błędy przy elementach, wymaganie, `aria-invalid`, opisy i fokus na pierwszym błędzie. Poprawienie danych umożliwia wysłanie.
- Worek: jedna sztuka, kilka sztuk zespołowych, kolejne dodanie tej samej pozycji, usuwanie, reset, zgodna suma i brak dopisków pod kartami.
- MOBILE: 320/390 px CSS, jedna karta i dostawa w rzędzie, prawidłowa kolejność DOM, wyraźna strzałka, rozwijanie, mini worek u góry, brak zasłaniania fokusu i obsługa z klawiaturą ekranową.
- Animacja: szybkie dodawanie, anulowanie, zmiana szerokości i ograniczenia ruchu; brak ruchu przy `prefers-reduced-motion: reduce`.
- Grinch: ręczne i automatyczne wywołanie, oczekiwanie za Mikołajem, role i powiązania właściwe dla wariantu, fokus, zamknięcie i powrót, opróżnienie przy 0:00, odzyskanie z okna i worka, zachowanie nowych pozycji oraz reset kopii. Rzeczywisty odczyt w NVDA z przeglądarką prowadzącej oraz VoiceOver lub TalkBack na telefonie.
- Czat: pojedynczy odczyt nowej odpowiedzi, fokus w polu wiadomości, brak ponownego odczytu całej historii i własnego pytania.
- Loteria: wygrane przy udziałach 5, 10, 15 i kolejnych wielokrotnościach 5; pominięcie listów bez udziału; deduplikacja i późniejsze dopisanie udziału; brak ujawnienia interwału w interfejsie.
- Statystyka: odświeżenie, ponowienie po błędzie, opóźniony odczyt i równoczesne wysyłki bez dublowania numerów.
- Typografia: pełne teksty i widoczny fokus po powiększeniu do 200%, reflow przy 320 px CSS oraz po ustawieniu interlinii 1,5, odstępu po akapicie 2 em, między literami 0,12 em i słowami 0,16 em.
- Podgląd roboczy w oknie przeglądarki: możliwość przejęcia kontroli oraz przełączenia szerokości między komputerem i telefonem.

### 14.1. Poprawki i odbiór panelu demonstracyjnego

**Zgłoszenie:** 26 października 2026 r.  
**Priorytet komunikatów Grincha:** wysoki, przed nagraniem.  
**Stan implementacji:** bieżąca wersja kodu zawiera regiony komunikatów wewnątrz okna Grincha, pełne tytuły H1 i drugi skip link do worka. Rzeczywisty odczyt czytnikiem pozostaje do potwierdzenia. Sam wynik testu DOM, obecność atrybutu ARIA lub widoczność tekstu nie zamyka zgłoszenia.

| ID | Obserwacja lub potrzeba | Oczekiwany efekt | Status odbioru |
| --- | --- | --- | --- |
| GRINCH-SR-01 | Czytnik nie ogłosił automatycznie ostrzeżenia o pozostałych 20 sekundach. | Jedna samoczynna zapowiedź pozostałego czasu oraz akcji „Przedłuż sesję”, bez szukania komunikatu i bez przenoszenia na niego fokusu. | Do sprawdzenia czytnikiem. |
| GRINCH-SR-02 | Czytnik nie ogłosił automatycznie końca odliczania. | Jedna zapowiedź „Czas minął”, rzeczywistego wyniku psikusa i możliwości odzyskania, gdy prezenty zostały zabrane. Osobny komunikat przy pustym worku. | Do sprawdzenia czytnikiem. |
| H1-SR-01 | Tytuł podzielony wymuszonym przełamaniem był odczytywany fragmentami, z powtarzanym oznaczeniem nagłówka. | „Świąteczna lista życzeń” jako jeden pełny H1. Ta sama zasada dla pełnego tytułu sukcesu i obu języków. | Pełne nazwy sprawdzone w drzewie dostępności; odczyt do potwierdzenia czytnikiem. |
| NAV-SKIP-02 | Potrzebny bezpośredni skrót klawiaturowy do worka. | Drugi skip link „Przejdź do worka z prezentami”, z faktycznym przeniesieniem fokusu do `#bag-title`. | Fokus sprawdzony na WEB i MOBILE 390 px. Obsługa sukcesu sprawdzona lokalnie; odczyt do potwierdzenia czytnikiem. |

**Ustalenie z przeglądu kodu:** we wcześniejszej wersji `grinch-time-status` i `app-status` znajdowały się w `page-root`. Otwarcie Grincha ustawia `page-root.inert = true`. Oba kanały ogłaszania trafiają więc do tła wyłączanego na czas okna. To prawdopodobna wspólna przyczyna obu brakujących zapowiedzi, wymagająca potwierdzenia odczytem po poprawce. Bieżąca wersja umieszcza ostrzeżenie w oknie i korzysta z osobnego regionu wyniku w tym samym oknie.

**Weryfikacja lokalna przed wydaniem:** testy logiki projektu i dodatkowy test komunikatu wyniku przeszły. W przeglądarce Chrome sprawdzono pełne nazwy H1 formularza i sukcesu w PL/EN, kolejność skip linków i fokus na worku na WEB oraz w ramce o szerokości 390 px. Przy ręcznym odliczaniu z prezentem w worku ostrzeżenie i wynik pojawiły się wewnątrz aktywnego okna w drzewie dostępności; ich regiony nie miały nieaktywnego przodka. Sprawdzono odzyskanie prezentu. To weryfikacja struktury, zachowania i udostępnienia komunikatów, bez potwierdzenia automatycznej zapowiedzi w NVDA, VoiceOver lub TalkBack.

**Odbiór z czytnikiem:**

- WEB: NVDA z przeglądarką używaną do nagrania; zapisana wersja czytnika, przeglądarki i systemu. Środowisko pierwotnego zgłoszenia pozostaje do uzupełnienia.
- MOBILE: VoiceOver z Safari oraz TalkBack z Chrome; ostrzeżenie i koniec bez konieczności dotykania zmienionego tekstu.
- Oba warianty WCAG, PL/EN, otwarcie automatyczne i ręczne, profile 2 i 7 minut. Wariant z błędami przekazuje nazwę grupy, a nie dialogu; nie wyłącza wymaganych zapowiedzi czasu i wyniku.
- Ostrzeżenie przy 20 sekundach z fokusem na „Przedłuż sesję” oraz na innym przycisku okna. Jest odczytane raz, również gdy czytnik wcześniej czytał treść okna. Sprawdzić, czy nie przerywa go druga zapowiedź.
- Koniec odliczania z pełnym oraz pustym workiem. Aktualny komunikat jest odczytany bez przejścia do tytułu, zegara lub zawartości worka. Zmiana nazwy przycisku nie zastępuje komunikatu.
- Pauza i wznowienie, zatrzymanie przed końcem, zamknięcie przed 20 sekundami i po ostrzeżeniu, reset oraz kolejna próba. Brak podwójnych, spóźnionych lub nieaktualnych komunikatów.
- Odzyskanie prezentów i powrót do listy po upływie czasu; poprawna zawartość worka, dostępny przycisk odzyskania i logiczny fokus.
- H1: nawigacja po nagłówkach i odczyt ciągły, formularz i sukces, PL/EN, wąski ekran oraz powiększenie. Pełna nazwa bez dwukrotnej zapowiedzi H1 dla tego samego tytułu.
- Skip linki: pierwsze trzy naciśnięcia Tab pokazują kolejno trzy linki; Enter na drugim ustawia fokus na nagłówku worka, a na trzecim na nagłówku pomocy z elfem. Następny Tab kontynuuje obsługę w tym obszarze. Fokus nie jest zasłonięty przez mobilny mini worek. Po sukcesie link nie prowadzi do ukrytego celu.

**Powiązanie z WCAG:** ostrzeżenie i możliwość reakcji sprawdzamy w kontekście 2.2.1. Samo przypomnienie „20 sekund” nie potwierdza spełnienia całego kryterium. Automatyczne przekazanie wyniku bez zmiany kontekstu weryfikujemy także w kontekście 4.1.3. Drugi skip link rozszerza nawigację; jego brak nie jest samodzielnym dowodem naruszenia 2.4.1, jeśli mechanizm pomijania bloków już działa.

### 14.2. Skip link do elfa i częstotliwość wygranych

- **NAV-SKIP-03 — pomoc techniczna z elfem:** trzeci skip link na początku formularza, po linkach do treści i worka.
- Etykiety: „Przejdź do pomocy technicznej z elfem” / „Skip to elf technical support”.
- Cel: nagłówek „Dyżurny elf techniczny” (`#chat-title`). Aktywacja przenosi fokus na nagłówek i przewija go do widocznego miejsca; nagłówek otrzymuje `tabindex="-1"`. Czat zachowuje osobny przycisk rozwijania.
- Link jest widoczny po uzyskaniu fokusu. Działa na WEB i MOBILE, w obu językach i wariantach demonstracji.
- Na ekranie sukcesu jest ukryty razem z niedostępną sekcją pomocy; po powrocie do formularza ponownie działa.
- Odbiór: kolejność trzech skip linków, fokus po Enter, dalsza nawigacja klawiaturą, brak zasłonięcia celu na telefonie oraz ukrycie linku na sukcesie.


- **LOTTERY-05 — częstsze wygrane:** co 5. udział w loterii, zamiast co 25. Zmiana obejmuje klienta, licznik lokalny, funkcję serwerową i testy mechanizmu.
- Numeracja nadal dotyczy udziałów w loterii; listy bez udziału nie przesuwają numeru wygranej. Interwał pozostaje niewidoczny w interfejsie.
- Odbiór: wygrane przy 5, 10 i 15; brak wygranej przy 4, 6, 9 i 11; zachowana deduplikacja oraz obsługa listów bez udziału.

**Weryfikacja wydania:** `npm test` przechodzi, w tym 9 testów licznika i loterii, 500 równoczesnych udziałów oraz granice wygranej przy 5, 10 i 15. W przeglądarce sprawdzono trzeci skip link, fokus na `#chat-title`, kolejny Tab na przycisku czatu, tłumaczenie EN i ukrycie linku na sukcesie wraz z jego przywróceniem. W ramce 390 px potwierdzono fokus, położenie celu w widoku i dalszą nawigację do czatu. To kontrola przeglądarki; odczyt rzeczywistym czytnikiem pozostaje osobnym odbiorem.

### 14.3. Pieczątka na stronie sukcesu

- Polski podpis: „Przyjęto warunkowo, Elf nr 200”.
- Angielski podpis: „Provisionally accepted, Elf no. 200”.
- Pieczątka występuje na ekranie sukcesu, w obu wariantach demonstracji oraz na WEB i MOBILE.
- Dyżurny elf w czacie zachowuje numer 404.

### 14.4. Powtórzenia przy liczbie sztuk w „Dla zespołu”

- Zgłoszenie: opis kategorii i kontekst prezentu tworzą zbyt długie zapowiedzi przy grupie, przyciskach oraz polu liczby sztuk.
- Zakres poprawki: opis panelu „Dla zespołu”, powielona nazwa artykułu oraz dodatkowa nazwana grupa kontrolek liczby sztuk. Pozostałe kategorie zachowują dotychczasowe powiązania.
- Przykładowe nazwy po poprawce: „Zmniejsz liczbę sztuk: Fotel masujący do biura”, „Liczba sztuk: Fotel masujący do biura”, „Zwiększ liczbę sztuk: Fotel masujący do biura”. Rola i wartość pola pozostają natywne.
- Opis żartobliwy jest dostępny jako tekst; nie jest automatycznie dodawany do zapowiedzi każdej kontrolki. Komunikat walidacyjny pozostaje powiązany z niepoprawnym polem.
- Obsługa −/+, wpisywanie liczby, zakres 1–99, `aria-disabled`, widoczny fokus i zachowanie ilości pozostają dostępne w obu wariantach, językach i układach.
- Weryfikacja lokalna: nazwy i brak powielonych opisów w drzewie dostępności Chrome na WEB oraz w ramce 390 px; zwiększenie 1 → 2, zatrzymanie przy 99, błąd przy 0 z `aria-invalid`, powiązanym opisem i fokusem na polu, korekta błędu oraz zachowanie wartości po zmianie wariantu i języka. Test tłumaczeń i składnia skryptów przechodzą.
- Źródła: [APG — Quantity Spin Button Example](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/examples/quantity-spinbutton/), [APG — Providing Accessible Names and Descriptions](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/).
- Status implementacji: powtórzone powiązania usunięte. Odbiór rzeczywistym czytnikiem pozostaje otwarty.

### 14.5. Kolejność worka i sekcji formularza

- Kolejność: sekcje 01 i 02 → worek z podsumowaniem i loterią → sekcje 03, 04, 05 → pomoc z elfem.
- Naturalna kolejność DOM określa przejścia klawiaturą oraz odczyt treści. Nie są potrzebne dodatnie wartości `tabindex` ani przechwytywanie Tab.
- Po ostatnim elemencie katalogu dostępne są przyciski usuwania prezentów z worka, przycisk odzyskania po psikusie, gdy występuje, oraz opcjonalny udział w loterii. Następnie fokus przechodzi do sekcji 03. Nie dodajemy pustego przystanku Tab do samego podsumowania.
- WEB zachowuje boczną kolumnę worka. MOBILE prezentuje pełny worek przed sekcją 03. Jeden zestaw danych i kontrolek działa w obu układach.
- Worek pozostaje nazwaną sekcją: `<section aria-labelledby="bag-title">` z nagłówkiem `h2` „Twój worek”. Jest dostępny w nawigacji po regionach i nagłówkach oraz przez istniejący skip link. Nie zastępujemy sekcji przez `fieldset` i `legend` ani nie dodajemy zagnieżdżonej grupy dla całej zawartości worka.
- W wariancie poprawionym każdy przycisk usuwania ma samodzielną nazwę określającą akcję, worek i prezent, np. „Usuń z worka: Fotel masujący do biura”. Nazwa zapewnia kontekst także przy przejściu samym Tabem lub bezpośrednio do przycisku. Treść całego worka i jego nagłówek nie są dodatkowo dołączane do opisu każdego przycisku.
- W wariancie z błędami brak nazwy przycisków usuwania pozostaje celowym przykładem 4.1.2. Nazwana sekcja nie zastępuje nazwy kontrolki.
- Zmiana szerokości zachowuje pozycję worka w DOM, aktualne dane, zaznaczenia i fokus. Przejścia Tab oraz Shift+Tab, skip linki, powrót po usunięciu prezentu i obsługa błędów muszą działać w nowej kolejności.
- Źródło: [WCAG 2.4.3 — Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html).
- Źródła kontekstu worka: [APG — Landmark Regions](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/), [WAI — Grouping Controls](https://www.w3.org/WAI/tutorials/forms/grouping/).
- Weryfikacja lokalna: Tab z ostatniego przycisku katalogu do usuwania prezentów, loterii i sekcji 03; Shift+Tab w kierunku przeciwnym; sekcje 03 → 04 → 05; fokus po usunięciu prezentu i przy pustym worku; walidacja pustego worka; lokalne wysłanie i powrót z sukcesu oraz skip link do worka. Sprawdzono wariant poprawiony PL i wariant z błędami EN.
- MOBILE: skrót mini worka może poprzedzać kontrolki pełnego worka. Szerokości prób: 320, 390, 760, 761 i 1024 px. Brak poziomego przewijania; jeden worek; zachowane dane przy zmianie układu. Kontrola zmiany szerokości bez przejmowania fokusu przez narzędzie QA potwierdza pozostawienie fokusu w polu imienia.
- `npm test` przechodzi w zmienionej kopii projektu. Rzeczywisty odczyt w NVDA, VoiceOver i TalkBack pozostaje do odbioru.
- Odbiór kontekstu worka należy do zakresu następnego zbiorczego wydania. Poniższe próby obejmują PL i EN; wynik zawiera wersję czytnika, przeglądarki, systemu i istotne ustawienia odczytu.

| Układ | Próba z czytnikiem | Oczekiwany kontekst |
| --- | --- | --- |
| WEB | NVDA: Tab z ostatniej kontrolki katalogu do pierwszego przycisku usuwania, kolejne przyciski i powrót Shift+Tab; osobno nawigacja po regionach, nagłówkach oraz skip link do worka. | W wariancie poprawionym każdy przycisk podaje akcję, worek i nazwę prezentu. Region i nagłówek „Twój worek” są dostępne w odpowiedniej nawigacji. Nie występuje dodatkowe powtarzanie pełnej zawartości worka. |
| MOBILE | VoiceOver na iOS i TalkBack na Androidzie: przejście z katalogu do pełnego worka, nawigacja po jego zawartości, skrót mini worka i skip link; przy podłączonej klawiaturze także Tab oraz Shift+Tab. | Pełny worek występuje przed sekcją 03. Nazwy przycisków w wariancie poprawionym zachowują kontekst prezentu i akcji. Skróty prowadzą do nagłówka worka. |

- Automatyczne ogłoszenie wejścia do regionu zależy od czytnika i jego ustawień; wynik próby zapisujemy osobno. Kontekst przycisku w wariancie poprawionym nie zależy od odczytania nazwy regionu. Brak nazwy przycisku w wariancie z błędami jest oczekiwanym wynikiem demonstracji.
- Status: kod wydania z 28 października 2026 r.; testy lokalne przeszły, odbiór rzeczywistymi czytnikami pozostaje otwarty.

### 14.6. Stan rozwinięcia rozmowy z elfem

- Zakres następnego zbiorczego wydania: brak `aria-expanded` na `#chat-launcher` w wariancie z błędami; aktualny stan w wariancie poprawionym. Zasada obowiązuje na WEB i MOBILE, w PL i EN.
- Początkowe otwarcie strony, rozwijanie, zwijanie, reset oraz przełączenie wariantu przy otwartym i zamkniętym panelu zachowują semantykę odpowiednią dla wybranego wariantu. Zmiana wariantu nie zamyka rozmowy ani nie dodaje powtórnie powitania.
- Enter i Spacja nadal otwierają oraz zamykają panel. „Zwiń czat” przywraca fokus na przycisk otwierający. Ukryte kontrolki panelu nie są dostępne przez Tab.
- Odbiór z czytnikiem: w wariancie poprawionym sprawdzić nazwę oraz ogłaszanie rozwinięcia i zwinięcia; w wariancie z błędami oczekiwany jest brak nazwy i stanu. Rzeczywisty odczyt NVDA, VoiceOver i TalkBack pozostaje do potwierdzenia.
- Weryfikacja lokalna: `npm test` przechodzi. W Chrome na WEB i w ramce 390 px sprawdzono PL/EN, brak atrybutu w wariancie z błędami, aktualne `true`/`false` w wariancie poprawionym, przełączanie wariantu przy otwartym i zamkniętym panelu, Enter, Spację, zwijanie i powrót fokusu. Próby WEB obejmują reset w obu wariantach oraz zachowanie wpisanej wiadomości i pojedynczego powitania przy zmianie wariantu i języka. To weryfikacja przeglądarki, bez potwierdzenia rzeczywistej zapowiedzi czytnika.
- Status: kod wydania z 28 października 2026 r.; testy lokalne przeszły, odbiór rzeczywistymi czytnikami pozostaje otwarty.

### 14.7. Nadtytuły okien Mikołaja i Grincha

- Zakres następnego zbiorczego wydania: nazwy obu kontenerów obejmują kolejno widoczny nadtytuł i główny nagłówek. Zasada obowiązuje w obu wariantach, PL/EN, na WEB i MOBILE.
- Mikołaj: `aria-labelledby="santa-kicker santa-title"`. Rola `dialog`, opis z aktualną liczbą sztuk i dotychczasowe zachowanie pozostają w obu wariantach.
- Grinch: `aria-labelledby="grinch-kicker grinch-title"`. Wariant poprawiony używa `alertdialog`; wariant z błędami używa `group`, co udostępnia nazwę i zachowuje demonstrację nieprawidłowej roli okna.
- Nadtytuły pozostają widocznym tekstem. Nie dodajemy im `aria-live` ani osobnego ogłoszenia. Kolejne zmiany wyniku psikusa nadal obsługuje istniejący region komunikatu; nazwa kontenera odwołuje się do aktualnego h2.
- H2 obu okien pozostają samodzielnymi nagłówkami poziomu 2. Rozszerzenie nazwy kontenera nie zmienia struktury nagłówków, początkowego fokusu, pułapki fokusu, zamykania ani powrotu do wyzwalacza.
- Odbiór z czytnikiem: przy otwarciu sprawdzić zapowiedź nadtytułu i głównego tytułu. Dla Grincha w wariancie z błędami oczekiwana jest nazwana grupa, bez zapowiedzi dialogu. Rzeczywisty odczyt NVDA, VoiceOver i TalkBack pozostaje do potwierdzenia.
- Weryfikacja lokalna: Chrome na WEB — osiem kombinacji okno × wariant × język ma oczekiwaną rolę i pełną nazwę dostępną. Tab i Shift+Tab zawijają w obu oknach; Escape zamyka i przywraca fokus na wyzwalacz. MOBILE 390 px (PL, wariant z błędami) i 320 px (EN, wariant poprawiony) — obie nazwy zawierają nadtytuł i h2; nagłówki pozostają poziomu 2. Przy pełnym worku po upływie odliczania nazwa poprawnego Grincha obejmuje „Grinch wyjął Twoje prezenty z worka”, opis wskazuje wynik, a osobny region przekazuje komunikat o opróżnieniu i odzyskaniu. Przy pustym worku w wariancie z błędami nazwa grupy obejmuje „Grinch nie miał czego zabrać” i dostępny jest odpowiedni komunikat wyniku. To kontrola przeglądarki, bez potwierdzenia rzeczywistego odczytu czytnika.
- Status: kod wydania z 28 października 2026 r.; testy lokalne przeszły, odbiór rzeczywistymi czytnikami pozostaje otwarty.

### 14.8. Tekst pieczątki i oznaczenia nadania na ekranie sukcesu

- Zgłoszenie użytkowniczki: VoiceOver na telefonie nie dociera do tekstu „Przyjęto warunkowo, Elf nr 200”.
- Dodatkowe zgłoszenie: NVDA nie odczytuje tekstu pieczątki ani oznaczeń „NADANO”, „TRYB: ŚWIĄTECZNY” i „ODBIORCA: ŚWIĘTY MIKOŁAJ”.
- Przyczyna w kodzie: kontener pieczątki miał `aria-hidden="true"`, mimo że zawiera zwykły tekst HTML, a nie obraz.
- Poprawka: akapit `#success-stamp` bez `aria-hidden`, z dotychczasowym wyglądem i położeniem. Tekst pieczątki jest niezależny od opisu grafiki lotu listu. Jest dostępny podczas nawigacji po treści i odczytu ciągłego; Tab przechodzi wyłącznie po kontrolkach.
- Oznaczenia nadania miały postać zwykłych elementów `span` poza ukrytym rysunkiem. Otrzymują strukturę listy `ul`/`li`, z zachowaniem wyglądu. Odbiór rozróżnia brak dostępu do treści od oczekiwania automatycznego odczytu całego ekranu: nie dodajemy osobnej zapowiedzi ani fokusu do każdego wpisu.
- Zakres: oba warianty demonstracji, PL/EN, WEB i MOBILE. Ukryty ekran sukcesu nie udostępnia pieczątki przed wysłaniem listu ani po powrocie do edycji.
- Odbiór z czytnikiem: VoiceOver z Safari — przejść gestami przez treść sukcesu do pełnego tekstu pieczątki i trzech oznaczeń nadania; NVDA — nawigacja w trybie przeglądania i odczyt ciągły, w tym nawigacja po listach. Sprawdzić brak dodatkowych przystanków Tab i brak ponownego odczytu całej strony. Rzeczywisty odczyt pozostaje do potwierdzenia na urządzeniach użytkowniczki.
- Weryfikacja lokalna: na podglądzie 390 px w obu wariantach i językach pieczątka oraz trzy elementy listy są widoczne w drzewie dostępności. Fokus po wysłaniu pozostaje na h1; kolejny Tab prowadzi do „Wróć do listu”. Po powrocie pieczątka znika razem z ekranem sukcesu. Dodatkowa próba 320 px nie wykazuje poziomego przewijania; wizualnie pieczątka i oznaczenia zachowują dotychczasowy układ. Na WEB potwierdzono pełny tekst pieczątki, trzy elementy listy, fokus na h1 i brak poziomego przewijania. Próby wysyłki korzystały wyłącznie z lokalnego licznika, bez udziału w loterii i bez zmiany danych produkcyjnych.
- Status: kod wydania z 28 października 2026 r.; testy lokalne przeszły, odbiór rzeczywistymi czytnikami pozostaje otwarty.

### 14.9. Teksty alternatywne Mikołaja i lotu listu

- Obie ilustracje przekazują treść świątecznego żartu. Mają teksty alternatywne w obu wariantach demonstracji, PL/EN oraz na WEB i MOBILE.

| Grafika | Język | Tekst alternatywny |
| --- | --- | --- |
| Mikołaj | PL | Mikołaj w okularach siedzi przy laptopie. W dymku: „Na wczoraj? Oczywiście.” |
| Mikołaj | EN | Santa in glasses sits at a laptop. His speech bubble reads: “Needed yesterday? Of course.” |
| Lot listu | PL | List z czerwoną pieczęcią frunie ze skrzynki pocztowej na Biegun Północny, do Wydziału Spraw Pilnych. |
| Lot listu | EN | A letter sealed with red wax flies from a postbox to the North Pole’s Urgent Requests Department. |

- Główne grafiki `#santa-illustration` i `#letter-flight` są natywnymi elementami `img` z tekstem alternatywnym w `alt`. Zewnętrzne pliki SVG zawierają rysunki, a elementy `div` służą wyłącznie do układu. Dymek i napisy przy scenie są uwzględnione w opisach głównych grafik i nie są odczytywane ponownie. Tło trasy listu ma pusty `alt`, ponieważ opis całej sceny jest przypisany do lecącej koperty.
- Grafiki nie mają `tabindex` ani regionów na żywo. Są dostępne w zwykłym odczycie i nawigacji po grafikach. Opis animacji nie zmienia się przy kolejnych klatkach; ograniczenie ruchu zachowuje ten sam opis.
- W widoku formularza dostępna jest ilustracja Mikołaja; na sukcesie dostępna jest scena lotu listu. Przełączanie widoków nie pozostawia w odczycie grafiki ukrytego ekranu. Pieczątka i oznaczenia nadania pozostają osobnym tekstem oraz listą.
- Źródło: [WAI — Informative Images](https://www.w3.org/WAI/tutorials/images/informative/).
- Odbiór z czytnikiem: NVDA i VoiceOver — odnaleźć obie grafiki w odpowiednich widokach i potwierdzić pełne opisy bez powtórnego odczytu dymka lub napisów sceny. Rzeczywisty odczyt pozostaje do potwierdzenia na urządzeniach użytkowniczki.
- Weryfikacja lokalna: Chrome na WEB w obu wariantach i językach oraz podgląd 390 px (PL z błędami i EN poprawiony) — każda scena jest jedną nazwaną grafiką; dostępna jest wyłącznie grafika aktualnego widoku. Fokus sukcesu pozostaje na h1, następny Tab prowadzi do przycisku powrotu. Pieczątka i trzy oznaczenia nadania są nadal osobno dostępne. Test i18n potwierdza zgodność źródła tłumaczeń z blokiem HTML; `npm test` przechodzi. Odczyt rzeczywistym czytnikiem pozostaje do odbioru.
- Status: teksty opisów zachowane; natywne osadzenie grafik jest częścią lokalnej poprawki z punktu 14.10.

### 14.10. Natywne obrazki z atrybutem alt

- Mikołaj: `img#santa-illustration`, plik `assets/santa.svg`, pełny opis w `alt` z tekstem dymka.
- Lot listu: `img#letter-flight`, plik `assets/letter-envelope.svg`, pełny opis w `alt` z kierunkiem lotu i Wydziałem Spraw Pilnych. Tło `assets/letter-route.svg` ma pusty `alt`.
- Kontenery układu nie mają roli obrazu ani nazwy przez ARIA. Nie używamy elementu `title` jako źródła opisów tych obrazków. Nazwa dostępna wynika z natywnego `alt`.
- Opisy PL/EN pozostają identyczne z opisami z punktu 14.9. Przełącznik języka tłumaczy atrybut `alt`, w tym przy otwartym ekranie sukcesu.
- Koperta zachowuje animację CSS: lot po dotychczasowej trasie, czas 2,8 sekundy i spokojny wariant przy ograniczeniu ruchu. Przelot skaluje się razem z ilustracją. Ponowne wysłanie listu uruchamia animację od początku.
- Obrazki nie przejmują fokusu i nie tworzą dodatkowych przystanków Tab. Ukryty widok nie udostępnia swoich grafik. Pieczątka i oznaczenia nadania pozostają osobno dostępne.
- Zakres: obie wersje demonstracji, PL/EN, WEB i MOBILE. Do publicznego HTML należą trzy pliki SVG w `dist/assets`; podgląd i wdrożenie obejmują cały katalog `dist`.
- Weryfikacja lokalna: `npm test` przechodzi. Chrome na WEB: PL/EN w obu wariantach — główne obrazy są elementami `IMG`, nazwy wynikają z `alt`, bez jawnej roli i `aria-label`; dostępna jest jedna główna grafika aktualnego widoku. MOBILE: 390 px PL z błędami i 320 px EN poprawiony — poprawne nazwy oraz brak poziomego przewijania. Fokus po wysłaniu pozostaje na h1, następny Tab prowadzi do przycisku powrotu. Koperta zmienia położenie podczas przelotu, osiąga dotychczasowy punkt końcowy i startuje ponownie po ponownym wysłaniu. Wizualna próba 320 px potwierdza zachowany rysunek i układ. Ograniczenie ruchu zachowuje regułę CSS wyłączającą animację; rzeczywisty odczyt NVDA/VoiceOver pozostaje do potwierdzenia.
- Status: zakres wydania 2026-10-30; rzeczywisty odczyt czytnikiem pozostaje do odbioru na urządzeniu.

### 14.11. Odliczanie Grincha — 30 sekund

- Odliczanie od otwarcia okna do psikusa trwa 30 sekund. Po upływie czasu Grinch realizuje psikus, a okno pokazuje jego wynik i możliwość odzyskania prezentów. Okno nie zamyka się automatycznie po 30 sekundach.
- Ostrzeżenie o pozostałych 20 sekundach zachowuje dotychczasową treść, próg i sposób ogłaszania. Przy nieprzerwanym odliczaniu pojawia się po 10 sekundach od otwarcia okna.
- Opis początkowy i licznik wskazują 30 sekund, również po ponownym ręcznym uruchomieniu. Polski i angielski opis podają ten sam czas.
- Pauza i wznowienie w panelu prowadzącej, akcja „Przedłuż sesję”, zamykanie okna, ogłoszenie wyniku oraz odzyskiwanie prezentów zachowują dotychczasowe działanie. Ostrzeżenie przy 20 sekundach pozostaje jednorazowe w danej próbie. Osobny przycisk pauzy wewnątrz okna zostaje usunięty zgodnie z punktem 14.13.
- Automatyczne otwarcie pozostaje po 2 minutach w profilu publicznym i po 7 minutach w profilu prezentacyjnym. Te progi są niezależne od 30-sekundowego odliczania w otwartym oknie.
- Zakres: oba warianty demonstracji, PL/EN, WEB i MOBILE.
- Weryfikacja lokalna: testy zegara obejmują 30 sekund, ostrzeżenie po 10 sekundach, pauzę, wznowienie i jednorazowe wygaśnięcie. Chrome WEB potwierdza ostrzeżenie w aktywnym oknie, opróżnienie worka przy 00:00 i odzyskanie pozycji.
- Odbiór: początkowe 00:30, ostrzeżenie przy 00:20, wynik przy 00:00; sprawdzić także pauzę, wznowienie i nową próbę. Automatyczny odczyt ostrzeżenia oraz wyniku wymaga potwierdzenia rzeczywistym czytnikiem ekranu.
- Status: zakres wydania 2026-10-30; rzeczywisty odczyt czytnikiem pozostaje do odbioru na urządzeniu.

### 14.12. Żartobliwe komentarze do wygranej

- Nagłówek wyniku: „Wygrana! Milion tokenów jest Twój!”.
- Pod nagłówkiem pojawia się jeden losowany komentarz z poniższej puli. Komentarz jest wybierany dla danego zwycięskiego udziału; ponowne wyświetlenie tego samego wyniku, zmiana języka lub wariantu demonstracji zachowuje wybraną odpowiedź.

1. I co teraz? Zapytaj AI, co zrobić z milionem tokenów. Tylko pilnuj, żeby nie zużyła wszystkich na odpowiedź.
2. Pilnuj swoich tokenów. Grinch już pisze: „Mam tylko jedno krótkie pytanie…”.
3. Wreszcie możesz dopisać „proszę” i „dziękuję” bez sprawdzania salda.
4. Powinno wystarczyć na jeden projekt i wszystkie jego „jeszcze tylko drobne poprawki”.
5. Elfy zalecają rozsądne gospodarowanie. Znamy kogoś, kto wydał wszystko na wybór nazwy zmiennej.
6. Możesz już wygenerować odpowiedź na maila „OK, dzięki”. W siedmiu wersjach. Z analizą tonu.

- Każdy komentarz otrzymuje naturalny odpowiednik angielski, z zachowaniem tego samego żartu. Zmiana języka tłumaczy nagłówek i wybrany komentarz.
- Komentarz jest zwykłym tekstem w wyniku loterii na ekranie sukcesu. Pozostaje dostępny do odczytu czytnikiem; bez osobnego modalu, zmiany fokusu i dodatkowej, powielającej zapowiedzi.
- Losowanie komentarza nie zmienia wyniku loterii, numeracji udziałów ani częstotliwości wygranej co 5. udział. Udział pozostaje opcjonalny, a wynik jest dostępny po prawidłowym wysłaniu listu. Informacja o symbolicznej nagrodzie i braku rzeczywistych tokenów lub kredytów usług AI pozostaje przy wyniku.
- Zakres: oba warianty demonstracji, PL/EN, WEB i MOBILE.
- Odbiór: jedna odpowiedź przy wygranej, brak komentarza wygranej przy przegranej lub bez udziału, pełna pula sześciu odpowiedzi, zachowany komentarz dla tego samego wyniku oraz spójne tłumaczenia. Sprawdzić czytelność dłuższych odpowiedzi na telefonie i dostępność do odczytu czytnikiem.
- Status: zakres wydania 2026-10-30; rzeczywisty odczyt czytnikiem pozostaje do odbioru na urządzeniu.

- Weryfikacja lokalna: sześć komentarzy ma tłumaczenia EN; testy potwierdzają jeden wybór na udział, brak ponownego losowania oraz stany wyniku. Próba pięciu lokalnych udziałów w Chrome daje wygraną przy piątym; zmiana PL → EN → PL i wariantu zachowuje ten sam komentarz. Licznik produkcyjny nie był używany.

### 14.13. Akcje w oknie Grincha

- Okno Grincha nie zawiera przycisku „Zatrzymaj odliczanie” ani jego stanu „Wznów odliczanie”. Usunięcie dotyczy kontrolki `#pause-session` oraz jej obsługi i odwołań w kodzie okna.
- Podczas odliczania w obszarze akcji są dokładnie dwa przyciski: „Przedłuż sesję” i „Wróć do listy życzeń”. Obie akcje zamykają okno i przed upływem czasu powstrzymują psikus. Brak reakcji przez 30 sekund pozwala Grinchowi zrealizować psikus.
- Po opróżnieniu worka przycisk „Przedłuż sesję” zmienia się w „Odzyskaj prezenty”, który przywraca zabrane prezenty i zamyka okno. Drugi przycisk nadal brzmi „Wróć do listy życzeń”: zamyka okno bez przywracania prezentów. Odzyskanie pozostaje wtedy dostępne przy pełnym obszarze worka. W obszarze akcji nadal są dokładnie dwa przyciski.
- Gdy Grinch nie miał czego zabrać i nie ma kopii prezentów do odzyskania, po upływie czasu w obszarze akcji pozostaje jeden przycisk „Wróć do listy życzeń”, bez dwóch identycznych akcji powrotu i bez przycisku odzyskiwania.
- „X” w pasku tytułowym i klawisz Escape pozostają dostępne w każdym stanie. Po psikusie zamykają okno bez odzyskiwania; wcześniej powstrzymują psikus. Okno nie wymaga czekania do końca odliczania, aby je zamknąć.
- Pauza w panelu prowadzącej nadal zatrzymuje czas pokazu i odliczanie Grincha; wznowienie kontynuuje oba zegary. Okno zachowuje informację o wstrzymanym pokazie bez osobnego przycisku pauzy.
- Ostrzeżenie o pozostałych 20 sekundach zachowuje treść i sposób ogłaszania, w tym wskazanie akcji „Przedłuż sesję”. Początkowy fokus pozostaje na tym przycisku; po usunięciu kontrolki pauzy Tab i Shift+Tab obejmują tylko istniejące, dostępne akcje.
- Zakres: oba warianty demonstracji, PL/EN, WEB i MOBILE.
- Odbiór: brak kontrolki pauzy w oknie i błędów wynikających z usuniętych odwołań; 30-sekundowy psikus bez reakcji, ostrzeżenie przy 20 sekundach, powstrzymanie psikusa pozostałymi akcjami, odzyskanie prezentów oraz pauza i wznowienie z panelu prowadzącej. Zachowane zamykanie, powrót fokusu i nawigacja klawiaturą.
- Status: zakres wydania 2026-10-30; rzeczywisty odczyt czytnikiem pozostaje do odbioru na urządzeniu.

- Weryfikacja lokalna: po psikusie z prezentem dostępne są odzyskanie i powrót; odzyskanie przywraca ilość oraz fokus do wyzwalacza. MOBILE EN z pustym workiem ma pojedynczy powrót, właściwy wynik i pomija ukrytą akcję w Tab/Shift+Tab. Escape zamyka okno. Kontrola PL i EN potwierdza 00:30, rolę `alertdialog` w poprawnym i `group` w błędnym wariancie.

### 14.14. Panel „Jak korzystać ze strony”

- Osobny panel dla odwiedzających, bezpośrednio pod panelem prowadzącej i przed nagłówkiem Biura Obsługi Życzeń. Panele nie są zagnieżdżone i rozwijają się niezależnie. Początkowo oba mogą pozostać zwinięte zgodnie z dotychczasowym stanem panelu prowadzącej.
- Wygląd spójny z panelem prowadzącej: jasne tło, ciemnozielony tekst, czytelny znak rozwijania, wyraźny fokus i cały wiersz tytułowy jako obszar aktywacji. Na MOBILE panele układają się jeden pod drugim; tekst zawija się bez przewijania poziomego.
- Tytuł PL: „Jak korzystać ze strony”. Tytuł EN: „How to use this page”.
- Najważniejsza wskazówka jest widoczna przy panelu również po zwinięciu instrukcji, jako wyróżniony zwykły tekst. PL: „Najpierw włącz czytnik ekranu. To z nim usłyszysz różnice między wersjami.” EN: „Turn on a screen reader first. Use it to hear the differences between the two versions.” To pierwszy krok udziału w demonstracji; wybór wariantu i wypełnianie listu następują po uruchomieniu czytnika.
- Natywne `details#visitor-instructions` i `summary#visitor-instructions-toggle`, z aktualnym stanem rozwinięcia udostępnianym przez przeglądarkę w obu wariantach demonstracji. Instrukcja zawsze poprawnie przekazuje „zwinięte/rozwinięte”, również w wersji z błędami. Bez dublowania ról i bez ręcznego `aria-expanded` na natywnym `summary`. Obsługa myszą, dotykiem, Enterem i Spacją. Fokus pozostaje na wyzwalaczu po rozwinięciu i zwinięciu; zwinięta treść jest poza odczytem i tabulatorem.
- Panel działa poprawnie w obu wariantach demonstracji. Wybór wariantu i języka nie zwija panelu ani nie usuwa danych formularza. Otwarcie instrukcji nie zatrzymuje ani nie resetuje zegara pokazu.
- Treść składa się z akapitów i rzeczywistej listy numerowanej. Nie dodaje dodatkowego h1 ani nagłówków przed głównym tytułem strony. Instrukcja objaśnia cel i zadania użytkownika; szczegółowa mapa błędów i instrukcja prowadzenia prezentacji pozostają w dokumentacji. Dotychczasowa krótka informacja o demonstracji z celowymi błędami pozostaje widoczna przy wyborze wariantu.

**Treść PL**

To świąteczna zabawa i demonstracja dostępności. Wersja z błędami i wersja poprawiona wyglądają podobnie, ale różnią się tym, jakie nazwy, role, stany i wartości elementów przekazują czytnikowi ekranu.

1. **Włącz czytnik ekranu**, np. NVDA, VoiceOver lub TalkBack, i wybierz wersję demonstracji. Możesz ją zmieniać w trakcie zabawy (wpisane dane i prezenty zostają).
2. Wpisz imię, wybierz kategorię i dodaj przynajmniej jeden prezent do worka. W kategorii „Dla zespołu” możesz ustawić liczbę sztuk.
3. Sprawdź zawartość worka, oceń swoją grzeczność i wybierz sposób dostawy.
4. Zaakceptuj zasady realizacji życzeń i wyślij list. Udział w loterii jest opcjonalny; wynik zobaczysz po wysłaniu.

Wypróbuj też rozmowę z elfem. A jeśli Grinch dobierze się do worka, elfy pomogą odzyskać prezenty.

Porównaj obie wersje z czytnikiem ekranu. Na komputerze używaj Tab i Shift+Tab; między zakładkami kategorii przechodź strzałkami w lewo i w prawo, a wybór zatwierdzaj Enterem lub Spacją. Na telefonie kategorię wybierzesz z rozwijanego panelu.

Wysyłka listu i nagrody są symboliczne.

**Treść EN**

This is a festive game and an accessibility demo. The version with errors and the corrected version look similar, but they provide different names, roles, states and values to screen readers.

1. **Turn on a screen reader**, such as NVDA, VoiceOver or TalkBack, and choose a demo version. You can switch while you explore (your entries and gifts will stay).
2. Enter your name, choose a category and add at least one gift to your sack. In “For the team”, you can choose how many of each gift to add.
3. Check your sack, rate how good you have been and choose a delivery method.
4. Accept the wish fulfilment terms and send your letter. The prize draw is optional; you will see the result after sending.

Try chatting with the elf, too. And if the Grinch gets into your sack, the elves will help you restore your gifts.

Compare both versions with a screen reader. On a computer, use Tab and Shift+Tab; move between category tabs with the Left and Right Arrow keys, then press Enter or Space to select one. On a phone, choose a category from the expandable panel.

Sending the letter and the prizes are pretend.

- Zakres: oba warianty demonstracji, PL/EN, WEB i MOBILE.
- Odbiór: niezależne rozwijanie obu paneli, poprawna zapowiedź nazwy i stanu, odczyt akapitów i kroków listy, obsługa klawiaturą i gestami, zachowany fokus i dane po zmianie wariantu lub języka. Sprawdzić reflow przy 320 px i powiększeniu tekstu; instrukcja ma zachować dotychczasowe wymagania kontrastu i rozmiaru celu dotykowego. Rzeczywisty odczyt VoiceOver, NVDA i TalkBack pozostaje do potwierdzenia.
- Weryfikacja lokalna: `npm test` przechodzi. Chrome na WEB: oba stany w każdej z czterech kombinacji wariant × język mają prawidłową nazwę oraz stan `collapsed` / `expanded` w drzewie dostępności. Enter rozwija, Spacja zwija; fokus pozostaje na `summary`. Zmiana wariantu i języka zachowuje otwarty panel i wpisane imię. Instrukcja ma cztery elementy listy, pełne tłumaczenie i widoczną wskazówkę przy zwinięciu. Próby w ramkach o szerokości 390 px PL i 320 px EN w obu wariantach potwierdzają stan, czytelność i brak poziomego przepełnienia; aktywny wiersz ma około 53 px wysokości. To kontrola przeglądarki, bez potwierdzenia rzeczywistej mowy czytników.
- Status: zakres wydania 2026-10-30; rzeczywisty odczyt czytnikiem pozostaje do odbioru na urządzeniu.

### 14.15. Stan rozwinięcia wyboru języka

- W wariancie z błędami wyzwalacz wyboru języka nie udostępnia stanu zwinięcia ani rozwinięcia. W wariancie poprawionym przekazuje aktualny stan przez `aria-expanded="false"` przy ukrytych opcjach i `aria-expanded="true"` przy widocznych.
- Obie wersje korzystają z tego samego natywnego przycisku rozwijającego opcje; różni je wyłącznie obecność i aktualizowanie `aria-expanded`. Kontrolka nie jest elementem `select`, który udostępniałby stan natywnie również w wariancie z błędami.
- Wyzwalacz jest natywnym `button type="button"`. Jego nazwa w obu wariantach obejmuje widoczną etykietę „Język strony” / „Page language” i aktualny język „Polski” albo „English”. `aria-controls` wskazuje panel z wyborem. Rysunek strzałki jest ukryty przed czytnikiem i wizualnie odpowiada otwarciu.
- Opcje „Polski” i „English” są nazwanymi, natywnymi przyciskami w zwykłej liście. Bieżący język jest widoczny na wyzwalaczu i pozostaje dostępny czytnikowi. Nazwy własne języków zachowują odpowiednie atrybuty `lang` i nie są tłumaczone. Panel nie jest dialogiem, menu ARIA ani listą `listbox`; wyzwalacz nie otrzymuje `aria-haspopup`.
- Enter, Spacja i aktywacja dotykiem rozwijają lub zwijają opcje. Fokus po rozwinięciu pozostaje na wyzwalaczu; Tab i Shift+Tab umożliwiają przejście do opcji i dalej po stronie. Escape zamyka otwarty panel i przywraca fokus na wyzwalacz. Po wybraniu języka panel się zamyka, teksty są tłumaczone, a fokus wraca do wyzwalacza z nową nazwą. Ukryte opcje są poza odczytem i tabulatorem. Wybór języka nie wymaga myszy.
- Zmiana wariantu przy otwartym lub zamkniętym wyborze języka aktualizuje semantykę bez zmiany jego widoczności. W wariancie z błędami `aria-expanded` jest nieobecne także po rozwijaniu, zwijaniu, wyborze języka i resecie. W poprawnym zawsze odpowiada rzeczywistej widoczności opcji.
- Wybór PL/EN zachowuje dotychczasowe tłumaczenia, `html lang`, obsługę `?lang=pl` / `?lang=en`, zapamiętaną preferencję, komunikat o zmianie języka i wszystkie dane listu. Obowiązują dotychczasowe wymagania kontrastu, widoczności fokusu i rozmiaru obszaru aktywacji.
- Zakres: oba warianty demonstracji, PL/EN, WEB i MOBILE. Panel prowadzącej i instrukcja nadal poprawnie udostępniają swój stan w obu wariantach.
- Odbiór: nazwa i bieżący język dostępne zawsze; stan rozwinięcia obecny wyłącznie w wersji poprawionej; wybór, zamknięcie, Tab, Shift+Tab, Enter, Spacja, Escape i zmiana wariantu przy otwartym panelu. Sprawdzić rzeczywiste zapowiedzi NVDA, VoiceOver i TalkBack w obu stanach oraz brak utraty danych i błędów starych odwołań do `select` w tłumaczeniach i obsłudze mini worka. Testy i18n muszą nadal potwierdzać zgodność helpera z blokiem w HTML.
- Źródło wzorca poprawnego: [WAI-ARIA APG — Disclosure](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/).
- Status: zakres wydania 2026-10-30; rzeczywisty odczyt czytnikiem pozostaje do odbioru na urządzeniu.

- Weryfikacja lokalna: Chrome WEB oraz ramki 390 px PL i 320 px EN, oba warianty. Wersja poprawiona ma aktualne `true`/`false`, błędna nie ma atrybutu w obu stanach. Enter/Spacja rozwijają, Escape zamyka i przywraca fokus; zmiana wariantu zachowuje otwarcie. Wpisane dane, worek i otwarta instrukcja zostają po zmianie języka. Brak poziomego przepełnienia; przycisk i opcje mają minimum 44 px wysokości.

### 14.16. Panel prowadzącej i osobny timer

- Zgłoszenia MOBILE: czytnik odczytuje osobno plus i etykietę panelu; przy wskazaniu zegara ogłasza przycisk ze stanem zwinięcia.
- Plus i minus nie są tekstem generowanym przez CSS. Wyzwalacz zawiera dekoracyjne SVG z `aria-hidden="true"` i `focusable="false"`; pionowa kreska znika po rozwinięciu. Ta sama zasada obowiązuje dla ikony instrukcji.
- `summary#presenter-toggle` ma nazwę z widocznego tekstu `#presenter-label` przez `aria-labelledby`. Nazwa to „Panel prowadzącej” / „Presenter controls”, bez znaku plusa, minusa i zegara. Stan zwinięcia/rozwinięcia wynika z natywnego `details` w obu wariantach.
- `#show-clock` znajduje się poza `details` i `summary`, we wspólnym kontenerze układu. Zachowuje `role="timer"`, nazwę „Czas pokazu” / „Presentation time”, `aria-live="off"`, wizualne cyfry i równoważny tekst czasu. Nie otrzymuje `tabindex` ani roli przycisku. Dotknięcie obszaru zegara nie rozwija panelu.
- Zegar pozostaje wizualnie po prawej stronie wiersza. Rzeczywisty obszar kontrolki rozwijania kończy się przed zegarem; samo dodanie odstępu wewnątrz kontrolki nie zastępuje rozdzielenia obszarów.
- Zakres: oba warianty, PL/EN, WEB i MOBILE.
- Weryfikacja lokalna: w ramkach 390 px PL i 320 px EN, w obu wariantach, drzewo dostępności pokazuje przycisk z samą nazwą panelu i właściwym stanem. Timer jest poza przodkiem `summary` / `button` i poza `details`. Ikona jest ukryta, nie ma nakładania obszarów ani poziomego przepełnienia. Wyzwalacz ma około 48 px wysokości. Enter/Spacja rozwijają i zwijają, fokus zostaje na wyzwalaczu; kliknięcie zegara nie otwiera panelu. `npm test` przechodzi.
- Status: zakres wydania 2026-10-30; rzeczywisty odczyt czytnikiem pozostaje do odbioru na urządzeniu.

### 14.17. Fokus po dodaniu prezentu na MOBILE w wariancie z błędami

- Zgłoszenie MOBILE w wariancie z błędami: po dodaniu prezentu fokus dostępności przechodzi na „Twój worek”, zamiast pozostać na akcji dodania.
- Zakres poprawki: wyłącznie wariant z błędami przy szerokości do 760 px, PL/EN. WEB w obu wariantach oraz MOBILE w wariancie poprawionym zachowują dotychczasową obsługę dodawania, bez dodatkowego ustawiania fokusu.
- Tylko w objętym poprawką układzie przed wykonaniem akcji użyta kontrolka otrzymuje fokus z `preventScroll`, o ile już go nie ma. W tym układzie odnośniki wskazują własne identyfikatory zamiast `#bag-title`. Po przejściu do WEB zachowują dotychczasowy cel `#bag-title`; istniejąca obsługa aktywacji nadal zatrzymuje nawigację. Zmiana szerokości aktualizuje cele linków bez przebudowy kontrolek i bez przenoszenia fokusu.
- Wskazanie nagłówka worka przez poprzedni `href` jest możliwym źródłem skoku czytnika, bez potwierdzenia jako jedynej przyczyny na iPhonie. Dodawanie i potwierdzenie pozostawiają tę samą kontrolkę w DOM.
- Błędna ilość zachowuje dotychczasowe przejście do pola liczby sztuk z komunikatem. Otwarcie upomnienia Mikołaja po trzeciej sztuce przenosi fokus do okna, a zamknięcie wraca do użytej akcji dodania. Mini worek, animacja i region potwierdzenia nie przejmują fokusu.
- Rzeczywiste odnośniki „Przejdź do worka”, w tym skip link i mini worek, nadal przenoszą fokus do nagłówka worka po świadomej aktywacji. Celowe role linków i brak roli przy drukarce pozostają częścią demonstracji.
- Weryfikacja lokalna sprzed zawężenia zakresu: ramki 390 px PL i 320 px EN, oba warianty. Dodanie pierwszej i drugiej sztuki oraz czwartej po zamknięciu upomnienia pozostawiało fokus na `#add-headphones`; trzecia sztuka otwierała upomnienie, a zamknięcie wracało na dodawanie. Ilość 0 przy fotelu przenosiła fokus na `#qty-chair`, oznaczała błąd i nie zwiększała worka. Próby obejmowały Enter i kliknięcie, bez rzeczywistego kursora VoiceOver.
- Weryfikacja zawężenia: `npm test` przechodzi. Kontrola czterech kombinacji WEB/MOBILE i wariantu potwierdza dodatkowe ustawienie fokusu wyłącznie dla MOBILE z błędami oraz aktualizację celów linków po zmianie szerokości. Podgląd Chrome: 390 px i 1100 px, oba warianty; dodawanie kliknięciem i Enterem zwiększa worek, a fokus DOM pozostaje na użytej kontrolce. MOBILE z błędami ma link do własnej kontrolki, WEB z błędami zachowuje `#bag-title`, a wersja poprawiona zachowuje natywny przycisk. Rzeczywisty fokus dostępności na iPhonie pozostaje do potwierdzenia.
- Status: zakres wydania 2026-10-30; rzeczywisty odczyt czytnikiem pozostaje do odbioru na urządzeniu.

### 14.18. Gesty suwaka grzeczności z VoiceOver

- Zgłoszenie: VoiceOver na iPhonie w Chrome, wariant poprawiony; gesty w górę i w dół nie zmieniają poziomu grzeczności. Wersje iOS i Chrome pozostają do ustalenia.
- Oczekiwane działanie: po ustawieniu fokusu na suwaku gest jednego palca w górę zwiększa, a w dół zmniejsza wartość. Zakres 0–100%, krok 10. Wartość suwaka, wizualny procent i tekst dostępny pozostają zgodne, bez przenoszenia fokusu.
- Poprawiony wariant zachowuje natywne `input type="range"`. Synchronizacja obsługuje `input` i `change`; powtórne zdarzenie z tą samą wartością nie aktualizuje ponownie stanu. Kod nie wpisuje ponownie tej samej natywnej wartości podczas jej obsługi. To poprawka synchronizacji, a nie potwierdzona diagnoza przyczyny nieskutecznego gestu.
- Celowy błąd w drugim wariancie pozostaje: wizualny procent może się zmieniać, a dostępne `aria-valuenow` i `aria-valuetext` pozostają na 50%. Nie rozszerzamy tego przykładu o zamierzoną niedostępność obsługi.
- Weryfikacja lokalna: ArrowUp zmienia poprawny suwak z 50 na 60, a ArrowDown z powrotem na 50; natywna wartość, widoczny procent i `aria-valuetext` są zgodne. W błędnym wariancie widoczna wartość rośnie do 60%, a dostępny tekst pozostaje 50%. Ramki 390 px PL i 320 px EN, oba warianty; `npm test` przechodzi. Klawiatura nie zastępuje testu gestów VoiceOver.
- Odbiór na iPhonie w Chrome: zapisać wersje iOS i Chrome, pełną zapowiedź suwaka, zmianę po gestach w obu kierunkach oraz równocześnie widoczny procent. Sprawdzić końce skali, utrzymanie fokusu i przełączenie wariantu. Przyczyna zgłoszenia i skuteczność gestów pozostają do ustalenia na rzeczywistym urządzeniu.
- Źródła: [Apple — gesty VoiceOver na iPhonie](https://support.apple.com/guide/iphone/iph3e2e2281/ios), [WAI-ARIA APG — Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/).
- Status: poprawka synchronizacji w wydaniu 2026-10-30. Zgłoszenie gestów VoiceOver w Chrome na iPhonie pozostaje otwarte; przyczyna i skuteczność gestów niepotwierdzone.

### 14.19. Pieczątka sukcesu jako jeden fragment tekstu

- Zgłoszenie MOBILE: odczyt „Przyjęto warunkowo” i numeru elfa wymaga dwóch gestów.
- Pieczątka jest jednym akapitem z jednym węzłem tekstowym: „Przyjęto warunkowo, Elf nr 200” / „Provisionally accepted, Elf no. 200”. Bez `br`, osobnych wierszy HTML, ukrytego tekstu zastępczego, roli obrazu i nazwy przez ARIA.
- Zawijanie wizualne wynika z szerokości i CSS. Spacje nierozdzielające utrzymują razem określenie i numer elfa; nie dzielą tekstu na kolejne elementy. Zmiana języka tłumaczy cały tekst.
- Pieczątka pozostaje zwykłą treścią, bez dodatkowego przystanku Tab i bez osobnego komunikatu live. Fokus po wysłaniu nadal trafia na h1. Trzy oznaczenia nadania pozostają osobną listą.
- Zakres: oba warianty, PL/EN, WEB i MOBILE.
- Weryfikacja lokalna: przy sukcesie w ramkach 390 px PL i 320 px EN w obu wariantach pieczątka ma jeden węzeł tekstowy, nie ma `br` i nie powoduje przepełnienia w poziomie. Drzewo dostępności pokazuje pojedynczy tekst całej pieczątki w każdym języku. Fokus pozostaje na `#confirmation-title`. Próby wysyłki były lokalne, bez udziału w loterii i bez zmiany licznika produkcyjnego.
- Status: zakres wydania 2026-10-30; rzeczywisty odczyt czytnikiem pozostaje do odbioru na urządzeniu.

### 14.20. Dekoracyjna czerwona kreska przy nazwie biura

- Przy tekście „Biuro Obsługi Życzeń · termin realizacji: 24 grudnia” nie ma czerwonej kreski. Jej bliskość do paneli rozwijanych sugerowała wskaźnik rozwinięcia.
- Usunięta dekoracja pochodziła z pseudoelementu `.eyebrow:before`. Nazwa biura i termin realizacji pozostają zwykłym tekstem. Funkcjonalne ikony panelu prowadzącej i instrukcji zachowują dotychczasowe działanie.
- Zakres: WEB i MOBILE, oba warianty, PL/EN.
- Weryfikacja lokalna: podgląd Chrome w szerokościach 390 px i 1100 px potwierdza brak pseudoelementu i czerwonego obramowania przy nazwie biura; tekst oraz przyciski paneli pozostają dostępne.
- Status: zakres wydania 2026-10-30; rzeczywisty odczyt czytnikiem pozostaje do odbioru na urządzeniu.

## 15. Kod i uruchomienie

- Poprawki są zbierane w paczki, przygotowywane i sprawdzane lokalnie, a następnie publikowane jednym uzgodnionym wdrożeniem.
- Tytuły nowych commitów nazywają poprawiane elementy, np. „Kolejność worka i sekcji formularza”. Stosujemy formę rzeczownikową bez poleceń „dodaj”, „popraw”, „zmień”. Ustalony format dotyczy nowych commitów; opublikowana historia pozostaje zachowana.

- `dist/index.html` zawiera kompletną stronę ze stylami, grafikami i skryptami. Lokalnie działa bez instalowania zależności i połączenia z serwerem.
- `i18n.js`, `elf-engine.js`, `counter-client.js` i `bag-feedback.js` odpowiadają właściwym blokom osadzonym w HTML.
- `netlify/` zawiera funkcję i logikę wspólnego licznika; `qa/` — testy logiki.
- `npm test` uruchamia testy lokalne na Node.js 22 lub nowszym.
- GitHub przechowuje kod, a Netlify publikuje `dist` i funkcję `letter-count` z gałęzi `main`, po wykonaniu testów. Dane uwierzytelnienia i katalog `.netlify` są poza repozytorium.
- Sam upload HTML nie uruchamia wspólnego licznika. Wersja publiczna wymaga funkcji serwerowej; podgląd ma odrębny licznik próbny.
- Publiczne adresy PL/EN: `?lang=pl` i `?lang=en`. Profil publiczny i lokalny prezentacyjny różnią się progiem czasu 2/7 minut.

## 16. Źródła

- [WCAG 2.5.3: Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html)
- [WCAG 3.3.2: Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)
- [WCAG 2.2.1: Timing Adjustable](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html)
- [WAI-ARIA APG: Alert and Message Dialogs](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/)
- [WCAG 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [WCAG F59: kontrolka bez programowo określonej roli](https://www.w3.org/WAI/WCAG22/Techniques/failures/F59)
- [WCAG F68: kontrolka bez nazwy dostępnej](https://www.w3.org/WAI/WCAG22/Techniques/failures/F68)
- [WAI-ARIA APG: Dialog (Modal)](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [WAI-ARIA APG: Disclosure](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)
- [WAI-ARIA: aria-haspopup](https://www.w3.org/TR/wai-aria-1.2/#aria-haspopup)
- [WAI-ARIA: aria-expanded](https://www.w3.org/TR/wai-aria-1.2/#aria-expanded)
- [WCAG 1.4.3: Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [WCAG 1.4.4: Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)
- [WCAG 1.4.10: Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)
- [WCAG 1.4.12: Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)
- [WCAG 2.4.11: Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)
- [WAI-ARIA APG: Alert](https://www.w3.org/WAI/ARIA/apg/patterns/alert/)
- [WCAG 4.1.3: Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)
- [WCAG 1.4.11: Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
- [WAI-ARIA APG: Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
- [WAI-ARIA APG: Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/)
- [WAI-ARIA APG: Landmark Regions](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/)
- [Netlify Blobs](https://docs.netlify.com/build/data-and-storage/netlify-blobs/)
- [Coca-Cola — Haddon Sundblom and the Coca-Cola Santas](https://www.coca-colacompany.com/about-us/history/haddon-sundblom-and-the-coca-cola-santas)
- [Smithsonian — How Santa brought Coca-Cola in from the cold](https://americanhistory.si.edu/explore/stories/how-santa-brought-coca-cola-cold)

### Dostosowanie czasu — 2.2.1

- Ostrzeżenie w oknie jest dostępne od początku odliczania, 30-sekundowego (punkt 14.11). Dodatkowy komunikat przy 20 sekundach przypomina o możliwości reakcji.
- Zamknięcie okna lub „Przedłuż sesję” przed upływem czasu kończy atak. Pauza w panelu prowadzącej nie ma ograniczenia czasu i zatrzymuje także czas do automatycznego ataku. Osobny przycisk zatrzymania odliczania w oknie jest usunięty (punkt 14.13).
- Sam komunikat „20 sekund” nie jest pełną realizacją 2.2.1. W ścieżce zgodności przez przedłużanie kryterium wymaga co najmniej 20 sekund na prostą reakcję oraz co najmniej dziesięciu przedłużeń. Wyłączenie lub odpowiednie dostosowanie limitu to alternatywne ścieżki.
- Źródło: https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html .
