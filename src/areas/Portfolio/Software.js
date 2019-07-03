import React from "react";
import ProjectCard from "../../components/ProjectCard.js";
import styled from "styled-components";

const BottomBlock = styled.div`
  background-color: white;
  height: 6em;
`;

const SoftwareInfo = [
  {
    title: "communiTree",
    tools: ["React Native", "express.js", "mongoDB"],
    date: "Winter 2019",
    descriptions: [
      "Developed decentralized phone-tree notification system app for iOS and Android.",
      "Designed architecture for team development and managed small team of developers.",
      "Used custom material UI for accessability."
    ],
    imageURL:
      "https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_1280.jpg",
    imageAlt: "sprague"
  },
  {
    title: "PetWatch",
    tools: ["Django", "Python", "Bootstrap", "MySQL"],
    date: "Summer 2018",
    descriptions: [
      "Designed architecture for lost pet database.",
      "Used bootstrap to sketch a site for neighborhood-based watches of lost pets.",
      "Developed add-pet and watch-my-neighborhoods features.",
      "Anticipated and researched for most common user queries."
    ],
    imageURL: "http://res.publicdomainfiles.com/pdf_view/52/13526065812146.png",
    imageAlt: "sprague"
  },
  {
    title: "findReplace++",
    tools: ["Java", "Swing"],
    date: "Summer 2017",
    descriptions: [
      "Created find-replace widget for complex rich text queries.",
      "Explored and implemented industry standards for find-replace algorithims with unique context."
    ],
    imageURL:
      "https://cdn.pixabay.com/photo/2012/04/13/12/38/world-32225_960_720.png",
    imageAlt: "sprague"
  }
];

const SoftwareCards = projects => {
  return projects.map(project => {
    return (
      <ProjectCard
        key={project.title}
        title={project.title}
        tools={project.tools.join(", ")}
        date={project.date}
        descriptions={project.descriptions}
        imageURL={project.imageURL}
        imageAlt={project.imageAlt}
      />
    );
  });
};

export default class Software extends React.Component {
  render() {
    return (
      <div>
        {SoftwareCards(SoftwareInfo)}
        <BottomBlock />
      </div>
    );
  }
}
