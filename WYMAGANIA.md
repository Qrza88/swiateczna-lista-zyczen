# Świąteczna lista życzeń — wymagania WEB i MOBILE

**Event:** Kalendarz Programisty · **Odbiorcy:** dorośli, szczególnie osoby pracujące w IT  
**Tytuł strony i formularza:** Świąteczna lista życzeń  
**Aktualizacja:** 25 października 2026  
**Status:** druga wersja lokalna; kod i wymagania zebrane według aktualnych ustaleń. Publikacja GitHub/Netlify i próba z docelowym czytnikiem pozostają przed nami.

Dokument opisuje jeden responsywny projekt. „WEB” oznacza poniżej widok desktopowy, a „MOBILE” widok do 760 px. Wymagania wspólne obowiązują oba widoki i oba warianty demonstracji, o ile mapa celowych błędów nie wskazuje konkretnego wyjątku. Ten układ zastępuje wcześniejszą listę kolejnych dopisków do wersji.

## 1. Zakres i różnice WEB / MOBILE

| Obszar | WEB — powyżej 760 px | MOBILE — do 760 px |
| --- | --- | --- |
| Katalog | Zakładki obok siebie. | Przycisk rozwijający wybór kategorii. |
| Prezenty | 2 karty w rzędzie; przy szerokości co najmniej 1600 px — 3. | Dokładnie 1 karta w rzędzie. |
| Worek | Boczna kolumna przy formularzu. | W głównym przepływie, przed dostawą i wysyłką. |
| Dostawa | 3 opcje obok siebie. | 1 opcja w rzędzie. |
| Kolejność głównej kolumny | O mnie → katalog → zachowanie → dostawa → podpis i wysyłka → czat. | O mnie → katalog → zachowanie → worek z loterią → dostawa → podpis i wysyłka → czat. |
| Przykład dotyczący kategorii | Brak ról zakładek i `aria-selected` w błędnym wariancie. | Brak `aria-expanded` na przycisku rozwijania w błędnym wariancie. |
| Obsługa | Klawiatura, mysz, czytnik. | Dotyk, klawiatura i czytnik; wygodne cele dotykowe. |
| Pozostałe przykłady WCAG | Wspólna mapa w sekcji 5. | Ta sama mapa, z mobilnym zamiennikiem zakładek. |

## 2. Wymagania wspólne

### 2.1. Cel, ton i design

Interaktywna demonstracja WCAG 2.5.3 „Etykieta w nazwie” i 4.1.2 „Nazwa, rola, wartość” na około 15-minutowe nagranie. Wysyłamy żartobliwy list do Mikołaja, porównując te same kontrolki przed poprawą i po poprawie. Projekt ma świąteczny, satyryczny ton dla dorosłych.

- Motyw: papierowy formularz Biura Obsługi Życzeń, świąteczna biurokracja i suchy humor z pracy w IT. Inspiracja formularzem do kolorowania i komiksowym memem dotyczy kreski oraz kompozycji.
- Jasna kartka na ciemnozielonym tle, grafitowy tekst, bordowe akcenty; proste rysunki prezentów, Mikołaja i elfa. Odręczne dopiski są krótkie, a etykiety pozostają czytelne.
- Nad tytułem: „Biuro Obsługi Życzeń · termin realizacji: 24 grudnia”. Nie używamy niejasnego „PP/24 dla osób z dostępem do produkcji”.
- Podtytuł: „System obsługi życzeń. Wdrożony w piątek przed świętami”.
- „Dodaj do worka”: ciemnozielone wypełnienie, jasny napis i plus, taki sam wygląd w obu wariantach. Tło bazowe `#163d32`, jasny tekst `#fffdf6`.
- Wszystkie checkboxy: białe tło, zielony znak zaznaczenia. Poprawne kontrolki zachowują natywną semantykę.
- Dymek „Na wczoraj? Oczywiście.” mieści się w ilustracji i skaluje z nią. Teksty są HTML; dekoracje ukryte przed czytnikiem.
- Pieczątka „Przyjęto warunkowo · Elf nr 404” występuje na ekranie sukcesu, na własnym jasnym tle, z czytelnym tekstem. Nie nachodzi na ilustrację.
- Tekst ma kontrast co najmniej 4,5:1; istotne nietekstowe granice, stany i ikony kontrolek co najmniej 3:1. Wymaganie obowiązuje również wariant z błędami. Zapewniamy widoczny fokus, czytelne placeholdery i krawędzie suwaka. Dekoracyjne linie nie zastępują informacji potrzebnych do obsługi.

### 2.2. Warianty i zachowanie danych

- Na początku kartki znajduje się Panel prowadzącej, przed częścią tytułową. Czas pokazu startuje automatycznie po otwarciu strony; Grinch pojawia się przy 7:00 w wersji do nagrania. Pauza zachowuje czas, a pełny reset ustawia 0:00 i czeka na ręczny start nowej próby.
- U góry widoczny wybór „Wersja z błędami” / „Wersja poprawiona”, domyślnie wersja z błędami. Natywne radio w nazwanej grupie; ten przełącznik działa poprawnie w obu wariantach.
- Informacja: „To interaktywna demonstracja WCAG z celowymi błędami dostępności. Porównaj wersję z błędami i wersję poprawioną”.
- Przełączenie zachowuje imię, wiadomość, worek, ilości, kategorię, dostawę, poziom grzeczności, zaznaczenia wszystkich checkboxów, rozmowę i czas pokazu. Fokus pozostaje przy przełączniku.
- Wszystkie akcje są dostępne z klawiatury w obu wariantach. Celowo błędne role nie mają blokować uruchomienia akcji. Nie dodajemy osobnego błędu braku obsługi klawiatury.
- Pełny reset czyści formularz, rozmowę i zegary, przywraca wyzwalacze okien, tworzy nowy identyfikator listu. Nie zeruje licznika wysłanych listów i nie zmienia wybranego wariantu.
- Samo odświeżenie czyści formularz, lecz zachowuje identyfikator listu w tej samej karcie oraz lokalny licznik.

