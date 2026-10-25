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

Podczas przeglądania katalogu na telefonie mini worek znajduje się u góry widoku, w prawym rogu, z sumą sztuk i przejściem do pełnej zawartości. Udane dodanie uruchamia krótki przelot ilustracji i ruch ikony oraz licznika. Ustawienie ograniczenia ruchu pomija animację; tekstowe potwierdzenie i odczyt statusu nadal działają. Szybkie kliknięcia, reset i zmiana widoku anulują poprzedni efekt. Na komputerze potwierdzenie jest przy bocznym worku. W obu układach karty prezentów nie dostają dodatkowych komunikatów pod produktem.

Podpowiedzi i instrukcje mają minimum 1 rem (domyślnie 16 px). Drobny druk i dopiski z gwiazdką mają 0,875 rem (14 px). Przełącznik wariantów ma dwa równe pola z pełnym tłem aktywnej opcji. Opis terminu odpowiedzi znajduje się pod przyciskiem wysyłki i jest z nim powiązany. Dymek ilustracji ma dwie wyśrodkowane linie bez kursywy. Pieczątki i oznaczenia nadania mają pogrubiony krój Georgia 1,125 rem i wyraźne ramki; „Wydział spraw pilnych” ma 1 rem. Są czytelne także na telefonie. Na ekranie sukcesu przycisk „Wróć do listu” ma wyraźną, dekoracyjną strzałkę.

Jedna biała powierzchnia łączy zakładki, opis kategorii, prezenty i dopisek o umownych cenach. Na telefonie obejmuje również rozwijany wybór kategorii z graficznym wskaźnikiem stanu. W poprawnym wariancie przycisk udostępnia aktualne `aria-expanded`; w błędnym brak tego atrybutu jest celowy. Karty prezentów na telefonie występują pojedynczo w rzędzie.

W upomnieniu Mikołaja liczba prezentów ma osobne jasne tło z zieloną ramką i pogrubioną wartość 1,5 rem. Jest częścią opisu dialogu dostępnego dla czytnika.

W poprawnym wariancie Grinch ma rolę `alertdialog`, nazwę z tytułu `h2` i opis; fokus trafia do okna po jego pokazaniu. Teksty mówią o liście życzeń, a przycisk powrotu to „Wróć do listy życzeń”. Data 1931 w stylizacji odnosi się do kampanii Sundbloma dla Coca-Coli, nie do powstania legendy o biegunie północnym.

Przy 20 sekundach pozostałego czasu pojawia się jednorazowe, widoczne ostrzeżenie. Osobny, istniejący od początku `role="alert"` ogłasza je czytnikowi w obu wariantach. Pauza i wznowienie nie powtarzają komunikatu, a ponowne ręczne otwarcie rozpoczyna nową próbę. Opóźniona obsługa progu informuje o mniej niż 20 sekundach; po upływie czasu ostrzeżenie znika.

Po upływie 60 sekund Grinch opróżnia worek. Nagłówek zmienia się na „Grinch wyjął Twoje prezenty z worka”; dla pustego worka brzmi „Grinch nie miał czego zabrać”. Kolejne ręczne otwarcie przywraca tytuł „Grinch przejął sesję”. Elfy zachowują kopię pozycji i ilości w pamięci karty. „Odzyskaj prezenty” jest dostępne w oknie Grincha oraz przy pełnym worku po jego zamknięciu. Odzyskanie dodaje zabrane sztuki do aktualnego worka, bez utraty nowych wyborów i bez podwójnego przywrócenia. Imię i wiadomość pozostają zachowane, a pełny reset usuwa także kopię. Zamknięcie okna przed upływem czasu zapobiega psikusowi. Automatyczny atak nie przerywa ekranu sukcesu. Pasek okna brzmi „Nieoczekiwany gość”.

Nagłówek loterii oraz ilości w worku mają prosty, grubszy krój w obu układach. Suma sztuk ma 1,5 rem, a licznik w nagłówku worka 1,125 rem. Procent na skali grzeczności ma 1,25 rem, pogrubienie i jasne tło z ramką; pełny opis wartości zawija się na telefonie.

Historia czatu ma `role="log"` i `aria-live="off"`. Osobny, istniejący od początku dokumentu region `role="status"`, z `aria-live="polite"` i `aria-atomic="true"`, otrzymuje nową odpowiedź elfa z nazwą nadawcy. Ten podział ogranicza powtórny odczyt własnych pytań i odpowiedzi. Wysłanie wiadomości pozostawia fokus w polu edycji. Reset usuwa rozmowę i anuluje oczekujący komunikat. Odczyt wymaga sprawdzenia z docelowym czytnikiem.

## Dwa czasy Grincha

Ta opublikowana wersja używa ustawienia: `DEMO_PROFILE='public'` oznacza Grincha po 2 minutach. Do nagrania można ustawić tę samą stałą na `'presentation'`, czyli 7 minut. Lokalny plik prezentacyjny przechowujemy osobno. Opis panelu i komunikat startu wynikają z profilu.

## Netlify: wspólny licznik

Projekt jest połączony z Netlify. Zmiany w `main` uruchamiają wdrożenie: instalację zależności, `npm test`, publikację katalogu `dist` i funkcji `letter-count`. Ustawienia są w `netlify.toml`. Własny fork można wdrożyć na Netlify, wskazując katalog główny repozytorium; nie trzeba dodawać kluczy do HTML. Samo wgranie HTML metodą drag-and-drop nie publikuje funkcji.

