import React, { useState } from "react";
import {
  FiSearch,
  FiShoppingCart,
  FiChevronDown,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a className="flex items-center text-2xl font-black" href="/">
              <span className="mr-2 text-3xl text-blue-600">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPirEyzsXZWaUNQyTXjj0j8oEKULay7_SM6A&s"
                  alt="image is not "
                  width="50px"
                  height="50px"
                />
              </span>
              <span>Saldo cafe</span>
            </a>
            <div className="hidden md:flex items-center space-x-2 text-sm">
              <span>Deliver to:</span>
              <button className="flex items-center font-medium text-orange-500">
                College Road Nashik
                <FiChevronDown className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
          <div className="hidden md:block flex-1 max-w-md mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
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
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="mt-4 md:hidden">
            <div className="flex items-center space-x-2 text-sm mb-4">
              <span>Deliver to:</span>
              <button className="flex items-center font-medium text-orange-500">
                College Road Nashik
                <FiChevronDown className="h-4 w-4 ml-1" />
              </button>
            </div>
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
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
      </div>
    </header>
  );
}
