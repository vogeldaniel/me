import React, { Component } from "react";
import styled from "styled-components";

const Boop = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 70vw;
  justify-content: center;
`;

const BlockText = styled.p`
  text-align: left;
`

export default class About extends Component {
  render() {
    return (
      <>
        <Boop>
          <h1>About.</h1>
          <BlockText>
          Quo tamen cupidatat proident e ubi aut aliqua incurreret an hic cupidatat ne
          offendit do noster ut ab dolor nescius ab ut quis tamen do excepteur ut
          cernant.
          </BlockText>
        </Boop>
      </>
    );
  }
}
