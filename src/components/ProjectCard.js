import React from "react";
import styled from "styled-components";
import Fade from "react-reveal";

const Card = styled.div`
  width: 70vw;
  margin: 1em auto 3em auto;
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

const LinkTitle = styled.a`
  text-align: right;
  font-size: calc(28px + 2vmin);
  font-decoration: none;
  color: black;
  text-decoration: none;
`;

const LinkTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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

const Subhead = styled.h3`
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

const StoryDescription = styled.p`
  text-justify: inter-word;
  text-align: left;
  margin: 0em 0em 0em 3em;
  font-size: calc(12px + 1vmin);
  text-indent: 2em;
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
      return <Description>{"•" + description}</Description>;
    });
  };

  StoryParagraphs = stories => {
    return stories.map(story => {
      return (
        <>
          <StoryDescription>{story}</StoryDescription>
          <br />
        </>
      );
    });
  };

  DescriptionRender = (cardType, descriptions) => {
    if (cardType === "software") {
      return this.DescriptionPoints(descriptions);
    } else if (cardType === "stories") {
      return this.StoryParagraphs(descriptions);
    } else {
      return <Description>{descriptions}</Description>;
    }
  };

  TitleRender = (cardType, title, URL = null) => {
    if (cardType === "stories") {
      return <LinkTitleBox><LinkTitle href={URL}>{title}</LinkTitle></LinkTitleBox>;
    } else {
      return <Title>{title}</Title>;
    }
  };

  ImageRender = (cardType, imageURL = "", imageAlt = "", linkURL = "") => {
    if (cardType === "stories") {
      return (
        <a href={linkURL}>
          <Image src={imageURL} alt={imageAlt} />
        </a>
      )
    } else {
      return (
        <Image src={imageURL} alt={imageAlt} />
      )
    }
  }

  render = () => {
    return (
      <>
        <Card>
          {this.TitleRender(
            this.props.cardType,
            this.props.title,
            this.props.URL
          )}
          <Subhead>{this.props.subhead}</Subhead>
          <Date>{this.props.date}</Date>
          <ImageAndText>
            <div>
              {this.ImageRender(this.props.cardType, this.props.imageURL, this.props.imageAlt, this.props.URL)}
            </div>
            <DescriptionsBox>
              {this.DescriptionRender(
                this.props.cardType,
                this.props.descriptions
              )}
            </DescriptionsBox>
          </ImageAndText>
        </Card>
      </>
    );
  };
}
