import React from "react";

import Image from "next/image";

import placeholder from "@/images/placeholder.avif";

export default function ProjectFlex() {
  return (
    <>
      <div className="flex w-full h-[50%]">
        <div
          className="size-full flex justify-center border border-cybpnk-ylw2 flex-1 projectFlex"
          style={{ alignItems: "center" }}
        >
          <Image
            fill={false}
            className="size-[80%] m-auto"
            src={placeholder}
            alt="image"
          />
        </div>
        <div className="size-full bg-jms-blue border border-cybpnk-ylw2 flex-1 projectFlex">
          <Image
            fill={false}
            className="size-full"
            src={placeholder}
            alt="image"
          />
        </div>
        <div className="size-full bg-jms-blue border border-cybpnk-ylw2 flex-1 projectFlex">
          <Image
            fill={false}
            className="size-full"
            src={placeholder}
            alt="image"
          />
        </div>
        <div className="size-full bg-jms-blue border border-cybpnk-ylw2 flex-1 projectFlex">
          <Image
            fill={false}
            className="size-full"
            src={placeholder}
            alt="image"
          />
        </div>
      </div>
    </>
  );
}
