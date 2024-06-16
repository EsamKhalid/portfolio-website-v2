import React from "react";

import NavBar from "@/components/NavBar/NavBar";
import SectionNavigation from "@/components/SectionNavigation/SectionNavigation";

import { BiArrowFromLeft } from "react-icons/bi";

export default function page() {
  return (
    <>
      <NavBar />
      <div className="px-[25px] pt-[15px] overflow-hidden">
        <h1 className="text-4xl pb-[25px]">// About Page</h1>
        <SectionNavigation />
      </div>
    </>
  );
}
