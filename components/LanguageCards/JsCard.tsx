import React from "react";

import SectionNoDiag from "../Sections/SectionNoDiag";

import { FaJs } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

export default function JsCard() {
  return (
    <>
      <SectionNoDiag
        id=""
        className="rounded md:w-[60vw] sm:w-[70vw] w-[89vw] h-full"
      >
        <div className="justify-evenly logoTextCenter">
          <FaJs className="size-[25%] sm:size-[15%] md:size-[10%] sm:m-[5%] m-[10%]" />
          <h1 className="text-4xl">JavaScript</h1>
        </div>
        <div className="flex justify-evenly logoTextCenter">
          <h1 className="text-2xl">Proficiency: </h1>
          <div className="flex [&_*]:mx-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </div>
        </div>
        <div className="">
          <p className="border border-cybpnk-brdr p-2 m-10 ">
            I first started learning JavaScript in sixth form where we learnt
            simple JS concepts and uses. Then learnt JS in more detail in the
            first year of university where we did Lab tasks and a portfolio
            project in the CS1IAD module.
          </p>
        </div>
      </SectionNoDiag>
    </>
  );
}
