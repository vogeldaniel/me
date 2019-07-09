import React, { Component } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Boop = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 70vw;
  justify-content: center;
  margin: 0em 5vw 0em 5vw;
`;

const Title = styled.h1`
  font-size: calc(48px + 2vmin);
  text-align: left;
  margin: 0em 2vw 0em 2vw;
`;

const BlockText = styled.p`
  text-align: left;
  margin: 1em 2vw 0em 2vw;
`

export default class About extends Component {
  render() {
    return (
      <>
        <Boop>
          <Title>Let's do great things together.</Title>
          <Fade delay={750}>
            <BlockText>
              Full-stack software development is about more than connecting the front-end to the back-end.
            </BlockText>
            <BlockText>
              Full-stack means connecting people with the data they care about. It means thinking about the user and their experience at every level of design. It means understanding and cleanly defining the relationship between data representation and presentation. It means clean code and thorough documentation.
            </BlockText>
            <BlockText>
              <b>I'm a full-stack software engineer.</b> Let's work together.
            </BlockText>
          </Fade>
        </Boop>
      </>
    );
  }
}
