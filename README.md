# Świąteczna lista życzeń

Świąteczna satyra dla dorosłych i demonstracja WCAG 2.5.3 oraz 4.1.2 na „Kalendarz Programisty”. Domyślnie zawiera celowe błędy nazw, ról i stanów kontrolek. Przełącznik u góry pokazuje ich poprawione odpowiedniki, zachowując dane. To symulacja: list nie jest rzeczywistym zamówieniem, a czat działa lokalnie, bez modelu AI.

## Lokalnie

Otwórz `dist/index.html` w przeglądarce. Wszystkie style, grafiki i skrypty strony są w tym pliku. Bez instalowania zależności i bez internetu. Licznik w tej wersji jest lokalny, co opisuje jego etykieta.

Panel prowadzącej na samej górze kartki, przed nagłówkiem Biura Obsługi Życzeń, pozwala uruchomić, zatrzymać i zresetować pokaz oraz ręcznie wywołać Grincha. Zegar startuje automatycznie po otwarciu strony; W tym publicznym wariancie Grinch pojawia się przy 2:00 odliczania. Pauza zatrzymuje czas, a po pełnym resecie nową próbę uruchamia się ręcznie. Upomnienie Mikołaja otwiera się po osiągnięciu 3 sztuk w worku, raz do resetu. Instrukcja i mapa przykładów są w `WYMAGANIA.md`, poza stroną.

## Dwa czasy Grincha

Ta wersja jest przygotowana do publikacji: `DEMO_PROFILE='public'` oznacza Grincha po 2 minutach. Do nagrania można ustawić tę samą stałą na `'presentation'`, czyli 7 minut. Lokalny plik prezentacyjny przechowujemy osobno. Opis panelu i komunikat startu wynikają z profilu.

## Netlify: wspólny licznik

Projekt jest przygotowany do publikacji z repozytorium GitHub na Netlify. Wskaż katalog główny tego pakietu; Netlify odczyta `netlify.toml`, zainstaluje przypięte `@netlify/blobs` i opublikuje `dist` z funkcją `letter-count`. Nie potrzeba polecenia budowania ani własnych kluczy w HTML. Samo wgranie HTML metodą drag-and-drop nie publikuje funkcji.

Na prawidłowo wdrożonym Netlify strona używa wspólnego licznika. Na `file:`, `localhost`, `127.0.0.1` i w lokalnym podglądzie działa licznik lokalny. W lokalnym środowisku Netlify Dev można jawnie testować funkcję przez `?counter=server`. Brak połączenia nie blokuje sukcesu formularza, ale pokazuje niedostępność licznika i wyniku. Kod funkcji jest przygotowany i sprawdzony testami z magazynem w pamięci; przed publicznym udostępnieniem trzeba wykonać próbę prawdziwego wdrożenia.

Funkcja zapisuje losowy UUID, numer listu oraz opcjonalny numer udziału w loterii w Netlify Blobs. Wykorzystuje silną spójność i warunkowe, atomowe zapisy jednego stanu, aby nie dublować numerów przy równoczesnych zgłoszeniach. Ponowienie tego samego listu nie zwiększa licznika. Reset rozpoczyna nowy list; nie zeruje licznika. To liczba listów, nie liczba unikalnych osób. Demonstracyjny licznik nie chroni przed celowym generowaniem nowych zgłoszeń; przed użyciem na dużą skalę wymaga oceny pojemności i kosztów usługi.

Do funkcji trafia tylko UUID i logiczna flaga udziału w loterii. Imię, wiadomości, czat, prezenty i pozostałe checkboxy nie trafiają do funkcji. W przeglądarce zapisujemy wyłącznie anonimowe identyfikatory i lokalny licznik: `pp-letter-receipts-v2` w localStorage (starszy klucz `pp-counted-letters` jest odczytywany przy migracji) i `pp-letter-draft` w sessionStorage. Treść formularza istnieje w pamięci karty.

## Loteria

Opcjonalny checkbox zapisuje wybór udziału. Wynik pojawia się po wysłaniu. Co setne zgłoszenie do loterii wygrywa symboliczną nagrodę: 100., 200., 300., 400., 500. i kolejne. Udziały mają własną numerację, więc listy bez udziału nie przesuwają wygranej. Jeden list otrzymuje jeden numer udziału; po powrocie można dopisać udział do tego samego listu bez ponownego naliczenia listu. Nie przyznajemy rzeczywistych tokenów ani kredytów AI. Lokalna próba ma oddzielną numerację. Wynik jest na ekranie sukcesu, bez dodatkowego okna.

## Sprawdzenie

Node.js 22 lub nowszy: `npm test`. Testy sprawdzają logikę czatu i zegara, deduplikację, ponowienia oraz 500 równoległych zgłoszeń z unikalnymi numerami oraz wygranymi co 100 udziałów. Nie wymagają zależności Netlify.

Układ sprawdzono w przeglądarce w szerokościach telefonu. Przed nagraniem i publikacją potrzebna jest próba z NVDA + Chrome na Windows oraz VoiceOver lub TalkBack na rzeczywistym telefonie. Testy DOM i logiki nie zastępują tych prób.

## Pliki

- `dist/index.html` — kompletna strona; główny plik do edycji i uruchomienia.
- `counter-client.js` — źródło testowanej logiki licznika, włączone również w HTML pomiędzy znacznikami `LETTER_COUNTER_START/END`.
- `elf-engine.js` — źródło logiki odpowiedzi, włączone w HTML między `ELF_REPLY_ENGINE_START/END`.
- `netlify/` — funkcja i logika wspólnego licznika.
- `qa/` — testy lokalne.
- `WYMAGANIA.md` — wymagania, instrukcja pokazu i mapa celowych błędów.

Zmieniając pliki logiki pomocniczej, zaktualizuj również odpowiadający blok w HTML i uruchom testy. Nie publikujemy żadnych przykładów testowych iframe z podglądu roboczego.