### 2.3. Nagłówki, landmarki i fokus

Jeden `h1` na widocznym ekranie: „Świąteczna lista życzeń” albo „Twój list frunie na Biegun Północny!”. `h2` dla głównych sekcji: O mnie, Na co mam chrapkę, Moje zachowanie, Twój worek, Dostawa z Bieguna Północnego, Podpis i wysyłka, Dyżurny elf techniczny. `h3` dla kart prezentów i faktycznych podsekcji, np. loterii oraz rozmowy. Rozmiar liter nie określa poziomu nagłówka.

| Obszar | Semantyka |
| --- | --- |
| Nagłówek Poczty Północnej | Jeden natywny `header` o roli banner. |
| Główna treść | Jeden `main`, wspólny dla formularza i ekranu sukcesu. |
| Formularz | Natywny `form` nazwany przez główny nagłówek „Świąteczna lista życzeń”. |
| Sekcje formularza, katalog, czat i worek | Nazwane obszary region z nagłówkami. Worek jest częścią formularza, więc stanowi jego nazwany region. |
| Skróty w panelu prowadzącej | Natywny `nav` z nazwą „Przejdź do przykładu”, dostępny po rozwinięciu panelu. |
| Stopka strony | Jeden `footer` poza `main`, o roli contentinfo; zawiera również informację o wersji i prawach autorskich. |


Etykiety są powiązane z polami przez `label`; pytania dla grup przez `fieldset` i `legend`. Suwak ma własną widoczną etykietę. Nagłówek sekcji nie zastępuje etykiety pola. Dostępny jest link pomijający do treści.

Przy otwartym modalu tło jest nieaktywne (`inert`), fokus trafia do okna, Tab pozostaje w nim, Escape i nazwany „X” zamykają okno, a fokus wraca do wyzwalacza. Na sukcesie formularz jest ukryty przed klawiaturą i czytnikiem, zmienia się tytuł dokumentu i fokus trafia do `h1` sukcesu.


Tytuł karty dokumentu jest poprawny w WEB i MOBILE oraz w obu wariantach demonstracji (WCAG 2.4.2):

| Widok | Tytuł dokumentu (`title`) |
| --- | --- |
| Formularz główny | Świąteczna lista życzeń |
| Sukces wysyłki | List wysłany &#124; Świąteczna lista życzeń |

Po wysłaniu zmieniamy `document.title`, a po „Wróć do listu” i resecie przywracamy tytuł formularza. Widoczny nagłówek `h1` oraz tytuł karty pełnią odrębne funkcje. Tytuły działają poprawnie także w wariancie z celowymi błędami.

### 2.4. Katalog prezentów i worek

Trzy kategorie: „Dla mnie”, „Dla zespołu”, „Dla świętego spokoju”. Ich opisy są widoczne nad kartami i powiązane programowo z panelem w poprawnym wariancie. Niewybrany panel jest ukryty z odczytu i kolejności fokusu.

#### Dla mnie

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

Zatwierdzony pomysł drukarki: drukowanie dodatkowej pary rąk do pracy.

#### Dla zespołu

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
- pole pozwala wpisać liczbę bezpośrednio; przyciski zwiększania i zmniejszania są opcjonalnym ułatwieniem;
- etykieta oraz nazwa dostępna jednoznacznie wskazują liczbę sztuk i właściwy prezent;
- kontrolka jest natywnym polem liczbowym, obsługiwanym klawiaturą oraz NVDA; nie wprowadzamy w niej dodatkowego celowego błędu;
- aktywacja „Dodaj do worka” dodaje wybraną liczbę sztuk danego prezentu;
- ilości pozostają zachowane przy zmianie zakładki oraz wariantu dostępności; pełny reset przywraca 1.

#### Dla świętego spokoju

To prezenty dla dzieci przebywających w domu podczas pracy rodzica zdalnie. Nad produktami pokazujemy opis: „Prezenty dla dzieci, których rodzice pracują zdalnie. Na dni wolne od szkoły i te, kiedy katar zatrzymuje dzieci w domu”. Nazwa zakładki i dopiski są pisane z perspektywy dorosłego odbiorcy. W poprawionym wariancie panel zakładki ma ten opis powiązany programowo.

| Prezent | Dopisek |
| --- | --- |
| Zestaw LEGO | Spotkanie trwa. Budowa też. |
| Kolorowanki | Do końca spotkania proszę nie wychodzić za kontur. |
| Farby | Dzieci malują. Ty wyłączasz kamerę. |
| Plastelina | Chwila ciszy. Pamiątka w dywanie na lata. |


Każda karta ma nazwę, rysunek, dopisek i akcję „Dodaj do worka”. Pojedyncze dodanie oznacza jedną sztukę, a dla zespołu wskazaną ilość całkowitą 1–99, początkowo 1. Ponowne dodanie zwiększa ilość tej samej pozycji.

Worek pokazuje nazwy, ilości i sumę sztuk. Pusty worek: „Tu jest jeszcze miejsce. Na życzenia. I na dodatkową parę rąk”. Nie ma w nim powtórzonego opisu „Święty widzi, na co masz chrapkę”; zachowujemy go wyłącznie w ostrzegającym dialogu.

