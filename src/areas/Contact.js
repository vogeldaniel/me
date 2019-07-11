import React from "react";

import styled from "styled-components";
import AreaPage from "../components/AreaPage.js";

const Title = styled.h1`
  font-size: calc(36px + 2vmin);
  text-align: left;
`;

const contactLink = (text, destination) => {

  const LinkStyle = styled.a`
    font-size: calc(18px + 1vmin);
    text-align: left;
  `;

  return <LinkStyle href={destination}>{text}</LinkStyle>;
};

const Contact = () => {
  return (
    <>
      <AreaPage>
        <Title>Let's talk.</Title>
        {contactLink("Shoot me an email.", "mailto:danieljohnvogel@gmail.com")}
        {contactLink("Connect with me on LinkedIn.", "https://www.linkedin.com/in/daniel-v-95b97a183")}
        {contactLink("Check out my github.", "https://github.com/vogeldaniel")}
      </AreaPage>
    </>
  );
}

export default Contact;
