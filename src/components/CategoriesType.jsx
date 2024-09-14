import React from "react";
import CategoriesCard from "./CategoriesCard";

const CategoriesType = () => {
  const data = [
    {
      image:
        "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=",
      vegType: "Veg",
      name: "Vegetable Samosa",
      price: 5.0,
    },
    {
      image:
        "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=",
      vegType: "Non-Veg",
      name: "Chicken Biryani",
      price: 12.0,
    },
    {
      image:
        "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=",
      vegType: "Veg",
      name: "Paneer Tikka",
      price: 8.0,
    },
    {
      image:
        "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=",
      vegType: "Non-Veg",
      name: "Fish Curry",
      price: 10.0,
    },
    {
      image:
        "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=",
      vegType: "Veg",
      name: "Chole Bhature",
      price: 7.0,
    },
    {
      image:
        "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=",
      vegType: "Non-Veg",
      name: "Beef Stir Fry",
      price: 11.0,
    },
    {
      image:
        "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=",
      vegType: "Veg",
      name: "Mushroom Risotto",
      price: 9.0,
    },
    {
      image:
        "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=",
      vegType: "Non-Veg",
      name: "Prawn Pasta",
      price: 13.0,
    },
    {
      image:
        "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=",
      vegType: "Non-Veg",
      name: "Caesar Salad",
      price: 6.5,
    },
    {
      image:
        "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=",
      vegType: "Veg",
      name: "Vegetable Pizza",
      price: 11.0,
    },
  ];

  return (
    <div>
      <h1>Subscriptions</h1>
      <div className="flex flex-wrap justify-between items-center gap-5">
        {data.map((ele, index) => (
          <CategoriesCard data={ele} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesType;
