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
- Dekoracyjne rysunki i pieczątka są ukryte przed czytnikiem. Ich teksty pozostają czytelne wizualnie.

## 2. Układ WEB i MOBILE

WEB oznacza szerokości powyżej 760 px CSS, MOBILE — do 760 px CSS.

| Obszar | WEB | MOBILE |
| --- | --- | --- |
| Panel prowadzącej | Na samej górze kartki, przed nagłówkiem Biura Obsługi Życzeń. | Ta sama pozycja. |
| Wybór wariantu WCAG | Dwa równe pola z pełnym tłem wybranego wariantu. | Ta sama zasada; tekst może się zawijać bez wyjścia poza tło i obszar kliknięcia. |
| Kategorie | Zakładki obok siebie. | Rozwijany przycisk wyboru kategorii. |
| Tło katalogu | Jedna biała powierzchnia obejmuje zakładki, opis kategorii, karty prezentów i dopisek „Ceny umowne. Potrzeby autentyczne. Realizacja zależy od reniferów”. | Ta sama powierzchnia obejmuje rozwijany wybór kategorii, opis, prezenty i dopisek o cenach. |
| Prezenty | Dwie karty w rzędzie; od 1600 px — trzy. | Jedna karta w rzędzie. |
| Pełny worek | Boczna kolumna. | W głównym przepływie przed dostawą oraz podpisem i wysyłką. |
| Potwierdzenie dodania | Przy bocznym worku. | W mini worku, z krótką animacją. |
| Mini worek | Niewidoczny. | U góry widoku podczas przeglądania katalogu. |
| Komunikaty pod kartami prezentów | Brak dodatkowych bloków potwierdzających dodanie. | Ta sama zasada. |
| Dostawa | Trzy opcje obok siebie. | Jedna opcja w rzędzie. |
| Opis wysyłki | Pod przyciskiem, jako jeden akapit bez wymuszonego łamania linii. | Pod przyciskiem; zawija się naturalnie. |

Mobilna kolejność dokumentu: O mnie → katalog → zachowanie → pełny worek z loterią → dostawa → podpis i wysyłka → czat. Pozycja pełnego worka zmienia się w DOM, z zachowaniem danych. Kolejność wizualna, odczytu i fokusu jest zgodna.

### 2.1. Typografia i kontrast

- Podpowiedzi, instrukcje, opisy kategorii i prezentów oraz komunikaty błędów mają co najmniej 1 rem, domyślnie 16 px, i interlinię co najmniej 1,5.
- Dopiski z gwiazdką i teksty drobnego druku mogą mieć 0,875 rem, domyślnie 14 px. Informacje wymagane do wypełnienia formularza pozostają wyraźnie czytelne.
- Opis pod przyciskiem wysyłki ma 0,875 rem i pełny kontrast tekstu.
- „Loteria z dreszczykiem” ma prosty krój, rozmiar 1 rem i grubość 700. Liczby sztuk przy prezentach mają prosty krój 1 rem i grubość 600, suma 1,5 rem i grubość 700, a cyfra w nagłówku worka co najmniej 1,125 rem i grubość 700. Te same zasady obowiązują na WEB i MOBILE.
- Pieczątka „Przyjęto warunkowo · Elf nr 404” i oznaczenia „NADANO”, „TRYB: ŚWIĄTECZNY” oraz „ODBIORCA: ŚWIĘTY MIKOŁAJ” mają wyraźny krój Georgia, grubość 700 i rozmiar 1,125 rem (domyślnie 18 px). Oznaczenia mają jasne, jednolite tło, obramowanie 2 px i wysokość co najmniej 48 px. Tekst zawija się na telefonie bez obcinania.
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

### 3.1. Polski i English

- Natywny wybór języka znajduje się w nagłówku i ma powiązaną etykietę. Dokument ma odpowiednio `lang="pl"` albo `lang="en"`.
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

Trzy kategorie: „Dla mnie”, „Dla zespołu”, „Dla świętego spokoju”. Ich opisy są widoczne nad kartami i powiązane programowo z panelem w poprawnym wariancie. Niewybrany panel jest ukryty z odczytu i kolejności fokusu.

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

