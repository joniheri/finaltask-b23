import React from "react";

// import react-router-dom
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

// import react-audio-payer
import ReactAudioPlayer from "react-audio-player";

// import component
import NavbarMenuPublic from "./NavbarMenuPublic";

// import page
import DashboardPublic from "../../pages/DashboardPublic";

export default function LandingPage2() {
  return (
    <div>
      <NavbarMenuPublic />
      {/* Content */}
      <Switch>
        <Route exact path="/" component={DashboardPublic} />
      </Switch>
      {/* End Content */}

      {/* <ReactAudioPlayer
        src="../../music/NEFFEX-Graveyard.ogg"
        autoPlay
        controls
      /> */}
    </div>
  );
}