Dodanie ogłasza nazwę i ilość przez `role="status"`, zachowuje fokus na akcji; wyjątkiem jest jednorazowe otwarcie upomnienia po 3 sztukach. Usuwamy całą pozycję ikonowym przyciskiem. Fokus przechodzi do kolejnej odpowiedniej akcji, a po usunięciu ostatniej pozycji do nagłówka worka. Ogłaszamy zmianę.

### 2.5. Formularz, kontekst i walidacja

| Pole / wybór | Wartość początkowa i wymaganie |
| --- | --- |
| Twoje imię | Puste; wymagane, `autocomplete="given-name"`. |
| Wiadomość do Mikołaja | Pusta; opcjonalna. |
| Worek | Pusty; przed wysłaniem co najmniej jedna sztuka. |
| Ilości zespołowe | 1; tylko liczby całkowite 1–99. |
| Poziom grzeczności w tym roku | 50%; zakres 0–100%, krok 10. |
| Potwierdzam, że zasługuję na prezent | Niezaznaczone; opcjonalne. |
| Dostawa | Reniferem; jeden wybór spośród Reniferem / Elfomatem / Teleportem. |
| Akceptuję zasady realizacji życzeń | Niezaznaczone; wymagane. |
| Biorę udział w loterii | Niezaznaczone; opcjonalne. |

Suwak ma etykietę „Poziom grzeczności w tym roku”, opis „Ustaw samoocenę od 0 do 100%, co 10 punktów procentowych” i powiązane krańce „0% · Zdecydowanie do poprawy” oraz „100% · Wzorowe zachowanie”. `aria-labelledby` wskazuje etykietę, `aria-describedby` instrukcję i krańce. Aktualne `aria-valuetext` w poprawnym wariancie przekazuje procent, z opisem przy 0% i 100%. Dopisek: „Ocena własna. Mikołaj może mieć inne dane”.

Przed wysłaniem widoczne zasady: „Elfy nie wysyłają ankiet satysfakcji z dostawy ani jakości prezentów i nie ponoszą odpowiedzialności za pomyłki. Każda pomyłka jest dodatkową niespodzianką”. Akceptacja jest poprawnym natywnym checkboxem `required` w obu wariantach.

Przycisk „Wyślij list” ma opis przez `aria-describedby`: „Termin odpowiedzi: przed świętami. Nie precyzujemy, którymi”. Opis nie zastępuje nazwy.

Walidacja działa poprawnie w obu wariantach. Przycisk wysłania pozostaje aktywny. Po uruchomieniu pokazujemy wyłącznie błędy przy polach, bez zbiorczej sekcji „List wymaga drobnych poprawek”. Fokus trafia bezpośrednio do pierwszego miejsca wymagającego poprawy.

| Problem | Komunikat i zachowanie |
| --- | --- |
| Brak imienia | „Twoje imię: wpisz imię, aby wysłać list”. Fokus na polu, natywne `required`, `aria-invalid="true"`, `aria-describedby="author-error author-note"`. |
| Pusty worek | „Dodaj przynajmniej jeden prezent do worka”. Opis powiązany z katalogiem; fokus na nagłówku katalogu, jeśli to pierwszy błąd. |
| Ilość poza zakresem | „Wpisz liczbę sztuk od 1 do 99”. Fokus na polu ilości; `aria-invalid` i powiązany komunikat. |
| Brak akceptacji zasad | „Zaakceptuj zasady realizacji życzeń, aby wysłać list”. `required`, `aria-invalid`, opis błędu przed opisem zasad; fokus na checkboxie, jeśli to pierwszy błąd. |

Po korekcie usuwamy błąd i stan niepoprawności. Widoczne oznaczenie wymagania pozostaje. Opcjonalne checkboxy nie blokują wysyłki. W błędnym wariancie celowe nadpisanie nazwy imienia pozostaje przykładem 2.5.3; opis błędu dodatkowo wskazuje etykietę pola.

### 2.6. Czat z dyżurnym elfem technicznym

Nagłówek „Dyżurny elf techniczny”, dopisek „Online. Emocjonalnie różnie”. Ikonowy natywny przycisk rozwija panel w przepływie strony, z aktualnym `aria-expanded` i `aria-controls` w obu wariantach. Nie jest to dialog: brak `role="dialog"`, `aria-modal` i `aria-haspopup` jest tutaj poprawny. Jedynym celowym błędem czatu jest brak nazwy przycisku w wariancie błędnym.

Fokus po rozwinięciu pozostaje na wyzwalaczu; przy zwinięciu z wnętrza wraca na wyzwalacz. Ukryta treść jest poza odczytem i tabulatorem. Historia to nazwany `role="log"`, nowe wiadomości ogłaszane uprzejmie. Wysłanie pozostawia fokus w polu wiadomości; puste wiadomości nie są dodawane.

Powitanie: „Cześć, tu elf nr 404. Pomogę Ci z prezentami, workiem, dostawą i wysłaniem listu. Wybierz temat albo napisz pytanie”. Dostępne przykładowe pytania o drukarkę 3D, zawartość worka, termin dostawy i wysyłkę.

