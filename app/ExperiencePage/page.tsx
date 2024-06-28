import React from "react";

import NavBar from "@/components/NavBar/NavBar";
import TestCard from "@/components/LanugageCards/TestCard";

import PythonCard from "@/components/LanugageCards/PythonCard";
import LanguageCarousel from "@/components/Carousel/LanguageCarousel";

export default function page() {
  return (
    <>
      <NavBar />
      <h1>Experience Page</h1>
      <div className="flex justify-center">
        <LanguageCarousel></LanguageCarousel>
      </div>
    </>
  );
}
