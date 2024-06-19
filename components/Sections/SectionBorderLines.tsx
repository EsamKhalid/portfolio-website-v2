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
          <div className="border w-[750px] border-cybpnk-brdr p-[20px] pb-[7.5px] text-wrap">
            {children}

            <DiagonalLines
              className="mt-[10px] "
              bgsize="35px"
              rotation="right"
            />
          </div>
        </div>
      </div>
    </>
  );
}