Odpowiedzi są lokalne, przygotowane z góry i dopasowane do pytania oraz bieżącego formularza. Pytanie o podgrzewacz podczas daily dotyczy herbaty, nie dnia bez spotkań. Elf podaje rzeczywiste pozycje i ilości z worka oraz brakujące warunki wysłania. Rozróżnia produkty, zasady, dostawę, Mikołaja i Grincha. Uwzględnia polskie znaki, prostą negację i krótkie doprecyzowania. Gdy nie rozpoznaje pytania, prosi o doprecyzowanie. Nie dodaje prezentów, nie wysyła listu i nie potwierdza nieistniejącego zgłoszenia.

### 2.7. Dwa okna i zegar pokazu

**Upomnienie Mikołaja:** tytuł „Święty widzi, na co masz chrapkę!”, treść „Zostaw trochę dla innych. Renifery mają ograniczoną ładowność”. Otwiera się po osiągnięciu co najmniej 3 sztuk, także przy jednorazowym dodaniu 3 sztuk zespołowych. Tylko raz do resetu; usunięcie i ponowne dodanie ani zmiana wariantu nie przywracają progu. W obu wariantach poprawny, nazwany `dialog` z `aria-modal`, nagłówkiem i opisem. Fokus na „Wybieram dalej”; ten przycisk, „X” z nazwą „Zamknij” i Escape zamykają okno, zachowują worek i przywracają fokus do dodawania.

| Profil czasu | Zastosowanie | Automatyczny atak |
| --- | --- | --- |
| `presentation` — plik do nagrania | Nagranie 15-minutowej prezentacji. | 7:00 od automatycznego startu. |
| `public` — wybrany w tym repozytorium | Samodzielna zabawa odwiedzających. | 2:00 od automatycznego startu. |

W `dist/index.html` zmieniamy jedną stałą `DEMO_PROFILE` z `'presentation'` na `'public'`. Próg, opis w panelu i komunikat ręcznego startu korzystają z tego ustawienia. Nie publikujemy jeszcze wariantu publicznego. Reset i pauza działają tak samo w obu profilach.

**Grinch:** automatycznie raz przy 7:00 (420 s) w wersji do nagrania zegara uruchamianego automatycznie po otwarciu strony. Pauza zatrzymuje odliczanie, więc 7:00 oznacza siedem minut aktywnego czasu zegara. Straszy końcem sesji zakupowej i nadzieją, że nie zdążysz wysłać listu. Ma retro pasek tytułu z jednym działającym „X” — bez atrap minimalizacji i maksymalizacji. Błędny wariant pomija rolę i nazwę okna; poprawiony jest nazwanym `alertdialog` z modalnością i opisem. Przyciski wewnętrzne są prawidłowo nazwane w obu wariantach.

Grinch uruchamia osobny 60-sekundowy zegar sesji dopiero po otwarciu. Przedłużenie zamyka atak do resetu. Zakończenie sesji nie usuwa danych; po upływie czasu można ją wznowić. Panel prowadzącej pozwala zatrzymać czas. Nie wprowadzamy dodatkowego celowego problemu ograniczenia czasu.

Jednocześnie jedno okno: jeżeli 7:00 przypada podczas upomnienia Mikołaja, Grinch czeka na zamknięcie; jego 60 sekund jeszcze nie biegnie. Ręczne „Przetestuj Grincha” otwiera ten sam komponent, pozwala porównać warianty i zużywa automatyczny atak do resetu.

**Panel prowadzącej:** na samej górze kartki, przed nagłówkiem „Biuro Obsługi Życzeń · termin realizacji: 24 grudnia”; taka sama pozycja w WEB i MOBILE. Automatyczny start po wejściu, ręczny start nowej próby po resecie, pauza/wznowienie, czas pokazu, test Grincha, reset i skróty do akcji. Poprawna semantyka i klawiatura w obu wariantach. Instrukcja oraz mapa przykładów są tylko w tej dokumentacji — całkowicie usunięte z interfejsu strony.

### 2.8. Loteria z dreszczykiem

- Podpis „Loteria z dreszczykiem”, nagłówek „Nielimitowana liczba tokenów na cały rok!*”, styl dawnej internetowej reklamy. Bez dodatkowego pop-upu.
- Opcjonalny, natywny checkbox „Biorę udział w loterii (opcjonalnie)”, domyślnie niezaznaczony. Powiązana instrukcja: „Wynik poznasz po wysłaniu listu. Udział jest opcjonalny”.
- Błędna nazwa „Aktywuj szczęście” to dodatkowy przykład 2.5.3. Poprawiona nazwa pochodzi z widocznego `label`.
- Zaznaczenie przekazuje bieżący stan; nie losuje i nie przenosi fokusu. Wynik pojawia się po poprawnym wysłaniu, tylko przy wybranym udziale.
- Wygrywa każde setne zgłoszenie do loterii: 100., 200., 300., 400., 500. i kolejne. Numeracja udziałów jest osobna od numeracji wszystkich listów; list bez udziału nie przesuwa progu wygranej. Warunek: dodatni numer udziału podzielny przez 100. Nie identyfikujemy unikalnych osób — jeden list może zgłosić udział tylko raz, a nowy list jest nowym zgłoszeniem.
- Niepowodzenia: tokeny zjadł renifer, elf wylosował dodatkowe spotkanie, Mikołaj przesyła szacunek do cierpliwości. Wynik ma nagłówek i `role="status"` na ekranie sukcesu.
- Mały druk: wygrana symboliczna; „Oferta ważna do pierwszej rozmowy o architekturze systemu”. Nie przyznajemy rzeczywistych tokenów ani kredytów usług AI. Informacja jest widoczna przed udziałem i przy wyniku.
- Lokalna próba ma własną numerację i podpis, że wynik jest lokalny. Wspólny wynik wymaga działającej funkcji Netlify. Niedostępność usługi jest komunikowana; ponowienie zachowuje identyfikator listu.

