import React from "react";
import { HashRouter, Route, Switch, withRouter } from "react-router-dom";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Welcome from "./Welcome.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Portfolio from "./Portfolio/Portfolio.js";

const RouterAnimationBox = styled.div`
  .page-enter {
    opacity: 0;
    transform: translateX(100vw);
    position: absolute;
  }

  .page-enter-done {
    transform: translateX(0);
    opacity: 1;
    transition: all 200ms linear 100ms;
  }

  .page-exit {
    transform: translateX(0vw);
    opacity: 1;
  }

  .page-exit-active {
    transform: translateX(-100vw);
    opacity: 0;
    transition: all 300ms linear;
  }

  div.transition-group {
    position: relative;
  }
`;

function Container({ location }) {
  return (
    <HashRouter>
      <RouterAnimationBox>
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames="page"
          >
            <section className="route-section">
              <Switch location={location}>
                <Route exact path="/me" component={Welcome} />
                <Route path="/about" component={About} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
      </RouterAnimationBox>
    </HashRouter>
  );
}

export default withRouter(Container);