Panel prowadzącej jest na samej górze kartki. Zawiera czas, start nowej próby, pauzę/wznowienie, ręczny test Grincha, reset oraz skróty do przykładów. Instrukcja i mapa celowych błędów występują wyłącznie w dokumentacji.

Zegar startuje po otwarciu strony. Pauza zachowuje upływ czasu i zatrzymuje również trwającą sesję Grincha. Pełny reset ustawia 0:00 i wymaga ręcznego uruchomienia następnej próby. Zwinięcie panelu nie zatrzymuje zegara.

Zegary mają `role="timer"`, stałą nazwę i `aria-live="off"`. Wizualne MM:SS jest uzupełnione równoważnym tekstem, np. „1 minuta, 2 sekundy”. Kolejne sekundy nie są ogłaszane automatycznie. Generyczny kontener bez odpowiedniej roli nie otrzymuje nazwy przez `aria-label`.

### 8.1. Upomnienie Mikołaja

- Tytuł `h2`: „Święty widzi, na co masz chrapkę!”. Opis: „Zostaw trochę dla innych. Renifery mają ograniczoną ładowność”.
- Otwarcie po osiągnięciu co najmniej 3 sztuk w worku, również po jednorazowym dodaniu 3 sztuk zespołowych. Jedno upomnienie do pełnego resetu.
- W obu wariantach poprawny `dialog` z `aria-modal="true"`, nazwą z tytułu i powiązanym opisem. Opis dialogu obejmuje także aktualną liczbę prezentów.
- Licznik w oknie ma jasne tło i ciemnozieloną ramkę. Etykieta ma prosty krój i grubość 600; liczba sztuk jest pogrubiona (700), ma co najmniej 1,5 rem (domyślnie 24 px) i pozostaje wyraźna w widoku mobilnym. Licznik zawija się bez obcinania; treść jest dostępna po polsku i angielsku.
- Fokus na „Wybieram dalej”. Ten przycisk, „X” i Escape zamykają okno, zachowują worek i przywracają poprzedni fokus.

### 8.2. Grinch

