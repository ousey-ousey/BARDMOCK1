"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        className="bg-white relative z-10 w-full max-w-md px-4 shadow-md p-2"
        style={{
          borderX: "1px solid #e5e7eb",
          borderRadius: "0.375rem",
          padding: ".5rem 2rem",
        }}
      >
        <div className="text-center mb-8">
          <p className="text-gray-600 mb-2">Welcome back! 👋</p>
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
              className="w-full py-3 px-3 border border-gray-300 focus:outline-none rounded-md"
              placeholder=""
            />
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 text-sm mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 px-3 border border-gray-300 focus:outline-none rounded-md"
              placeholder=""
            />
          </div>

          <div className="mb-6 text-right">
            <a href="#" className="text-blue-500 text-sm hover:underline">
              Forget your password?
            </a>
          </div>

          <button
            type="button"
            className="w-full py-3  bg-black bg-gradient-to-br from-black to-slate-500 text-white text-sm font-medium rounded-md"
          >
            SIGN IN
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 mb-4">Or Login with</p>
          <div className="flex justify-center space-x-4">
            <button className="p-2 border border-gray-300 rounded-full">
              <BsApple className="w-6 h-6" />
            </button>
            <button className="p-2 border border-gray-300 rounded-full">
              <FcGoogle className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="mt-6 text-center pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            you do not have an account?
            <a href="/signup" className="text-blue-500 ml-1 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
