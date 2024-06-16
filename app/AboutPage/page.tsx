import React from "react";

import NavBar from "@/components/NavBar/NavBar";

import { BiArrowFromLeft } from "react-icons/bi";

export default function page() {
  return (
    <>
      <NavBar />
      <div className="px-[25px] pt-[15px]">
        <h1 className="text-4xl pb-[25px]">// About Page</h1>
        <nav className="block">
          <div className="flex hover:[&_h1]:text-red-600 w-screen">
            <BiArrowFromLeft className="invisible hover:visible" />
            <h1>One</h1>
          </div>

          <h1>Two</h1>
          <h1>Three</h1>
          <h1>Four</h1>
        </nav>
      </div>
    </>
  );
}
