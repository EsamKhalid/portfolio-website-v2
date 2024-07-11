import React, { useState } from "react";

import Image, { StaticImageData } from "next/image";

import DiagonalLines from "../Shapes/DiagonalLines";
import CornerBorder from "../Borders/CornerBorder";
import { motion } from "framer-motion";

interface ProjectTileProps {
  ProjectTitle: string;
  ProjectType: string;
  EndDate: Date;
  ImageSource: StaticImageData;
  className: string;
}

export default function ProjectTile({
  ProjectTitle,
  ProjectType,
  EndDate,
  ImageSource,
  className,
}: ProjectTileProps) {
  const [isHovered, setHovered] = useState(false);
  return (
    <>
      <motion.div
        className="hover:cursor-pointer size-full"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <CornerBorder
          className={"size-full " + className}
          cornerSize="15px"
          borderThickness="2px"
          borderGap="3px"
        >
          <div
            className="flex flex-col justify-between border border-cybpnk-brdr rounded w-full p-2 [&_*]:p-1 md:[&_*]:p-2
        min-h-full min-w-fit"
          >
            <h1 className="text-4xl">{"// " + ProjectTitle}</h1>
            <Image
              fill={false}
              className=" sm:h-[200px] md:min-w-[250px]  md:min-h-[250px] w-full"
              src={ImageSource}
              alt="image"
            />
            <h2 className="text-lg">
              <span className="text-lg m-[-5px]">//Type:</span> <br />
              {ProjectType}
            </h2>
            <h2 className="text-lg">
              <span className="text-lg m-[-8px]">//Completed: </span> <br />
              {EndDate.toLocaleDateString()}
            </h2>
            <DiagonalLines
              className="mt-[10px] h-[18px]"
              bgsize="25px"
              rotation="right"
              thicknessType="thick"
            />
          </div>
        </CornerBorder>
      </motion.div>
    </>
  );
}