### 2.9. Ekran sukcesu i licznik

Po poprawnej walidacji przechodzimy do osobnego widoku w tym samym HTML: „Twój list frunie na Biegun Północny!”. Dopisek: „List przyjęty. Mikołaj analizuje zakres”. Widoczna koperta leci po przerywanej trasie na biegun; animacja trwa około 2–3 sekund, jednokrotnie, bez migania i zapętlenia. `prefers-reduced-motion` pokazuje statyczny finał. Tekst i potwierdzenie są dostępne od razu, niezależnie od animacji.

Napis „Biegun Północny” ma osobny wiersz nad ilustracją drogi i drogowskazu; nie jest nakładką na SVG, także na telefonie. Animacja przelotu pozostaje bez zmian. Pieczątka „Przyjęto warunkowo · Elf nr 404” jest tutaj, poza ilustracją. „Wróć do listu” przywraca dane i fokus na wysyłaniu. Sukces i powrót nie resetują pokazu. Ekran sukcesu działa poprawnie w obu wariantach.

Licznik zwiększa się po prawidłowym wysłaniu, raz na identyfikator listu. Powrót i ponowne wysłanie tego samego listu, także po odświeżeniu w tej samej karcie, nie naliczają go ponownie. Reset oznacza nowy list, bez zerowania statystyki. Nowa karta może oznaczać nowy list; nie identyfikujemy osób.

Samodzielny HTML używa jawnie podpisanego licznika lokalnego. `localStorage` zawiera anonimowe identyfikatory i lokalny licznik, `sessionStorage` bieżący UUID. Imię, wiadomości, prezenty i czat pozostają w pamięci karty.

Na prawidłowo wdrożonym Netlify działa wspólny licznik: funkcja `letter-count`, Netlify Blobs z silną spójnością, warunkowy atomowy zapis liczników i przypisania UUID → numer listu oraz opcjonalny numer udziału. Do funkcji trafiają tylko losowy UUID i logiczna flaga udziału w loterii (`participates`), bez imienia, treści listu, czatu, prezentów oraz pozostałych checkboxów. Ponowienia i równoczesne zgłoszenia nie mogą dublować numerów. Błąd usługi nie blokuje sukcesu, lecz pokazuje niedostępność licznika/wyniku. Mechanizm demonstracyjny nie chroni przed celowym nabijaniem nowych listów i nie jest pomiarem unikalnych uczestników.

## 3. WEB — wymagania desktopowe

### 3.1. Układ

Powyżej 760 px formularz i worek są w dwóch kolumnach; worek pozostaje bocznym obszarem i może podążać podczas przewijania. Główna kolumna: O mnie → katalog → zachowanie → dostawa → podpis i wysyłka → czat. Karty prezentów w dwóch kolumnach; od 1600 px w trzech. Dostawa w jednym rzędzie trzech opcji. Dla średnich szerokości zmniejszamy odstępy, zachowując czytelność.

### 3.2. Zakładki kategorii

Trzy widoczne zakładki: Dla mnie / Dla zespołu / Dla świętego spokoju. Zmiana fokusu sama nie aktywuje panelu.

| Wariant | Semantyka i klawiatura |
| --- | --- |
| Z błędami | Natywne nazwane przyciski bez `role="tab"` i bez `aria-selected`. Każdy osiągalny Tab, aktywacja Enter/Spacją. Stan wybrania tylko wizualny. |
| Poprawiony | Nazwany `tablist`, `tab`, powiązany `tabpanel`, bieżące `aria-selected`. Tab wprowadza do grupy, strzałki/Home/End przenoszą fokus, Enter/Spacja aktywują. |

To desktopowy przykład 4.1.2 dotyczący roli i stanu. Nie dodajemy `aria-selected` do zwykłego przycisku jako samodzielnej naprawy; stan musi pasować do roli. Przykład pozostaje rezerwowy w 15-minutowym nagraniu.

## 4. MOBILE — wymagania telefonu

### 4.1. Układ i kolejność

Do 760 px jedna kolumna strony, jedna karta prezentu w rzędzie i jeden sposób dostawy w rzędzie. Karty nie występują parami. Worek nie jest przyklejony do boku.

Kolejność dokumentu: O mnie → katalog → zachowanie → worek wraz z opcją loterii → dostawa → podpis i wysyłka → czat. Worek jest rzeczywiście przenoszony w DOM przed dostawę; nie przestawiamy go samym CSS. Kolejność wzrokowa, tabulatora i odczytu ma być zgodna. Przy powrocie do szerokiego ekranu wraca do bocznej kolumny, z zachowaniem zawartości i zaznaczeń.

### 4.2. Rozwijany wybór kategorii

Zamiast zakładek obok siebie przycisk „Kategoria prezentów: [wybrana kategoria]”, rozwijający trzy nazwane przyciski. Natywne `button`, bez niepotrzebnych ról `menu` i `listbox`. Wybrana kategoria ma bieżący stan `aria-pressed`.

- Enter/Spacja otwierają i aktywują przyciski; Tab prowadzi po opcjach. Dodatkowo strzałki oraz Home/End mogą przenosić fokus wśród opcji.
- Escape zamyka i przywraca fokus na wyzwalacz. Wybór kategorii pokazuje właściwy panel, aktualizuje tekst wyzwalacza, zamyka listę i przywraca na niego fokus.
- Kliknięcie poza obszarem zamyka listę bez przechwytywania fokusu. Ukryte opcje nie są w odczycie ani tabulatorze.
- Panel kategorii jest nazwanym regionem z powiązanym opisem.

