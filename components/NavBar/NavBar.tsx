"use client";

import Link from "next/link";

import Image from "next/image";
import TestImg from "./testImg.png";

import CornerBorder from "../Borders/CornerBorder";
import PageLink from "./PageLink";

import { FaFontAwesomeLogoFull, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import Page from "@/app/ProjectsPage/page";

/*
function NavBar() {
  return (
    <>
      <div className="border border-white border-x-0 border-y-2 py-3">
        <h1 className="font-Blender-Pro-Book text-white text-nowrap text-4xl">
          Esam Khalid
        </h1>
        <nav></nav>
      </div>
    </>
  );
}
*/

function NavBar() {
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 15;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return controls.stop;
  }, [xTranslation, width]);

  const [isHovered, setHovered] = useState(false);

  return (
    <>
      <div className="overflow-hidden">
        <nav className="navbar flex justify-between bg-black text-white items-center px-[2vw]  pt-[10px] w-screen">
          <Link
            href="../"
            className="hover:bg-jms-blue rounded scale-[.85] p-[5px] "
          >
            <CornerBorder
              className=""
              cornerSize="9px"
              borderThickness="2px"
              borderGap="3px"
            >
              <div className="inline-block sm:flex justify-center">
                <h1 className="text-xl sm:text-2xl">Esam&nbsp;</h1>
                <p> </p>
                <h1 className="text-xl sm:text-2xl ">Khalid</h1>
              </div>
            </CornerBorder>
          </Link>

          <ul className="text-center list-none inline-flex">
            <PageLink text="About Me" link="/AboutPage" />
            <PageLink text="Projects" link="/ProjectsPage" />
            <PageLink text="API" link="/API" />
          </ul>
          <div className="NavLogoContainer sm:flex justify-between">
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
        </nav>
        <motion.div
          className="flex w-max"
          ref={ref}
          style={{ x: xTranslation }}
        >
          <div className="custom-diagonal-white-right-animated w-[98vw] h-[15px]  md:h-[23px] mt-2 "></div>
          <div className="custom-diagonal-white-right-animated w-[100vw] h-[15px]  md:h-[23px] mt-2 "></div>
        </motion.div>
      </div>
    </>
  );
}

export default NavBar;