- Pasek tytułowy: „Nieoczekiwany gość” / „Unexpected guest”, bez technicznego prefiksu. Tytuł `h2`: „Grinch przejął sesję”.
- Opis: „Za 60 sekund opróżnię Twój worek z prezentami. Tyle planowania, a wystarczy jeden Grinch. Pozdrawiam bez świątecznej serdeczności.”
- Automatyczne otwarcie raz przy progu odpowiedniego profilu. Ręczny test korzysta z tego samego okna i zużywa automatyczny atak do resetu.
- Przy 20 sekundach pozostałego odliczania pojawia się widoczne ostrzeżenie: „Pozostało 20 sekund. Wybierz »Przedłuż sesję«, aby zatrzymać Grincha”. Osobny, pusty od początku `role="alert"` z `aria-atomic="true"` ogłasza ten sam komunikat. Ostrzeżenie jest jednorazowe w obu wariantach WCAG i obu językach; pauza i wznowienie go nie powtarzają. Kolejne ręczne otwarcie rozpoczyna nową próbę.
- Przy opóźnionym wywołaniu progu komunikat mówi „Pozostało mniej niż 20 sekund”, zamiast podawać nieaktualny czas. Ostrzeżenie jest usuwane przy zakończeniu odliczania, zamknięciu i resecie.
- Jeśli podczas progu otwarte jest upomnienie Mikołaja, Grinch czeka na jego zamknięcie. Jego osobne 60 sekund rozpoczyna się dopiero po otwarciu.
- Poprawny kontener ma `role="alertdialog"`, `aria-modal="true"`, `aria-labelledby="grinch-title"` i `aria-describedby="grinch-description"`. Tytuł i opis mają unikalne identyfikatory oraz aktualną treść w języku strony.
- Semantyka i widoczność są ustawione przed przekazaniem fokusu na „Przedłuż sesję”. Otwarcie udostępnia czytnikowi rolę, nazwę i ostrzeżenie; osobny region `alert` nie powiela całego okna.
- Tło jest nieaktywne. Tab i Shift+Tab pozostają w oknie, Escape i „X” zamykają je, a fokus wraca do poprzedniego miejsca.
- „Wróć do listy życzeń” / „Back to the wish list” zamyka okno; komunikat odpowiada stanowi przed psikusem lub po nim. Okno posługuje się językiem tworzenia listu życzeń, bez określeń zakupów i zamówienia.
- Przedłużenie i zatrzymanie odliczania są dostępne. Zamknięcie okna przed końcem 60 sekund kończy atak bez opróżniania worka.
- Po upływie odliczania Grinch opróżnia worek, a elfy zachowują kopię pozycji i ich ilości w pamięci karty. Imię, wiadomość, pozostałe pola i licznik wysłanych listów pozostają zachowane. Pusty worek otrzymuje osobny, zgodny ze stanem komunikat.
- Główny przycisk w oknie po psikusie ma tekst „Odzyskaj prezenty”. Drugi przycisk o tej samej nazwie jest przy pełnym worku, pod jego zawartością, razem z krótkim komunikatem o zachowanej kopii. Pozostaje dostępny po zamknięciu okna.
- Odzyskanie przywraca wszystkie zabrane sztuki i zachowuje prezenty dodane później. Nie powiela sztuk przy kolejnym kliknięciu. Komunikat i przycisk przy worku znikają po odzyskaniu; fokus z tego przycisku przechodzi do nagłówka worka. Pełny reset usuwa także kopię.
- W poprawnym wariancie opis dialogu po zakończeniu odliczania wskazuje aktualny wynik psikusa. Jedno ogłoszenie `polite` informuje o opróżnieniu i możliwości odzyskania.
- Po upływie czasu ostrzeżenie o przyszłym opróżnieniu jest ukryte. Okno pokazuje aktualny wynik psikusa; kolejne otwarcie przywraca ostrzeżenie.
- Po psikusie tytuł `h2` zmienia się na „Grinch wyjął Twoje prezenty z worka” / „The Grinch took your gifts out of the sack”. Jeśli worek był pusty, brzmi „Grinch nie miał czego zabrać” / „There was nothing for the Grinch to take”. Nazwa poprawnego dialogu nadal pochodzi z tego nagłówka. Ponowne ręczne otwarcie przywraca początkowy tytuł „Grinch przejął sesję”.
- Automatyczny Grinch nie otwiera się na ekranie sukcesu wysyłki.
- W wariancie z błędami brak roli i nazwy Grincha pozostaje celowym przykładem. Przyciski i klawiatura działają w obu wariantach.

## 9. Czat z elfem

- Czat jest rozwijanym panelem w przepływie strony. Natywny przycisk ma aktualne `aria-expanded` i `aria-controls` w obu wariantach; brak nazwy jest celowym błędem tylko w wariancie z błędami.
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
- Przegrana korzysta z kilku żartobliwych odpowiedzi o reniferze, dodatkowym spotkaniu i cierpliwości. Wynik nie otwiera kolejnego modalu.

### 10.2. Mechanizm loterii

- Wygrywa co 25. udział w loterii: 25, 50, 75, 100 i kolejne wielokrotności 25.
- Numeracja dotyczy udziałów w loterii, a nie wszystkich listów ani unikalnych osób. List bez udziału nie przesuwa numeru wygranej.
- Jeden list otrzymuje jeden numer udziału. Ponowienie nie nalicza go ponownie. Późniejsze dopisanie udziału do tego samego listu nie zwiększa liczby listów.
- Klient, licznik lokalny i funkcja serwerowa używają tego samego interwału 25. Podgląd roboczy ma osobną numerację i nie dopisuje zgłoszeń do produkcji.

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
- „Biegun Północny” i „Wydział spraw pilnych” znajdują się nad ilustracją, bez nakładania na drogowskaz i rysunek.
- Pieczątka „Przyjęto warunkowo · Elf nr 404” znajduje się wyłącznie na sukcesie i ma własne jasne tło. Oznaczenia nadania są wyraźne również na telefonie.
- Wynik opcjonalnej loterii jest częścią sukcesu. Licznik nie nalicza listu ponownie po odświeżeniu i ponowieniu.

## 12. Mapa celowych błędów

