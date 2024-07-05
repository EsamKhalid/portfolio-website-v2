import React from "react";

import Image from "next/image";

import placeholder from "@/Images/placeholder.avif";

import Project from "@/components/ProjectsSection/Project";

export default function page() {
  return (
    <>
      <Project
        ProjectName="Project Two"
        ProjectImage={placeholder}
        ProjectType="Personal"
      ></Project>
    </>
  );
}
