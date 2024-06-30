"use client";

import React from "react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import NavBar from "@/components/NavBar/NavBar";
import SectionNavigation from "@/components/SectionNavigation/SectionNavigation";
import SectionBorderLines from "@/components/Sections/SectionBorderLines";
import LanguageCarousel from "@/components/Carousel/LanguageCarousel";

import styled from "styled-components";

import { SiNextdotjs } from "react-icons/si";

import { SiTailwindcss } from "react-icons/si";

import { FaReact, FaCaretRight } from "react-icons/fa";

export default function page() {
  const [rotate, setRotate] = React.useState(false);

  return (
    <>
      <NavBar />
      <div className="inline-flex justify-between w-full overflow-hidden">
        <div className="px-[15px] pt-[15px] w-full sm:w-[85%]">
          <h1 id="top" className="text-4xl pb-[25px]">
            // About Page
          </h1>

          <div className="inline-block justify-center">
            <SectionBorderLines id="" className="w-fit">
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
              <h1 className="text-3xl text-left my-5">//Technical Skills</h1>
              <h2 className="text-2xl text-left mb-2">//Languages</h2>
              <LanguageCarousel />
              <h2 className="text-2xl text-left pt-10">//Web_Stack</h2>
              <div className="inline-block justify-start w-full [&_*]:py-1">
                <div className="logoTextCenter">
                  <FaReact className="mx-2 size-[4%]" />
                  <h1 className="text-lg">React.Js : Frontend</h1>
                </div>
                <div className="logoTextCenter">
                  <SiNextdotjs className="mx-2 size-[4%]" />
                  <h1 className="text-lg">Next.Js : React Framework</h1>
                </div>
                <div className="logoTextCenter">
                  <SiTailwindcss className="mx-2 size-[4%]" />
                  <h1 className="text-lg">TailwindCSS : CSS Framework</h1>
                </div>
                <h1 className="text-3xl text-left mt-5">//Soft Skills</h1>
                <ul className="[&_li]:text-left [&_li]:text-lg">
                  <li className="logoTextCenter">
                    <FaCaretRight className="size-[3%]" />
                    <p>Problem Solving</p>
                  </li>
                  <li className="logoTextCenter">
                    <FaCaretRight className="size-[3%]" />
                    <p>Effective Communication</p>
                  </li>
                  <li className="logoTextCenter">
                    <FaCaretRight className="size-[3%]" />
                    <p>Teamwork and Collaboration</p>
                  </li>
                  <li className="logoTextCenter">
                    <FaCaretRight className="size-[3%]" />
                    <p>Adaptability</p>
                  </li>
                  <li className="logoTextCenter">
                    <FaCaretRight className="size-[3%]" />
                    <p>Time Management</p>
                  </li>
                </ul>
              </div>
            </SectionBorderLines>
            <div className="h-[10vh]"></div>
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
