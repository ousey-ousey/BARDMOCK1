"use client";
import React, { useState } from "react";

function Signupo() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="bg-white h-screen w-screen flex justify-center items-center relative overflow-hidden">
      {/* Left diagonal line - placed with z-index below form */}
      <div
        className="absolute bg-black z-0"
        style={{
          width: "200%",
          height: ".5rem",
          left: "-61%",
          top: "65%",
          transform: "rotate(10deg)",
        }}
      />

      {/* Form container with white background and higher z-index */}
      <div
        className=" bg-white relative z-10 w-full max-w-md px-4 shadow-md p-2"
        style={{
          borderX: "1px solid black",
          borderRadius: "0.375rem",
          padding: ".5rem 2rem",
        }}
      >
        <div className="text-center mb-8">
          <p className="text-gray-600 mb-2">Welcome 👋</p>
          <h1 className="text-2xl font-medium text-gray-800">
            make your account
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
            className="w-full py-3 bg-black bg-gradient-to-br from-black to-slate-500 text-white text-sm font-medium"
          >
            SIGN UP
          </button>
        </form>

        <div className="mt-6 text-center pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Already have an account?
            <a href="/login" className="text-blue-500 ml-1 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signupo;
