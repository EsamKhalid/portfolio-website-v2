import React from "react";
import Image from "next/image";

import NavBar from "@/components/NavBar/NavBar";
import ProjectTile from "@/components/ProjectsSection/ProjectTile";

import placeholder from "../../Images/placeholder.avif";

export default function Page() {
  return (
    <>
      <NavBar />
      <div className="px-[25px] pt-[15px]">
        <h1 className="text-4xl pb-[25px]">// Projects Page</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-5">
            <ProjectTile
              ProjectTitle="Project One"
              ImageSource={placeholder}
              ProjectType="Personal Project"
              StartDate="19/06/24"
              EndDate="29/06/25"
            />
            <ProjectTile
              ProjectTitle="Project One"
              ImageSource={placeholder}
              ProjectType="Personal Project"
              StartDate="19/06/24"
              EndDate="29/06/25"
            />
            <ProjectTile
              ProjectTitle="Project One"
              ImageSource={placeholder}
              ProjectType="Personal Project"
              StartDate="19/06/24"
              EndDate="29/06/25"
            />
            <ProjectTile
              ProjectTitle="Project One"
              ImageSource={placeholder}
              ProjectType="Personal Project"
              StartDate="19/06/24"
              EndDate="29/06/25"
            />
            <ProjectTile
              ProjectTitle="Project One"
              ImageSource={placeholder}
              ProjectType="Personal Project"
              StartDate="19/06/24"
              EndDate="29/06/25"
            />
          </div>
        </div>
      </div>
    </>
  );
}
