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
        className="mx-5 size-fit"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{
          y: isHovered ? -10 : 0,
          scale: isHovered ? 1.1 : 1,
          transition: { duration: 0.2 },
        }}
      >
        <CornerBorder
          className="size-fit"
          cornerSize="9px"
          borderThickness="2px"
          borderGap="3px"
        >
          <Link href={link}>
            <li>{text}</li>
          </Link>
        </CornerBorder>
      </motion.div>
    </>
  );
}
