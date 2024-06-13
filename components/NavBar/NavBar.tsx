import Link from "next/link";

import Image from "next/image";
import TestImg from "./testImg.png";

import { FaFontAwesomeLogoFull, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

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
  return (
    <>
      <div className="navbar flex justify-between text-white items-center px-[5px] pt-[10px] w-screen scale">
        <Link
          href="../"
          className="hover:bg-jms-blue rounded scale-[.85] p-[10px]"
        >
          <h1 className="text-2xl border-corners-sm p-2">Esam Khalid</h1>
        </Link>
        <ul className="text-center list-none">
          <li>About Me</li>
          <li>Projects</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
        <div className="NavLogoContainer flex justify-between">
          <a href="">
            <FaLinkedin className="NavLogo" />
          </a>
          <a>
            <FaGithub className="NavLogo" />
          </a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
