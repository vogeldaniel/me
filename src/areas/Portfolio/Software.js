import React from "react";
import ProjectCard from "../../components/ProjectCard.js";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

import TopDescriptor from "../../components/TopDescriptor.js";
import PortfolioPage from "../../components/PortfolioPage.js";

const SoftwareInfo = [
  {
    title: "The Cooper Point Journal",
    tools: [
      "Wordpress",
      "mailchimp",
      "doubleclick",
      "macOS",
      "Twitter/Instagram/Facebook"
    ],
    date: "Fall 2018 - Summer 2019",
    descriptions: [
      "Restructured site ad system to capitalize on intermittent spikes in traffic.",
      "Managed Wordpress site and timely bi-weekly publication",
      "Instituted security procedures to protect 30+ company accounts and personal data.",
      "Increased site social media engagement by more than 300%",
      "Managed post content & SEO and consolidated brand image by ensuring consistent cross-platform identity.",
      "Mentored junior reporters and edited their stories for clarity and consistent company voice.",
      "Provided in-depth investigative news coverage and streamlined reporting on breaking news stories."
    ],
    imageURL:
      "https://i1.wp.com/www.cooperpointjournal.com/wp-content/uploads/2017/03/fuckcivilityweb.jpg?zoom=2.625&fit=1000%2C750&ssl=1",
    imageAlt:
      "A stack of physical newspapers. The headline reads 'Fuck Civility.'"
  },
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

const Software = () => {
  /*
  Bumps up the bottom of the content so it isn't covered by the navbar.
  If it ain't broke don't fix it...
   */
  const BottomBlock = styled.div`
    background-color: white;
    height: 6em;
  `;

  /*
  Map SoftwareInfo JSON to JSX ProjectCards with Fade animation.
   */
  const SoftwareCards = projects => {
    return projects.map(project => {
      return (
        <Fade key={project.title} right>
          <ProjectCard
            key={project.title}
            title={project.title}
            subhead={project.tools.join(", ")}
            date={project.date}
            descriptions={project.descriptions}
            imageURL={project.imageURL}
            imageAlt={project.imageAlt}
            cardType="software"
          />
        </Fade>
      );
    });
  };

  return (
    <PortfolioPage>
      <TopDescriptor
        title="Full-stack software."
        description="I graduated with a BS in computer science in 2019. I work regularly with Javascript (ES6 / React / React Native), Java, Python (Django), SQL, Haskell, HTML5, CSS3 and more."
      />
      {SoftwareCards(SoftwareInfo)}
      <BottomBlock />
    </PortfolioPage>
  );
};

export default Software;
