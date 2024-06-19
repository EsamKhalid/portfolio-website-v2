import React from "react";

import DiagonalLines from "../Shapes/DiagonalLines";

interface SectionBorderLinesProps {
  children: React.ReactNode;
}

export default function SectionBorderLines({
  children,
}: SectionBorderLinesProps) {
  return (
    <>
      <div className="flex justify-center">
        <div className="justify-center inline-block p-2">
          <div className="border w-[750px] border-cybpnk-brdr p-[20px] pb-[20px]  text-wrap">
            {children}
            <div className="custom-diagonal-white-right-static mt-[10px]"></div>
            <DiagonalLines
              className="mt-[10px]"
              bgsize="10px"
              rotation="left"
            />
          </div>
        </div>
      </div>
    </>
  );
}
