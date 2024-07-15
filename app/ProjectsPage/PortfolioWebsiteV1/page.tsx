import React from "react";

import Image from "next/image";

import webv1pic from "@/Images/webv1pic.png";

import Project from "@/components/ProjectsSection/Project";

export default function page() {
  return (
    <>
      <Project
        ProjectName="Portfolio Website V1"
        ProjectImage={webv1pic}
        ProjectType="Personal Project"
        EndDate="31/03/2024"
      >
        <p className="text-lg text-justify mx-5 my-3">
          <span className="text-cybpnk-ylw2 underline underline-offset-1">
            <a href="https://github.com/EsamKhalid/EsamKhalid.github.io.git">
              Repository Link
            </a>
          </span>
          <br />I started this project as a way to get back into html, css and
          js after learning the basics of each in sixth form during my computer
          science A level course. During that time we made simple websites with
          barely any styling and as the CS1IAD module was coming up during the
          first year of university, I thought there would be no better way to
          get back into basic web development than making a small portfolio
          website. I used pure html, css and javascript to make this website and
          used VSCode for the code editor as well as the live server extension
          to make development quicker. The website was deplyoed using the github
          pages feature and the code was stored in a github repository.
        </p>
      </Project>
    </>
  );
}
