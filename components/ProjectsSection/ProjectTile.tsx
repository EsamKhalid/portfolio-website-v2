import React from "react";

import Image, { StaticImageData } from "next/image";

interface ProjectTileProps {
  ProjectTitle: string;
  ProjectType: string;
  StartDate: string;
  EndDate: string;
  ImageSource: StaticImageData;
}

export default function ProjectTile({
  ProjectTitle,
  ProjectType,
  StartDate,
  EndDate,
  ImageSource,
}: ProjectTileProps) {
  return (
    <>
      <div className="inline-block border border-cybpnk-brdr p-2 [&_*]:p-2">
        <h1 className="text-4xl">{ProjectTitle}</h1>
        <Image
          fill={false}
          className="w-[250px] h-[250px]"
          src={ImageSource}
          alt="image"
        />
        <h2>Type: {ProjectType}</h2>
        <h2>Start Date: {StartDate}</h2>
        <h2>End Date: {EndDate}</h2>
      </div>
    </>
  );
}
