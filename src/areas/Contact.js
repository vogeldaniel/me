import React, { Component } from 'react';

import styled from "styled-components";

const Boop = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: center;
`;

class Contact extends Component {

  render() {
    return (
      <>
        <Boop>
          <h1>Let's talk.</h1>
          <b>Work email:</b>
          <b>LinkedIN:</b>
          <b>Github:</b>
        </Boop>
      </>
    );
  }

}

export default Contact;
