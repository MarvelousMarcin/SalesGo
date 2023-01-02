import { createSlice } from "@reduxjs/toolkit";

const initState = () => {
  localStorage.removeItem("theme");
  return false;
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    darkMode: initState(),
  },
  reducers: {
    setDarkMode: (state) => {
      state.darkMode = true;
      localStorage.theme = "dark";
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    setLightMode: (state) => {
      state.darkMode = false;
      localStorage.theme = "light";
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
});

export const actionsDarkMode = darkModeSlice.actions;

export default darkModeSlice.reducer;