| Zakres | Element / kryterium | Wersja z błędami | Wersja poprawiona |
| --- | --- | --- | --- |
| WEB + MOBILE | Twoje imię · 2.5.3 | Nazwa „Identyfikator petenta” nadpisuje istniejący `label`. | Nazwa pochodzi z widocznej etykiety. |
| WEB + MOBILE | Wyślij list · 2.5.3 | Nazwa „Zatwierdź formularz”. | Nazwa „Wyślij list”; dopisek pozostaje opisem. |
| WEB + MOBILE | Udział w loterii · 2.5.3 | Checkbox nazwany „Aktywuj szczęście”. | Nazwa z „Biorę udział w loterii”. |
| WEB + MOBILE | Dodawanie · 4.1.2 | Akcje jako linki; przy drukarce fokusowalny `span` bez interaktywnej roli. | Wszystkie akcje to natywne przyciski z nazwą „Dodaj do worka: [prezent]”. |
| WEB + MOBILE | Usunięcie / czat · 4.1.2 | Ikonowe przyciski bez nazwy. | „Usuń z worka: [prezent]” / „Porozmawiaj z elfem”. |
| WEB + MOBILE | Dostawa · 4.1.2 | Własne elementy bez roli radio i dostępnego zaznaczenia. | Natywne radio, `fieldset`/`legend`, etykiety i aktualne `checked`. |
| WEB + MOBILE | Suwak · 4.1.2 | Wygląd się zmienia, dostępna wartość i tekst pozostają 50%. | Natywny suwak z bieżącą wartością, opisem i kontekstem skali. |
| WEB + MOBILE | Oświadczenie o zasługiwaniu · rezerwa 4.1.2 | Własny checkbox stale przekazuje `aria-checked="false"`. | Natywny checkbox z aktualnym zaznaczeniem. |
| WEB + MOBILE | Grinch · 4.1.2 | Kontener bez roli i nazwy okna. | Nazwany `alertdialog`, modalność, nagłówek i opis. |
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
| 8:00–9:30 | 1:30 | Ikonowy czat i jedna odpowiedź elfa. | Brak nazwy przycisku; poprawnie rozwijany panel nie jest dialogiem. |
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
- Loteria: wygrane przy udziałach 25, 50, 75 i kolejnych wielokrotnościach 25; pominięcie listów bez udziału; deduplikacja i późniejsze dopisanie udziału; brak ujawnienia interwału w interfejsie.
- Statystyka: odświeżenie, ponowienie po błędzie, opóźniony odczyt i równoczesne wysyłki bez dublowania numerów.
- Typografia: pełne teksty i widoczny fokus po powiększeniu do 200%, reflow przy 320 px CSS oraz po ustawieniu interlinii 1,5, odstępu po akapicie 2 em, między literami 0,12 em i słowami 0,16 em.
- Podgląd roboczy w oknie przeglądarki: możliwość przejęcia kontroli oraz przełączenia szerokości między komputerem i telefonem.

## 15. Kod i uruchomienie

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
- [WCAG 4.1.3: Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)
- [WCAG 1.4.11: Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
- [WAI-ARIA APG: Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
- [WAI-ARIA APG: Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/)
- [WAI-ARIA APG: Landmark Regions](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/)
- [Netlify Blobs](https://docs.netlify.com/build/data-and-storage/netlify-blobs/)
- [Coca-Cola — Haddon Sundblom and the Coca-Cola Santas](https://www.coca-colacompany.com/about-us/history/haddon-sundblom-and-the-coca-cola-santas)
- [Smithsonian — How Santa brought Coca-Cola in from the cold](https://americanhistory.si.edu/explore/stories/how-santa-brought-coca-cola-cold)

### Dostosowanie czasu — 2.2.1

- Ostrzeżenie w oknie jest dostępne od początku 60-sekundowego odliczania. Dodatkowy komunikat przy 20 sekundach przypomina o możliwości reakcji.
- Zatrzymanie odliczania nie ma ograniczenia czasu; zamknięcie okna lub „Przedłuż sesję” przed upływem czasu kończy atak. Pauza w panelu prowadzącej zatrzymuje także czas do automatycznego ataku.
- Sam komunikat „20 sekund” nie jest pełną realizacją 2.2.1. W ścieżce zgodności przez przedłużanie kryterium wymaga co najmniej 20 sekund na prostą reakcję oraz co najmniej dziesięciu przedłużeń. Wyłączenie lub odpowiednie dostosowanie limitu to alternatywne ścieżki.
- Źródło: https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html .
