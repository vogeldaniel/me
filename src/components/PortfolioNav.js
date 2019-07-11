import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Navbox = styled.div`
  display: flex;
  flex-direction: row;
  width: 80vw;
  justify-content: space-around;
  margin: 0.35em 0 4.3em 0;
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
    <>
      <TopGradient />
      <Navbox>
        {createNavLink("Software", "/portfolio/software")}
        {createNavLink("Stories", "/portfolio/stories")}
      </Navbox>
    </>
  );
};

const TopGradient = styled.div`
  background-image: linear-gradient(rgba(255, 255, 255, 0), white);
  height: 0.5vh;
  width: 80vw;
  margin: 0 15vw 5.4em 15vw;
  position: fixed;
  bottom: 0;
  align-self: center;
`;

export default PortfolioNav;
