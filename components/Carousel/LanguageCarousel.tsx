"use client";

import React from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface LanguageCarouselProps {
  Cards: JSX.Element[];
}

export default function LanguageCarousel({ Cards }: LanguageCarouselProps) {
  const [currentCard, setCurrentCard] = React.useState(0);

  function showNextImage() {
    setCurrentCard((index) => {
      if (index === Cards.length - 1) return 0;
      return index + 1;
    });
  }

  function showPreviousImage() {
    setCurrentCard((index) => {
      if (index === 0) return Cards.length - 1;
      return index - 1;
    });
  }

  return (
    <>
      <div className="relative">
        {Cards[currentCard]}
        <button onClick={showPreviousImage} className="carouselBtn left-0">
          <FaArrowLeft />
        </button>
        <button onClick={showNextImage} className="carouselBtn right-0">
          <FaArrowRight />
        </button>
      </div>
    </>
  );
}
