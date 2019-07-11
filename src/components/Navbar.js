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
    <NavLink exact to={destination} style={linkStyle} activeStyle={activeStyle}>
      {text}
    </NavLink>
  );
};

function OldNavbar() {
  return (
    <>
      <Navbox>
        <NavMain>
          <NavLink exact to={"/me"} style={linkStyle} activeStyle={activeStyle}>
            Home
          </NavLink>
          {createNavLink("About", "/about")}
          {createNavLink("Portfolio", "/portfolio")}
          {createNavLink("Contact", "/contact")}
        </NavMain>
        <Route path="/portfolio" component={PortfolioNav} />
        <BackBlocker />
      </Navbox>
    </>
  );
}

const NavbarBox = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  width: 80vw;
  margin-left: 10%;
`;

function Navbar() {
  return (
    <NavbarBox>
      <Route path="/portfolio" component={PortfolioNav} />
      <NavMain>
        <NavLink exact to={"/me"} style={linkStyle} activeStyle={activeStyle}>
          Home
      </NavLink>
        {createNavLink("About", "/about")}
        {createNavLink("Portfolio", "/portfolio")}
        {createNavLink("Contact", "/contact")}
      </NavMain>
      <BackBlocker />
    </NavbarBox>
  )
}

const TopGradient = styled.div`
  background-image: linear-gradient(rgba(255,255,255,0),white);
  height: 0.5vh;
  width: 70vw;
  margin: 0 15vw 5.4em 15vw;
  position: fixed;
  bottom: 0;
  align-self: center;
`;

const BackBlocker = styled.div`
  width: 100vw;
  height: 3em;
  position: fixed;
  background-color: white;
  bottom: 0;
`;

/*
Just above the root-level tag. Holds the whole functional navigation bar.
 */
const Navbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  left: 15%;
  height: 2em;
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
  justify-content: space-around;
  border-bottom: 1px solid black;
  margin: 0 0 3em 0;
  background-color: white;
  border-top: 1px groove black;
`;

/*
A white centered div placed under the navbar.
Makes it seem like the page scrolls in the middle.
 */
const BottomBlocker = styled.div`
  width: 100vw;
  height: 4em;
  position: fixed;
  bottom: 0;
  align-self: center;
`;

export default Navbar;
