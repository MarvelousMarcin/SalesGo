# Anliza MoSCoW

## Must have

### Panel Logowania - 4h

```
W ramach panelu logowania uwzględniamy zarówno projekt wizualny jak i samą implementację. Stworzenie
panelu technicznie, będzie zadaniem prostym oraz schematycznym. Potrzebna będzie strona, która pozwoli
użytkownikowi wejść do aplikacji przy użyciu swojego loginu. Jest to element często powtarzany i nie wymaga
dużych nakładów pracy. Jest jednak niezbędny do podziału prac na wielu pracowników. Warto też uwzględnić
system sesji, czyli przechowywania gdzieś informacji o zalogowaniu użytkownika, aby ten nie musiał za
każdym razem się logować po zamknięciu karty.
```

### Panel Rejestracji - 4h

```
Tutaj również zakładamy prace związane samym designem, dokumentacją oraz zadaniami technicznymi. Tak
jak w przypadku logowania zadanie jest powtarzalne i pozwoli użytkownikowi na stworzenie konta o danym
id. W ramach dokumentacji prac praktycznie nie będzie. Design również będzie prosty do wykonania.
```

### Widget Zamówienia - 3h

```
Na tym widgecie, oczekiwane będą bardzo ogólne statystyki związane z zamówieniami. Ważny jest podział
na 3 kategorie: nieopłacone, niewysłanie i zwroty. Obok każdej kategorii oczekiwana jest liczba takich zamówień. Dodatkowo oczywiście po kliknięciu w kategorię oczekujemy podstrony z zamówieniami. Sam design,
dokumentacja i implementacja bardzo prosta oraz bez zaskoczeń. Trzeba uwzględnić takie sytuacje jak brak
zamówień w danej kategorii zupełny brak zamówień w danym okresie. Mały widget, bez większych funkcjonalności - bardziej informacyjny.
```

### Widget Jakość Sprzedaży - 6h

```
Widget na którym sprzedawca ma widzieć swoją ogólną ocenę jakości, budowaną na podstawie podkategorii(aspektów). Średnia suma punktów za aspekty generuje ocenę sprzedawcy - punktową oraz słowną.
Dodatkowo informacyjne dla sprzedawcy pokazujemy mu jego najgorsze trzy wyniki w ramach wszystkich
aspektów. Tutaj pracy jest całkiem dużo - zmieszczenie w designie dobrze całkiem dużej liczby informacji
oraz stworzenie całego systemu wyliczającego ocenę - sumując aspekty. Element trudny technicznie. Oczywiście potrzebna jest też zaślepka która po kliknięciu, przekieruje nas na stronę jakości sprzedaży. Trzeba też
wziąć pod uwagę liczenie jakości w sytuacji bardzo małej liczby danych lub jej braku.
1.5. Widget Opinie kupujących - 4h
Widget prezentujący pięć recenzji danego sprzedawcy. Recenzja zawiera przede wszystkich ocenę gwiazdkową
od 1 do 5 oraz opcjonalny komentarz autora. Ważnym elementem jest też odfiltrowanie tych recenzji w ramach
trzech kategorii - wszystkie, pozytywne i negatywne. Przewidzieć sytuacje braku komentarzy - w każdej z
kategorii.
```

### Widget Ranking Ofert - 8h

```
W tym miejscu wymagana jest tabela, umożliwiająca posortowanie danych według najczęściej kupowanych
i najrzadziej. Ma tam być 5 ofert. W tabeli potrzebne są informacje o nazwie produktu, jego zdjęcie oraz w
zależności od trybu sortowania - Liczba Sprzedanych Sztuk oraz Obrót w sytuacji sortowania od najczęściej
kupowanych i Liczba sprzedanych sztuk oraz liczba unikatowych wyświetleń w przypadku sortowania od
najrzadziej kupowanych. Przewidzieć sytuację braku ofert. Dosyć wymagający element zarówno designersko
jak i programistycznie. Trzeba dobrze przemyśleć sposób przechowywania danych oraz wyraźnej i przejrzystej
ich prezentacji.
```

### Widget Wykres sprzedaży - 10h-12h

```
Najbardziej złożony widget na którym musi znaleźć się wykres w dwóch wersjach kolumnowej lub liniowej
w zależności od preferencji użytkownika. Wykres przedstawia Obrót lub Liczbę Sprzedanych Sztuk - również
użytkownik ma wybór. Dodatkowo oferujemy możliwość zmiany przedziału czasowego w ramach trzech trybów Dziś, Obecny tydzień, Poprzedni tydzień. Trzeba wziąć pod uwagę zaznaczenie na wykresie punktów
w okresie który się jeszcze nie zakończył oraz dać możliwość użytkownikowi na włączenie dodatkowej serii
danych, prezentujących dane z poprzedniego okresu. Tutaj mamy całkiem sporo pracy, zarówno designerskiej
oraz developerskiej. Wykres musi być przejrzysty oraz działać szybko i dobrze zbierać dane. Dokumentacja
również powinna uwzględniać miejsce przetrzymywania danych oraz przewidzieć wszelkie zmiany parametrów
wykresu.
```

### Widget Porady sprzedażowe - 3h-4h

```
Prosty wideget przedstawiający dwie wygenerowane porady odnośnie ostatnich wyników sprzedażowych.
Porady mają być generowane na podstawie danych trzymanych w systemie i powinny być unikatowe oraz
różnorodne. W ramach designu stosunkowo mało prac tak samo z dokumentacją. Developersko wyzwaniem
będzie sam proces generacji, ponieważ musimy wszystkie dane przeanalizować i wybrać najlepszą możliwą
poradę. tych porad ale samo UI nie powinno być problematyczne.
```

### Dostęp w dwóch językach(polski i angielski) - 6h

```
Chcemy aby aplikacja była dostępna w dwóch język - polski i angielski. Jest to konieczność, ponieważ
aplikacja powinna być zrozumiała nie tylko dla Polaków. Najwięcej prac będzie związanych w ramach prac
developerskich. Koniecznie będzie w zależności od języka wybór odpowiedniej wartości labela. Brak prac po
stronie dokumentacji czy designu. Design może być po prostu w wersji angielskiej.
```

### Zmiana sklepu - 3h

```
Chcemy także aby użytkownik po wejściu mógł przełączać się pomiędzy różnymi sklepami w których jest
zarejestrowany. Umożliwi to rozróżnienie różnych asortymentów sklepu.
```

## Should have

### Dwa motywy kolorów(Ciemny i Jasny) - 6h

```
Element typowo wizualny, nie oferujący korzyści biznesowych. Jednak w obecnych czasach jest to element
przez klienta bardzo pożądany. Wymaga dodatkowego designu w dwóch wariantach oraz uwzględnienia tej
opcji w ramach prac developerskich. Podwójny design podwaja prace oraz wymaga od developera robienia
praktycznie dwóch rodzajów stylów. Użytkownik przy pomocy przycisku będzie mógł w prosty sposób dobrać
kolor strony, wedle własnych potrzeb.
2
```

## Could have

```
Brak takich wymagań
```

## Won’t have

```
Brak takich wymagań
```
