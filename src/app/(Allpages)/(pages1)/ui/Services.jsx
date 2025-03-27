"use client";

import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import { usePathname } from "next/navigation";
import React, { useRef, useState, useEffect } from "react";

const services = [
  {
    title: "Chutes and Ladders",
    description: "Please add your content here. Keep it short and simple.",
  },
  {
    title: "Candy Cane Land",
    description: "Please add your content here. Keep it short and simple.",
  },
  {
    title: "Monopoly",
    description: "Please add your content here. Keep it short and simple.",
  },
  {
    title: "Life",
    description: "Please add your content here. Keep it short and simple.",
  },
];

export default function Services() {
  const pathname = usePathname();
  if (pathname === "/login" || pathname === "/signup") {
    return null; // Return nothing if on login or signup page
  }
  return (
    <section className="py-16 pt-32 bg-gray-50 text-center">
      <h2 className="text-2xl md:text-[3rem] font-bold mb-12 flex items-center justify-center gap-3">
        <span className="w-12 h-1 bg-black" />
        Our Service
        <span className="w-12 h-1 bg-black" />
      </h2>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition p-4"
          >
            <Image
              src="/image3.png"
              alt={service.title}
              width={250}
              height={150}
              className="rounded-md mb-4"
            />
            <h3 className="font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{service.description}</p>
            <button className="text-sm text-gray-700 flex items-center gap-1 hover:underline">
              Learn More{" "}
              <span>
                <MdArrowForwardIos />
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
