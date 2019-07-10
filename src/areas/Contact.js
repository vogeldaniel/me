import React, { Component } from "react";

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
          <b>
            Work email:
            <a href="mailto:danieljohnvogel@gmail.com">
              danieljohnvogel@gmail.com
            </a>
          </b>
          <b>LinkedIn: https://www.linkedin.com/in/daniel-v-95b97a183</b>
          <b>Github:</b>
        </Boop>
      </>
    );
  }
}

export default Contact;
