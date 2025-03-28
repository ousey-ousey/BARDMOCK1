"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Import slide components
import { CreateBoardSlide } from "./components/CreateBoardSlide";
import { SectionNameSlide } from "./components/SectionNameSlide";
import { PlayingCardsSlide } from "./components/PlayingCardsSlide";
import { OpaqueBackgroundSlide } from "./components/OpaqueBackgroundSlide";
import { UploadDestinationSlide } from "./components/UploadDestinationSlide";
import { OrderSummarySlide } from "./components/OrderSummarySlide";
import { ThankYouSlide } from "./components/ThankYouSlide";

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

  // Navigation functions
  const goToNext = () => swiperRef.current?.slideNext();
  const goToPrev = () => swiperRef.current?.slidePrev();

  const nextCards = () => {
    setCurrentCardIndex(prev => 
      prev + (isMobile ? 1 : 3) >= playingCards.length ? 0 : prev + (isMobile ? 1 : 3)
    );
  };

  const prevCards = () => {
    setCurrentCardIndex(prev => 
      prev - (isMobile ? 1 : 3) < 0 
        ? Math.max(playingCards.length - (isMobile ? 1 : 3), 0) 
        : prev - (isMobile ? 1 : 3)
    );
  };

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f8f8f8]">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={50}
        slidesPerView={1}
        allowTouchMove={false}
        className="w-full  pt-0 md:mt-[15rem]"
        style={{ 
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          
        }}
      >
        {/* Slide 1 - Create Board */}
        <SwiperSlide>
          <CreateBoardSlide goToNext={goToNext} />
        </SwiperSlide>

        {/* Slide 2 - Section Name */}
        <SwiperSlide>
          <SectionNameSlide goToNext={goToNext} goToPrev={goToPrev} />
        </SwiperSlide>

        {/* Slide 3 - Playing Cards */}
        <SwiperSlide>
          <PlayingCardsSlide
            goToNext={goToNext}
            goToPrev={goToPrev}
            currentCardIndex={currentCardIndex}
            isMobile={isMobile}
            nextCards={nextCards}
            prevCards={prevCards}
            playingCards={playingCards}
          />
        </SwiperSlide>

        {/* Slide 4 - Opaque Background */}
        <SwiperSlide>
          <OpaqueBackgroundSlide
            goToNext={goToNext}
            goToPrev={goToPrev}
            opacity={opacity}
            setOpacity={setOpacity}
          />
        </SwiperSlide>

        {/* Slide 5 - Upload Destination */}
        <SwiperSlide>
          <UploadDestinationSlide goToNext={goToNext} goToPrev={goToPrev} />
        </SwiperSlide>

        {/* Slide 6 - Order Summary */}
        <SwiperSlide>
          <OrderSummarySlide goToNext={goToNext} goToPrev={goToPrev} />
        </SwiperSlide>

        {/* Slide 7 - Thank You */}
        <SwiperSlide>
          <ThankYouSlide goToNext={goToNext} goToPrev={goToPrev} />
        </SwiperSlide>
      </Swiper>

      {/* Global Styles */}
      <style jsx global>{`
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          background: transparent;
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 16px;
          height: 16px;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        input[type="range"]::-moz-range-thumb {
          width: 16px;
          height: 16px;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        input[type="range"]:focus {
          outline: none;
        }

        input[type="range"]::-webkit-slider-runnable-track {
          background: transparent;
        }

        input[type="range"]::-moz-range-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
}