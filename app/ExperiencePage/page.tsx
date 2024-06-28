import React from "react";

import NavBar from "@/components/NavBar/NavBar";

import PythonCard from "@/components/LanugageCards/PythonCard";
import LanguageCarousel from "@/components/Carousel/LanguageCarousel";

const Cards: JSX.Element[] = [
  <PythonCard></PythonCard>,
  <PythonCard></PythonCard>,
  <PythonCard></PythonCard>,
];

export default function page() {
  return (
    <>
      <NavBar />
      <h1>Experience Page</h1>
      <div className="flex justify-center">
        <LanguageCarousel Cards={Cards}></LanguageCarousel>
      </div>
    </>
  );
}
