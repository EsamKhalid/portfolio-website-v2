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
      ></Project>
    </>
  );
}
