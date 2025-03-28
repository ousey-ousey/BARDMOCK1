"use client";

import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

export const OrderSummarySlide = ({ goToNext, goToPrev }) => (
  <div className="flex flex-col items-center gap-5">
    <h2 className="text-lg md:text-3xl font-bold text-center">Order Summary</h2>
    <div className="text-center mb-4">
      <img src="/image4.png" alt="games" />
    </div>
    <div className="w-full max-w-[40rem] bg-gray-100 rounded-md overflow-hidden">
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
        <span className="font-medium">Board Price</span>
        <span className="font-medium">45$</span>
      </div>
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
        <span className="font-medium">Extend</span>
        <span className="font-medium">45%</span>
      </div>
    </div>

    <div className="flex justify-center items-center max-w-[45rem] gap-12 mt-4">
      <button
        onClick={goToPrev}
        className="text-black px-5 border-black py-2.5 flex items-center gap-1  cursor-pointer rounded-lg bg-transparent border border-black"
      >
        <MdArrowBackIos className="text-sm" />
        Back
      </button>
      <button
        onClick={goToNext}
        className="bg-black text-white px-5 py-2.5 flex items-center gap-1 border-none cursor-pointer rounded-lg ml-auto"
      >
        Checkout
        <MdOutlineShoppingCartCheckout className="text-sm ml-1" />
      </button>
    </div>
  </div>
);