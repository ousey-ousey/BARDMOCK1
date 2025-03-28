"use client";

import React from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

export const PlayingCardsSlide = ({
  goToNext,
  goToPrev,
  currentCardIndex,
  isMobile,
  nextCards,
  prevCards,
  playingCards,
}) => {
  const visibleCards = () => {
    const cards = [];
    const cardsToShow = isMobile ? 1 : 3;
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentCardIndex + i) % playingCards.length;
      cards.push(playingCards[index]);
    }
    return cards;
  };

  return (
    <div className="flex flex-col items-center mb-10 px-4">
      <h2 className="text-lg md:text-3xl font-bold text-center mb-20 sm:mb-8">
        Pick Spinner / Playing Cards
      </h2>

      <div className="relative w-full px-8 md:px-16">
        <button
          onClick={prevCards}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center"
        >
          <img
            src="/ltarrow.png"
            alt="Previous"
            className="w-full h-full object-contain"
          />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
          {visibleCards().map((card) => (
            <div
              key={card.id}
              className="w-full max-w-[280px] md:max-w-full mx-auto bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <div className="bg-gray-100 w-full aspect-[4/3] flex items-center justify-center">
                <div className="text-gray-400 flex flex-col items-center gap-2">
                  <img
                    src="/2image+.png"
                    alt="upload icon"
                    className="w-12 h-12 md:w-20 md:h-20 opacity-70"
                  />
                  <span className="text-xs md:text-md">
                    Upload your photo
                  </span>
                </div>
              </div>
              <div className="p-3 md:p-4">
                <h3 className="font-medium text-base md:text-lg mb-1 truncate">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4 line-clamp-2">
                  {card.description}
                </p>
                <button className="w-full bg-black text-white py-2 md:py-2.5 rounded-md hover:bg-gray-800 transition-colors text-xs md:text-sm">
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextCards}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center"
        >
          <img
            src="/rtarrow.png"
            alt="Next"
            className="w-full h-full object-contain"
          />
        </button>
      </div>

      <div className="flex justify-center items-center gap-4 md:gap-8 mt-6">
        <button
          onClick={goToPrev}
          className="min-w-[100px] text-black px-3 py-2 flex items-center justify-center gap-1 cursor-pointer rounded-lg bg-transparent border border-black text-sm"
        >
          <MdArrowBackIos className="text-xs" />
          Back
        </button>
        <button
          onClick={goToNext}
          className="min-w-[100px] bg-black text-white px-3 py-2 flex items-center justify-center gap-1 border-none cursor-pointer rounded-lg text-sm"
        >
          Next
          <MdArrowForwardIos className="text-xs ml-1" />
        </button>
      </div>
    </div>
  );
};