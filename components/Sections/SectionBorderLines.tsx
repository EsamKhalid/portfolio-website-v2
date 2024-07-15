import React from "react";

import DiagonalLines from "../Shapes/DiagonalLines";
import CustomSVG from "../SVG/CustomSVG";

interface SectionBorderLinesProps {
  children: React.ReactNode;
  className: string;
  id: string;
}

export default function SectionBorderLines({
  children,
  className,
  id,
}: SectionBorderLinesProps) {
  return (
    <>
      <div
        id={id}
        className={"inline-block  border border-cybpnk-brdr text-center w-full"}
      >
        <div className="inline-block justify-start p-2 w-full">
          <div className={"w-full p-[0px] pb-[0px]  text-wrap " + className}>
            {children}
          </div>
        </div>
        <DiagonalLines
          className="mt-[10px] w-full"
          bgsize="25px"
          rotation="right"
          thicknessType="thick"
        />
      </div>
    </>
  );
}
