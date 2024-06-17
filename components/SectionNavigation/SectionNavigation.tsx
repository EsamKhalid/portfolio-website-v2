import React, { useState } from "react";

import SectionBorderLines from "../Sections/SectionBorderLines";
import NavElement from "./NavElement";

import { BiArrowFromLeft } from "react-icons/bi";
import { FaArrowRight, FaMinus } from "react-icons/fa";

import Link from "next/link";
import { motion } from "framer-motion";

interface ValueProps {
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
}: ValueProps) {
  const [isHovered, setHovered] = useState(false);

  return (
    <>
      <nav className="block border border-cybpnk-brdr [&_h1]:text-xl p-3">
        <NavElement Value1="One" />
        <NavElement Value1="Two" />
        <NavElement Value1="Three" />
        <NavElement Value1="Four" />
      </nav>
    </>
  );
}
