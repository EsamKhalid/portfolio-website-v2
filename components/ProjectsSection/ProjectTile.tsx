import React from "react";

import Image, { StaticImageData } from "next/image";

import DiagonalLines from "../Shapes/DiagonalLines";
import CornerBorder from "../Borders/CornerBorder";

interface ProjectTileProps {
  ProjectTitle: string;
  ProjectType: string;
  StartDate: Date;
  EndDate: string;
  ImageSource: StaticImageData;
  className: string;
}

export default function ProjectTile({
  ProjectTitle,
  ProjectType,
  StartDate,
  EndDate,
  ImageSource,
  className,
}: ProjectTileProps) {
  return (
    <>
      <CornerBorder
        className={"min-h-fit min-w-fit " + className}
        cornerSize="15px"
        borderThickness="2px"
        borderGap="3px"
      >
        <div
          className="inline-block border border-cybpnk-brdr rounded  p-2 [&_*]:p-1 md:[&_*]:p-2
        min-h-full min-w-fit"
        >
          <h1 className="text-4xl text-nowrap">{"// " + ProjectTitle}</h1>
          <Image
            fill={false}
            className="sm:w-[200px] sm:h-[200px] md:min-w-[250px]  md:min-h-[250px]"
            src={ImageSource}
            alt="image"
          />
          <h2>//Type: {ProjectType}</h2>
          <h2>//Start_Date: {new Date(StartDate).toLocaleDateString()}</h2>
          <h2>//End_Date: {EndDate}</h2>
          <DiagonalLines
            className="mt-[10px] h-[18px]"
            bgsize="25px"
            rotation="right"
            thicknessType="thick"
          />
        </div>
      </CornerBorder>
    </>
  );
}
