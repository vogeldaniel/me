import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import styled from "styled-components";
import Software from "./Software.js";
import Stories from "./Stories.js";

const Boop = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 70vw;
  justify-content: center;
  align-content: center;
`;

const Wrapper = styled.div`
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
    <Wrapper>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="page"
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/portfolio" component={Software} />
              <Route exact path="/portfolio/software" component={Software} />
              <Route exact path="/portfolio/stories" component={Stories} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}

const AddedRouter = withRouter(Container);

const Portfolio = () => {
  return (
    <>
      <AddedRouter />
    </>
  );
};

export default Portfolio;
