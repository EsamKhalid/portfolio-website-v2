import React from "react";

import DiagonalLines from "../Shapes/DiagonalLines";
import CustomSVG from "../SVG/CustomSVG";

interface SectionBorderLinesProps {
  children: React.ReactNode;
  className: string;
}

export default function SectionBorderLines({
  children,
  className,
}: SectionBorderLinesProps) {
  return (
    <>
      <div className="flex justify-center">
        <div className="justify-center inline-block p-2">
          <div
            className={
              "border w-[50vh] border-cybpnk-brdr p-[20px] pb-[7.5px]  text-wrap " +
              className
            }
          >
            {children}

            <DiagonalLines
              className="mt-[10px] w-full"
              bgsize="25px"
              rotation="right"
              thicknessType="thick"
            />
          </div>
        </div>
      </div>
    </>
  );
}
