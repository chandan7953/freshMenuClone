import React, { useState } from "react";
import {
  FiSearch,
  FiShoppingCart,
  FiChevronDown,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md mb-2 sticky w-full top-0 left-0 z-50">
      <div>
        <div className="flex justify-between md:justify-start">
          <img src={logo} alt="image is not " className="w-[150px] h-[55px]" />
          <div className="hidden md:flex items-center space-x-2 text-sm">
            <span>Deliver to:</span>
            <button className="flex items-center font-medium text-orange-500">
              College Road Nashik
              <FiChevronDown className="h-4 w-4 ml-1" />
            </button>
          </div>
          <button
            className="md:hidden pr-8"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        <div className="md:flex flex-wrap justify-end gap-8 items-center hidden pb-4 pr-8">
          <div class="border-b-black flex h-10 items-center justify-start border-b-2 leading-4  sm:w-96">
            <input
              type="text"
              placeholder="Search"
              class="peer ml-2 flex-grow bg-transparent outline-none"
            />
            <button
              type="button"
              class="peer-focus:mr-2 z-20 cursor-pointer text-black outline-none duration-150 hover:scale-125 mr-2"
            >
              <FiSearch />
            </button>
          </div>
          <button className="text-sm font-medium hover:text-orange-500">
            Offers
          </button>
          <button className="text-sm font-medium hover:text-orange-500">
            Help Center
          </button>
          <button className="hover:text-orange-500">
            <FiUser className="h-5 w-5" />
          </button>
          <button className="hover:text-orange-500">
            <FiShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="mt-1 md:hidden px-8 py-3">
          <div className="flex items-center space-x-2 text-sm mb-2">
            <span>Deliver to:</span>
            <button className="flex items-center font-medium text-orange-500">
              College Road Nashik
              <FiChevronDown className="h-4 w-4 ml-1" />
            </button>
          </div>
          <div class="border-b-black flex h-10 items-center justify-start border-b-2 leading-4  sm:w-96 mb-4">
            <input
              type="text"
              placeholder="Search"
              class="peer ml-2 flex-grow bg-transparent outline-none"
            />
            <button
              type="button"
              class="peer-focus:mr-2 z-20 cursor-pointer text-black outline-none duration-150 hover:scale-125 mr-2"
            >
              <FiSearch />
            </button>
          </div>
          <nav className="flex flex-col justify-start items-start space-y-4">
            <button className="text-sm font-medium hover:text-orange-500">
              Offers
            </button>
            <button className="text-sm font-medium hover:text-orange-500">
              Help Center
            </button>
            <button className="flex items-center space-x-2 hover:text-orange-500">
              <FiUser className="h-5 w-5" />
              <span>Account</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-orange-500">
              <FiShoppingCart className="h-5 w-5" />
              <span>Cart</span>
            </button>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
