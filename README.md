# Świąteczna lista życzeń

Świąteczna satyra dla dorosłych i demonstracja WCAG 2.5.3 oraz 4.1.2 na „Kalendarz Programisty”. Domyślnie zawiera celowe błędy nazw, ról i stanów kontrolek. Przełącznik u góry pokazuje ich poprawione odpowiedniki, zachowując dane. To symulacja: list nie jest rzeczywistym zamówieniem, a czat działa lokalnie, bez modelu AI.

Strona demonstracji: [Polski](https://swiateczna-lista-zyczen.netlify.app/?lang=pl) · [English](https://swiateczna-lista-zyczen.netlify.app/?lang=en).

## Lokalnie

Otwórz `dist/index.html` w przeglądarce. Wszystkie style, grafiki i skrypty strony są w tym pliku. Bez instalowania zależności i bez internetu. Licznik w tej wersji jest lokalny, co opisuje jego etykieta.

Panel prowadzącej na samej górze kartki, przed nagłówkiem Biura Obsługi Życzeń, pozwala uruchomić, zatrzymać i zresetować pokaz oraz ręcznie wywołać Grincha. Zegar startuje automatycznie po otwarciu strony; w tym publicznym wariancie Grinch pojawia się przy 2:00 odliczania. Pauza zatrzymuje czas, a po pełnym resecie nową próbę uruchamia się ręcznie. Upomnienie Mikołaja otwiera się po osiągnięciu 3 sztuk w worku, raz do resetu. Instrukcja i mapa przykładów są w `WYMAGANIA.md`, poza stroną.

## Język i wybór ilości

Przełącznik Polski / English tłumaczy formularz, opisy i nazwy dostępne, błędy, czat, okna oraz ekran sukcesu. Aktualizuje `lang` i tytuł dokumentu bez utraty wpisanych danych. Parametr `?lang=en` lub `?lang=pl` wybiera wersję z linku; preferencja jest zapamiętywana jako `pp-language`. Własne wiadomości i imię pozostają bez zmian. Czat rozpoznaje przygotowane tematy w obu językach i odpowiada w języku interfejsu, bez usługi AI.

W „Dla zespołu” ilość można wpisać albo zmienić przyciskami −/+, w zakresie 1–99. Przyciski mają nazwy z nazwą prezentu, stan graniczny i komunikat o zmianie bez utraty fokusu. Licznik wysłanych listów jest dyskretnie umieszczony w prawym dolnym rogu stopki.

## Worek, czytelność i okna

Podczas przeglądania katalogu na telefonie widoczny jest kompaktowy mini worek z sumą sztuk i przejściem do pełnej zawartości. Udane dodanie uruchamia krótki przelot ilustracji i ruch ikony oraz licznika. Ustawienie ograniczenia ruchu pomija animację; tekstowe potwierdzenie i odczyt statusu nadal działają. Szybkie kliknięcia, reset i zmiana widoku anulują poprzedni efekt. Na komputerze potwierdzenie jest przy bocznym worku. W obu układach karty prezentów nie dostają dodatkowych komunikatów pod produktem.

Podpowiedzi i instrukcje mają minimum 1 rem (domyślnie 16 px). W poprawnym wariancie Grinch ma rolę alertdialog, nazwę z tytułu h2 i opis; fokus trafia do okna po jego pokazaniu. Teksty mówią o liście życzeń, a przycisk powrotu to „Wróć do listy życzeń”. Data 1931 w stylizacji odnosi się do kampanii Sundbloma dla Coca-Coli, nie do powstania legendy o biegunie północnym.

## Dwa czasy Grincha

Ta opublikowana wersja używa ustawienia: `DEMO_PROFILE='public'` oznacza Grincha po 2 minutach. Do nagrania można ustawić tę samą stałą na `'presentation'`, czyli 7 minut. Lokalny plik prezentacyjny przechowujemy osobno. Opis panelu i komunikat startu wynikają z profilu.

## Netlify: wspólny licznik

Projekt jest połączony z Netlify. Zmiany w `main` uruchamiają wdrożenie: instalację zależności, `npm test`, publikację katalogu `dist` i funkcji `letter-count`. Ustawienia są w `netlify.toml`. Własny fork można wdrożyć na Netlify, wskazując katalog główny repozytorium; nie trzeba dodawać kluczy do HTML. Samo wgranie HTML metodą drag-and-drop nie publikuje funkcji.

Na prawidłowo wdrożonym Netlify strona używa wspólnego licznika. Na `file:`, `localhost`, `127.0.0.1` i w lokalnym podglądzie działa licznik lokalny. W lokalnym środowisku Netlify Dev można jawnie testować funkcję przez `?counter=server`. Brak połączenia nie blokuje sukcesu formularza, ale pokazuje niedostępność licznika i wyniku. Po wdrożeniu sprawdzono rzeczywisty zapis, odczyt bez logowania i ponowienie po odświeżeniu bez podwójnego naliczenia. Pierwszy list i udział są testowe. Próby 500 równoległych zgłoszeń dotyczą lokalnego magazynu w pamięci, nie produkcyjnej usługi.

Funkcja zapisuje losowy UUID, numer listu oraz opcjonalny numer udziału w loterii w Netlify Blobs. Wykorzystuje silną spójność i warunkowe, atomowe zapisy jednego stanu, aby nie dublować numerów przy równoczesnych zgłoszeniach. Ponowienie tego samego listu nie zwiększa licznika. Reset rozpoczyna nowy list; nie zeruje licznika. To liczba listów, nie liczba unikalnych osób. Demonstracyjny licznik nie chroni przed celowym generowaniem nowych zgłoszeń; przed użyciem na dużą skalę wymaga oceny pojemności i kosztów usługi.

Do funkcji trafia tylko UUID i logiczna flaga udziału w loterii. Imię, wiadomości, czat, prezenty i pozostałe checkboxy nie trafiają do funkcji. W przeglądarce zapisujemy wyłącznie anonimowe identyfikatory i lokalny licznik: `pp-letter-receipts-v2` w localStorage (starszy klucz `pp-counted-letters` jest odczytywany przy migracji) i `pp-letter-draft` w sessionStorage. Treść formularza istnieje w pamięci karty.

## Loteria

Opcjonalny checkbox zapisuje wybór udziału. Wynik pojawia się po wysłaniu. Co setne zgłoszenie do loterii wygrywa symboliczną nagrodę: 100., 200., 300., 400., 500. i kolejne. Udziały mają własną numerację, więc listy bez udziału nie przesuwają wygranej. Jeden list otrzymuje jeden numer udziału; po powrocie można dopisać udział do tego samego listu bez ponownego naliczenia listu. Nie przyznajemy rzeczywistych tokenów ani kredytów AI. Lokalna próba ma oddzielną numerację. Wynik jest na ekranie sukcesu, bez dodatkowego okna.

## Sprawdzenie

Node.js 22 lub nowszy: `npm test`. Testy sprawdzają 22 polskie i 18 angielskich scenariuszy czatu, tłumaczenia i pierwszeństwo języka z URL, logikę zegara, deduplikację, ponowienia oraz 500 równoległych zgłoszeń z unikalnymi numerami oraz wygranymi co 100 udziałów. Nie wymagają zależności Netlify.

Poprzedni układ sprawdzono w przeglądarce w szerokościach telefonu. Nowe wersje językowe i przyciski ilości sprawdzono w DOM: zachowanie danych i fokusu, walidację, czat oraz sukces. Pomiary układu EN/PL przy 320/390 px, próba z NVDA + Chrome na Windows oraz VoiceOver lub TalkBack na rzeczywistym telefonie pozostają do wykonania. Testy DOM i logiki nie zastępują tych prób.

## Pliki

- `dist/index.html` — kompletna strona; główny plik do edycji i uruchomienia.
- `counter-client.js` — źródło testowanej logiki licznika, włączone również w HTML pomiędzy znacznikami `LETTER_COUNTER_START/END`.
- `elf-engine.js` — źródło logiki odpowiedzi, włączone w HTML między `ELF_REPLY_ENGINE_START/END`.
- `i18n.js` — teksty i mechanizm wersji językowych, włączone w HTML między `UI_I18N_START/END`.
- `bag-feedback.js` — mini worek i opcjonalna animacja, włączone w HTML między `BAG_FEEDBACK_START/END`.
- `netlify/` — funkcja i logika wspólnego licznika.
- `qa/` — testy lokalne.
- `WYMAGANIA.md` — wymagania, instrukcja pokazu i mapa celowych błędów.

Zmieniając pliki logiki pomocniczej, zaktualizuj również odpowiadający blok w HTML i uruchom testy. Nie publikujemy żadnych przykładów testowych iframe z podglądu roboczego.
