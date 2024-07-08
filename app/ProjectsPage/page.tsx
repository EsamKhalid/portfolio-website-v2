"use client";
import React from "react";
import Image from "next/image";

import NavBar from "@/components/NavBar/NavBar";
import ProjectTile from "@/components/ProjectsSection/ProjectTile";
import SortableGrid from "@/components/ProjectsSection/SortableGrid";

import placeholder from "../../Images/placeholder.avif";
import alvl from "@/Images/alevelproj.png";

export default function Page() {
  const tilesList = [
    <ProjectTile
      className=""
      key={1}
      ProjectTitle="Project One"
      ImageSource={placeholder}
      ProjectType="Personal Project"
      StartDate={new Date("2024-06-18")}
      EndDate="29/06/25"
    />,
    <ProjectTile
      className=""
      key={2}
      ProjectTitle="A-Level Coursework"
      ImageSource={alvl}
      ProjectType="Personal/Sixth Form Project"
      StartDate={new Date("2024-06-07")}
      EndDate="29/06/25"
    />,
    <ProjectTile
      className=""
      key={3}
      ProjectTitle="Project Three"
      ImageSource={placeholder}
      ProjectType="Personal Project"
      StartDate={new Date("2024-06-15")}
      EndDate="29/06/25"
    />,
    <ProjectTile
      className=""
      key={4}
      ProjectTitle="Project Four"
      ImageSource={placeholder}
      ProjectType="Personal Project"
      StartDate={new Date("2024-06-22")}
      EndDate="29/06/25"
    />,
    <ProjectTile
      className=""
      key={5}
      ProjectTitle="Project Five"
      ImageSource={placeholder}
      ProjectType="Personal Project"
      StartDate={new Date("2024-08-22")}
      EndDate="29/06/25"
    />,
  ];

  return (
    <>
      <NavBar />
      <div className="px-[25px] pt-[15px] overflow-hidden">
        <h1 className="text-4xl pb-[25px]">// Projects Page</h1>
        <div className="flex justify-center">
          <SortableGrid>{tilesList}</SortableGrid>
        </div>
      </div>
    </>
  );
}
