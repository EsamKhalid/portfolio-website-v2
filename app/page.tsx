"use client";
import Image from "next/image";
import NavBar from "../components/NavBar/NavBar";
import Link from "next/link";

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
          <div className="h-auto m-2 border border-cybpnk-brdr w-[75px] flex relative ">
            <h1 className="text-7xl text-nowrap w-full absolute bottom-0 -rotate-90 px-6">
              Esam_Khalid
            </h1>
          </div>
          <div className="justify-center inline-block p-2">
            <div className="border w-[750px] border-cybpnk-brdr p-[20px] pb-[25px]  text-wrap">
              <h1 className="text-2xl text-center">Welcome to My Portfolio</h1>
              <br />
              <p className="text-xl text-center">
                Hello! I'm <span className="text-cybpnk-ylw2">Esam Khalid</span>
                , a passionate and dedicated computer science student at Aston
                University, currently pursuing a BSc Hons in Computer Science
                with a placement year.
                <br />
                <br /> Through my academic and personal projects, I have honed
                my skills in various programming languages and technologies. My
                portfolio showcases a range of projects, including an Aim
                Trainer developed in Unity, a Tic Tac Toe game with AI
                capabilities, and this very portfolio website.
                <br />
                <br /> Explore my work and see how my experiences and education
                have shaped my approach to problem-solving and innovation in the
                field of computer science. Thank you for visiting!
              </p>
            </div>
            <div className="custom-diagonal-white-right w-full h-[23px] mt-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}
