import React from "react";

import SectionBorderLines from "../Sections/SectionBorderLines";

import { FaPython } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

export default function PythonCard() {
  return (
    <>
      <SectionBorderLines id="" className="rounded w-[60vw]">
        <div className="flex justify-evenly">
          <FaPython className="size-[100px] m-5 ml-12" />
          <h1 className="text-4xl text-center m-[50px]">Python</h1>
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
      </SectionBorderLines>
    </>
  );
}
