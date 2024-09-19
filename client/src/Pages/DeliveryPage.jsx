import React, { useState } from "react";
import { FaMinus, FaPlus, FaChevronRight } from "react-icons/fa";
import payment from "../assets/payment.svg";
import delivery from "../assets/delivery.svg";
import discoverIcon from "../assets/discoverIcon.svg";
import jcbIcon from "../assets/jcbIcon.svg";
import masterCardIcon from "../assets/masterCardIcon.svg";
import paypalIcon from "../assets/paypalIcon.svg";
import visaIcon from "../assets/visaIcon.svg";
import LoginInterface from "../components/Login";

export default function Component() {
  const [vegQuantity, setVegQuantity] = useState(1);
  const [nonVegQuantity, setNonVegQuantity] = useState(1);
  const [contactLessDelivery, setContactLessDelivery] = useState(false);

  const calculateTotal = () => {
    const itemTotal = (vegQuantity + nonVegQuantity) * 500;
    const packagingFee = 13;
    const gst = itemTotal * 0.05;
    return (itemTotal + packagingFee + gst).toFixed(2);
  };

  return (
    <main className="container mx-auto p-4 grid md:grid-cols-2 gap-4 mb-8">
      <div className="space-y-4">
        <LoginInterface />
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
              <img src={delivery} alt="" className="mr-2" />
              Delivery Address
            </h3>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
              <img src={payment} alt="" className="mr-3" />
              Payment Method
            </h3>
          </div>
        </div>
        <div className="mt-5 mb-5">
          <h3 className="text-xl mb-4 text-center">100% secure payment with</h3>
          <div className="flex justify-center flex-wrap gap-4">
            <img
              src={visaIcon}
              alt="Visa"
              className="h-[30px] w-[60px] object-contain bg-white p-1"
            />
            <img
              src={paypalIcon}
              alt="PayPal"
              className="h-[30px] w-[60px] object-contain bg-white p-1"
            />
            <img
              src={discoverIcon}
              alt="Discover"
              className="h-[30px] w-[60px] object-contain bg-white p-1"
            />
            <img
              src={masterCardIcon}
              alt="Mastercard"
              className="h-[30px] w-[60px] object-contain bg-white p-1"
            />
            <img
              src={jcbIcon}
              alt="JCB"
              className="h-[30px] w-[60px] object-contain bg-white p-1"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="bg-white shadow rounded-lg">
          <div className="px-4   sm:px-6">
            <h3 className="text-2xl font-bold leading-6 text-gray-900">
              Delivery Time
            </h3>
          </div>
          <div className="px-4 py-5 sm:p-6 flex flex-col gap-4 items-start">
            <p className="font-semibold">Delivery Now</p>
            <p className="text-sm text-muted-foreground">
              Your order will be delivered within{" "}
              <span className="font-semibold">45 minutes</span>
            </p>
            <button className="text-orange-500 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 p-0">
              Schedule for later
            </button>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg mt-4">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p>Super Veg Snack Pack</p>
                <p className="text-muted-foreground">₹ 500.00</p>
              </div>
              <div className="flex items-center space-x-2 border border-black px-2 rounded-3xl">
                <button
                  className="p-2 text-orange-500  focus:text-orange-600"
                  onClick={() => setVegQuantity(Math.max(1, vegQuantity - 1))}
                  aria-label="Decrease vegetarian quantity"
                >
                  <FaMinus className="h-4 w-4" />
                </button>
                <span aria-live="polite" aria-atomic="true">
                  {vegQuantity}
                </span>
                <button
                  className="p-2 text-orange-500  focus:text-orange-600"
                  onClick={() => setVegQuantity(vegQuantity + 1)}
                  aria-label="Increase vegetarian quantity"
                >
                  <FaPlus className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <p>Classic Non Veg Snack Pack</p>
                <p className="text-muted-foreground">₹ 500.00</p>
              </div>
              <div className="flex items-center space-x-2 border border-black px-2 rounded-3xl">
                <button
                  className="p-2 text-orange-500  focus:text-orange-600"
                  onClick={() =>
                    setNonVegQuantity(Math.max(1, nonVegQuantity - 1))
                  }
                  aria-label="Decrease non-vegetarian quantity"
                >
                  <FaMinus className="h-4 w-4" />
                </button>
                <span aria-live="polite" aria-atomic="true">
                  {nonVegQuantity}
                </span>
                <button
                  className="p-2 text-orange-500  focus:text-orange-600"
                  onClick={() => setNonVegQuantity(nonVegQuantity + 1)}
                  aria-label="Increase non-vegetarian quantity"
                >
                  <FaPlus className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="bg-green-100 px-4 py-2 rounded-md text-green-800 text-sm mb-4 border border-green-800 ">
              Safety Assured meals and contactless delivery
            </div>

            <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50  flex justify-between items-center mb-4">
              Check available coupons
              <FaChevronRight className="h-4 w-4" />
            </button>
            <div className="flex items-start space-x-2 mb-4">
              <input
                type="checkbox"
                id="contact-less"
                className="form-checkbox h-5 w-5 text-blue-600"
                checked={contactLessDelivery}
                onChange={(e) => setContactLessDelivery(e.target.checked)}
              />
              <label htmlFor="contact-less" className="text-sm">
                Opt for Contact Less Delivery <br />
                <span className="text-xs text-muted-foreground mb-4">
                  Rider would leave your food parcel at a distance/ drop off at
                  security gate.
                </span>
              </label>
            </div>

            <div className="space-y-2  pt-2">
              <div className="flex justify-between">
                <span>Item Price</span>
                <span>₹ {(vegQuantity + nonVegQuantity) * 500}.00</span>
              </div>
              <div className="flex justify-between">
                <span>Packaging Fee</span>
                <span>+ ₹ 13.00</span>
              </div>
              <div className="flex justify-between">
                <span>GST (5%)</span>
                <span>
                  + ₹ {((vegQuantity + nonVegQuantity) * 500 * 0.05).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between font-bold border-t border-black pt-2">
                <span>Payable</span>
                <span aria-live="polite">₹ {calculateTotal()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
