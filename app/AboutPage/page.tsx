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
      <div className="px-[25px] pt-[15px] overflow-hidden">
        <h1 id="top" className="text-4xl pb-[25px]">
          // About Page
        </h1>
        <div className="flex justify-center right-10 fixed ">
          <SectionNavigation
            Value0={"Top"}
            Value1={"One"}
            Value2={"Two"}
            Value3={"Three"}
            Value4={"Four"}
          />
        </div>

        <DiagonalLines className="" bgsize="70px" rotation="right" />

        <div className="h-[100vh]"></div>
        <SectionBorderLines>
          <h1 id="One" className="text-2xl text-center">
            Welcome to My Portfolio One
          </h1>
          <br />
          <p className="text-xl text-center">
            Hello! I'm <span className="text-cybpnk-ylw2">Esam Khalid</span>
            , a passionate and dedicated computer science student at Aston
            University, currently pursuing a BSc Hons in Computer Science with a
            placement year.
            <br />
            <br /> Through my academic and personal projects, I have honed my
            skills in various programming languages and technologies. My
            portfolio showcases a range of projects, including an Aim Trainer
            developed in Unity, a Tic Tac Toe game with AI capabilities, and
            this very portfolio website.
            <br />
            <br /> Explore my work and see how my experiences and education have
            shaped my approach to problem-solving and innovation in the field of
            computer science. Thank you for visiting!
          </p>
        </SectionBorderLines>
        <div className="h-[100vh]"></div>
        <SectionBorderLines>
          <h1 id="Two" className="text-2xl text-center">
            Welcome to My Portfolio Two
          </h1>
          <br />
          <p className="text-xl text-center">
            Hello! I'm <span className="text-cybpnk-ylw2">Esam Khalid</span>
            , a passionate and dedicated computer science student at Aston
            University, currently pursuing a BSc Hons in Computer Science with a
            placement year.
            <br />
            <br /> Through my academic and personal projects, I have honed my
            skills in various programming languages and technologies. My
            portfolio showcases a range of projects, including an Aim Trainer
            developed in Unity, a Tic Tac Toe game with AI capabilities, and
            this very portfolio website.
            <br />
            <br /> Explore my work and see how my experiences and education have
            shaped my approach to problem-solving and innovation in the field of
            computer science. Thank you for visiting!
          </p>
        </SectionBorderLines>
        <div className="h-[100vh]"></div>
        <SectionBorderLines>
          <h1 id="Three" className="text-2xl text-center">
            Welcome to My Portfolio Three
          </h1>
          <br />
          <p className="text-xl text-center">
            Hello! I'm <span className="text-cybpnk-ylw2">Esam Khalid</span>
            , a passionate and dedicated computer science student at Aston
            University, currently pursuing a BSc Hons in Computer Science with a
            placement year.
            <br />
            <br /> Through my academic and personal projects, I have honed my
            skills in various programming languages and technologies. My
            portfolio showcases a range of projects, including an Aim Trainer
            developed in Unity, a Tic Tac Toe game with AI capabilities, and
            this very portfolio website.
            <br />
            <br /> Explore my work and see how my experiences and education have
            shaped my approach to problem-solving and innovation in the field of
            computer science. Thank you for visiting!
          </p>
        </SectionBorderLines>
        <div className="h-[100vh]"></div>
        <SectionBorderLines>
          <h1 id="Four" className="text-2xl text-center">
            Welcome to My Portfolio Four
          </h1>
          <br />
          <p className="text-xl text-center">
            Hello! I'm <span className="text-cybpnk-ylw2">Esam Khalid</span>
            , a passionate and dedicated computer science student at Aston
            University, currently pursuing a BSc Hons in Computer Science with a
            placement year.
            <br />
            <br /> Through my academic and personal projects, I have honed my
            skills in various programming languages and technologies. My
            portfolio showcases a range of projects, including an Aim Trainer
            developed in Unity, a Tic Tac Toe game with AI capabilities, and
            this very portfolio website.
            <br />
            <br /> Explore my work and see how my experiences and education have
            shaped my approach to problem-solving and innovation in the field of
            computer science. Thank you for visiting!
          </p>
        </SectionBorderLines>
      </div>
    </>
  );
}
