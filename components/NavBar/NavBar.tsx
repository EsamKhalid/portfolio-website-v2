"use client";

import Link from "next/link";

import Image from "next/image";
import TestImg from "./testImg.png";

import { FaFontAwesomeLogoFull, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

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

  return (
    <>
      <div className="overflow-hidden">
        <nav className="navbar flex justify-between text-white items-center px-[5px] pt-[10px] w-screen scale">
          <Link
            href="../"
            className="hover:bg-jms-blue rounded scale-[.85] p-[10px] m-[-10px]"
          >
            <h1 className="text-2xl border-corners-sm p-2">Esam Khalid</h1>
          </Link>

          <ul className="text-center list-none [&_*]:text-2xl">
            <Link href="../AboutPage">
              <li>About Me</li>
            </Link>

            <Link href="../ProjectsPage">
              <li>Projects</li>
            </Link>

            <Link href="ExperiencePage">
              <li>Experience</li>
            </Link>

            <Link href="ContactPage">
              <li>Contact</li>
            </Link>
          </ul>
          <div className="NavLogoContainer flex justify-between">
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
          <div className="custom-diagonal-white-right w-[100vh] h-[23px] mt-2 "></div>
          <div className="custom-diagonal-white-right w-[100vh] h-[23px] mt-2 "></div>
        </motion.div>
      </div>
    </>
  );
}

export default NavBar;
