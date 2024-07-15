import React from "react";

import Image from "next/image";

import placeholder from "@/Images/placeholder.avif";

import iad3pic from "@/Images/iad3pic.png";

import Project from "@/components/ProjectsSection/Project";

export default function page() {
  return (
    <>
      <Project
        ProjectName="IAD Portfolio 3"
        ProjectImage={iad3pic}
        ProjectType="University Assignment"
        EndDate="23/04/2024"
        Score={100}
      >
        <p className="text-lg text-justify mx-5 my-3">
          <span className="text-cybpnk-ylw2 underline underline-offset-1">
            <a href="https://github.com/EsamKhalid/IAD-Portfolio-3.git">
              Repository Link
            </a>
          </span>
          <br />
          IAD portfolio 3 is a project that I created for my IAD module and is
          so far, the project that I am the most proud of and felt 100%
          satisfied with the result. The project is a website that was made
          using php and sql for the backend. The project is a simple website
          that uses a database to store information about projects as well as
          user details such as usernames and passwords as well as implementing
          many security features to prevent SQL injection and other attacks. The
          website also has a login system that allows users to create accounts
          and log in to view their own projects as well as other users projects.
          The website also has a search feature that allows users to search for
          projects by name or by the user who created the project. The website
          also has a feature that allows users to edit and delete their own
          projects as well as view other users projects. The website also has a
          feature that allows users to view all projects that have been added to
          the website as well as view the details of each project.
        </p>
      </Project>
    </>
  );
}
