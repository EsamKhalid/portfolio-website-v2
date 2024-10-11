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
              <h1 className="text-2xl">Currently Looking For Placement</h1>
              <br />
              <p className="text-xl">
                I am currently in my second year of my computer science degree
                and am looking to undertake a 2025/26 placement year. Any
                companies looking for a passionate and dedicated computer
                science student, please feel free to contact me at{" "}
                <span className="text-cybpnk-ylw2">
                  esam-khalid@outlook.com
                </span>
                .
              </p>
              <p></p>
              <object
                className="text-white"
                data="http://africau.edu/images/default/sample.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
              >
                <p>
                  Alternative text - include a link{" "}
                  <a href="http://africau.edu/images/default/sample.pdf">
                    to the PDF!
                  </a>
                </p>
              </object>
            </SectionBorderLines>
            <div className="h-[15px]"></div>
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
          </div>
        </div>
      </div>
    </>
  );
}
