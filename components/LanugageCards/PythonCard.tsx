import React from "react";

import SectionBorderLines from "../Sections/SectionBorderLines";

import { FaPython } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

export default function PythonCard() {
  return (
    <>
      <SectionBorderLines id="" className="rounded">
        <div className="flex justify-between">
          <FaPython className="size-[100px] m-5" />
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
      </SectionBorderLines>
    </>
  );
}
