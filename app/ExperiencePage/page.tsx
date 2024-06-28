import React from "react";

import NavBar from "@/components/NavBar/NavBar";
import TestCard from "@/components/LanugageCards/TestCard";

import PythonCard from "@/components/LanugageCards/PythonCard";
import LanguageCarousel from "@/components/Carousel/LanguageCarousel";

const Cards: JSX.Element[] = [
  <TestCard title="Test1"></TestCard>,
  <TestCard title="Test2"></TestCard>,
  <TestCard title="Test3"></TestCard>,
  <TestCard title="Test4"></TestCard>,
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
