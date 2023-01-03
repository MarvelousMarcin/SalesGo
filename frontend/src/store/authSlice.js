import { createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

const getCookieOnInit = () => {
  const cookies = new Cookies();
  const token = cookies.get("token");

  if (token) {
    return { token, userId: "", isLogged: true };
  } else {
    return { token, userId: null, isLogged: false };
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
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    logOut: (state) => {
      state.isLogged = false;
      state.token = "";
      const cookies = new Cookies();
      cookies.remove("token");
    },
  },
});

export const login = (id) => {
  return async (dispatch) => {
    if (!id) {
      return { error: "Empty input" };
    }

    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const data = await response.json();
    if (response.ok) {
      dispatch(authSlice.actions.setToken(data.token));
      dispatch(authSlice.actions.setIsLogged(true));
      dispatch(authSlice.actions.setUserId(id));
    }
    return data;
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
