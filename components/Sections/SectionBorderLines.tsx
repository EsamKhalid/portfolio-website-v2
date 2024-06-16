import React from "react";

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
          <div className="border w-[750px] border-cybpnk-brdr p-[20px] pb-[25px]  text-wrap">
            {children}
          </div>
          <div className="custom-diagonal-white-right w-full h-[23px] mt-2"></div>
        </div>
      </div>
    </>
  );
}
