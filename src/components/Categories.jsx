import React, { useState } from "react";
import CategoriesType from "./CategoriesType";
import CustomFilter from "./CustomFilter";

const data = [
  {
    id: "1",
    name: "Vegetable Samosa",
    image:
      "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=",
    price: 129,
    originalPrice: 249,
    discount: 48,
    category: "VEGETARIAN",
    customisable: true,
  },
  {
    id: "2",
    name: "Chicken Biryani",
    image:
      "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=",
    price: 199,
    originalPrice: 299,
    discount: 33,
    category: "NON-VEGETARIAN",
    customisable: true,
  },
  {
    id: "3",
    name: "Paneer Tikka",
    image:
      "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=",
    price: 149,
    originalPrice: 249,
    discount: 40,
    category: "VEGETARIAN",
    customisable: true,
  },
  {
    id: "4",
    name: "Fish Curry",
    image:
      "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=",
    price: 199,
    originalPrice: 299,
    discount: 33,
    category: "NON-VEGETARIAN",
    customisable: true,
  },
  {
    id: "5",
    name: "Chole Bhature",
    image:
      "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=",
    price: 99,
    originalPrice: 199,
    discount: 50,
    category: "VEGETARIAN",
    customisable: true,
  },
  {
    id: "6",
    name: "Beef Stir Fry",
    image:
      "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=",
    price: 199,
    originalPrice: 349,
    discount: 43,
    category: "NON-VEGETARIAN",
    customisable: true,
  },
  {
    id: "7",
    name: "Mushroom Risotto",
    image:
      "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=",
    price: 149,
    originalPrice: 249,
    discount: 40,
    category: "VEGETARIAN",
    customisable: true,
  },
  {
    id: "8",
    name: "Prawn Pasta",
    image:
      "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=",
    price: 249,
    originalPrice: 399,
    discount: 38,
    category: "NON-VEGETARIAN",
    customisable: true,
  },
  {
    id: "9",
    name: "Caesar Salad",
    image:
      "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=",
    price: 129,
    originalPrice: 229,
    discount: 44,
    category: "NON-VEGETARIAN",
    customisable: true,
  },
  {
    id: "10",
    name: "Vegetable Pizza",
    image:
      "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=",
    price: 199,
    originalPrice: 299,
    discount: 33,
    category: "VEGETARIAN",
    customisable: true,
  },
];

const subCategoryList = [
  {
    idName: "Sub-Categories-1",
    payload: data,
    name: "Subscriptions",
  },
  {
    idName: "Sub-Categories-2",
    payload: data,
    name: "Bowls",
  },
  {
    idName: "Sub-Categories-3",
    payload: data,
    name: "Superbowls",
  },
  {
    idName: "Sub-Categories-4",
    payload: data,
    name: "Noodles",
  },
  {
    idName: "Sub-Categories-5",
    payload: data,
    name: "All New Veg",
  },
  {
    idName: "Sub-Categories-6",
    payload: data,
    name: "Keto and Salads",
  },
  {
    idName: "Sub-Categories-7",
    payload: data,
    name: "Wraps",
  },
  {
    idName: "Sub-Categories-8",
    payload: data,
    name: "Sandwiches",
  },
  {
    idName: "Sub-Categories-9",
    payload: data,
    name: "Gourmet sandwiches",
  },
  {
    idName: "Sub-Categories-10",
    payload: data,
    name: "Burgers",
  },
  {
    idName: "Sub-Categories-11",
    payload: data,
    name: "Appetizers",
  },
  {
    idName: "Sub-Categories-12",
    payload: data,
    name: "Desserts",
  },
  {
    idName: "Sub-Categories-13",
    payload: data,
    name: "Zero Rice Bowl",
  },
  {
    idName: "Sub-Categories-14",
    payload: data,
    name: "Menu Under 99",
  },
  {
    idName: "Sub-Categories-15",
    payload: data,
    name: "Omelettes",
  },
  {
    idName: "Sub-Categories-16",
    payload: data,
    name: "All day breakfast",
  },
];

const Categories = () => {
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
          {subCategoryList.map((ele) => (
            <div className="pb-2">
              <a href={"#" + ele.idName} className="text-lg font-semibold ">
                {ele.name}
              </a>
            </div>
          ))}
        </div>
        <div className=" w-full md:w-[80%] ">
          {subCategoryList.map((ele) => (
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
