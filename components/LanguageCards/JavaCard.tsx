import React from "react";

import SectionBorderLines from "../Sections/SectionBorderLines";
import SectionNoDiag from "../Sections/SectionNoDiag";

import { FaJava } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

export default function JavaCard() {
  return (
    <>
      <SectionNoDiag
        id=""
        className="rounded md:w-[60vw] sm:w-[70vw] w-[89vw] h-full"
      >
        <div className="flex justify-evenly">
          <FaJava className="size-[25%] sm:size-[10%] sm:m-[5%] m-[10%] md:size-[15%] md:m-5 md:ml-12" />
          <h1 className="text-4xl text-center m-[15%] sm:m-[7.5%] md:m-[10%]">
            Java
          </h1>
        </div>
        <div className="flex justify-evenly">
          <h1 className="text-2xl">Proficiency: </h1>
          <div className="flex [&_*]:mx-1 mt-2 align-middle">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div className="">
          <p className="border border-cybpnk-brdr p-2 m-10 ">
            I first started learning Java at the start of the first year of
            university, where we learnt basic java using the {""}
            <a
              className="text-cybpnk-ylw2 underline underline-offset-2"
              href="https://processing.org"
            >
              Processing Ide
            </a>{" "}
            after which we moved onto more complex java using the{" "}
            <a
              className="text-cybpnk-ylw2 underline underline-offset-2"
              href="https://www.eclipse.org"
            >
              Eclipse IDE
            </a>
            . Over the course of the first year in the OOP module, we completed
            10 portfolio assignments in the first term, mainly using the
            processing IDE after which, in the second term we completed 10 Lab
            assignments, all in the Eclipse IDE which were much more complex
            than the first year and included concepts such as inheritance, TDD,
            UML and Exceptions
            <br />
          </p>
        </div>
      </SectionNoDiag>
    </>
  );
}
