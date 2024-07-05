import React from "react";

import Image, { StaticImageData } from "next/image";

import NavBar from "../NavBar/NavBar";

interface ProjectProps {
  ProjectName: string;
  ProjectImage: StaticImageData;
  ProjectType: string;
}

export default function Project({
  ProjectName,
  ProjectImage,
  ProjectType,
}: ProjectProps) {
  return (
    <>
      <NavBar />
      <div className="px-[25px] pt-[15px] overflow-hidden">
        <h1 className="text-4xl pb-[25px]">// {ProjectName}</h1>
        <div className="flex justify-center ">
          <div className="hidden sm:block text-3xl mr-24 [&_*]:my-0">
            <div className="flex flex-col justify-evenly size-full">
              <h1>// Project_Type : {ProjectType}</h1>
              <h1>// Project_Name : {ProjectName}</h1>
              <h1>// End_Date : {ProjectName}</h1>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center md:size-[45%]  ">
            <Image
              className="size-full sm: mb-10 border-corners-sm md:border-corners-md"
              src={ProjectImage}
              alt=""
            />

            <div className="size-full sm:hidden">
              <h1>Test</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}