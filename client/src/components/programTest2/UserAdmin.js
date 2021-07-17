import React, { useState, useContext } from "react";

// import react-router-dom
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

// import react-audio-payer
import ReactAudioPlayer from "react-audio-player";

// import component bootstrap
import { Row, Col, Image } from "react-bootstrap";

// import component

// import page
import Dashboard from "../../pages/Dashboard";
import AddMusic from "../../pages/AddMusic";
import AddArtis from "../../pages/AddArtis";
import Transaction from "../../pages/Transaction";
import NavbarMenu from "./NavbarMenuAdmin";
import { AppContext } from "./CheckLoginTest2";

// import img
// import LogoShapes from "../../img/LogoShapes.png";
// import Ellipse2 from "../../img/Ellipse2.png";
// import DUMBSOUND from "../../img/DUMBSOUND.png";
// import Vector1 from "../../img/Vector1.png";
// import Vector2 from "../../img/Vector2.png";
// import Vector3 from "../../img/Vector3.png";

export default function UserAdmin({ stateLogin, setStateLogin }) {
  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);
  const { state, dispatch } = useContext(AppContext);

  const onSwitchLogin = () => {
    setRegisterShow(false);
    setLoginShow(true);
  };
  const onSwitchRegister = () => {
    setRegisterShow(true);
    setLoginShow(false);
  };

  // console.log("Statsu Lgon LandingPage: ", stateLogin);

  return (
    <div style={{ overflow: "hidden" }}>
      <NavbarMenu />
      {/* Content */}
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/transaction" component={Transaction} />
        <Route exact path="/addmusic" component={AddMusic} />
        <Route exact path="/addartis" component={AddArtis} />
      </Switch>
      {/* End Content */}
      {/* <ReactAudioPlayer
        src="../../music/NEFFEX-Graveyard.ogg"
        autoPlay
        controls
        style={{
          position: "fixed",
          left: "0",
          bottom: "0",
          width: "100%",
        }}
      /> */}
    </div>
  );
}
