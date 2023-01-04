import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import darkModeReducer from "./darkModeSlice";
import languageReducer from "./languageSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    darkMode: darkModeReducer,
    language: languageReducer,
  },
});
