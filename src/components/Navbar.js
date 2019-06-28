import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

/*
The bottom navbar for this lil app
 */

const Navbox = styled.div`
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
  position: fixed;
  bottom: 0;
`;

export default class Navbar extends React.Component {
  linkStyle = {
    textDecoration: "none",
    color: "black"
  };

  activeStyle = {
    textDecoration: "none",
    color: "blue"
  };

  createNavLink = (text, destination) => {
    return (
      <NavLink
        exact
        to={destination}
        style={this.linkStyle}
        activeStyle={this.activeStyle}
      >
        {text}
      </NavLink>
    );
  };

  render = () => {
    return (
      <Navbox>
        {this.createNavLink("Home", "/")}
        {this.createNavLink("About", "/about")}
        {this.createNavLink("Portfolio", "/portfolio")}
        {this.createNavLink("Contact", "/contact")}
      </Navbox>
    );
  };
}
