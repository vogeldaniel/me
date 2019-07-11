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
<<<<<<< HEAD
    font-size: calc(18px + 1vmin);
=======
    font-size: calc(24px + 1vmin);
>>>>>>> 23c1c2e9ec15e22e80048bd12d51966086a4b3db
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
