import React from "react";

import Image, { StaticImageData } from "next/image";

import NavBar from "../NavBar/NavBar";
import DiagonalLines from "../Shapes/DiagonalLines";

interface ProjectProps {
  ProjectName: string;
  ProjectImage: StaticImageData;
  ProjectType: string;
  EndDate: string;
  //DownFiles: string; // Make this a string of the zip file basically
  children: React.ReactNode;
}

export default function Project({
  ProjectName,
  ProjectImage,
  ProjectType,
  EndDate,
  children,
}: ProjectProps) {
  //For future refrerence, change it so that the text in each section for the project is passed as a prop
  return (
    <>
      <NavBar />
      <div className="px-[25px] pt-[15px] ">
        <h1 className="text-4xl pb-[25px]">// {ProjectName}</h1>
        <div className="flex justify-center">
          <div className="flex flex-col size-full sm:flex-col justify-center md:size-[45%]">
            <Image
              className="size-full sm:mb-10 border-corners-sm md:border-corners-md"
              src={ProjectImage}
              alt=""
            />
            <div className="w-full flex justify-center">
              <div className="text-6xl sm:text-7xl text-center w-fit mb-10 text-nowrap">
                <h1>{ProjectName}</h1>
                <DiagonalLines
                  className="mt-2 h-5"
                  bgsize="10px"
                  rotation="right"
                  thicknessType="thick"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center text-xl md:text-3xl h-fit mb-10 w-full text-center">
          <div className="flex justify-center w-full sm:w-[50%]">
            <div className="flex flex-col w-full justify-between border h-fit border-cybpnk-brdr p-[5%]">
              <div className="flex flex-col justify-between h-full mb-5=">
                <h1>// Project_Type : {ProjectType}</h1>
                {ProjectType === "University Assignment" ? (
                  <h1>// Marks : 81/100</h1>
                ) : (
                  ""
                )}
                <h1>// Completed : {EndDate}</h1>
              </div>

              <DiagonalLines
                className="w-full end"
                bgsize="15px"
                rotation="right"
                thicknessType="thin"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full sm:w-[80%] border border-cybpnk-brdr text-5xl">
            <h2 className="text-4xl text-left m-2 mx-1">//Project_Overview</h2>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
