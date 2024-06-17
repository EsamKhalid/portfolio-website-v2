import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaMinus, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

import FlatCornerBox from "../Shapes/FlatCornerBox";

interface valueProps {
  Value1: String;
}

export default function NavElement({ Value1 }: valueProps) {
  const [isHovered, setHovered] = useState(false);
  return (
    <div className="flex items-center p-2 inhe">
      <FaMinus id="test" />
      <FaArrowRight />
      <motion.div
        className="ml-[2px]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{ x: isHovered ? 10 : 0 }}
      >
        <Link href={"#" + Value1}>
          <h1>{Value1}</h1>
        </Link>
      </motion.div>
    </div>
  );
}
