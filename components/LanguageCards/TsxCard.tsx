import React from "react";

import SectionBorderLines from "../Sections/SectionBorderLines";
import SectionNoDiag from "../Sections/SectionNoDiag";

import { FaReact } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

export default function PythonCard() {
  return (
    <>
      <SectionNoDiag
        id=""
        className="rounded md:w-[60vw] sm:w-[70vw] w-[89vw] h-full"
      >
        <div className="flex justify-evenly">
          <FaReact className="size-[25%] sm:size-[10%] sm:m-[5%] mt-[7.5%] ml-[10%]  md:size-[15%] md:m-5 md:ml-12" />
          <h1 className="text-4xl text-center m-[15%] sm:m-[7.5%] md:m-[10%]">
            TSX
          </h1>
        </div>
        <div className="flex justify-evenly">
          <h1 className="text-2xl">Proficiency: </h1>
          <div className="flex [&_*]:mx-1 mt-2 align-middle">
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div className="">
          <p className="border border-cybpnk-brdr p-2 m-10 ">
            I first started learning TSX when I was practicing React and doing
            research into the frameworks and libraries that I was considering to
            use for the second version of my portfolio website (this website).
          </p>
        </div>
      </SectionNoDiag>
    </>
  );
}
