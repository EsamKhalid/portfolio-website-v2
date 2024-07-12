"use client";
import React from "react";
import Image from "next/image";

import NavBar from "@/components/NavBar/NavBar";
import ProjectTile from "@/components/ProjectsSection/ProjectTile";
import SortableGrid from "@/components/ProjectsSection/SortableGrid";

import placeholder from "../../Images/placeholder.avif";

import alvl from "@/Images/alevelproj.png";
import iad1pic from "@/Images/iad1pic.png";
import webv1pic from "@/Images/webv1pic.png";

export default function Page() {
  const tilesList = [
    <ProjectTile
      className=""
      key={1}
      ProjectTitle="IAD Portfolio 1"
      ImageSource={iad1pic}
      ProjectType="University Assignment"
      EndDate={new Date("2024-02-21")}
    />,
    <ProjectTile
      className=""
      key={2}
      ProjectTitle="A-Level Coursework"
      ImageSource={alvl}
      ProjectType="Personal/Sixth Form Project"
      EndDate={new Date("2023-04-16")}
    />,
    <ProjectTile
      className=""
      key={3}
      ProjectTitle="Portfolio Website V1"
      ImageSource={webv1pic}
      ProjectType="Personal Project"
      EndDate={new Date("2024-06-15")}
    />,
    <ProjectTile
      className=""
      key={4}
      ProjectTitle="Project Four"
      ImageSource={placeholder}
      ProjectType="Personal Project"
      EndDate={new Date("2024-06-22")}
    />,
    <ProjectTile
      className=""
      key={5}
      ProjectTitle="Project Five"
      ImageSource={placeholder}
      ProjectType="Personal Project"
      EndDate={new Date("2024-08-22")}
    />,
  ];

  return (
    <>
      <NavBar />
      <div className="px-[25px] pt-[15px] overflow-hidden">
        <h1 className="text-4xl">// Projects Page</h1>
        <p className="text-2xl text-justify mx-5 my-3">
          Welcome to the Projects Page, here you can view all of the projects
          that I both feel proud of and think that it is worth sharing. It's a
          collection of both personal projects which I have planned out and made
          by myself or assignments from university or sixth form that I am
          particualrly proud of.
        </p>
        <div className="flex justify-center">
          <SortableGrid>{tilesList}</SortableGrid>
        </div>
      </div>
    </>
  );
}
