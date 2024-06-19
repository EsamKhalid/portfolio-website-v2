import React from "react";

import Image from "next/image";
import placeholder from "../../Images/placeholder.avif";

export default function ProjectTile() {
  return (
    <>
      <div className="inline-block border border-cybpnk-brdr p-2 [&_*]:p-2">
        <h1 className="text-4xl">Project One</h1>
        <Image className="w-[250px] h-[250px]" src={placeholder} alt="image" />
        <h2>Type: Personal Project</h2>
        <h2>Start Date: 19/06/24</h2>
        <h2>End Date: 29/06/25</h2>
      </div>
    </>
  );
}
