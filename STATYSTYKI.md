# Prywatne statystyki grudniowych zabaw

## Znaczenie wyników

Wizyta oznacza otwarcie strony w sesji karty przeglądarki. Identyfikator wizyty jest ważny 30 minut od otwarcia. Odświeżenie i zmiana języka nie wysyłają kolejnego zapisu po udanym potwierdzeniu. Nowa karta lub wejście po 30 minutach może być nową wizytą. To nie jest liczba różnych osób. Zablokowany JavaScript, magazyn przeglądarki, rozszerzenia i brak połączenia mogą zmienić lub zaniżyć wyniki.

Dni raportujemy według Europe/Warsaw. Krzyżówka: premiera 2 grudnia 2026. Lista życzeń: 9 grudnia 2026. Do wyników kampanii wliczamy odpowiednie daty grudniowe; listopadowe próby pozostają osobno. Obie zabawy mają działać do 31 grudnia.

## Oszczędny zapis

`POST /api/visits` przyjmuje wyłącznie losowy UUID wizyty. Serwer zapisuje SHA-256 identyfikatora jako klucz niezmiennego obiektu `visits/RRRR-MM-DD/hash` w Netlify Blobs, z warunkiem `onlyIfNew`. Treść zawiera tylko datę. Nie ma wspólnego nadpisywanego pola count, pętli odczyt-zwiększenie-zapis ani skanowania wszystkich wizyt przy każdym wejściu. Ponowienia nie tworzą duplikatów. Nie zapisujemy adresów IP, imion, treści formularzy, odpowiedzi czatu, identyfikatorów LinkedIna ani adresów odsyłających.

Klient wykonuje jeden niewielki POST po otwarciu nowej sesji. Brak cyklicznego odpytywania, heartbeatów, odczytów łącznego wyniku i publicznego endpointu raportowego. Awaria pomiaru nie blokuje zabawy. Przy kolejnym otwarciu po błędzie ponawiany jest ten sam UUID.

`christmas-private-statistics-v1` jest odrębnym magazynem w każdym projekcie. Produkcja używa trwałego getStore, podgląd getDeployStore, region us-east-2 i strong consistency. Podglądy nie zapisują do produkcyjnych statystyk. Dane nie są pobierane do strony. Nie ma skryptu zewnętrznej firmy analitycznej.

## Odczyt dla właścicielki

Zaloguj się do panelu Netlify, wybierz projekt, następnie Data & Storage → Blobs → christmas-private-statistics-v1 → visits. Foldery zawierają dni. Liczba wpisów w danym dniu odpowiada liczbie zarejestrowanych wizyt w tym dniu, a suma dni daje zakres kampanii. Przy większej liczbie wpisów należy uwzględnić wszystkie strony listy, a nie tylko pierwszą. Wyniki są dostępne tylko przez zalogowane konto Netlify; aplikacja publiczna nie udostępnia listy wpisów ani raportu.

Dane zachowują się między wydaniami i odnowieniami kredytów. Zmiana miesiąca ani reset zabawy nie usuwa historii. Codzienne foldery pozwalają osobno podsumować okres przed 25 grudnia oraz po odnowieniu puli.

## Budżet

Po wydaniu krzyżówki v0.3.0 saldo potwierdzone w panelu wynosiło 280,8 kredytu. Planowane dwie publikacje zmian statystyk kosztują łącznie 30 kredytów; orientacyjnie pozostaje 250,8 przed dalszym użyciem. Rezerwujemy co najmniej 60 kredytów na poprawki i rozbieżności zużycia. Nie wykonujemy dodatkowych produkcyjnych wydań dla samej dokumentacji.

Nowe wizyty nie budzą bazy PostgreSQL i nie naliczają pięciominutowych okresów jej aktywności. Nadal naliczane są żądania, transfer i rzeczywisty czas funkcji. Nie deklarujemy zerowego kosztu ani gwarancji dowolnej frekwencji. Pierwszy cykl trwa do 24 grudnia, od 25 grudnia odnawia się 300 kredytów. Przedpremierowe testy i późniejszy ruch obu stron korzystają ze wspólnej puli zespołu.

## Weryfikacja

Testy obejmują wielokrotne równoczesne zapisy, deduplikację, zachowanie historycznych danych, datę warszawską, walidację, błędy magazynu, brak publicznego odczytu, sesje, odświeżenia i błędy sieci. Testy lokalne korzystają z izolowanego magazynu. Integrację Netlify sprawdzamy w odrębnym Deploy Preview, przed produkcją. Nie uruchamiamy masowych testów na produkcyjnych danych.

## Wysłane listy i loteria

Dotychczasowy magazyn `pp-letter-receipts` i obiekt `counter-v1` zachowują wszystkie listy i numery udziałów. W panelu Blobs pola total oraz lotteryTotal dają statystyki wysyłek i udziałów. Nie zerujemy danych. Dane listopadowe są stanem wyjściowym do porównania przed premierą. Zapis nadal następuje wyłącznie po poprawnym wysłaniu listu. Publiczna stopka nie wyświetla zbiorczego wyniku, a strona nie odczytuje licznika przy wejściu. GET istniejącej funkcji jest wyłączony; wynik loterii po świadomym wysłaniu nadal otrzymuje swój numer udziału.

W podglądach także dotychczasowy mechanizm loterii używa getDeployStore, aby próby nie zmieniały numerów produkcyjnych. To zmiana izolacji podglądów, bez zmiany formatu danych produkcyjnych i reguł wygranej.

Wersja przygotowywana: 0.2.1. Wyniki przeglądarkowe i identyfikator publikacji zostaną dopisane po weryfikacji.
