import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import styled from "styled-components";
import Software from "./Software.js";
import Stories from "./Stories.js";

/*
Holds the routing and animation information for the routes inside the portfolio.
 */
const Portfolio = () => {
  /*
  CSSTransitionGroup applies these animations to correspond with its classNames prop.
   */
  const PageAnimationBox = styled.div`
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

  /*
  Passes the location from withRouter down to CSSTransition and the switch.
   */
  function PortfolioRouting({ location }) {
    return (
      <PageAnimationBox>
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames="page"
          >
            <section className="route-section">
              <Switch location={location}>
                <Route path="/portfolio/software" component={Software} />
                <Route path="/portfolio/stories" component={Stories} />
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
      </PageAnimationBox>
    );
  }

  /*
  Add the router really quick.
   */
  const AddedRouter = withRouter(PortfolioRouting);

  return <AddedRouter />;
};

export default Portfolio;
