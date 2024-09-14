import React from "react";
import { FaFilter } from "react-icons/fa6";
import CategoriesType from "./CategoriesType";

const Categories = () => {
  return (
    <div className="mt-5 mb-5">
      <div className="flex flex-wrap justify-around items-center">
        <div>
          <h1>Categories</h1>
        </div>
        <div className="flex flex-wrap justify-evenly gap-5 items-center">
          <button className="border-2 border-black px-2 py-1">Veg</button>
          <button className="border-2 border-black px-2 py-1">Non-Veg</button>

          <details className="group transition-all duration-500 h-10 open:h-auto overflow-hidden w-56">
            <summary className="transition-all duration-500 flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <FaFilter />
              <span className="ml-3 text-sm font-medium">Filter</span>
              <span className="ml-auto shrink-0 transition-transform duration-300 group-open:rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <nav className="flex flex-col transition-all duration-500 opacity-0 group-open:opacity-100 mt-2">
              <div>
                <h3 className="text-gray-700 font-medium">Food Preference</h3>
                <div className="space-y-2 mt-2">
                  <button className="px-3 py-1 bg-green-100 rounded-md w-full">
                    Veg
                  </button>
                  <button className="px-3 py-1 bg-yellow-100 rounded-md w-full">
                    Contain Egg
                  </button>
                  <button className="px-3 py-1 bg-red-100 rounded-md w-full">
                    Non-Veg
                  </button>
                </div>
              </div>
            </nav>
          </details>
        </div>
      </div>
      <div className="flex flex-wrap flex-row">
        <div>
          <h1>Subscriptions</h1>
          <h1>Subscriptions</h1>
        </div>

        <CategoriesType />
      </div>
    </div>
  );
};

export default Categories;
