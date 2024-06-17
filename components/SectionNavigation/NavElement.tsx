import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaMinus, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

interface valueProps {
  Value1: string;
}

export default function NavElement({ Value1 }: valueProps) {
  const [isHovered, setHovered] = useState(false);
  return (
    <div className="flex items-center p-2">
      <FaMinus />
      <FaArrowRight className="hidden" />
      <motion.div
        className="border border-cybpnk-brdr rounded-xl px-[7.5px] py-[2px] ml-[2px]"
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
