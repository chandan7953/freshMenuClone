import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function LoginInterface() {
  const [emailOrPhone, setEmailOrPhone] = useState("");

  return (
    <div className="w-full  p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <svg
          className="w-6 h-6 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
        Log in or sign Up
      </h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Mobile Number/ Email ID"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <div className="flex justify-between items-center">
          <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
            Send OTP
          </button>
          <button className="text-orange-500 hover:text-orange-600 focus:outline-none focus:underline">
            Don't have an account? Sign up
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <button className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center">
            <FaFacebookF className="mr-2 text-blue-600" />
            Facebook
          </button>
          <button className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center">
            <FcGoogle className="mr-2" />
            Sign in with Google
          </button>
        </div>
        <button className="w-full px-4 py-2 bg-yellow-400 text-gray-800 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
          Continue as guest
        </button>
      </div>
    </div>
  );
}
