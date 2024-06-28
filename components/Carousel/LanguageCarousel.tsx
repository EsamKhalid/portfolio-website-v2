"use client";

import React from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface LanguageCarouselProps {
  Cards: JSX.Element[];
}

export default function LanguageCarousel({ Cards }: LanguageCarouselProps) {
  const [currentCard, setCurrentCard] = React.useState(0);

  function showNextImage() {}

  function showPreviousImage() {}

  return (
    <>
      <div className="relative">
        {Cards[currentCard]}
        <button onClick={showPreviousImage} className="carouselBtn left-0">
          <FaArrowLeft />
        </button>
        <button onClick={showPreviousImage} className="carouselBtn right-0">
          <FaArrowRight />
        </button>
      </div>
    </>
  );
}