| Wariant | Przycisk rozwijania |
| --- | --- |
| Z błędami | Zachowuje nazwę, rolę przycisku, `aria-controls` i działanie; pomija `aria-expanded`. |
| Poprawiony | Aktualne `aria-expanded="false"` / `"true"` zgodne z widocznością listy, oraz `aria-controls`. |

To mobilny przykład braku informacji o stanie z 4.1.2. Nie zastępujemy go natywnym `select` i nie oceniamy samego braku `aria-expanded` na natywnym polu wyboru jako tej samej usterki. Czat zachowuje poprawnie aktualizowane `aria-expanded` w obu wariantach.

### 4.3. Czytelność i dotyk

- Sprawdzamy 390 px i 320 px oraz brak poziomego przewijania całej strony. Teksty zawijają się, a grafiki i dymek mieszczą w kontenerach.
- Pola do wpisywania mają na telefonie 16 px. Główne przyciski i cele dotykowe mają około 44 px lub więcej; etykiety checkboxów są klikalne.
- Okna mieszczą się w ekranie; zawartość można przewinąć, „X” jest osiągalny, fokus widoczny. Tło pozostaje nieaktywne.
- Historia i pole czatu, ilości zespołowe, usuwanie z worka, walidacja i sukces są obsługiwalne również na małym ekranie.
- Próba w ramce telefonu sprawdza układ; rzeczywisty telefon z VoiceOver/TalkBack wymaga osobnego testu przed publikacją.

## 5. Mapa celowych błędów i ich poprawionych odpowiedników

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

W obu wariantach poprawne: struktura nagłówków i landmarków, kontrast, sterowanie pokazem, obsługa klawiaturą, walidacja, wymagany checkbox zasad, upomnienie Mikołaja, komunikaty worka i historii, ekran sukcesu. Sama rola przycisku „X” i jego nazwa są poprawne również w błędnym Grinchu.

**Rozróżnienie kryteriów:** 3.3.2 dotyczy etykiet i instrukcji, 2.5.3 zgodności widocznego tekstu z nazwą dostępną, 1.3.1 programowych relacji, a 4.1.2 nazwy, roli i odpowiednich stanów/wartości komponentu. Pole imienia ma istniejący i powiązany `label`; celowo nadpisujemy jego nazwę, więc to przykład 2.5.3. Sama rozbieżność nazwy nie jest automatycznie drugim zgłoszeniem 4.1.2.

Natywny `button` i `input type="radio"` mają role bez jawnego `role`. Usunięcie atrybutu `role` z natywnego elementu nie jest przykładem braku roli. Nazwa dostępna w poprawnym wariancie zawiera widoczny tekst etykiety, najlepiej na początku; dodatkowy kontekst może następować po nim.

## 6. Plan prezentacji — 15 minut

Główna ścieżka: nazwy → role radii → wartość suwaka → Grinch → czat → sukces → porównanie po poprawie. Dwa okna, jedna krótka wymiana z elfem, bez odsłuchiwania całego katalogu. Mobilny wybór kategorii, loteria, zakładki i dodatkowy checkbox są materiałem do samodzielnego testowania lub zamiennikiem fragmentu, nie dodatkowymi minutami.

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

Łącznie: 15:00, w tym 14:00 zaplanowanej treści.


Na początku nagrania otwieramy lub odświeżamy stronę: zegar startuje automatycznie. Do przygotowania kadru można go zatrzymać; po resecie nową próbę uruchamiamy ręcznie. Po 7:00 omawiamy ten sam Grinch, który pojawia się automatycznie. Przed porównaniem okna zamykamy je, zmieniamy wariant, wywołujemy ręcznie. W razie opóźnienia skracamy komentarze, nie dokładamy przykładów. Faktyczne komunikaty NVDA zapisujemy podczas próby; nie traktujemy przewidywanych odczytów jako wyników testu.

## 7. Przegląd ARIA do przygotowania nagrania

To zaplecze techniczne, nie lista dodatkowych przykładów obowiązkowych w odcinku. `role` jest osobnym atrybutem; nie istnieje `aria-role`. Poprawny wariant używa przede wszystkim natywnego HTML, a ARIA uzupełnia jego działanie w odpowiednim kontekście.

### 7.1. Nazwa, rola, stan i wartość

