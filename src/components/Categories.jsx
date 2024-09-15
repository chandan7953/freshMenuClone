import React, { useState } from "react";
import CategoriesType from "./CategoriesType";
import CustomFilter from "./CustomFilter";

const Categories = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-around items-center">
        <div>
          <h1 className="text-lg font-bold">Categories</h1>
        </div>
        <div className="flex flex-wrap justify-evenly gap-5 items-center">
          <button className="border-2 border-black px-2 py-1">Veg</button>
          <button className="border-2 border-black px-2 py-1">Non-Veg</button>

          <CustomFilter />
        </div>
      </div>

      <div className="flex flex-wrap justigy-between ">
        <div className="w-[20%] container mx-auto px-4 py-8">
          <h1>Subscriptions</h1>
          <h1>Subscriptions</h1>
        </div>
        <div className="w-[80%]">
          <CategoriesType />
        </div>
      </div>
    </div>
  );
};

export default Categories;
