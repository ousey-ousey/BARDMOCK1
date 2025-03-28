"use client";

import React from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

export const SectionNameSlide = ({ goToNext, goToPrev }) => (
  <div className="flex flex-col items-center px-4 min-h-screen py-10">
    <div className="flex-1 flex flex-col items-center justify-center w-full">
      <h2 className="text-lg md:text-3xl font-bold text-center mb-4">
        Name your Section
      </h2>
      <div className="max-w-[40rem] text-center mb-8 sm:mb-4">
        <img src="/image4.png" alt="games" className="max-w-full" />
      </div>
      <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-300 md:p-2 p-0 w-4/5 max-w-[40rem] mx-auto mb-4">
        <span className="w-8 h-8 flex-shrink-0">
          <img
            src="/input1.png"
            alt="ai"
            className="w-full h-full object-contain"
          />
        </span>
        <input
          type="text"
          placeholder="Section Name"
          className="flex-1 border-none outline-none text-sm p-0 bg-transparent"
        />
      </div>
    </div>

    <div className="flex justify-center items-center gap-4 md:gap-8 mt-auto pb-6">
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