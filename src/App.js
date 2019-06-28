import React from "react";
import "./App.css";
import Welcome from "./areas/Welcome.js";
import Navbar from "./components/Navbar.js";
import styled from "styled-components";
import { AnimatedSwitch } from "react-router-transition";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const slideIn = {
  atEnter: {
    opacity: 0,
    translateX: 100,
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

function mapStyles(styles){
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.translateX})`,
  }
}

function App() {
  return (
    <div className="App">
      <Routing />
    </div>
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
  return <p>TODO: Journalism page.</p>;
}

function SoftwareTODO() {
  return <p>TODO: Software page.</p>;
}

function Routing() {
  return (
    <Router>
      <AnimatedSwitch
        atEnter={slideIn.atEnter}
        atLeave={slideIn.atLeave}
        atActive={slideIn.atActive}
        mapStyles={styles => ({
          transform: `translateX(${styles.translateX}%)`,
          opacity: styles.opacity
        })}
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

export default App;
