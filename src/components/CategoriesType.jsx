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

export default function CategoriesType() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-bold mb-8">Sub Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item.id} className="bg-white  shadow-md overflow-hidden">
            <div className="relative">
              <p
                className={`text-xs font-semibold p-4  ${
                  item.category === "VEGETARIAN"
                    ? "text-green-500"
                    : "text-red-500 "
                }`}
              >
                {item.category}
              </p>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-2xl font-bold">₹{item.price}</span>
                  <span className="text-sm text-gray-500 line-through ml-2">
                    ₹{item.originalPrice}
                  </span>
                </div>
                <span className="text-sm font-semibold text-green-600">
                  {item.discount}% OFF
                </span>
              </div>
              <div className="flex items-center justify-between">
                {item.customisable && (
                  <span className="text-xs text-gray-500">Customisable</span>
                )}
                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded-full flex items-center hover:bg-orange-600 transition-colors"
                  aria-label={`Add ${item.name} to cart`}
                >
                  ADD
                  <span className="ml-1 w-4 h-4 flex items-center justify-center">
                    <span className="sr-only">Plus</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
