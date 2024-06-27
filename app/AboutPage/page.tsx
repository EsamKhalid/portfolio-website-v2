"use client";

import React from "react";

import { useState, useEffect } from "react";

import NavBar from "@/components/NavBar/NavBar";
import SectionNavigation from "@/components/SectionNavigation/SectionNavigation";
import FlatCornerBox from "@/components/Shapes/FlatCornerBox";

import { BiArrowFromLeft } from "react-icons/bi";
import SectionBorderLines from "@/components/Sections/SectionBorderLines";
import { motion } from "framer-motion";

import DiagonalLines from "@/components/Shapes/DiagonalLines";

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

          <div className="flex justify-center">
            <SectionBorderLines id="" className="w-full">
              <h1 className="text-4xl">//Introduction</h1>
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
