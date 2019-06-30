import React from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import styled from "styled-components";
import Navbar from "../components/Navbar.js";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Welcome from "./Welcome.js";

class About extends React.Component {
  render = () => {
    return (
      <>
        <Boop>
          <h1>TODO: About</h1>
        </Boop>
      </>
    );
  };
}

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  div.transition-group {
    position: relative;
  }

  section.route-section {

  }
`;

function Container({ location }) {
  return (
    <Wrapper>
      <TransitionGroup className="whole-page">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 450, exit: 150 }}
          classNames="page"
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={Welcome} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}

export default withRouter(Container);

const Boop = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

function Portfolio() {
  return (
    <Boop>
      <p>TODO: Portfolio</p>
    </Boop>
  );
}

function Contact() {
  return (
    <Boop>
      <p>TODO: Contact</p>
    </Boop>
  );
}
