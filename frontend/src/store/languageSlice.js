import { createSlice } from "@reduxjs/toolkit";

const dictionary = {
  Orders: { PLK: "Zamówienia", ENU: "Orders" },
  Quality: { PLK: "Jakość", ENU: "Quality" },
  Offerts: { PLK: "Oferty", ENU: "Offerts" },
  "Most Popular": { PLK: "Najbardziej popularne", ENU: "Most Popular" },
  "Least Popular": { PLK: "Najmniej popularne", ENU: "Least Popular" },
  "Choose shop": { PLK: "Wybierz sklep", ENU: "Choose shop" },
  "Logged as": { PLK: "Zalogowany jako:", ENU: "Logged as" },
  "Not paid": { PLK: "Niezapłacone", ENU: "Not paid" },
  "Not delivered": { PLK: "NIedostarczone", ENU: "Not delivered" },
  Returned: { PLK: "Zwrócone", ENU: "Returned" },
  "Log out": { PLK: "Wyjdź", ENU: "Log out" },
  Reviews: { PLK: "Opinie", ENU: "Reviews" },

  All: { PLK: "Wszystkie", ENU: "All" },
  Positive: { PLK: "Pozytywne", ENU: "Positive" },
  Negative: { PLK: "Negatywne", ENU: "Negative" },
  "Sales Daily Advices": {
    PLK: "Porady sprzedażowe",
    ENU: "Sales Daily Advices",
  },
  "You are getting more and more negative opinions. Watch out!": {
    PLK: "Dostajesz coraz więcej negatywnych opini. Uważaj!",
    ENU: "You are getting more and more negative opinions. Watch out!",
  },
  "Product Table is getting more and more popular": {
    PLK: "Produkt Stół jest coraz bardzej popularny.",
    ENU: "Product Table is getting more and more popular",
  },
  Chart: { PLK: "Wykres sprzedaży", ENU: "Chart" },
  "Sold items": { PLK: "Sprzedane produkty", ENU: "Sold items" },
  Cycle: { PLK: "Obrót", ENU: "Cycle" },
  Name: { PLK: "Nazwa", ENU: "Name" },
  Foto: { PLK: "Zdjęcie", ENU: "Foto" },
  Price: { PLK: "Cena", ENU: "Price" },
  Kidness: { PLK: "Obsłużenie", ENU: "Kidness" },
  Speed: { PLK: "Szybkość", ENU: "Speed" },
  Good: { PLK: "Dobrze", ENU: "Good" },
  Bad: { PLK: "Źle", ENU: "Bad" },
  Horrible: { PLK: "Tragicznie", ENU: "Horrible" },
  Perfect: { PLK: "Perfekcja", ENU: "Perfect" },
  Communication: { PLK: "Komunikacja", ENU: "Communication" },
  "Service Quality": { PLK: "Obsługa", ENU: "Service Quality" },
  Proffesional: { PLK: "Profesjonalizm", ENU: "Proffesional" },
  "Unique Views": {
    PLK: "Liczba unikalnych wyświetleń",
    ENU: "Unique Views",
  },
  "No avaiable offerts to show.": {
    PLK: "Brak dostępnych ofert",
    ENU: "  No avaiable offerts to show.",
  },

  "Not enough data to calculate your quality.": {
    PLK: "Za mała liczba danych aby policzyć twoją jakość.",
    ENU: "Not enough data to calculate your quality.",
  },

  "Your worst points": {
    PLK: "Twoje najgorsze punkty",
    ENU: "Your worst points",
  },
  Excellent: { PLK: "Wspaniale", ENU: "Excellent" },
};

const initState = () => {};

export const languageSlice = createSlice({
  name: "languageSlice",
  initialState: () => {
    if (localStorage.getItem("lang") === "ENU") {
      return { lang: "ENU" };
    } else if (localStorage.getItem("lang") === "PLK") {
      return { lang: "PLK" };
    } else {
      localStorage.lang = "PLK";

      return { lang: "PLK" };
    }
  },
  reducers: {
    switchLanguage: (state) => {
      if (state.lang === "ENU") {
        localStorage.lang = "PLK";
        state.lang = "PLK";
      } else {
        localStorage.lang = "ENU";
        state.lang = "ENU";
      }
    },
  },
});

export const displayValue = (label) => {
  return (dispatch, getState) => {
    const state = getState();
    const lang = state.language.lang;
    return dictionary[label][lang];
  };
};

export const actionsLanguage = languageSlice.actions;

export default languageSlice.reducer;
