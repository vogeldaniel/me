import React, { Component } from "react";

import styled from "styled-components";

const Boop = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: calc(36px + 2vmin);
  text-align: left;
`;

const contactLink = (text, destination) => {

  const LinkStyle = styled.a`
    font-size: calc(24px + 1vmin);
    text-align: left;
  `;

  return <LinkStyle href={destination}>{text}</LinkStyle>;
};

class Contact extends Component {

  render() {
    return (
      <>
        <Boop>
          <Title>Let's talk.</Title>
          {contactLink("Shoot me an email.", "mailto:danieljohnvogel@gmail.com")}
          {contactLink("Connect with me on LinkedIn.", "https://www.linkedin.com/in/daniel-v-95b97a183")}
          {contactLink("Check out my github.", "https://github.com/vogeldaniel")}
        </Boop>
      </>
    );
  }
}

export default Contact;
