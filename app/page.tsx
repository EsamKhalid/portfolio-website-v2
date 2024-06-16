"use client";
import Image from "next/image";
import NavBar from "../components/NavBar/NavBar";
import Link from "next/link";
import SectionSidewaysText from "@/components/Sections/SectionSidewaysText";
import SectionBorderLines from "@/components/Sections/SectionBorderLines";

import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="px-[25px] pt-[15px]">
        <h1 className="text-4xl pb-[25px]">// Home Page</h1>
        <div className="flex justify-center">
          <SectionSidewaysText textValue="Esam_Khalid" />
          <SectionBorderLines>
            <h1 className="text-2xl text-center">Welcome to My Portfolio</h1>
            <br />
            <p className="text-xl text-center">
              Hello! I'm <span className="text-cybpnk-ylw2">Esam Khalid</span>
              , a passionate and dedicated computer science student at Aston
              University, currently pursuing a BSc Hons in Computer Science with
              a placement year.
              <br />
              <br /> Through my academic and personal projects, I have honed my
              skills in various programming languages and technologies. My
              portfolio showcases a range of projects, including an Aim Trainer
              developed in Unity, a Tic Tac Toe game with AI capabilities, and
              this very portfolio website.
              <br />
              <br /> Explore my work and see how my experiences and education
              have shaped my approach to problem-solving and innovation in the
              field of computer science. Thank you for visiting!
            </p>
          </SectionBorderLines>
        </div>
      </div>
    </>
  );
}
