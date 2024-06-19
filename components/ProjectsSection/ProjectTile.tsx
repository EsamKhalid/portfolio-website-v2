import React from "react";

import Image from "next/image";
import placeholder from "../../Images/placeholder.avif";

export default function ProjectTile() {
  return (
    <>
      <div className="inline-block border-cybpnk-brdr p-2">
        <h1 className="text-4xl">Project One</h1>
        <Image className="w-[250px] h-[250px]" src={placeholder} alt="image" />
      </div>
    </>
  );
}
