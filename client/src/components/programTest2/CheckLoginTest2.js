import React, { createContext, useReducer } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

// import component
import LandingPage from "./LandingPage";
import UserAdmin from "./UserAdmin";

// Context
export const AppContext = createContext();

// initialState
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default function CheckLoginTest2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("DataStateAwal: ", state);
  console.log("state.isAuthenticated", state.isAuthenticated);

  return (
    <BrowserRouter>
      <AppContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        {!state.isAuthenticated ? <LandingPage /> : <UserAdmin />}
      </AppContext.Provider>
    </BrowserRouter>
  );
}
