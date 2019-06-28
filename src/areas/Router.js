import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import styled from "styled-components";
import Navbar from "../components/Navbar.js";

import Welcome from "./Welcome.js";

/*
Animation for react-router-transition.
 */
const slideIn = {
  atEnter: {
    opacity: 0,
    translateX: -100,
    offset: 0
  },
  atLeave: {
    opacity: 0,
    translateX: -100,
  },
  atActive: {
    opacity: 1,
    translateX: 0,
  }
}

/*
This maps styles for react-router-transition.
 */
function mapStyles(styles){
  return {
    transform: `translateX(${styles.translateX}%)`,
    opacity: styles.opacity
  }
}

export default function Routing() {
  return (
    <Router>
      <AnimatedSwitch
        atEnter={slideIn.atEnter}
        atLeave={slideIn.atLeave}
        atActive={slideIn.atActive}
        mapStyles={mapStyles}
        className="switch-wrapper"
      >
        <Route path="/" exact component={Welcome} />
        <Route path="/about" component={MusicTODO} />
        <Route path="/portfolio" component={JournalismTODO} />
        <Route path="/contact" component={SoftwareTODO} />
      </AnimatedSwitch>
      <Navbar />
    </Router>
  );
}

const Boop = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`

function MusicTODO() {
  return (
    <Boop>
      <p>TODO: About</p>
    </Boop>
  );
}

function JournalismTODO() {
  return (<Boop>
    <p>TODO: Portfolio</p>
  </Boop>);
}

function SoftwareTODO() {
  return (<Boop>
    <p>TODO: Contact</p>
  </Boop>);
}
