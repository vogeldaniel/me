import React from "react";
//import MaterialIcon from "material-icons-react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const WelcomeScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90vh;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: calc(24px + 2vmin);
  text-align: center;
  margin: 0em 2vw 0em 2vw;
`;

const BlockText = styled.p`
  text-align: center;
  margin: 1em 2vw 0em 2vw;
  font-size: calc(14px + 1vmin);
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const TagWrap = props => {
  return (
    <Line>
      <Fade left delay={750}>
        <BlockText>&lt;{props.tag}&gt;</BlockText>
      </Fade>
      {props.children}
      <Fade right delay={750}>
        <BlockText>&lt;/{props.tag}&gt;</BlockText>
      </Fade>
    </Line>
  );
};

export default class Welcome extends React.Component {
  render = () => {
    return (
      <div>
        <WelcomeScreen>
          <TagWrap tag="h1">
            <Title>Hi, I'm Daniel.</Title>
          </TagWrap>
          <TagWrap tag="p">
            <BlockText>I build software.</BlockText>
          </TagWrap>
        </WelcomeScreen>
      </div>
    );
  };
}
