import React from "react";
import foodIcon from "../assets/foodIcon.jpg";
import { CiSearch } from "react-icons/ci";
import { MdHelpCenter } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="mb-2 px-4 shadow">
      <div className="relative  flex  flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
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
        <input className="peer hidden" type="checkbox" id="navbar-open" />
        <label
          className="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.88em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0"
        >
          <ul className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8">
            <li className="">
              <a
                className="flex items-center text-gray-600 hover:text-blue-600"
                href="#"
              >
                <CiSearch /> <span>Search</span>
              </a>
            </li>
            <li className="">
              <a className="text-gray-600 hover:text-blue-600" href="#">
                Offer
              </a>
            </li>
            <li className="">
              <a className="text-gray-600 hover:text-blue-600" href="#">
                Support
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
