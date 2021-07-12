import React, { useReducer, createContext } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import HomeComp from "./programTest/HomeComp";
import LoginComp from "./programTest/LoginComp";
import MenuComp from "./programTest/MenuComp";
import RegisterComp from "./programTest/RegisterComp";
import ContextComp from "./programTest/ContextComp";
import BlankComp from "./programTest/BlankComp";

// Context
export const AuthContext = createContext();

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

export default function CheckLogin2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("DataStateAwal: ", state);
  console.log("state.isAuthenticated", state.isAuthenticated);
  return (
    <BrowserRouter>
      <Switch>
        <AuthContext.Provider
          value={{
            state,
            dispatch,
          }}
        >
          <MenuComp />
          {!state.isAuthenticated ? (
            <Redirect to={{ pathname: "/" }} />
          ) : (
            <Redirect to={{ pathname: "/home" }} />
          )}

          <Route exact path="/" component={LoginComp} />
          <Route exact path="/home" component={HomeComp} />
          <Route exact path="/register" component={RegisterComp} />
          <Route exact path="/context" component={ContextComp} />
          <Route exact path="/blankpage" component={BlankComp} />
        </AuthContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}
