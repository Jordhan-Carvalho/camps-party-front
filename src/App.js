import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import CountdownPage from "./pages/CountdownPage/CountdownPage";
import Finished from "./pages/Finished";
import Login from "./pages/Login";
import PreRegistration from "./pages/PreRegistration";
import PreRegSuccess from "./pages/PreRegSuccess";
import Registration from "./pages/Registration";
import RegistrationTrail from "./pages/RegistrationTrail";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/pre-registration/success" component={PreRegSuccess} />
          <Route path="/pre-registration" component={PreRegistration} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/registration-trail" component={RegistrationTrail} />
          <Route path="/finished" component={Finished} />
          <Route path="/" exact component={CountdownPage} />
        </Switch>
      </Router>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
:root {
  --darkPurple: linear-gradient(116.82deg, #102542 0%, #48055F 50.52%, #A003A4 100%);
  --generalFont: 'Righteous', cursive;
  --formFont: 'Roboto', sans-serif;
}

body {
  font-family: var(--generalFont);
  color: white;
}

#root {
  height: 100vh;
  width: 100%;
  background: var(--darkPurple);
}

`;
