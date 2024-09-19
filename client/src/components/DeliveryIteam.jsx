import React from "react";
import { FaMinus, FaPlus, FaChevronRight } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromDelivery } from "../redux/deliverySlice";

const DeliveryItem = () => {
  const items = useSelector((state) => state.delivery.items);
  const dispatch = useDispatch();

  const calculateTotal = () => {
    const itemTotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const packagingFee = 13;
    const gst = itemTotal * 0.05;
    return (itemTotal + packagingFee + gst).toFixed(2);
  };

  const handleDecrement = (id) => {
    dispatch(updateQuantity({ id, delta: -1 }));
  };

  const handleIncrement = (id) => {
    dispatch(updateQuantity({ id, delta: 1 }));
  };

  return (
    <div className="bg-white shadow rounded-lg mt-4">
      <div className="px-4 py-5 sm:p-6">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-4">
            <div>
              <p>{item.name}</p>
              <p className="text-muted-foreground">₹ {item.price}</p>
            </div>
            <div className="flex items-center space-x-2 border border-black px-2 rounded-3xl">
              <button
                className="p-2 text-orange-500  focus:text-orange-600"
                onClick={() => handleDecrement(item.id)}
                aria-label={`Decrease ${item.name} quantity`}
              >
                <FaMinus className="h-4 w-4" />
              </button>
              <span aria-live="polite" aria-atomic="true">
                {item.quantity}
              </span>
              <button
                className="p-2 text-orange-500  focus:text-orange-600"
                onClick={() => handleIncrement(item.id)}
                aria-label={`Increase ${item.name} quantity`}
              >
                <FaPlus className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}

        <div className="bg-green-100 px-4 py-2 rounded-md text-green-800 text-sm mb-4 border border-green-800">
          Safety Assured meals and contactless delivery
        </div>

        <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 flex justify-between items-center mb-4">
          Check available coupons
          <FaChevronRight className="h-4 w-4" />
        </button>

        <div className="space-y-2 pt-2">
          <div className="flex justify-between">
            <span>Item Price</span>
            <span>
              ₹{" "}
              {items.reduce((sum, item) => sum + item.price * item.quantity, 0)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Packaging Fee</span>
            <span>+ ₹ 13.00</span>
          </div>
          <div className="flex justify-between">
            <span>GST (5%)</span>
            <span>
              + ₹{" "}
              {(
                items.reduce(
                  (sum, item) => sum + item.price * item.quantity,
                  0
                ) * 0.05
              ).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between font-bold border-t border-black pt-2">
            <span>Payable</span>
            <span aria-live="polite">₹ {calculateTotal()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryItem;
