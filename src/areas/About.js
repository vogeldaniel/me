import React, { Component } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const About = () => {

  /*
  Holds the whole page.
   */
  const AboutPage = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;
    width: 80vw;
    justify-content: center;
  `;

  const Title = styled.h1`
    font-size: calc(36px + 2vmin);
    text-align: left;
    margin: 15vh 2vw 0em 2vw;
  `;

  const BlockText = styled.p`
    text-align: left;
    margin: 1em 2vw 0em 2vw;
    font-size: calc(min(12px, 2em));
  `;

  const BlockBox = styled.div`
    display: flex;
    flex-direction: column;
  `;

  /*
  Very tall bottomBlock for mobile devices.
   */
  const BottomBlock = styled.div`
    background-color: white;
    height: 20vh;
  `;

  return (
    <AboutPage>
      <Title>Let's do great things together.</Title>
      <BlockBox>
        <Fade delay={750}>
          <BlockText>
            Full-stack software development is about more than connecting the
            front-end to the back-end.
          </BlockText>
          <BlockText>
            Full-stack means connecting people with the data they care about. It
            means thinking about the user and their experience at every level of
            design. It means understanding and cleanly defining the relationship
            between data representation and presentation. It means clean code
            and thorough documentation.
          </BlockText>
          <BlockText>
            <b>I'm a full-stack software engineer.</b> Let's work together.
          </BlockText>
        </Fade>
        <BottomBlock />
      </BlockBox>
    </AboutPage>
  );
};

export default About;
