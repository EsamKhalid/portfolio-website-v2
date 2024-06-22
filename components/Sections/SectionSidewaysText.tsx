import React from "react";

import Image from "next/image";

import nameImg from "../../images/Esam_Khalid(white).svg";

import CustomSVG from "../SVG/CustomSVG";

interface SectionSidewaysTextProps {
  textValue: string;
}

export default function SectionSidewaysText({
  textValue,
}: SectionSidewaysTextProps) {
  return (
    <>
      <div className="w-[75px] h-auto border m-2">
        <div className="h-[75px] border m-2 w-auto -rotate-90 absolute">
          <CustomSVG className="h-full w-full p-2" />
        </div>
      </div>
    </>
  );
}
