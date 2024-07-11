import React from "react";

import Image from "next/image";

import placeholder from "@/Images/placeholder.avif";

import iad1pic from "@/Images/IAD1-pic.png";

import Project from "@/components/ProjectsSection/Project";

export default function page() {
  return (
    <>
      <Project
        ProjectName="IAD Portfolio 1"
        ProjectImage={iad1pic}
        ProjectType="University Assignment"
        EndDate="21/02/2024"
      >
        <p className="text-lg text-justify mx-5 my-3">
          IAD portfolio 1 was the first portfolio task set to us in the CS1IAD
          module - Internet Application & Database Design. In this portfolio
          task we were asked to make a simple portfolio website which showcased
          some aspects of our skill sets and experience. The website was made
          using pure html, css and javascript using vscode as the code editor.
          The task was to just make the website and not to deploy it onto any
          servers. The main focus of the portfolio was to use certain website
          development techniques such as: F patterns and call to action. It also
          included aspects such as using javasctipt for form validation and css
          for styling with both the js and css being external.
        </p>
      </Project>
    </>
  );
}
