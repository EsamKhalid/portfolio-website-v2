import React from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import SectionBorderLines from "../Sections/SectionBorderLines";
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
  return (
    <>
      <nav className="block border border-cybpnk-brdr [&_h1]:text-xl p-3">
        <motion.div className="flex items-center p-2">
          <FaMinus />
          <FaArrowRight className="hidden" />
          <Link href={"#" + Value1}>
            <h1>One</h1>
          </Link>
        </motion.div>
        <div className="flex  hover:[&_h1]:text-red-600 p-2">
          <BiArrowFromLeft />
          <Link href={"#" + Value2}>
            <h1>Two</h1>
          </Link>
        </div>

        <div className="flex  hover:[&_h1]:text-red-600 p-2">
          <BiArrowFromLeft />
          <Link href={"#" + Value3}>
            <h1>Three</h1>
          </Link>
        </div>

        <div className="flex  hover:[&_h1]:text-red-600 p-2">
          <BiArrowFromLeft />
          <Link href={"#" + Value4}>
            <h1>Four</h1>
          </Link>
        </div>
      </nav>
    </>
  );
}
