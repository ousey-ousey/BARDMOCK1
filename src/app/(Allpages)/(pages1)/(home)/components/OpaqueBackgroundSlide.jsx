"use client";

import React from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

export const OpaqueBackgroundSlide = ({
  goToNext,
  goToPrev,
  opacity,
  setOpacity,
}) => (
  <div className="flex flex-col items-center max-w-[40rem] mx-auto px-4">
    <h2 className="text-lg md:text-3xl font-bold text-center mb-8 sm:mb-4">
      Opaque Background
    </h2>

    <div className="w-full border border-gray-200 rounded-lg mb-6 sm:mb-4">
      <img
        src="/image4.png"
        alt="Game Board"
        className="w-full"
        style={{ opacity: opacity / 100 }}
      />
    </div>

    <div className="w-full text-left mb-2">
      <span className="text-sm font-medium">Opaque Background</span>
    </div>

    <label className="w-full cursor-pointer">
      <div className="w-full border border-dashed border-gray-300 rounded-lg mb-6 sm:mb-4 p-4 sm:p-3 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors">
        <svg
          className="w-8 h-8 sm:w-6 sm:h-6 text-gray-400 mb-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        <span className="text-sm sm:text-xs text-gray-500">
          Browse Files to upload
        </span>
      </div>
      <input type="file" className="hidden" accept="image/*" />
    </label>

    <div className="w-full bg-gray-100 p-2 md:p-3 rounded-lg mb-4 md:mb-8">
      <div className="flex items-center justify-between mb-1 md:mb-2">
        <span className="text-xs md:text-sm font-medium">Opacity</span>
        <span className="text-xs md:text-sm">{opacity}%</span>
      </div>
      <div className="relative w-full h-2">
        <div
          className="absolute top-1/2 left-0 -translate-y-1/2 h-1.5 md:h-2 bg-blue-500 rounded-l-lg"
          style={{ width: `${opacity}%` }}
        ></div>
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 h-1.5 md:h-2 bg-gray-200 rounded-r-lg"
          style={{ width: `${100 - opacity}%` }}
        ></div>
        <input
          type="range"
          min="0"
          max="100"
          value={opacity}
          onChange={(e) => setOpacity(Number(e.target.value))}
          className="absolute top-1/2 -translate-y-1/2 w-full appearance-none bg-transparent cursor-pointer z-10"
          style={{ height: '2px' }}
        />
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-blue-500 shadow-sm pointer-events-none"
          style={{ left: `calc(${opacity}% - 8px)` }}
        />
      </div>
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