import React from "react";

const CategoriesCard = ({ data }) => {
  return (
    <div className="category-card">
      <p>
        <span className="mr-2">
          {data.vegType === "Veg" ? "Veg " : "Non-Veg "}
        </span>
        Continental
      </p>
      <img
        src={data.image}
        alt={`Image of ${data.name}`}
        className="w-[210px] h-[150px] rounded"
      />
      <h3>{data.name}</h3>
      <div className="flex flex-wrap justify-between items-center">
        <h3>₹{data.price.toFixed(2)}</h3>
        <button className="border-2 border-black px-2 py-1 rounded">ADD</button>
      </div>
    </div>
  );
};

export default CategoriesCard;
