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
          <Link target="_blank" href="https://github.com/EsamKhalid">
            <FaLinkedin className="NavLogo" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/esam-khalid-49648728b/"
          >
            <FaGithub className="NavLogo" />
          </Link>
        </div>
      </div>
      <div className="flex">
        <div className="custom-diagonal-white w-full h-[26px]  "></div>
      </div>
    </>
  );
}

export default NavBar;
