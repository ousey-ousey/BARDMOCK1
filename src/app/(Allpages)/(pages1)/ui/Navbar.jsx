"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FiSun, FiMenu } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const loginButtonClasses =
    "text-white px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#111111] to-[#3a3f44] shadow-inner opacity-90 text-center font-medium";

  const isAuthPage = pathname === "/login" || pathname === "/signup";

  return (
    <header
      className={`flex justify-between items-center px-4 sm:px-8 md:px-16 py-4 ${
        isAuthPage ? "bg-white" : "bg-gray-50"
      } relative z-10`}
    >
      {/* Logo */}
      <div
        onClick={() => router.push("/")}
        className="flex items-center space-x-1 font-bold text-lg cursor-pointer"
      >
        <span className="flex items-center">
          B
          <Image
            src="/2.png"
            alt="nerd"
            width={18}
            height={18}
            className="mx-1"
          />
          ARDMOCK
        </span>
      </div>

      {/* Right Side */}
      {!isAuthPage && (
        <div className="flex items-center space-x-3">
          <button className="p-2 border rounded-md">
            <FiSun />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(!open);
            }}
            className="p-2 border rounded-md"
          >
            <FiMenu />
          </button>

          {/* Login button on desktop */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log("Navigating to login");
              router.push("/login");
            }}
            className={`hidden md:block ${loginButtonClasses}`}
          >
            Login
          </button>
        </div>
      )}

      {/* Pop-up menu - with higher z-index and better positioning */}
      {!isAuthPage && (
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-4 md:right-24 top-16 bg-gray-100 rounded-md shadow-lg overflow-hidden z-50"
              style={{ maxWidth: "90vw" }}
            >
              <div className="divide-y divide-gray-300">
                <div className="p-3 hover:bg-white cursor-pointer">Order</div>
                <div className="p-3 hover:bg-white cursor-pointer">Press</div>
                <div className="p-3 hover:bg-white cursor-pointer">Support</div>

                {/* Mobile Login Button - with improved event handling */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    router.push("/login");
                    setOpen(false); // Close menu after clicking
                  }}
                  className={`md:hidden block p-3 w-full ${loginButtonClasses}`}
                >
                  Login
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </header>
  );
}
