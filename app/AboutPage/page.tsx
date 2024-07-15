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
      <div className="px-[5px] md:px-[15px] flex justify-between w-full overflow-hidden">
        <div className=" pt-[15px] w-full sm:w-[80%] md:w-[85%]">
          <h1 id="Top" className="text-4xl pb-[25px]">
            // About Page
          </h1>

          <div className="inline-block justify-center">
            <SectionBorderLines id="Introduction" className="w-fit">
              <h1 className="text-4xl">//Introduction</h1>
              <p className="text-xl text-justify m-5">
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
            <SectionBorderLines id="Skills" className="w-full">
              <h1 className="text-4xl">//Skills</h1>
              <h1 className="text-3xl text-left my-5">//Technical Skills</h1>
              <h2 className="text-2xl text-left mb-2">//Languages</h2>
              <LanguageCarousel />
              <h2 className="text-2xl text-left pt-10">//Web_Stack</h2>
              <div className="inline-block justify-start w-full [&_*]:py-1">
                <div className="logoTextCenter">
                  <FaReact className="mx-2 size-[4%]" />
                  <h1 className="text-lg hover:text-cybpnk-ylw2 hover:underline">
                    <a href="https://react.dev" target="_blank">
                      React.Js : Frontend
                    </a>
                  </h1>
                </div>
                <div className="logoTextCenter">
                  <SiNextdotjs className="mx-2 size-[4%]" />
                  <h1 className="text-lg  hover:text-cybpnk-ylw2 hover:underline">
                    <a href="https://nextjs.org" target="_blank">
                      Next.Js : React Framework
                    </a>
                  </h1>
                </div>
                <div className="logoTextCenter">
                  <SiTailwindcss className="mx-2 size-[4%]" />
                  <h1 className="text-lg  hover:text-cybpnk-ylw2 hover:underline">
                    <a href="https://tailwindcss.com" target="_blank">
                      TailwindCSS : CSS Framework
                    </a>
                  </h1>
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
            <SectionBorderLines id="Hobbies" className="w-fit text-left">
              <h1 className="text-4xl text-center">//Hobbies and Interests</h1>
              <h2 className="text-2xl text-left mb-2">//Bouldering</h2>
              <p className="text-lg text-justify mx-5 mb-5">
                I started bouldering in April of 2024, and I have loved every
                second of it. It has been a great way to keep fit and stay
                active, especially in a field like computer science where a
                majority of my time would be spent behind a screen working hard
                on a side project or learning new things. It has also taught me
                a lot and shares similarities between computer science such as:
                Problem solving, Incremental progress and iteration, Creative
                Thinking and Attention to Detail just to name a few. These
                similarities have helped me to improve in both bouldering and
                computer science as what I learn from one can be applied to the
                other.
              </p>
              <h2 className="text-2xl text-left mb-2">//Video Games</h2>
              <p className="text-lg text-justify mx-5 mb-5">
                I am an avid gamer and have been playing video games for most of
                my life since my first ever console the Nintendo Wii. Video
                games are what originally sparked an interest in coding because
                it has always been a dream to one day make a game of my own that
                not only I would enjoy but also other players. Over the years I
                have realised that my favourite way to practice coding and
                coding concepts would be to make games from it ranging from text
                based in secondary school to pygame and unity in sixth form. My
                love for making games made me learn to code in C# to use in the
                unity engine which has been a great help in then learning to
                code in java in the first year of university and overall
                solidified my knowledge and experince with coding in general.
              </p>
              <h2 className="text-2xl text-left mb-2">//Coding</h2>
              <p className="text-lg text-justify mx-5">
                My passion and love for coding has spanned much further than my
                degree and education and has implemented itself as one of my
                favourite hobbies and past times. Well before choosing to pursue
                computer science as a career I would spend time building
                something with code, starting in secondary school where I would
                make text based games using what we learned in class and then in
                sixth form I would make small projects in unity where one of
                them ended up being used as my A-Level coursework. That love for
                coding is still alive and well today and has over the years
                gotten stronger, I am constantly learning new things and
                thinking of cool ideas for a project that I can work on by
                learning new things then using the new knowledge to bring the
                idea to life through the use of code. The more I spend my time
                coding the more I realise I am so blessed to be able to turn my
                passion into a career and I am so excited to see where it takes
                me in the future.
              </p>
            </SectionBorderLines>
            <div className="h-[10vh]"></div>
          </div>
        </div>

        <div
          className="w-[15%] fixed  h-full sm:right-0 sm:pr-5 sm:top-[100px]   
        md:top-[200px] md:right-0"
        >
          <div className="flex justify-center ">
            <SectionNavigation
              Value0={"Top"}
              Value1={"Introduction"}
              Value2={"Skills"}
              Value3={"Hobbies"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
