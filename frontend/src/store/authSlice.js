import { createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

const getCookieOnInit = () => {
  const cookies = new Cookies();
  const token = cookies.get("token");

  if (token) {
    return { token, isLogged: true };
  } else {
    return { token, isLogged: false };
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState: getCookieOnInit(),
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;

      const cookies = new Cookies();
      cookies.set("token", state.token);
    },
    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    },
    logOut: (state, action) => {
      state.isLogged = false;
      state.token = "";
      const cookies = new Cookies();
      cookies.remove("token");
    },
  },
});

export const login = (id) => {
  return async (dispatch, getState) => {
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const data = await response.json();

    if (response.ok) {
      dispatch(authSlice.actions.setToken(data.token));
      dispatch(authSlice.actions.setIsLogged(true));

      return true;
    }
    return false;
  };
};

export const register = (id) => {
  return async () => {
    const response = await fetch("http://localhost:4000/newuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const data = await response.json();

    if (response.ok) {
      return data.error;
    }
    return data.error;
  };
};

export const actions = authSlice.actions;

export default authSlice.reducer;
