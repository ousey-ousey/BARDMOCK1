"use client";

import Image from "next/image";
import { MdArrowForwardIos, MdKeyboardArrowUp } from "react-icons/md";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id:1,
    title: "Chutes and Ladders",
    description: "Please add your content here. Keep it short and simple. And smile :)",
    price: "30$",
    image: "/image3.png",
  },
  {
    id:2,
    title: "Candy Cane Land",
    description: "Please add your content here. Keep it short and simple. And smile :)",
    price: "45$",
    image: "/image3.png",
  },
  {
    id: 3,
    title: "Monopoly",
    description: "Please add your content here. Keep it short and simple. And smile :)",
    price: "50$",
    image: "/image3.png",
  },
  {
    id: 4,
    title: "Life",
    description: "Please add your content here. Keep it short and simple. And smile :)",
    price: "40$",
    image: "/image3.png",
  },
];

export default function Services() {
  const pathname = usePathname();
  const [expandedId, setExpandedId] = useState(null);

  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  return (
    <section className="py-16 pt-[13rem] bg-gray-50">
      <h2 className="text-2xl md:text-[3rem] font-bold mb-12 flex items-center justify-center gap-3">
        <span className="w-12 h-1 bg-black" />
        Our Service
        <span className="w-12 h-1 bg-black" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-[1400px] mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className={`bg-white rounded-3xl shadow-sm relative h-fit ${
              expandedId === service.id ? "z-10" : "z-0"
            }`}
          >
            <motion.div
              animate={{
                scale: expandedId === service.id ? 1.02 : 1,
              }}
              transition={{ duration: 0.5 }}
              className="p-6"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={250}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-left">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 text-left">
                {service.description}
              </p>

              <AnimatePresence>
                {expandedId === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="space-y-4 overflow-hidden"
                  >
                    <div>
                      <p className="text-sm text-gray-700 text-left mb-2">Size</p>
                      <div className="flex gap-2">
                        <button className="text-xs border border-gray-200 rounded-full px-4 py-1 hover:bg-gray-50">
                          Small
                        </button>
                        <button className="text-xs border border-gray-200 rounded-full px-4 py-1 hover:bg-gray-50">
                          Medium
                        </button>
                        <button className="text-xs border border-gray-200 rounded-full px-4 py-1 hover:bg-gray-50">
                          Large
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-700">Price</p>
                      <p className="font-medium">{service.price}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-end mt-4">
                <button
                  className="text-sm text-gray-700 flex items-center gap-1 hover:text-gray-900"
                  onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                >
                  {expandedId === service.id ? (
                    <>
                      Show less <MdKeyboardArrowUp className="text-gray-500" />
                    </>
                  ) : (
                    <>
                      Learn More <MdArrowForwardIos className="text-gray-500" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
