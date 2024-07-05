import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import CornerBorder from "../Borders/CornerBorder";

interface props {
  text: string;
  link: string;
}

export default function PageLink({ text, link }: props) {
  const [isHovered, setHovered] = useState(false);
  return (
    <>
      <motion.div
        className="px-2 sm:mx-5 md:mx-5 size-fit p-2 h-auto"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{
          y: isHovered ? -12 : 0,
          scale: isHovered ? 1.1 : 1,
          transition: { duration: 0.2 },
        }}
      >
        <CornerBorder
          className="size-full"
          cornerSize="9px"
          borderThickness="2px"
          borderGap="3px"
        >
          <div
            className="flex justify-center size-full"
            style={{ alignItems: "center" }}
          >
            <Link href={link}>
              <li className="text-lg">{text}</li>
            </Link>
          </div>
        </CornerBorder>
      </motion.div>
    </>
  );
}
