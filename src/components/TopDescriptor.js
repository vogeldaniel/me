import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: calc(48px + 1vmin);
  text-align: left;
  margin: 20vh 0vw 0em 0vw;
`;

const Description = styled.p`
  font-size: calc(18px + 1vmin);
  text-align: left;
  margin: 2em 0 5vh 0;
`;

const TopDescriptor = props => {
  return (
    <>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </>
  );
};

export default TopDescriptor;
