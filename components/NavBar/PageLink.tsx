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
        className={
          isHovered ? "mx-5 size-fit bg-jms-blue p-2" : "mx-5 size-fit p-2"
        }
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{
          y: isHovered ? -10 : 0,
          scale: isHovered ? 1.1 : 1,
          transition: { duration: 0.45 },
        }}
      >
        <CornerBorder
          className="size-fit"
          cornerSize="9px"
          borderThickness="2px"
          borderGap="3px"
        >
          <Link href={link}>
            <li className="text-lg">{text}</li>
          </Link>
        </CornerBorder>
      </motion.div>
    </>
  );
}
