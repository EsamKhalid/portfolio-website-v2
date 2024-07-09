import React from "react";

import Image from "next/image";

import placeholder from "@/Images/placeholder.avif";
import alvlimg from "@/Images/alevelproj.png";

import Project from "@/components/ProjectsSection/Project";

export default function page() {
  return (
    <>
      <Project
        ProjectName="A-Level Coursework"
        ProjectImage={alvlimg}
        ProjectType="Personal/Sixth Form"
        EndDate="16/04/2023"
      >
        <p className="text-lg text-justify mx-5 my-3">
          This project started out as a passion project which I had planned to
          do on the side in my free time, however as talks started about the
          coursework, I decided to use the small base I had developed and build
          up on that instead of starting a new project from scratch. This
          project was made in Unity and coded in C# ,I had taught myself how to
          use the game engine and code in C#, as we only learnt python in sixth
          form meaning I was on my own and had to do my own research and
          practice using the game engine and programming language. This project
          is an aim trainer targeted towards those who play first person
          shooter(FPS) games competitively, it is meant to help practice aiming
          and different skills related to aiming, it had 2 different game modes,
          settings pages, customisation and feedback using data collected from
          the users performance in order to help them improve their aim and see
          where they were going wrong and how they can fix it. This project was
          accompanied by a 115 page write up which explained the thought,
          research and development stages of the project and how I went from
          just and idea, all the way to a finished project. It was made in 3
          prototype stages where I would make, test and fix each prototype
          before moving onto the next.
        </p>
      </Project>
    </>
  );
}
