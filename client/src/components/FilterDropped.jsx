import { useState } from "react";

const CustomButton = ({ children, active = false, ...props }) => (
  <button
    className={`px-3 py-1 rounded-full text-sm border transition-colors ${
      active
        ? "bg-orange-500 text-white border-orange-500"
        : "bg-white text-gray-700 border-gray-300 hover:border-orange-500 hover:text-orange-500"
    }`}
    {...props}
  >
    {children}
  </button>
);

export default function FilterDropDown() {
  const [dishCount, setDishCount] = useState(396);
  const [activeFilters, setActiveFilters] = useState([]);

  const toggleFilter = (filter) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className=" p-4 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <button
          className="text-orange-500 hover:text-orange-600 text-sm"
          onClick={() => setActiveFilters([])}
        >
          Reset All Filters
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">Food Preference</h3>
          <div className="flex flex-wrap gap-2">
            {["Veg", "Contains Egg", "Non Veg"].map((pref) => (
              <CustomButton
                key={pref}
                active={activeFilters.includes(pref)}
                onClick={() => toggleFilter(pref)}
              >
                {pref}
              </CustomButton>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Cuisine</h3>
          <div className="flex flex-wrap gap-2">
            {["Continental", "Mexican", "Asian", "541 cal | Calorie"].map(
              (cuisine) => (
                <CustomButton
                  key={cuisine}
                  active={activeFilters.includes(cuisine)}
                  onClick={() => toggleFilter(cuisine)}
                >
                  {cuisine}
                </CustomButton>
              )
            )}
            <CustomButton>...</CustomButton>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Trending</h3>
          <div className="flex flex-wrap gap-2">
            {["Desserts", "Best Offers"].map((trend) => (
              <CustomButton
                key={trend}
                active={activeFilters.includes(trend)}
                onClick={() => toggleFilter(trend)}
              >
                {trend}
              </CustomButton>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Price</h3>
          <button className="w-full px-3 py-2 border border-gray-300 rounded text-left flex justify-between items-center hover:border-orange-500">
            PRICE <span className="text-xs">▼</span>
          </button>
        </div>
      </div>

      <button
        className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded transition-colors"
        onClick={() => console.log("Applying filters:", activeFilters)}
      >
        Apply ({dishCount} Dishes)
      </button>
    </div>
  );
}
