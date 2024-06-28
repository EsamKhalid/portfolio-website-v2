import React from "react";

import SectionBorderLines from "../Sections/SectionBorderLines";
import SectionNoDiag from "../Sections/SectionNoDiag";

import { FaPython } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

export default function JsCard() {
  return (
    <>
      <SectionNoDiag
        id=""
        className="rounded md:w-[60vw] sm:w-[70vw] w-[89vw] h-[35vh]"
      >
        <div className="flex justify-evenly">
          <FaPython className="size-[25%] sm:size-[10%] sm:m-[5%] m-[10%] md:size-[15%] md:m-5 md:ml-12" />
          <h1 className="text-4xl text-center m-[15%] sm:m-[7.5%] md:m-[10%]">
            JavaScript
          </h1>
        </div>
        <div className="flex justify-evenly">
          <h1 className="text-2xl">Experience: </h1>
          <div className="flex [&_*]:mx-1 mt-2 align-middle">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div className="">
          <p className="border border-cybpnk-brdr p-2 m-10 ">
            I first started learning Python in secondary school, where we learnt
            simple programming concepts, <br />
            I then chose to study Computer Science at A-Level where I learnt
            python in more detail including the use of python in both functional
            and object oriented programming. <br />
          </p>
        </div>
      </SectionNoDiag>
    </>
  );
}
