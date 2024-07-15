"use client";
import Image from "next/image";
import NavBar from "../components/NavBar/NavBar";
import Link from "next/link";
import SectionSidewaysText from "@/components/Sections/SectionSidewaysText";
import SectionBorderLines from "@/components/Sections/SectionBorderLines";

import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionNoDiag from "@/components/Sections/SectionNoDiag";

import placeholder from "@/Images/placeholder.avif";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="px-[25px] pt-[15px]">
        <h1 className="text-4xl pb-[25px]">// Home Page</h1>
        <div className="flex justify-center">
          <div className="inline-block justify-center">
            <SectionNoDiag id="socials" className="w-full">
              <div className="NavLogoContainer flex justify-end w-full">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/esam-khalid-49648728b/"
                >
                  <FaLinkedin className="NavLogo" />
                </Link>
                <Link target="_blank" href="https://github.com/EsamKhalid">
                  <FaGithub className="NavLogo" />
                </Link>
              </div>
            </SectionNoDiag>
            <SectionBorderLines id="" className="w-[90vw]">
              <h1 className="text-2xl">Welcome to My Portfolio</h1>
              <br />
              <p className="text-xl">
                Hello! I'm <span className="text-cybpnk-ylw2">Esam Khalid</span>
                , a passionate and dedicated computer science student at Aston
                University, currently pursuing a BSc Hons in Computer Science
                with a placement year.
                <br />
                <br /> Through my academic and personal projects, I have honed
                my skills in various programming languages and technologies. My
                portfolio showcases a range of projects, including an Aim
                Trainer developed in Unity, university projects completed to
                professional standard , and this very portfolio website.
                <br />
                <br /> Explore my work and see how my experiences and education
                have shaped my approach to problem-solving and innovation in the
                field of computer science. Thank you for visiting!
              </p>
            </SectionBorderLines>
            <div className="flex w-full h-[50%]">
              <div
                className="size-full flex justify-center border border-cybpnk-ylw2 flex-1 projectFlex"
                style={{ alignItems: "center" }}
              >
                <Image
                  fill={false}
                  className="size-[80%] m-auto"
                  src={placeholder}
                  alt="image"
                />
              </div>
              <div className="size-full bg-jms-blue border border-cybpnk-ylw2 flex-1 projectFlex">
                <Image
                  fill={false}
                  className="size-full"
                  src={placeholder}
                  alt="image"
                />
              </div>
              <div className="size-full bg-jms-blue border border-cybpnk-ylw2 flex-1 projectFlex">
                <Image
                  fill={false}
                  className="size-full"
                  src={placeholder}
                  alt="image"
                />
              </div>
              <div className="size-full bg-jms-blue border border-cybpnk-ylw2 flex-1 projectFlex">
                <Image
                  fill={false}
                  className="size-full"
                  src={placeholder}
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
