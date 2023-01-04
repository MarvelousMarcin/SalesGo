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
};

export const languageSlice = createSlice({
  name: "languageSlice",
  initialState: {
    lang: "ENU",
  },
  reducers: {
    switchLanguage: (state) => {
      if (state.lang === "ENU") {
        state.lang = "PLK";
      } else {
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
