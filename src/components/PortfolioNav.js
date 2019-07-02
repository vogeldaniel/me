import React, { Component } from "react";
import styled from "styled-components";
import { NavLink, withRouter } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Navbox = styled.div`
  display: flex;
  flex-direction: row;
  width: 70vw;
  justify-content: space-around;
  border-bottom: 1px groove black;
  margin: 0 0 5em 0;
  bottom: 0;
  position: fixed;
  background-color: white;
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
    <Fade bottom big delay={250} duration={250}>
      <NavLink
        exact
        to={destination}
        style={linkStyle}
        activeStyle={activeStyle}
      >
        {text}
      </NavLink>
    </Fade>
  );
};

const PortfolioNav = () => {
  return (
    <Navbox>
      {createNavLink("Software", "/portfolio/software")}
      {createNavLink("Stories", "/portfolio/stories")}
      {createNavLink("Sounds", "/portfolio/sounds")}
    </Navbox>
  );
};

export default PortfolioNav;
