"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdArrowForwardIos, MdArrowBackIos, MdGpsFixed } from "react-icons/md";
import "swiper/css";

export default function CustomBoardFlow() {
  const swiperRef = useRef(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [opacity, setOpacity] = useState(80);
  const [isMobile, setIsMobile] = useState(false);

  // Dummy data for playing cards
  const playingCards = [
    {
      id: 1,
      title: "Upload Your Playing Card 1",
      description:
        "this is the character you will play with discription and details",
      image: "/2image.png",
    },
    {
      id: 2,
      title: "Upload Your Playing Card 2",
      description:
        "this is the character you will play with discription and details",
      image: "/2image.png",
    },
    {
      id: 3,
      title: "Upload Your Playing Card 3",
      description:
        "this is the character you will play with discription and details",
      image: "/2image.png",
    },
    {
      id: 4,
      title: "Upload Your Playing Card 4",
      description:
        "this is the character you will play with discription and details",
      image: "/2image.png",
    },
    {
      id: 5,
      title: "Upload Your Playing Card 5",
      description:
        "this is the character you will play with discription and details",
      image: "/2image.png",
    },
  ];

  const goToNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goToPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const nextCards = () => {
    setCurrentCardIndex((prev) =>
      prev + (isMobile ? 1 : 3) >= playingCards.length
        ? 0
        : prev + (isMobile ? 1 : 3)
    );
  };

  const prevCards = () => {
    setCurrentCardIndex((prev) =>
      prev - (isMobile ? 1 : 3) < 0
        ? Math.max(playingCards.length - (isMobile ? 1 : 3), 0)
        : prev - (isMobile ? 1 : 3)
    );
  };

  // Get current visible cards
  const visibleCards = () => {
    const cards = [];
    const cardsToShow = isMobile ? 1 : 3;

    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentCardIndex + i) % playingCards.length;
      cards.push(playingCards[index]);
    }
    return cards;
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f8f8f8]">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={50}
        slidesPerView={1}
        allowTouchMove={false}
        className="w-full pt-20 md:pt-24"
      >
        <SwiperSlide>
          <div className="max-w-[40rem] mx-auto px-4 mt-20">
          {/* Header */}
            <h2 className="text-xl md:text-3xl font-bold text-center mb-4">
            Create your own custom game board!
          </h2>

          {/* image */}
            <div className="text-center mb-8 sm:mb-4">
              <img src="/image4.png" alt="games" className="max-w-full" />
          </div>

            {/* Input Field with fixed Start button */}
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

              {/* Button - With star icon and proper sizing */}
            <button
                className="bg-black text-white flex-shrink-0 h-9 px-3 flex items-center gap-1.5 border-none cursor-pointer rounded-lg text-sm font-medium"
              onClick={goToNext}
            >
                {/* Always show the star icon */}
                <img src="/input2.png" alt="stars" className="w-4 h-4" />
                <span className="hidden sm:inline">Start Now</span>
                <span className="sm:hidden">Start</span>
                <MdArrowForwardIos className="text-xs" />
            </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Step 2 */}
        <SwiperSlide>
          <div className="flex flex-col items-center px-4 mt-20">
            {/* Header */}
            <h2 className="text-xl md:text-3xl font-bold text-center mb-4">
              Name your Section
            </h2>
            {/* image */}
            <div className="max-w-[40rem] text-center mb-8 sm:mb-4">
              <img src="/image4.png" alt="games" className="max-w-full" />
            </div>
            {/* Input Field */}
            <div className="flex items-center gap-2.5 max-w-[40rem] bg-white rounded-lg border border-gray-300 p-2 w-4/5 mx-auto mb-4">
              <span className="w-10 h-10 sm:w-8 sm:h-8">
                <img src="/input1.png" alt="ai" className="w-full h-full" />
              </span>
              <input
                type="text"
                placeholder="Section Name"
                className="flex-1 border-none outline-none text-base sm:text-sm p-0 bg-transparent"
              />
            </div>

            {/* Buttons - Made equal width and consistent height */}
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
        </SwiperSlide>
        {/* Playing Cards Selection Slide */}
        <SwiperSlide>
          <div className="flex flex-col items-center mb-10 px-4 mt-20">
            <h2 className="text-xl md:text-3xl font-bold text-center mb-20 sm:mb-8">
              Pick Spinner / Playing Cards
            </h2>

            {/* Cards Container with Arrows */}
            <div className="relative w-full px-8 md:px-16">
              {/* Left Arrow - Smaller and better positioned */}
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

              {/* Cards Grid - Better mobile display */}
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
                          className="w-8 h-8 md:w-12 md:h-12 opacity-70"
                        />
                        <span className="text-xs md:text-sm">
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

              {/* Right Arrow - Smaller and better positioned */}
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

            {/* Navigation Buttons */}
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
        </SwiperSlide>

        {/* Opaque Background Step */}
        <SwiperSlide>
          <div className="flex flex-col items-center max-w-[40rem] mx-auto px-4 mt-20">
            <h2 className="text-xl md:text-3xl font-bold text-center mb-8 sm:mb-4">
              Opaque Background
            </h2>

            {/* Game Board Preview */}
            <div className="w-full border border-gray-200 rounded-lg mb-6 sm:mb-4">
              <img
                src="/image4.png"
                alt="Game Board"
                className="w-full"
                style={{ opacity: opacity / 100 }}
              />
            </div>

            {/* Upload Label */}
            <div className="w-full text-left mb-2">
              <span className="text-sm font-medium">Opaque Background</span>
            </div>

            {/* Upload Area */}
            <div className="w-full border border-dashed border-gray-300 rounded-lg mb-6 sm:mb-4 p-4 sm:p-3 flex flex-col items-center justify-center">
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

            {/* Opacity Slider - more compact for mobile */}
            <div className="w-full bg-gray-100 p-2 md:p-3 rounded-lg mb-4 md:mb-8">
              <div className="flex items-center justify-between mb-1 md:mb-2">
                <span className="text-xs md:text-sm font-medium">Opacity</span>
                <span className="text-xs md:text-sm">{opacity}%</span>
              </div>
              <div className="relative w-full">
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
                  className="relative w-full h-1.5 md:h-2 bg-transparent appearance-none z-10 cursor-pointer"
                  style={{ WebkitAppearance: "none" }}
                />
              </div>
            </div>

            {/* Navigation Buttons */}
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
        </SwiperSlide>

        {/* Upload Destination Info */}
        <SwiperSlide>
          <div className="flex flex-col items-center max-w-[40rem] mx-auto mt-20">
            <h2 className="text-xl md:text-3xl font-bold text-center mb-8">
              Upload Destination Info
            </h2>

            {/* Game Board Preview */}
            <div className="w-full border border-gray-200 rounded-lg mb-6">
              <img src="/image4.png" alt="Game Board" className="w-full" />
            </div>

            {/* Input Fields */}
            <div className="w-full grid grid-cols-2 gap-4 mb-8">
              <div className="flex flex-col">
                <label className="text-sm text-gray-700 mb-1">
                  Destination name
                </label>
            <input
              type="text"
                  placeholder="name your Destination..."
                  className="p-3.5 border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-700 mb-1">
                  Upload Destination photo
                </label>
                <label className="cursor-pointer">
                  <div className="p-3.5 border border-dashed border-gray-300 rounded-md flex items-center justify-center bg-white h-[42px]">
                    <div className="flex items-center gap-2 text-gray-400">
                      <svg
                        className="w-6 h-6"
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
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => console.log(e.target.files[0])}
                  />
                </label>
              </div>
            </div>

            {/* Navigation Buttons */}
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
        </SwiperSlide>

        {/* Step 3 - Order Summary */}
        <SwiperSlide>
          <div className="flex flex-col items-center gap-5 mt-20">
            <h2 className="text-xl md:text-3xl font-bold text-center">
              Order Summary
            </h2>
            {/* image */}
            <div className="text-center mb-8">
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
            {/* Buttons */}
            <div className="flex justify-center items-center max-w-[45rem] gap-12 mt-8">
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
                <MdArrowForwardIos className="text-sm ml-1" />
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Step 4 - Thank You */}
        <SwiperSlide>
          <div className="flex flex-col items-center gap-4 mt-20">
            <h2 className="text-xl md:text-3xl font-bold text-center">
              Thank You!
            </h2>
            {/* image */}
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
            {/* Buttons */}
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
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
