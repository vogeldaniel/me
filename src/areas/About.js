import React, { Component } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";


const Boop = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
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
          <Fade delay={750}>
            <BlockText>
            Singulis elit e cernantur consectetur. Cupidatat sint mentitum, ex ex magna esse
            illum, quorum admodum ut sempiternum si eu quid coniunctione se est magna dolore
            nisi deserunt ad in export litteris adipisicing, quis admodum reprehenderit iis
            aliquip et litteris. Excepteur legam ullamco. Minim incurreret eu illum
            magna.Laborum quae offendit. Aute arbitror de transferrem. Fugiat fabulas qui
            elit multos. Quis ex sed dolore ullamco.
            </BlockText>
          </Fade>
        </Boop>
      </>
    );
  }
}
