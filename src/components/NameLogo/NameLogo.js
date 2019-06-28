import React from "react";
import Zoom from "react-reveal/Zoom";
import styled from "styled-components";

/**
 *
 * Presents my name as an animation with each letter animated.
 * @type {Object}
 */
export default class NameLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
    this.flipState();
    setInterval(this.flipState, 4000);
  }

  flipState = () => {
    this.setState({ visible: !this.state.visible });
  };

  render = () => {
    return (
      <h1>
        <Zoom left cascade when={this.state.visible} duration={1500}>
          Daniel
        </Zoom>
        <Zoom right cascade when={this.state.visible} duration={1500}>
          Vogel
        </Zoom>
      </h1>
    );
  };
}
