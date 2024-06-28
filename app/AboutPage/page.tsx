"use client";

import React from "react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import NavBar from "@/components/NavBar/NavBar";
import SectionNavigation from "@/components/SectionNavigation/SectionNavigation";
import FlatCornerBox from "@/components/Shapes/FlatCornerBox";
import SectionBorderLines from "@/components/Sections/SectionBorderLines";
import DiagonalLines from "@/components/Shapes/DiagonalLines";
import LanguageCarousel from "@/components/Carousel/LanguageCarousel";

import { BiArrowFromLeft } from "react-icons/bi";

import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaJs } from "react-icons/fa";

import CSharp from "@/components/SVG/CSharp";

export default function page() {
  const [rotate, setRotate] = React.useState(false);

  return (
    <>
      <NavBar />
      <div className="inline-flex justify-between w-full overflow-hidden">
        <div className="px-[25px] pt-[15px] w-full sm:w-[85%]">
          <h1 id="top" className="text-4xl pb-[25px]">
            // About Page
          </h1>

          <div className="inline-block justify-center">
            <SectionBorderLines id="" className="w-full">
              <h1 className="text-4xl">//Introduction</h1>
              <p className="text-xl">
                Hello! I'm <span className="text-cybpnk-ylw2">Esam Khalid</span>
                , a passionate and dedicated computer science student at Aston
                University, currently pursuing a BSc Hons in Computer Science
                with a placement year.
                <br />
                <br />I have always had a keen interest in computer science and
                have been studying it as a subject since year 7, studied it at
                both GCSE's and A-Level's
                <br />
                <br />I am most passionate about the programming aspect of
                computer science and what drew me into the subject was the
                ability to think of an idea and be able to build something that
                can bring the idea to life through hardwork, dedication, problem
                solving and planning
              </p>
            </SectionBorderLines>
            <div className="h-[10vh]"></div>
            <SectionBorderLines id="" className="w-full">
              <h1 className="text-4xl">//Skills</h1>
              <h2 className="text-2xl text-left">//Languages</h2>
              <LanguageCarousel />
            </SectionBorderLines>
          </div>
        </div>
        <div
          className="w-[15%] fixed  h-full sm:right-0 sm:top-[100px]   
        md:top-[200px] md:right-0"
        >
          <div className="flex justify-center ">
            <SectionNavigation
              Value0={"Top"}
              Value1={"One"}
              Value2={"Two"}
              Value3={"Three"}
              Value4={"Four"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
