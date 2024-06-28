import React from "react";

import SectionBorderLines from "../Sections/SectionBorderLines";
import SectionNoDiag from "../Sections/SectionNoDiag";

import CSharp from "../SVG/CSharp";

import { FaJava } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

export default function CsCard() {
  return (
    <>
      <SectionNoDiag
        id=""
        className="rounded md:w-[60vw] sm:w-[70vw] w-[89vw] h-full"
      >
        <div className="flex justify-evenly">
          <CSharp className="size-[25%] sm:size-[10%] sm:m-[5%] m-[10%] md:size-[15%] md:m-5 md:ml-12" />
          <h1 className="text-4xl text-center m-[15%] sm:m-[7.5%] md:m-[10%]">
            C#
          </h1>
        </div>
        <div className="flex justify-evenly">
          <h1 className="text-2xl">Experience: </h1>
          <div className="flex [&_*]:mx-1 mt-2 align-middle">
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div className="">
          <p className="border border-cybpnk-brdr p-2 m-10 ">
            I first started learning C# towards the end of the first year of
            sixth form, C# was not taught in the curriculum for the sixth form
            however, I wanted to make my A level coursework project using {""}
            <a
              className="text-cybpnk-ylw2 underline underline-offset-2"
              href="https://unity.com"
            >
              Unity
            </a>
            , a 3d game engine that uses C# as its main language. Over the
            course of around 6 months, I learnt the basics of C# and how to use
            it in Unity to create a 3D game. I then used this knowledge to
            create a 3D application for my {""}
            {/* Make this link to the A level coursework project page when its done */}
            <a className="text-cybpnk-ylw2 underline underline-offset-2">
              A level coursework project
            </a>
            .
          </p>
        </div>
      </SectionNoDiag>
    </>
  );
}
