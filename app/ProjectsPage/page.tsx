import React from "react";
import Image from "next/image";

import NavBar from "@/components/NavBar/NavBar";

import placeholder from "../../Images/placeholder.avif";

import ProjectTile from "@/components/ProjectsSection/ProjectTile";

export default function Page() {
  const test = [<h1>Test</h1>];

  return (
    <>
      {test[0]}
      <NavBar />
      <div className="px-[25px] pt-[15px]">
        <h1 className="text-4xl pb-[25px]">// Projects Page</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-5">
            <ProjectTile />
            <ProjectTile />
            <ProjectTile />
            <ProjectTile />
            <ProjectTile />
            <ProjectTile />
            <ProjectTile />
            <ProjectTile />
          </div>
        </div>
      </div>
    </>
  );
}
