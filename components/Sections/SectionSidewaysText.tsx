import React from "react";

interface SectionSidewaysTextProps {
  textValue: string;
}

export default function SectionSidewaysText({
  textValue,
}: SectionSidewaysTextProps) {
  return (
    <>
      <div className="h-auto m-2 border border-cybpnk-brdr w-[75px] flex relative ">
        <h1 className="text-7xl text-nowrap w-full absolute bottom-0 -rotate-90 px-6">
          {textValue}
        </h1>
      </div>
    </>
  );
}
