import React from "react";
import ProjectCard from "../../components/ProjectCard.js";
import Fade from "react-reveal/Fade";

import styled from "styled-components";

import TopDescriptor from "../../components/TopDescriptor.js";
import PortfolioPage from "../../components/PortfolioPage.js";

const StoryInfo = [
  {
    title: "Socialist Trucker Joshua Collins Says Hell with Heck",
    publisher: "The Cooper Point Journal",
    date: "Jun 05 '19'",
    excerpt: [
      "Joshua Collins is a truck driver, a democratic socialist, a small business owner and he’s running for congress – at 26 years old.",
      "Collins is challenging incumbent representative Dennis Heck in the Democratic primary. Heck, an Evergreen grad, has represented Washington’s 10th congressional district since the state legislature carved out the district in 2012..."
    ],
    imageURL:
      "https://i0.wp.com/www.cooperpointjournal.com/wp-content/uploads/2019/06/5c995699b153726729c5fff0_IMG_20190312_121707_960-e1559780479971.jpg?zoom=2&fit=1024%2C588",
    imageAlt: "",
    URL: "http://www.cooperpointjournal.com/2019/06/05/joshua-collins/"
  },
  {
    title: "IWW Interrupts Trustee Meeting",
    publisher: "The Cooper Point Journal",
    date: "May 15 '19",
    excerpt: [
      "The Industrial Workers of the World South Sound General Education Union, or the GEU, held a rally on Red Square last Wednesday, May 8, in a call to re-open the pool and fund the arts department at Evergreen.",
      "Union members went to the Board of Trustees Meeting, which was moved from its regular on-campus location to the Lord Mansion. On Twitter, the GEU accused the board of meeting “off campus to avoid our rally and to instill more Austerity.”..."
    ],
    imageURL:
      "https://i0.wp.com/www.cooperpointjournal.com/wp-content/uploads/2019/05/IMG_9718-e1557896358550.jpg?zoom=2&fit=1024%2C768",
    imageAlt: "A small crowd stands encircled around a speaker on a sunny day.",
    URL:
      "http://www.cooperpointjournal.com/2019/05/15/iww-interrupts-trustee-meeting-union-demands-administrative-cut-at-red-square-rally/"
  },
  {
    title: "Police Services Purchased Cameras Disguised as Smoke Detectors",
    publisher: "The Cooper Point Journal",
    date: "Apr 17 '19'",
    excerpt: [
      "Evergreen Police Services purchased three surveillance cameras disguised as smoke detectors and electrical outlet plugs in October 2018.",
      "The purchase was revealed in a purchase order obtained in a public records request by the Journal. The models run on a seven-day battery and are activated by movement. They film up to five hours of 1080p footage on an SD card without audio..."
    ],
    imageURL:
      "https://i2.wp.com/cdn11.bigcommerce.com/s-ljboqq8dd6/images/stencil/1280x1280/products/320/7757/255-CPSD_1__05330.1550003995.jpg?zoom=2&w=680&ssl=1",
    imageAlt:
      "A surveillance camera disguised as a smoke detector. The image shows its seperate camera unit and SD card.",
    URL: "http://www.cooperpointjournal.com/2019/04/17/cameras/"
  },
  {
    title: "Greeners Developing App to Help Blind Navigate",
    publisher: "The Cooper Point Journal",
    date: "Mar 06 '19",
    excerpt: [
      "In 2017, when Robert Kerekes Jr of Morris Plains New Jersey called Evergreen and threatened to “execute as many people on the campus as I can get ahold of,” the students in Senior Zack Hurtz’ program scattered.",
      "“Everyone was gone, and my professor is like, ‘hey, do you need assistance?’“ recounted Hurtz, who is blind. Hurtz’s professor, Ralph Murphy, eventually gave Hurtz a ride home.",
      "“I look at that, how do we make that more accessible?” said Hurtz. “How do we set up these scenarios where users can be safe while getting out of an unsafe area?”..."
    ],
    imageURL:
      "https://i1.wp.com/www.cooperpointjournal.com/wp-content/uploads/2019/03/point-navigation-video-screenshot.png?zoom=2&fit=1024%2C576",
    imageAlt: "Senior Zack Hurtz navigates Evergreen using a walking stick.",
    URL:
      "http://www.cooperpointjournal.com/2019/03/06/greeners-developing-app-to-help-blind-navigate/"
  },
  {
    title: "Report on Student Food Insecurity: Hunger Problems Widespread",
    publisher: "The Cooper Point Journal",
    date: "Feb 25 '19",
    excerpt: [
      "Washington Senator Patty Murray has decried rising student food insecurity following the publication of a Government Accountability Office Report she commissioned.",
      "“Being able to afford food is not an issue that affects few,” said Murray on a recent conference call. “It’s clear from this study, federal action needs to be taken to address college hunger.”..."
    ],
    imageURL:
      "https://i1.wp.com/www.cooperpointjournal.com/wp-content/uploads/2019/02/2018-Day-of-Action-service-49-e1551117937810.jpg?zoom=2&fit=1024%2C683",
    imageAlt: "Evergreen students repackage food for the local food bank.",
    URL:
      "http://www.cooperpointjournal.com/2019/02/25/report-on-student-food-insecurity-hunger-problems-widespread/"
  },
  {
    title: "Wobblies demand democracy for Evergreen",
    publisher: "The Cooper Point Journal",
    date: "Jan 23 '19",
    excerpt: [
      "The South Sound General Education Union has a much broader vision for Evergreen than their recent demands for two new professors and a freeze on police services hires.",
      "They want nothing more than to run the school itself.",
      "“We’ll have something kind of like an assembly,” said self-described “rank-and-file member” Elizabeth Flynn. “Of course we’ll have our protocols in place. Maybe something similar to Robert’s Rules of Order.”..."
    ],
    imageURL: "",
    imageAlt: "",
    URL:
      "http://www.cooperpointjournal.com/2019/01/23/wobblies-demand-democracy-for-evergreen/"
  },
  {
    title: "IWW To Hold Red Square Rally",
    publisher: "The Cooper Point Journal",
    date: "Jan 16 '19",
    excerpt: [
      "The Industrial Workers of The World South Sound General Education Union will hold a rally Jan. 17 to share their demands, which call for the school to not hire another police officer and hire two new staff members.",
      "“The picket we are doing tomorrow is to spread information about this union,” said “rank and file” member Elizabeth Flynn. “We can do something about all these cuts that are happening.”",
      "According to an Olympia IWW newsletter, the group was founded last summer, “on the rooftop of a “leftist” shop called Kinoki in San Cristobal de las Casas, Chiapas, Mexico.”..."
    ],
    imageURL:
      "https://i0.wp.com/www.cooperpointjournal.com/wp-content/uploads/2019/01/IMG_8785-1.jpg?zoom=2&fit=1239%2C662",
    imageAlt:
      "An image of a poster. It reads: 'Information Picket: January 17th 3-5pm @red square in front of the library.' The descriptor text says 'Let Evergreen know how you feel about the prioritization of hiring and arming campus cops while significantly reducing stafs in the arts (espescially performing) in the political economy department.' An image of Spongebob holding up a picket sign to Squidward reads '#Profs not cops'",
    URL:
      "http://www.cooperpointjournal.com/2019/01/16/iww-to-hold-red-square-rally/"
  },
  {
    title: "WashPIRG Asks Students To Approve 100% Renewable Plan",
    publisher: "The Cooper Point Journal",
    date: "Jan 09 '19",
    excerpt: [
      "Evergreen students will vote on a plan for Evergreen State College to generate 100% of its power using renewable energy sources.",
      "The proposal comes from the Evergreen chapter of the Washington Public Interest Research Group. Geoduck Student Union representatives voted to add the initiative to their winter ballot, alongside a measure that would re-new the research group’s $8-per-quarter fee..."
    ],
    imageURL:
      "https://i0.wp.com/www.cooperpointjournal.com/wp-content/uploads/2019/01/Library-solar-tour-1.jpg?zoom=2&fit=6900%2C4605",
    imageAlt:
      "An image of solar panels on top of the library roof. The school clocktower is visible in the background.",
    URL:
      "http://www.cooperpointjournal.com/2019/01/09/washpirg-asks-students-to-approve-100-renewable-plan/"
  },
  {
    title: "IWW Demands Go Unfulfilled",
    publisher: "The Cooper Point Journal",
    date: "Nov 26 '18",
    excerpt: [
      "The International Workers of the World (IWW) South Sound General Education Union launched a “phone-zap” campaign this morning, after Evergreen State College administration did not meet demands presented at a recent rally.",
      "“Despite over 100 people delivering a letter that called for the school to not hire another cop and to instead employ two full time positions (one in political economy, one in the arts), the administration refuses to hear our demands that remain popular throughout the working class of the college,” the IWW said in a press release...."
    ],
    imageURL:
      "https://i1.wp.com/www.cooperpointjournal.com/wp-content/uploads/2018/11/DSC0447-copy-1-1-1-1-2-2-1-1-1-1-2-1-1-1-1-1-2-1-5-1068x616.jpg?zoom=2&fit=1068%2C616",
    imageAlt:
      "The red and black flag of the International Workers of The World.",
    URL: "http://www.cooperpointjournal.com/2018/11/26/iww-demands-unfulfilled/"
  },
  {
    title:
      "Carpenters Call for Call-In: Union urges boycott during dispute with local McDonald’s",
    publisher: "The Cooper Point Journal",
    date: "Nov 14 '18",
    excerpt: [
      "The South Puget Sound Carpenters Local 129 are involved in a labor dispute with area McDonald’s franchise owner Kim Presto. Organizers and union members have held a banner outside of local McDonald’s franchises for the past couple months.",
      "Presto allegedly hired area contractors EMPrecision to do remodel work. Scott Jones, an organizer for the Pacific Northwest Regional Council of Carpenters, says EMPrecision does not comply with the union’s “area standards.”..."
    ],
    imageURL:
      "https://i0.wp.com/www.cooperpointjournal.com/wp-content/uploads/2018/11/mcdonalds.png?zoom=2&fit=3500%2C2625",
    imageAlt:
      "Union members hold a sign outside the McDonald's on Plum Street. The sign reads 'Shame on McDonald's'",
    URL:
      "http://www.cooperpointjournal.com/2018/11/14/carpenters-call-for-call-in-union-urges-boycott-during-dispute-with-local-mcdonalds/"
  },
  {
    title: "“Profs Not Cops”: Community protests planned police hiring",
    publisher: "The Cooper Point Journal",
    date: "Nov 14 '18",
    excerpt: [
      "More than a hundred people gathered in front of the library on Wednesday, Nov. 7th to protest Evergreen’s intention to hire two new police officers while cutting faculty positions.",
      "The protestors spent forty minutes chanting and waving homemade signs in Red Square while students and faculty gave impassioned speeches. They then took their message directly to college administration, moving the rally into President George Bridges’ office and presenting a list of demands..."
    ],
    imageURL:
      "https://i2.wp.com/www.cooperpointjournal.com/wp-content/uploads/2018/11/IMG_8381.jpg?zoom=2&fit=4032%2C3024",
    imageAlt:
      "An older man speaks into a microphone attatched to a loudspeaker.",
    URL:
      "http://www.cooperpointjournal.com/2018/11/14/profs-not-cops-community-protests-planned-police-hiring/"
  },
  {
    title:
      "Chaos In & Near City Hall: Dir. Simmons Did Not Communicate With 501c3s, Council",
    publisher: "The Cooper Point Journal",
    date: "Oct 03 '18",
    excerpt: [
      "The Olympia Police Department (OPD) continues to clear camps on city property and enforce bans on sitting or lying on sidewalks, despite a ruling from the 9th U.S. Circuit Court of Appeals which found anti-camping ordinances to violate the Eighth Amendment.",
      "According to the City’s Homeless Response Coordinator, Colin DeForrest, Olympia has seen a sharp increase in visible homelessness in recent years, leading city officials to work with both community members and stakeholders to plan out “innovative and sustainable strategies” to address the epidemic..."
    ],
    imageURL:
      "https://i0.wp.com/www.cooperpointjournal.com/wp-content/uploads/2018/10/IMG_7001.jpg?zoom=2&fit=4032%2C3024",
    imageAlt:
      "Olympia Police and Thurston County Sheriffs patrol 4th avenue in riot gear.",
    URL:
      "http://www.cooperpointjournal.com/2018/10/03/chaos-in-and-near-city-hall/"
  },
  {
    title: "City Closes Downtown Park “Indefinitely”",
    publisher: "The Cooper Point Journal",
    date: "Sep 19 '18",
    excerpt: [
      "Only four years after its opening, the City of Olympia closed downtown’s Artesian Commons Park “indefinitely,” according to a August 24 press release.",
      "A chain link fence appeared before dawn that day, surrounding the main square and a section of sidewalk north of The Pet Works. The well itself and the 24/7 restroom remain open..."
    ],
    imageURL:
      "https://i2.wp.com/www.cooperpointjournal.com/wp-content/uploads/2018/09/IMG_7748.jpg?zoom=2&fit=4032%2C3024",
    imageAlt:
      "Protesters gather in front of city hall. Their signs are obscured, but one says 'We are your Neighbors'.",
    URL:
      "http://www.cooperpointjournal.com/2018/09/19/city-closes-downtown-park-indefinitely-but-who-gave-the-order/"
  }
];

const Stories = () => {
  /*
  Bumps up the bottom of the text so that it ain't covered by the navbar.
   */
  const BottomBlock = styled.div`
    background-color: white;
    height: 6em;
  `;

  /*
  Map StoryInfo JSON onto ProjectCard JSX w/ fade animation.
   */
  const StoryCards = stories => {
    return stories.map(story => {
      return (
        <Fade right>
          <ProjectCard
            key={story.title}
            title={story.title}
            subhead={story.publisher}
            date={story.date}
            descriptions={story.excerpt}
            imageURL={story.imageURL}
            imageAlt={story.imageAlt}
            URL={story.URL}
            cardType="stories"
          />
        </Fade>
      );
    });
  };

  return (
    <PortfolioPage>
      <TopDescriptor
        title="Watchdog."
        description="Whether it's conferencing with a senator about student hunger, dodging tear gas at the protest, or using command-line tools to sift through mountains of public records, I'm an investigative journalist committed to seeing the story through."
      />
      {StoryCards(StoryInfo)}
      <BottomBlock />
    </PortfolioPage>
  );
};

export default Stories;