Na prawidłowo wdrożonym Netlify strona używa wspólnego licznika. Na `file:`, `localhost`, `127.0.0.1` i w lokalnym podglądzie działa licznik lokalny. W lokalnym środowisku Netlify Dev można jawnie testować funkcję przez `?counter=server`. Brak połączenia nie blokuje sukcesu formularza, ale pokazuje niedostępność licznika i wyniku. Licznik obejmuje również listy testowe. Próby 500 równoległych zgłoszeń korzystają z lokalnego magazynu w pamięci. Zwykła weryfikacja wdrożenia odczytuje licznik bez dodawania listów.

Funkcja zapisuje losowy UUID, numer listu oraz opcjonalny numer udziału w loterii w Netlify Blobs. Wykorzystuje silną spójność i warunkowe, atomowe zapisy jednego stanu, aby nie dublować numerów przy równoczesnych zgłoszeniach. Ponowienie tego samego listu nie zwiększa licznika. Reset rozpoczyna nowy list; nie zeruje licznika. To liczba listów, nie liczba unikalnych osób. Demonstracyjny licznik nie chroni przed celowym generowaniem nowych zgłoszeń; przed użyciem na dużą skalę wymaga oceny pojemności i kosztów usługi.

Do funkcji trafia tylko UUID i logiczna flaga udziału w loterii. Imię, wiadomości, czat, prezenty i pozostałe checkboxy nie trafiają do funkcji. W przeglądarce zapisujemy wyłącznie anonimowe identyfikatory i lokalny licznik: `pp-letter-receipts-v2` w localStorage (starszy klucz `pp-counted-letters` jest odczytywany przy migracji) i `pp-letter-draft` w sessionStorage. Treść formularza istnieje w pamięci karty.

## Loteria

Opcjonalny checkbox zapisuje wybór udziału. Wynik pojawia się po wysłaniu. Co 25. zgłoszenie do loterii wygrywa symboliczną nagrodę: 25., 50., 75., 100. i kolejne. Mechanizm jest opisany w dokumentacji; panel loterii i komunikat wygranej nie ujawniają częstotliwości. Panel zawiera krótki opis „Wynik poznasz po wysłaniu listu” i dopisek „*Wygrana symboliczna”.

Udziały mają własną numerację, więc listy bez udziału nie przesuwają wygranej. Jeden list otrzymuje jeden numer udziału; po powrocie można dopisać udział do tego samego listu bez ponownego naliczenia listu. Nie przyznajemy rzeczywistych tokenów ani kredytów AI. Lokalna próba ma oddzielną numerację. Wynik jest na ekranie sukcesu, bez dodatkowego okna. Zmiana interwału nie zeruje istniejących danych.

## Sprawdzenie

Node.js 22 lub nowszy: `npm test`. Testy sprawdzają 22 polskie i 19 angielskich scenariuszy czatu, naturalne zdania i liczbę pojedynczą/mnogą, ochronę treści użytkownika podczas tłumaczenia, pierwszeństwo języka z URL, tytuły stron, logikę zegara, deduplikację, ponowienia oraz 500 równoległych zgłoszeń z unikalnymi numerami i wygranymi co 25 udziałów. Nie wymagają zależności Netlify.

Dodatkowa weryfikacja pełnego HTML obejmuje walidację imienia, pustego worka i wymaganej zgody, powiązania błędów i fokus w ośmiu kombinacjach WEB/MOBILE, PL/EN i obu wariantów WCAG. Osobno obejmuje dialogi, przełączanie języka, ilości, mini worek, reset, animację, ograniczenie ruchu oraz wynik 25. udziału. Testy DOM i logiki nie potwierdzają syntezy mowy. Próby z NVDA + Chrome na Windows oraz VoiceOver lub TalkBack na rzeczywistym telefonie wymagają docelowego sprzętu i czytnika.

Próba w Chrome obejmuje PL i EN przy szerokościach ramki 320 px, 390 px oraz na komputerze, bez poziomego przewijania dokumentu. Obejmuje też nazwaną rolę `alertdialog` Grincha, fokus i jego zawijanie w oknie, zamknięcie przez Escape, fokus na błędnym polu z `aria-invalid`, aktualizację statusu odpowiedzi elfa, rozmiary przycisków ilości, dialog po trzecim prezencie i ekran sukcesu z osobnym tytułem. To test przeglądarki, nie fizycznego telefonu ani odczytu przez czytnik.

## Pliki

- `dist/index.html` — kompletna strona; główny plik do edycji i uruchomienia.
- `counter-client.js` — źródło testowanej logiki licznika, włączone również w HTML pomiędzy znacznikami `LETTER_COUNTER_START/END`.
- `elf-engine.js` — źródło logiki odpowiedzi, włączone w HTML między `ELF_REPLY_ENGINE_START/END`.
- `i18n.js` — teksty i mechanizm wersji językowych, włączone w HTML między `UI_I18N_START/END`.
- `bag-feedback.js` — mini worek i opcjonalna animacja, włączone w HTML między `BAG_FEEDBACK_START/END`.
- `grinch-prank.js` — odwracalne opróżnianie worka i odzyskiwanie prezentów, osadzone również w HTML między `GRINCH_PRANK_START/END`.
- `netlify/` — funkcja i logika wspólnego licznika.
- `qa/` — testy lokalne.
- `WYMAGANIA.md` — wymagania, instrukcja pokazu i mapa celowych błędów.

Zmieniając pliki logiki pomocniczej, zaktualizuj również odpowiadający blok w HTML i uruchom testy. Nie publikujemy żadnych przykładów testowych iframe z podglądu roboczego.
