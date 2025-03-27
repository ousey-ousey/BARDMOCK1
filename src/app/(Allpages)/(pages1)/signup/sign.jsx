"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Signupo() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="bg-white min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden px-4">
      {/* Diagonal lines */}
      <div
        className="absolute bg-black z-0"
        style={{
          width: "200%",
          height: ".5rem",
          left: "-75%",
          top: "65%",
          transform: "rotate(10deg)",
        }}
      />

      {/* Form container */}
      <div
        className="bg-white relative z-10 w-full max-w-md px-4 shadow-md p-2"
        style={{
          borderX: "1px solid #e5e7eb",
          borderRadius: "0.375rem",
          padding: ".5rem 2rem",
        }}
      >
        <div className="text-center mb-6">
          <p className="text-gray-600 mb-1">Welcome back! 👋</p>
          <h1 className="text-2xl font-medium text-gray-800">
            Sign in to your account
          </h1>
        </div>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">
              Your email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 px-3 border border-gray-300 focus:outline-none"
              placeholder=""
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 px-3 border border-gray-300 focus:outline-none"
              placeholder=""
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full py-3 px-3 border border-gray-300 focus:outline-none"
              placeholder=""
            />
          </div>

          <button
            type="button"
            className="w-full py-3 bg-black text-white text-sm font-medium"
          >
            SIGN UP
          </button>
        </form>

        <div className="mt-6 text-center pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signupo;
