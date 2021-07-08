import React, { useContext, useEffect, useState } from "react";

// import react-router-dom
import { BrowserRouter as Router, useHistory } from "react-router-dom";

// import component bootstrap
import { Button } from "react-bootstrap";

// import Components
import MainAdmin from "./MainAdmin";
import UserPeople from "./UserPeople";
import UserAdmin from "./UserAdmin";
import LandingPage from "./LandingPage";

export default function CheckLogin() {
  const [stateLogin, setStateLogin] = useState(false);
  // console.log("Status Login: ", stateLogin);
  return (
    <div>
      <Router>
        {stateLogin === true ? (
          <UserAdmin stateLogin={stateLogin} setStateLogin={setStateLogin} />
        ) : (
          <LandingPage stateLogin={stateLogin} setStateLogin={setStateLogin} />
        )}
      </Router>
    </div>
  );
}
