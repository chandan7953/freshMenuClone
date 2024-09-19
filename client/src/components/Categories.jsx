import React, { useState } from "react";
import CategoriesType from "./CategoriesType";
import CustomFilter from "./CustomFilter";
import { useSelector } from "react-redux";

const Categories = () => {
  const subCategories = useSelector((state) => state.categories.subCategories);

  return (
    <div className="container mx-auto px-12 py-8">
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <h1 className="text-lg font-bold">Categories</h1>
        </div>
        <div className="flex flex-wrap justify-evenly gap-5 items-center">
          <button className="border-2 border-black px-2 py-1">Veg</button>
          <button className="border-2 border-black px-2 py-1">Non-Veg</button>

          <CustomFilter />
        </div>
      </div>
      <hr className="mt-2" />

      <div className="flex flex-wrap justigy-between ">
        <div className="w-[20%] hidden md:block container mx-auto px-4 py-4">
          {subCategories.map((ele) => (
            <div className="pb-2" key={ele.idName}>
              <a href={"#" + ele.idName} className="text-lg font-semibold ">
                {ele.name}
              </a>
            </div>
          ))}
        </div>
        <div className=" w-full md:w-[80%] ">
          {subCategories.map((ele) => (
            <CategoriesType
              key={ele.idName}
              idName={ele.idName}
              data={ele.payload}
              foodName={ele.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
