"use client";

import React from "react";
import { MdArrowBackIos, MdGpsFixed } from "react-icons/md";

export const ThankYouSlide = ({ goToNext, goToPrev }) => (
  <div className="flex flex-col items-center gap-4">
    <h2 className="text-lg md:text-3xl font-bold text-center">Thank You!</h2>
    <div className="text-center mb-6">
      <img
        src="/image4.png"
        alt="games"
        className="max-h-[35rem] object-contain"
      />
    </div>
    <div className="w-full max-w-[40rem] bg-gray-100 rounded-md overflow-hidden">
      <div className="flex justify-center items-center px-4 py-3 border-b border-gray-200">
        <span className="font-medium">Your order has been placed.</span>
      </div>
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
        <span className="font-medium">Order:</span>
        <span className="font-medium">12354123123</span>
      </div>
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
        <span className="font-medium">Total:</span>
        <span className="font-medium">$145</span>
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
        <MdGpsFixed className="text-base" />
        Track Ups
      </button>
    </div>
  </div>
);