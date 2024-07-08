import React from "react";

import Image, { StaticImageData } from "next/image";

import NavBar from "../NavBar/NavBar";
import DiagonalLines from "../Shapes/DiagonalLines";

interface ProjectProps {
  ProjectName: string;
  ProjectImage: StaticImageData;
  ProjectType: string;
  EndDate: string;
}

export default function Project({
  ProjectName,
  ProjectImage,
  ProjectType,
  EndDate,
}: ProjectProps) {
  return (
    <>
      <NavBar />
      <div className="px-[25px] pt-[15px] s ">
        <h1 className="text-4xl pb-[25px]">// {ProjectName}</h1>
        <div className="flex justify-center">
          <div className="flex flex-col sm:flex-col justify-center md:size-[45%]">
            <Image
              className="size-full sm:mb-10 border-corners-sm md:border-corners-md"
              src={ProjectImage}
              alt=""
            />
            <div className="w-full flex justify-center">
              <div className="text-7xl text-center w-fit mb-10">
                <h1>{ProjectName}</h1>
                <DiagonalLines
                  className="mt-2 h-5"
                  bgsize="10px"
                  rotation="right"
                  thicknessType="thick"
                />
              </div>
            </div>

            <div className="hidden sm:flex justify-center text-3xl h-[25vh] text-center">
              <div className="flex flex-col  justify-between w-full border border-cybpnk-brdr p-[5%]">
                <div className="flex flex-col justify-between size-full mb-5">
                  <h1>// Project_Type : {ProjectType}</h1>
                  <h1>// End_Date : {EndDate}</h1>
                </div>

                <DiagonalLines
                  className="w-full end"
                  bgsize="15px"
                  rotation="right"
                  thicknessType="thin"
                />
              </div>
            </div>

            <div className="size-full sm:hidden">
              <h1>Test</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[75%] mt-7 border border-cybpnk-brdr text-5xl">
            <h2 className="text-4xl text-left m-2 mx-1">//Project_Overview</h2>
            <p className="text-lg text-justify mx-5 my-3">
              This project started out as a passion project which I had planned
              to do on the side in my free time, however as talks started about
              the coursework, I decided to use the small base I had developed
              and build up on that instead of starting a new project from
              scratch. This project was made in Unity and coded in C# ,I had
              taught myself how to use the game engine and code in C#, as we
              only learnt python in sixth form meaning I was on my own and had
              to do my own research and practice using the game engine and
              programming language. This project is an aim trainer targeted
              towards those who play first person shooter(FPS) games
              competitively, it is meant to help practice aiming and different
              skills related to aiming, it had 2 different game modes, settings
              pages, customisation and feedback using data collected from the
              users performance in order to help them improve their aim and see
              where they were going wrong and how they can fix it. This project
              was accompanied by a 115 page write up which explained the
              thought, research and development stages of the project and how I
              went from just and idea, all the way to a finished project. It was
              made in 3 prototype stages where I would make, test and fix each
              prototype before moving onto the next.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
