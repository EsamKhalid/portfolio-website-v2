import React, { useState } from "react";

import SectionBorderLines from "../Sections/SectionBorderLines";
import NavElement from "./NavElement";

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
      <div className="inline-block">
        <nav className="inline-block justify-evenly border border-cybpnk-brdr [&_h1]:text-xl p-3">
          <NavElement Value1={Value0} />
          <NavElement Value1={Value1} />
          <NavElement Value1={Value2} />
          <NavElement Value1={Value3} />
          <NavElement Value1={Value4} />
          <div className="cdw-right w-full h-4"></div>
        </nav>

        <div className="custom-diagonal-white-left w-full"></div>
      </div>
    </>
  );
}
