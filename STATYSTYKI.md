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

Dwie publikacje zmian statystyk kosztują łącznie 30 kredytów. Bieżące saldo i zużycie konta są prywatne i należy sprawdzać je w zalogowanym panelu Netlify. Rezerwujemy zapas na poprawki i rozbieżności zużycia. Nie wykonujemy dodatkowych produkcyjnych wydań dla samej dokumentacji.

Nowe wizyty nie budzą bazy PostgreSQL i nie naliczają pięciominutowych okresów jej aktywności. Nadal naliczane są żądania, transfer i rzeczywisty czas funkcji. Nie deklarujemy zerowego kosztu ani gwarancji dowolnej frekwencji. Pierwszy cykl trwa do 24 grudnia, od 25 grudnia odnawia się 300 kredytów. Przedpremierowe testy i późniejszy ruch obu stron korzystają ze wspólnej puli zespołu.

## Weryfikacja

Testy obejmują wielokrotne równoczesne zapisy, deduplikację, zachowanie historycznych danych, datę warszawską, walidację, błędy magazynu, brak publicznego odczytu, sesje, odświeżenia i błędy sieci. Testy lokalne korzystają z izolowanego magazynu. Integrację Netlify sprawdzamy w odrębnym Deploy Preview, przed produkcją. Nie uruchamiamy masowych testów na produkcyjnych danych.

## Wysłane listy i loteria

Dotychczasowy magazyn `pp-letter-receipts` i obiekt `counter-v1` zachowują wszystkie listy i numery udziałów. W panelu Blobs pola total oraz lotteryTotal dają statystyki wysyłek i udziałów. Nie zerujemy danych. Dane listopadowe są stanem wyjściowym do porównania przed premierą. Zapis nadal następuje wyłącznie po poprawnym wysłaniu listu. Publiczna stopka nie wyświetla zbiorczego wyniku, a strona nie odczytuje licznika przy wejściu. GET istniejącej funkcji jest wyłączony; wynik loterii po świadomym wysłaniu nadal otrzymuje swój numer udziału.

W podglądach także dotychczasowy mechanizm loterii używa getDeployStore, aby próby nie zmieniały numerów produkcyjnych. To zmiana izolacji podglądów, bez zmiany formatu danych produkcyjnych i reguł wygranej.

Wersja opublikowana: 0.2.1; wyniki publikacji poniżej.

## Nowe otwarcie listu

Imię, wiadomość, worek i ekran sukcesu istnieją w pamięci aktualnego dokumentu. Nowe wejście otwiera pusty formularz na początku. Od 0.2.1 nowe wejście tworzy także nowy identyfikator listu; odświeżenie zachowuje identyfikator bieżącej próby, aby ponowienie nie dublowało wysyłki. Nie zmieniamy reguł loterii ani historycznych numerów.

## Wyniki podglądu i model kosztowy — 25 listopada

Krzyżówka: 47/47 testów lokalnych. Przejścia PL i EN dały ANIOŁEK/PRESENT; oba zapisy dotyczyły jednego potwierdzenia w osobnym magazynie podglądu 6b06e7eab905113a19344da7. Odczyt dziennych wizyt pokazał 3 wpisy i nadal 3 po ponownym odświeżeniu karty. Nowe wejście wróciło do pytania 1 i pustej odpowiedzi; reload zachował pytanie i szkic KON. Axe w nowym stanie początkowym: 0 naruszeń i 0 wyników niejednoznacznych.

Lista: pełny npm test zaliczony. W podglądzie 6b06e9c407ba2f3c5ed0246e nowy link otworzył pusty formularz i worek oraz ukryty sukces. Pierwsza próba miała numer udziału 1, drugie nowe wejście 2; ponowienie po reload nadal 2. Zbiorczy wynik jest ukryty, loteria działa w PL i EN. Zapisy podglądu są odrębne od danych produkcyjnych.

Logi Netlify potwierdziły status 204 dla wizyt i 200 dla ukończeń. W małej próbce rzeczywista operacja funkcji visits trwała około 0,165 s w krzyżówce i 0,737 s w liście, przy 1024 MB pamięci. Nie jest to test obciążeniowy ani gwarancja takiej samej latencji przy dowolnym ruchu.

Konserwatywny model jednej wizyty z ukończeniem: 0,5 MB transferu, 12 żądań HTTP łącznie oraz 2 funkcje po 2 sekundy przy 1 GB. Przy stawkach 20 kredytów/GB, 2/10 000 żądań i 10/GB-godzinę daje to około 23,6 kredytu na 1000 wizyt; 5000 wizyt łącznie na obu stronach to około 118 kredytów. Samych dwóch funkcji w tym modelu jest około 56 kredytów przy 5000 ukończonych wizyt, bez wielominutowego utrzymywania bazy. To scenariusz do planowania, nie stały limit osób: odświeżenia, ponowienia, boty i reszta ruchu zespołu zmieniają rachunek.

Model kosztowy należy porównać z aktualnym prywatnym saldem właścicielki. To scenariusz planowania, nie gwarancja frekwencji. Odnowienie kredytów i ewentualną zmianę planu sprawdza się w panelu Netlify.

Opcja miesięczna sprawdzona w dokumentacji: Personal 9 USD/miesiąc z 1000 kredytów, Pro od 20 USD z 3000. Powrót na Free następuje od następnego cyklu. Dokładna kwota z podatkami i termin końca płatnego okresu muszą być sprawdzone przed zakupem. Pozostawić auto recharge wyłączone. Źródła: https://www.netlify.com/pricing/ oraz https://docs.netlify.com/manage/accounts-and-billing/billing/change-your-pricing-plan/ .

Odpowiedź publicznej funkcji listu zawiera wyłącznie numer bieżącego listu, numer jego udziału i interwał loterii. Pola globalne total i lotteryTotal nie są udostępniane; GET pozostaje wyłączony.

## Potwierdzona publikacja — 25 listopada 2026

Lista życzeń 0.2.1 została opublikowana ze statusem ready: commit 1fe06d2803d1b94c3dea363595ef5f3e2a3d2b2c, deploy 6b06ec00ebd5fc190804c981. Krzyżówka 0.3.1: commit 04054ed361d2a5fa4154425c31ba6f652d6b030a, deploy 6b06ec1728cf8d13024980ff. Obie są bieżącymi wersjami produkcyjnymi.

Pełny npm test listy zaliczony, w tym 20 przypadków node:test oraz skrypty formularza, czatu, tłumaczeń, timera i wydania. Po publikacji potwierdzono pusty formularz na nowym wejściu, ukryty publiczny licznik i zachowanie istniejących danych. Nowe prywatne magazyny wizyt działają w obu projektach. Publiczne próby GET obu endpointów statystyk zwracają 405, bez agregatów.

Pełne przejścia listu i loterii wykonano w izolowanych podglądach. Weryfikacja produkcji nie dopisywała sztucznych wysyłek ani ukończeń. Wyniki właścicielki i rozliczenie konta pozostają prywatne. Testy ekranowe wykonano w Chromium; nie wykonano w tej sesji testów NVDA, VoiceOver ani TalkBack na urządzeniach fizycznych.

Zmiana samej dokumentacji ma oznaczenie [skip netlify], aby nie uruchamiać kolejnego płatnego wydania.
