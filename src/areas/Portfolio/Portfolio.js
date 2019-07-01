import React, { Component } from 'react';

import styled from "styled-components";

const Boop = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

class Portfolio extends Component {

  render() {
    return (
      <>
        <Boop>
          <h1>TODO: Portfolio</h1>
        </Boop>
      </>
    );
  }

}

export default Portfolio;
