import React, { useState } from "react";

import SectionBorderLines from "../Sections/SectionBorderLines";
import NavElement from "./NavElement";
import DiagonalLines from "../Shapes/DiagonalLines";

import { BiArrowFromLeft } from "react-icons/bi";
import { FaArrowRight, FaMinus } from "react-icons/fa";

import Link from "next/link";
import { motion } from "framer-motion";

interface ValueProps {
  Value0: String;
  Value1: String;
  Value2: String;
  Value3: String;
  Value4: String;
}

export default function SectionNavigation({
  Value1,
  Value2,
  Value3,
  Value4,
  Value0,
}: ValueProps) {
  const [isHovered, setHovered] = useState(false);

  return (
    <>
      <div className="hidden sm:flex">
        <nav className="inline-block w-fit h-fit justify-evenly border border-cybpnk-brdr [&_h1]:text-xl sm:pt-0 p-3">
          <NavElement Value1={Value0} />
          <NavElement Value1={Value1} />
          <NavElement Value1={Value2} />
          <NavElement Value1={Value3} />
          <NavElement Value1={Value4} />
          <DiagonalLines
            className="h-[20px] mb-[-5px]"
            bgsize="15px"
            rotation="right"
            thicknessType="thick"
          />
        </nav>
      </div>
    </>
  );
}
