import React from "react";
import Image from "next/image";

import NavBar from "@/components/NavBar/NavBar";

import placeholder from "../../Images/placeholder.avif";

import ProjectTile from "@/components/ProjectsSection/ProjectTile";

export default function Page() {
  return (
    <>
      <NavBar />
      <div className="px-[25px] pt-[15px]">
        <h1 className="text-4xl pb-[25px]">// Projects Page</h1>
        <ProjectTile />
      </div>
    </>
  );
}