| Mechanizm | Przykład w naszym projekcie | Celowy problem i uwaga do poprawy |
| --- | --- | --- |
| `aria-label`, `aria-labelledby` | Ikonowy przycisk czatu i ikonowy przycisk usunięcia prezentu z worka. | Dekoracyjna ikona bez innego źródła nazwy pozostawia przycisk bez nazwy: 4.1.2. Naprawa: „Porozmawiaj z elfem” lub nazwa identyfikująca usuwany prezent. Brak samego aria-label nie przesądza o błędzie; nazwa może pochodzić z treści przycisku. |
| `role="radio"`, `role="radiogroup"` | „Reniferem”, „Elfomatem”, „Teleportem”. | Własne elementy przypominają radio, ale nie udostępniają tej roli. Poprawny wariant korzysta z natywnych radii; alternatywa to pełny wzorzec ARIA Radio Group. |
| `aria-checked` | Świąteczne oświadczenie oraz własne radio. | Widoczne zaznaczenie nie zgadza się ze stanem dostępnym. Własne checkboxy i radia wymagają właściwej roli oraz aktualizowania tego stanu. Dla natywnych kontrolek korzystamy z ich rzeczywistego stanu `checked`. |
| `aria-valuenow`, `aria-valuemin`, `aria-valuemax` | Suwak poziomu grzeczności. | Własny suwak zmienia się wizualnie, ale przekazuje starą wartość. Naprawa: prawidłowe granice i bieżąca wartość; natywny `input type="range"` udostępnia te informacje poprzez mechanizmy HTML. |
| `aria-valuetext` | Słowny opis pozycji suwaka, np. „100% — Wzorowe zachowanie”. | Nieaktualny opis może przekazywać inną pozycję niż faktycznie wybrana. Stosować, gdy opis słowny jest potrzebny do zrozumienia skali; aktualizować razem z wartością. |
| `aria-expanded` | Mobilny przycisk rozwijania kategorii. | W błędnym wariancie brak atrybutu; w poprawnym aktualne `true` lub `false`. W czacie zaplanowane `aria-expanded` jest aktualizowane poprawnie. |
| `aria-pressed` | Rezerwowy przełącznik „Pakowanie na prezent”. | Przycisk działa jako przełącznik, ale nie przekazuje stanu wciśnięcia. Prawidłowy przełącznik zachowuje etykietę i aktualizuje `aria-pressed`. Nie jest to atrybut zwykłego przycisku „Wyślij list”. |
| `aria-disabled` | Rezerwowa chwilowo niedostępna opcja dostawy. | Kontrolka jest faktycznie nieoperowalna, lecz tego stanu nie przekazuje. Przy własnych kontrolkach skrypt musi też egzekwować blokadę; samo ARIA jej nie tworzy. Natywne `disabled` udostępnia stan odpowiednich kontrolek HTML. |
| `aria-readonly` | Rezerwowe pole „Numer listu”. | Własna kontrolka nie pozwala edytować wartości, lecz nie udostępnia stanu tylko do odczytu. Dla natywnego pola tekstowego stosujemy `readonly`. Atrybut ARIA dobieramy do roli, która go obsługuje. |

Zmiana nazwy dostępnej na inną niż widoczna etykieta, np. „Wyślij list” / „Zatwierdź formularz”, jest w tym scenariuszu demonstracją 2.5.3. Nie uznajemy każdej takiej rozbieżności automatycznie za dodatkowe naruszenie 4.1.2. Osobnym przykładem 4.1.2 jest całkowity brak nazwy przycisku ikonowego.

### 7.2. Właściwości i powiązania wymagające oceny w kontekście

| Mechanizm | Rola w formularzu | Jak traktujemy go w pokazie |
| --- | --- | --- |
| `aria-required` | Informuje, że pole wymaga uzupełnienia. | W natywnych polach w pierwszej kolejności `required`. ARIA nie uruchamia walidacji. Wymaganie wyjaśniamy także w widocznej etykiecie lub instrukcji; ocena dotyczy również 3.3.2. Nie budujemy samodzielnego zgłoszenia 4.1.2 wyłącznie na braku tego atrybutu. |
| `aria-invalid` | Przekazuje stan niepoprawności po walidacji. | Powinien odzwierciedlać stan pola i być usuwany lub zmieniany po poprawie. Błędna informacja o stanie może dotyczyć 4.1.2; identyfikacja błędu i wskazówka poprawy wymagają też oceny 3.3.1 i 3.3.3. Nie jest zamiennikiem komunikatu błędu. |
| `aria-describedby` | Wiąże pole z dodatkową instrukcją lub opisem błędu. | Przekazuje opis, a nie nazwę. Brak tego konkretnego atrybutu sam nie przesądza o naruszeniu 4.1.2; liczy się rzeczywista dostępność informacji i powiązań. |
| `aria-errormessage` | Wiąże pole z komunikatem błędu. | Dotyczy pola w stanie niepoprawnym. Nie jest obowiązkową metodą powiązania błędu w każdym formularzu. Obsługę w docelowym zestawie NVDA i przeglądarki należy zweryfikować. |
| `aria-controls` | Wskazuje element kontrolowany, np. rozwijany panel. | Samo powiązanie nie informuje o aktualnym stanie. Brak tego atrybutu nie jest automatycznie naruszeniem 4.1.2. |
| `aria-modal` i właściwa rola okna | Przekazanie semantyki okien Grincha i upomnienia Mikołaja. | Brak roli i nazwy w badanym wariancie; poprawny alertdialog w naprawionym. Czat jest panelem. Automatyczne wywołanie Grincha nie wymaga przycisku z aria-haspopup. |
| `aria-selected` | Stan wybrania w odpowiednich wzorcach, np. kartach i opcjach listboxa. | Nie zastępuje `aria-checked` dla radia ani checkboxa. Do naszego prostego wyboru dostawy stosujemy radio. |
| `aria-live`, `aria-atomic`, role `status` i `alert` | Ogłaszanie np. „Prezent dodany do worka” bez przenoszenia fokusu. | Komunikaty o stanie oceniamy przede wszystkim w 4.1.3. Nie zaliczamy ich automatycznie do głównego przykładu 4.1.2. |


## 8. Instrukcja i weryfikacja

### 8.1. Lokalna próba

