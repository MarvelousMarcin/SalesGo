# Instrukcja - SalesGo

## 1. Wymagania

- npm

  > npm -v

- node.js
  > node -v

## 2. Uruchomienie

> Pobierze repozytorium

- git clone https://github.com/MarvelousMarcin/NoteShare
  > Pobierz wszystkie potrzene pakiety w foldrze backend
- cd backend
- npm i
  > i pobierz frontend
- cd frontend
- npm i
  > Aby backend działał prawidłowo musisz też dodać plik .env odpowiedną zawartością >
- PORT=4000
- JWT_TOKEN="super_secret_code"
  > Musisz uruchomić teraz frontend i backend
- backend: npm run dev
- frontend: npm start

## 3. Logowanie

Jeżeli masz konto po prostu wpisz swój unikalny kod sprzedawcy. Jeżeli login osoby nieistiejącej zostaniesz o tym poinformowany.

### Strona logowania

![alt text](./readme/login2.gif)

![alt text](./readme/error.png)

## 3. Rejestracja

Jeżeli konta nie masz możesz je zrobić. **Loginy nie mogą się powtarzać.**

### Strona rejestracji

![alt text](./readme/register.png)

## 3. Strona Główna Dashboard

Po wpisaniu prawidłowego loginu, zostaniesz przeniesiony na swoją stronę główną ze wszystkimi najważniejszymi danymi dla sprzedawcy.

### Strona rejestracji

![alt text](./readme/dashboard.png)

## 4. Widżet Zamówień

Widżet zamówień pokazuje trzy kategorie zamówień oraz liczbę takich zamówień w systemie. Mamy zamówienia nieopłacone, niedostarczone oraz zwrócone.

![alt text](./readme/orders.png)

## 5. Widżet Jakości

Widżet jakości pokazuję naszą ogólna ocenę jako sprzedawca a wraz z nią jedną z 5 kategorii. Na ocenę składają się tzw. aspekty jakości z których wyliczana jest średnia - **końcowa ocena jakości**. Dodatkowo z prawej strony mamy zaprezentowane trzy aspekty w których wypadamy najgorzej.
Dostępne kategorie do uzyskania:

- Perfect - Perfekcja
- Excellent - Wspaniale
- Good - Dobrze
- Bad - Źle
- Horrible - Tragicznie

### Kategoria - **Dobrze**

![alt text](./readme/quality1.png)

### Kategoria - **Źle**

![alt text](./readme/quality2.png)

## 6. Widżet Ofert

Widżet ofert pokazuje nam 5 najbardzije popularnych lub najmniej popularnych ofert. Rodzaj sortownia możemy sobie ręcznie ustawić. Tabela prezentuje nam nazwę, zdjęcie, liczbę sprzedanych produktów oraz liczbę wyświetleń lub obrót oferty.

![alt text](./readme/offerts.gif)

## 7. Widżet Opinii

Widżet opinii prezentuje pięc opinii dotyczących sprzedawcy. Możemy wybrać filtrowanie opinii tylko pozytywnych, wszystkich lub tylko negatywnych.

![alt text](./readme/reviews.gif)

## 8. Widżet Wykresu Sprzedaży

Wykres sprzedaży pokazuje nam statystykę odnośnie naszych zamówień. Możemy go parametryzować przy użyciu opcji dookoła.

> **Wybrać Obrót lub Liczbę sprzedanych produktów** ![alt text](./readme/data.gif)

> **Wybrać dane z Dzisiaj, Tego Tygodniu lub Tego Roku** ![alt text](./readme/rage.gif)

> **Wybrać typ wykresu - Słupkowy lub liniowy** ![alt text](./readme/type.gif)

## 9. Widżet Porad Sprzedażowych

W wydżecie możemy znaleźć porady dotyczące naszych działań, generowane automatycznie bazując na naszych ofertach oraz zamówieniach.

![alt text](./readme/advices.png)

## 4. Dark Mode

### Włączanie Dark Mode

![alt text](./readme/darkmode.gif)

## 4. Zmiana języka

### Zmiana języka na polski

![alt text](./readme/lang.gif)
