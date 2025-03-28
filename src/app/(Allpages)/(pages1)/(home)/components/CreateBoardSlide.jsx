"use client";

import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

export const CreateBoardSlide = ({ goToNext }) => (
  <div className="max-w-[40rem] mx-auto px-4">
    <h2 className="text-lg md:text-3xl font-bold text-center mb-4">
      Create your own custom game board!
    </h2>

    <div className="text-center mb-8 sm:mb-4">
      <img src="/image4.png" alt="games" className="max-w-full" />
    </div>

    <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-300 md:p-2 p-0 m-0 mx-[-1rem] max-w-[50rem] md:mx-auto mb-6">
      <span className="w-8 h-8 flex-shrink-0">
        <img
          src="/input1.png"
          alt="ai"
          className="w-full h-full object-contain"
        />
      </span>
      <input
        id="input1"
        type="text"
        placeholder="Name your board..."
        className="flex-1 border-none outline-none text-sm p-0 bg-transparent"
      />
      <button
        className="bg-black text-white flex-shrink-0 h-6 px-2 mr-1 md:mr-0 md:h-9 md:px-3 flex items-center gap-1.5 border-none cursor-pointer rounded-lg text-sm font-medium"
        onClick={goToNext}
      >
        <img src="/input2.png" alt="stars" className="w-4 h-4" />
        <span className="hidden sm:inline">Start Now</span>
        <span className="sm:hidden">Start</span>
        <MdArrowForwardIos className="text-xs" />
      </button>
    </div>
  </div>
);