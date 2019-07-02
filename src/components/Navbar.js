import React from "react";
import styled from "styled-components";
import { NavLink, Route, withRouter } from "react-router-dom";
import PortfolioNav from "./PortfolioNav.js";
import { TransitionGroup, CSSTransition } from "react-transition-group";


const Navbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  left: 15%;
  justify-content: flex-start;
  position: fixed;
  margin: 0 0 3em 0;
`;

const NavMain = styled.div`
  display: flex;
  flex-direction: row;
  /*
  If the navbar is 70vw, then pushing it left 15%
  will center it
   */
  width: 70vw;
  left: 15%;
  justify-content: space-around;
  border-bottom: 1px solid black;
  margin: 0 0 3em 0;
  bottom: 0;
  background-color: white;
  position: fixed;
`;

const linkStyle = {
  textDecoration: "none",
  color: "black"
};

const activeStyle = {
  textDecoration: "none",
  color: "blue"
};

const createNavLink = (text, destination) => {
  return (
    <NavLink
      exact
      to={destination}
      style={linkStyle}
      activeStyle={activeStyle}
    >
      {text}
    </NavLink>
  );
};

function Navbar() {
  return (
    <Navbox>
      <NavMain>
        <NavLink
          exact
          to={"/"}
          style={linkStyle}
          activeStyle={activeStyle}
        >
          Home
        </NavLink>
        {createNavLink("About", "/about")}
        {createNavLink("Portfolio", "/portfolio")}
        {createNavLink("Contact", "/contact")}
      </NavMain>
      <Route path="/portfolio" component={PortfolioNav}/>
      <BottomBlocker/>
    </Navbox>
  )
}

const BottomBlocker = styled.div`
  width: 70vw;
  height: 3em;
  background-color: white;
  position: fixed;
  bottom: 0;
  align-self: center;
`

const AnimationWrapper = styled.div`
  .box-enter {
    opacity: 0;
    position: absolute;
  }

  .box-enter-done {
    opacity: 1;
    transition: all 2000ms;
  }

  .box-exit {
    opacity: 1;
  }

  .box-exit-active {
    transform: opacity;
    opacity: 0;
    transition: all 2000ms;
  }

  div.nav-box {
    position: relative;
  }
`;

export default Navbar;
