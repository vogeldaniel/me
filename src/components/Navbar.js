import React from "react";
import styled from "styled-components";
import { NavLink, Route } from "react-router-dom";
import PortfolioNav from "./PortfolioNav.js";

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
  );
}

/*
The root-level tag. Holds the whole navigation bar.
 */
const Navbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  left: 15%;
  justify-content: flex-start;
  position: fixed;
  background-color: white;
  margin: 0 0 3em 0;
`;

/*
Holds the top line of the navbar.
 */
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
  position: fixed;
  background-color: white;
  border-top: 1px groove black;
`;

/*
A white centered div placed under the navbar.
Makes it seem like the page scrolls in the middle.
 */
const BottomBlocker = styled.div`
  width: 70vw;
  height: 3em;
  background-color: white;
  position: fixed;
  bottom: 0;
  align-self: center;
`

export default Navbar;