1. Otwórz aktualny HTML w Chrome; zasoby są w pliku, bez instalacji i internetu.
2. Zegar działa automatycznie od otwarcia strony. Wybierz wariant; Panel prowadzącej na górze pozwala zatrzymać/wznowić czas. Po pełnym resecie licznik czeka na „Rozpocznij pokaz”. Zwinięcie panelu nie zatrzymuje zegara.
3. Dodaj 3 sztuki i zamknij upomnienie. Grinch pojawi się raz o 7:00; do szybkiej próby użyj ręcznego testu.
4. Przetestuj puste imię, pusty worek i brak wymaganej akceptacji. Popraw błędy i wyślij list. Udział w loterii wybierz tylko, jeśli chcesz wynik.
5. Na sukcesie sprawdź fokus, licznik i ewentualny wynik. Wróć do listu, zmień wariant i porównaj te same kontrolki.
6. Reset rozpoczyna nową próbę i nowy list; nie zeruje liczby wysłanych listów.

### 8.2. WEB — zakres odbioru

- Zakładki: role, wybranie, strzałki, Enter/Spacja, ukrycie nieaktywnych paneli.
- Wszystkie widoczne etykiety w poprawnym wariancie są zawarte w nazwach dostępnych; ikony mają nazwy akcji.
- Worek, powiadomienie po 3 sztukach, radio, suwak, checkboxy, czat, Grinch i sukces działają z klawiaturą.
- Jeden banner, main i contentinfo; nazwany formularz oraz sensowne regiony. Poprawna hierarchia nagłówków.
- Walidacja bez podsumowania, komunikaty przy polach, wymaganie, `aria-invalid`, sugestia i właściwy fokus.
- Próba NVDA + Chrome na Windows, z zapisem wersji oraz faktycznych odczytów. Pełny przebieg po resecie i próba ze stoperem.

### 8.3. MOBILE — zakres odbioru

- 390 px i 320 px: 1 prezent w rzędzie, dostawa pionowo, brak przewijania strony w poziomie.
- Worek i opcja loterii przed dostawą oraz podpisem w DOM, wizualnie i kolejności fokusu.
- Dropdown kategorii: otwieranie, aktualna nazwa, wybór, zamknięcie, Escape; `aria-expanded` obecne tylko w poprawnym wariancie.
- Zmiana szerokości przywraca desktopowy układ bez utraty danych i powielania elementów.
- Dialogi mieszczą się w ekranie, czat można przewijać, klawiatura ekranowa nie uniemożliwia obsługi.
- Rzeczywisty telefon: próba z VoiceOver lub TalkBack, dotykiem i orientacją ekranu. To osobny etap względem ramki testowej w desktopowej przeglądarce.

### 8.4. Co sprawdzono lokalnie, a co pozostaje

Sprawdzono logikę 22 scenariuszy odpowiedzi elfa, automatyczny start po otwarciu i próg zegara 7:00 oraz przygotowany publiczny próg 2:00, pauzę i niezależny czas sesji, walidację i fokus, stan suwaka, modal po 3 sztukach (również ilość 3 na raz), przełączenie wariantów, landmarki, mobilną kolejność DOM, układ 390/320 i opcjonalny wynik loterii. Testy licznika obejmują deduplikację, odświeżenie, ponowienie po błędzie, spóźnione GET oraz 500 równoległych udziałów z unikalnymi numerami oraz wygranymi 100, 200, 300, 400 i 500; dodatkowo listy bez udziału oraz późniejsze dopisanie udziału do tego samego listu bez powielenia numerów. Magazyn testowy działa w pamięci; nie jest to test obciążenia prawdziwego Netlify.

Pomiary obliczonych kolorów tekstu i kontrolek oraz kontrola wizualna służą weryfikacji kontrastu. Przed publikacją nadal wymagane są: próba NVDA, rzeczywisty telefon z czytnikiem, pełna próba nagrania i rzeczywiste wdrożenie funkcji licznika. Nie deklarujemy wykonania tych testów.

## 9. Pliki, uruchomienie i publikacja

- Samodzielny HTML działa lokalnie. Wersja źródłowa zawiera `dist/index.html`, kod funkcji Netlify, logikę pomocniczą, testy, `netlify.toml`, `package.json`, README i te wymagania jako `WYMAGANIA.md`.
- `npm test` na Node.js 22+ uruchamia testy logiki; nie wymaga połączenia z Netlify.
- Docelowo publiczny GitHub z kodem i instrukcją oraz Netlify z działającą stroną; dwa linki w opisie nagrania. Nie wpisujemy fikcyjnych adresów.
- Po zakończeniu nagrania, przed publikacją, ustawiamy profil `public` (Grinch po 2 minutach). Do nagrania zostaje `presentation` (7 minut).
- Publikacja z repozytorium na Netlify musi uwzględnić funkcję `letter-count`. Sam upload pliku HTML nie uruchamia wspólnego licznika. Po wdrożeniu sprawdzamy funkcję i zachowanie równoczesnych wysyłek.
- Wysłanie pozostaje symulacją, czat nie korzysta z zewnętrznego AI, formularz nie tworzy zamówień. Treści pozostają w pamięci karty; wyjątkiem są anonimowe identyfikatory i flaga udziału dla licznika oraz loterii, opisane wyżej.
- Plik lokalny, localhost i podgląd roboczy korzystają z licznika lokalnego. W Netlify Dev można jawnie przetestować funkcję parametrem `?counter=server`. W przypadku błędu usługi nie zastępujemy globalnej liczby liczbą lokalną bez informacji.
- Publiczny hosting i repozytorium nie są jeszcze utworzone. Przygotowany pakiet jest materiałem do przyszłej publikacji.

## 10. Źródła techniczne

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
- [WCAG 1.4.11: Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
- [WAI-ARIA APG: Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
- [WAI-ARIA APG: Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/)
- [WAI-ARIA APG: Landmark Regions](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/)
- [Netlify Blobs](https://docs.netlify.com/build/data-and-storage/netlify-blobs/)
