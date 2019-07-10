import React from "react";
//import MaterialIcon from "material-icons-react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const WelcomeScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
  padding-bottom: 10vh;
`;

/*
const IconWithText = (text, iconName) => {
  const IconText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `;
  return (
    <IconText>
      <MaterialIcon icon={iconName} size="medium" />
      <p>{text}</p>
    </IconText>
  );
};
*/

const Title = styled.h1`
  font-size: calc(48px + 2vmin);
  text-align: left;
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

const LeftTag = props => {
  return (
    <Fade left delay={200}>
      <BlockText>&lt;{props.tag}&gt;</BlockText>
    </Fade>
  );
};

const RightTag = props => {
  return (
    <Fade right delay={200}>
      <BlockText>&lt;/{props.tag}&gt;</BlockText>
    </Fade>
  );
};

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
