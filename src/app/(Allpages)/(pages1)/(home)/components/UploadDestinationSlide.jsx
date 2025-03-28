"use client";

import React from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

export const UploadDestinationSlide = ({ goToNext, goToPrev }) => (
  <div className="flex flex-col items-center max-w-[40rem] mx-auto px-4">
    <h2 className="text-lg md:text-3xl font-bold text-center mb-8">
      Upload Destination Info
    </h2>

    <div className="w-full border border-gray-200 rounded-lg mb-6">
      <img src="/image4.png" alt="Game Board" className="w-full" />
    </div>

    <div className="w-full grid grid-cols-2 gap-4 mb-8">
      <div className="flex flex-col">
        <label className="text-sm text-gray-700 mb-1">Destination name</label>
        <input
          type="text"
          placeholder="name your Destination..."
          className="h-[42px] px-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label className="md:text-sm text-xs text-gray-700 mb-2 md:mb-1">
          Upload Destination photo
        </label>
        <label className="cursor-pointer">
          <div className="h-[42px] px-3 border border-dashed border-gray-300 rounded-md flex items-center justify-center bg-white hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-2 text-gray-400">
              <svg
                className="w-5 h-5"
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
              <span className="text-sm">Browse Files to upload</span>
            </div>
          </div>
          <input type="file" className="hidden" accept="image/*" />
        </label>
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