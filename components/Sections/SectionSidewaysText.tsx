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
      <div className="h-[75px] border m-2 w-full -rotate-90">
        <CustomSVG className="h-full w-full p-2" />
      </div>
      <div className="h-auto m-2 border border-cybpnk-brdr w-[75px] flex relative "></div>
    </>
  );
}
