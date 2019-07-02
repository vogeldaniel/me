import React from "react";
import ProjectCard from "../../components/ProjectCard.js";

export default class Software extends React.Component {
  render() {
    return (
      <div>
      <ProjectCard title={"CommuniTree"}
      descriptions={
        [
          "•Arbitror esse dolore o labore sed appellat relinqueret de expetendis.",
          "•Te an tractavissent, probant cillum commodo arbitror.",
          "•Aut fore offendit qui ne quis tractavissent.",
          "•Cernantur legam minim ne esse in ita cillum voluptate cupidatat.",
          "•Arbitror esse dolore o labore sed appellat relinqueret de expetendis.",
          "•Te an tractavissent, probant cillum commodo arbitror.",
          "•Aut fore offendit qui ne quis tractavissent.",
          "•Cernantur legam minim ne esse in ita cillum voluptate cupidatat.",
        ]
      }
      tools={"Boop, beep, foo, bar, bingo"}
      imageURL={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Sprague_squared_square.svg/1280px-Sprague_squared_square.svg.png"}
      imageALT={"Squaring"}
      date={"January"}
      />
      <ProjectCard title={"CommuniTree"}
      descriptions={
        [
          "•Arbitror esse dolore o labore sed appellat relinqueret de expetendis.",
          "•Te an tractavissent, probant cillum commodo arbitror.",
          "•Aut fore offendit qui ne quis tractavissent.",
          "•Cernantur legam minim ne esse in ita cillum voluptate cupidatat.",
        ]
      }
      tools={"Boop, beep, foo, bar, bingo"}
      />
      <ProjectCard title={"CommuniTree"}
      descriptions={
        [
          "•Arbitror esse dolore o labore sed appellat relinqueret de expetendis.",
          "•Te an tractavissent, probant cillum commodo arbitror.",
          "•Aut fore offendit qui ne quis tractavissent.",
          "•Cernantur legam minim ne esse in ita cillum voluptate cupidatat.",
        ]
      }
      tools={"Boop, beep, foo, bar, bingo"}
      />
      </div>
    );
  }
}
