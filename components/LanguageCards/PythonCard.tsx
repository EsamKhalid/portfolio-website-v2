import React from "react";

import SectionBorderLines from "../Sections/SectionBorderLines";
import SectionNoDiag from "../Sections/SectionNoDiag";

import { FaPython } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

export default function PythonCard() {
  return (
    <>
      <SectionNoDiag
        id=""
        className="rounded md:w-[60vw] sm:w-[70vw] w-[89vw] h-full"
      >
        <div className="logoTextCenter justify-evenly">
          <FaPython className="size-[25%] sm:size-[15%] md:size-[10%] sm:m-[5%] m-[10%] " />
          <h1 className="text-4xl">Python</h1>
        </div>
        <div className="logoTextCenter justify-evenly">
          <h1 className="text-2xl">Proficiency: </h1>
          <div className="flex [&_*]:mx-1">
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
