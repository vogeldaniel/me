import React from "react";
import MaterialIcon from "material-icons-react";
import styled from "styled-components";
import Navbar from "../components/Navbar.js"

const WelcomeScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
  padding-bottom: 10vh;
`;

const SectionOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 10vh;
  width: 100vw;
  background-color: orange;
`;

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

/*
const SectionOneBar = () => {
  return (
    <SectionOne>
      {IconWithText("software", "devices_other")}
      {IconWithText("stories", "web")}
      {IconWithText("sound", "music_video")}
    </SectionOne>
  );
};
*/

export default class Welcome extends React.Component {
  render = () => {
    return (
      <div>
        <WelcomeScreen>
          <h1>Hi, I'm Daniel.</h1>
          <p>Let's do great things together.</p>
        </WelcomeScreen>
      </div>
    );
  };
}
