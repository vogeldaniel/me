import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 70vw;
  margin: 3em auto 3em auto;
  border-top: 2px groove black;
  /*background-color: grey;
  border-top: 1px groove black;
  border-bottom: 1px groove black;
  */
`;

const Title = styled.div`
  text-align: right;
  font-size: calc(28px + 2vmin);
`;

const Date = styled.div`
  text-align: right;
  font-size: calc(14px + 2vmin)
  font-style: italic;
  margin: 0 0 0.25em 0;
`;

const TitleAndDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  vertical-align: bottom;
`;

const Tools = styled.h3`
  text-align: right;
  margin: 0px 0px 0.25em 1em;
`;

const ImageBox = styled.div``;

const Description = styled.p`
  text-justify: inter-word;
  text-align: left;
  margin: 0em 0em 0em 3em;
  font-size: calc(12px + 1vmin);
`;

const DescriptionsBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageAndText = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 20vw;
  height: auto;
`;

export default class ProjectCard extends React.Component {
  DescriptionPoints = descriptions => {
    return descriptions.map(description => {
      return <Description>{description}</Description>;
    });
  };

  render = () => {
    return (
      <>
        <Card>
          <Title>{this.props.title}</Title>
          <Tools>{this.props.tools}</Tools>

          <Date>Fall 2018</Date>
          <ImageAndText>
            <ImageBox>
              <Image
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Sprague_squared_square.svg/1024px-Sprague_squared_square.svg.png"
                }
                alt={"church"}
              />
            </ImageBox>
            <DescriptionsBox>
              {this.DescriptionPoints(this.props.descriptions)}
            </DescriptionsBox>
          </ImageAndText>
        </Card>
      </>
    );
  };
}
