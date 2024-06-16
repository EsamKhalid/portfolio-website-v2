import React from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import SectionBorderLines from "../Sections/SectionBorderLines";
import Link from "next/link";

export default function SectionNavigation() {
  return (
    <>
      <nav className="block">
        <div className="flex hover:[&_h1]:text-red-600 w-screen">
          <BiArrowFromLeft className="invisible hover:visible" />
          <a href="#One">
            <h1>One</h1>
          </a>
        </div>

        <h1>Two</h1>
        <h1>Three</h1>
        <Link href="#Four">
          <h1>Four</h1>
        </Link>
      </nav>
      <SectionBorderLines>
        <a href="#One" className="text-2xl text-center">
          <h1>Welcome to My Portfolio One</h1>
        </a>
        <br />
        <p className="text-xl text-center">
          Hello! I'm <span className="text-cybpnk-ylw2">Esam Khalid</span>
          , a passionate and dedicated computer science student at Aston
          University, currently pursuing a BSc Hons in Computer Science with a
          placement year.
          <br />
          <br /> Through my academic and personal projects, I have honed my
          skills in various programming languages and technologies. My portfolio
          showcases a range of projects, including an Aim Trainer developed in
          Unity, a Tic Tac Toe game with AI capabilities, and this very
          portfolio website.
          <br />
          <br /> Explore my work and see how my experiences and education have
          shaped my approach to problem-solving and innovation in the field of
          computer science. Thank you for visiting!
        </p>
      </SectionBorderLines>
      <SectionBorderLines>
        <h1 className="text-2xl text-center">Welcome to My Portfolio Two</h1>
        <br />
        <p className="text-xl text-center">
          Hello! I'm <span className="text-cybpnk-ylw2">Esam Khalid</span>
          , a passionate and dedicated computer science student at Aston
          University, currently pursuing a BSc Hons in Computer Science with a
          placement year.
          <br />
          <br /> Through my academic and personal projects, I have honed my
          skills in various programming languages and technologies. My portfolio
          showcases a range of projects, including an Aim Trainer developed in
          Unity, a Tic Tac Toe game with AI capabilities, and this very
          portfolio website.
          <br />
          <br /> Explore my work and see how my experiences and education have
          shaped my approach to problem-solving and innovation in the field of
          computer science. Thank you for visiting!
        </p>
      </SectionBorderLines>
      <SectionBorderLines>
        <h1 className="text-2xl text-center">Welcome to My Portfolio Three</h1>
        <br />
        <p className="text-xl text-center">
          Hello! I'm <span className="text-cybpnk-ylw2">Esam Khalid</span>
          , a passionate and dedicated computer science student at Aston
          University, currently pursuing a BSc Hons in Computer Science with a
          placement year.
          <br />
          <br /> Through my academic and personal projects, I have honed my
          skills in various programming languages and technologies. My portfolio
          showcases a range of projects, including an Aim Trainer developed in
          Unity, a Tic Tac Toe game with AI capabilities, and this very
          portfolio website.
          <br />
          <br /> Explore my work and see how my experiences and education have
          shaped my approach to problem-solving and innovation in the field of
          computer science. Thank you for visiting!
        </p>
      </SectionBorderLines>
      <SectionBorderLines>
        <a href="Four"></a>
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
          skills in various programming languages and technologies. My portfolio
          showcases a range of projects, including an Aim Trainer developed in
          Unity, a Tic Tac Toe game with AI capabilities, and this very
          portfolio website.
          <br />
          <br /> Explore my work and see how my experiences and education have
          shaped my approach to problem-solving and innovation in the field of
          computer science. Thank you for visiting!
        </p>
      </SectionBorderLines>
    </>
  );
}
