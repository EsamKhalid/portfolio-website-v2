import React from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import SectionBorderLines from "../Sections/SectionBorderLines";
import Link from "next/link";

interface ValueProps {
  Value1: String;
  Value2: String;
  Value3: String;
  Value4: String;
}

export default function SectionNavigation({
  Value1,
  Value2,
  Value3,
  Value4,
}: ValueProps) {
  return (
    <>
      <nav className="block">
        <div className="flex hover:[&_h1]:text-red-600 w-screen">
          <BiArrowFromLeft className="invisible hover:visible" />
          <Link href={"#" + Value1}>
            <h1>One</h1>
          </Link>
        </div>
        <Link href={"#" + Value2}>
          <h1>Two</h1>
        </Link>

        <Link href={"#" + Value3}>
          <h1>Three</h1>
        </Link>

        <Link href={"#" + Value4}>
          <h1>Four</h1>
        </Link>
      </nav>
    </>
  );
}
