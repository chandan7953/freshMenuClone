import React, { useState } from "react";
import {
  FaFacebookF,
  FaMapMarkerAlt,
  FaCreditCard,
  FaMinus,
  FaPlus,
  FaChevronRight,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
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
    <main className="container mx-auto p-4 grid md:grid-cols-2 gap-4">
      <div className="space-y-4">
        {/* <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Log in or sign Up
            </h3>
          </div>
          <div className="px-4 py-5 sm:p-6 space-y-4">
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Mobile Number/ Email ID"
              aria-label="Mobile Number or Email ID"
            />
            <div className="flex justify-between items-center">
              <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Send OTP
              </button>
              <button className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Don't have an account? Sign up
              </button>
            </div>
            <div className="flex justify-between items-center">
              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <FaFacebookF
                  className="inline-block mr-2 h-4 w-4"
                  aria-hidden="true"
                />
                <span>Facebook</span>
              </button>
              <button className="w-full ml-2 px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <FcGoogle
                  className="inline-block mr-2 h-4 w-4"
                  aria-hidden="true"
                />
                <span>Sign in with Google</span>
              </button>
            </div>
            <button className="w-full px-4 py-2 bg-gray-200 text-gray-900 font-medium rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Continue as guest
            </button>
          </div>
        </div> */}
        <LoginInterface />
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
              <FaMapMarkerAlt className="mr-2" aria-hidden="true" /> Delivery
              Address
            </h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your delivery address"
              aria-label="Delivery address"
            />
          </div>
        </div>
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
              <FaCreditCard className="mr-2" aria-hidden="true" /> Payment
              Method
            </h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <p className="text-sm text-muted-foreground">
              100% secure payment with
            </p>
            <div
              className="flex space-x-2 mt-2"
              aria-label="Accepted payment methods"
            >
              <div
                className="w-10 h-6 bg-gray-200 rounded"
                aria-label="Visa"
              ></div>
              <div
                className="w-10 h-6 bg-gray-200 rounded"
                aria-label="Mastercard"
              ></div>
              <div
                className="w-10 h-6 bg-gray-200 rounded"
                aria-label="American Express"
              ></div>
              <div
                className="w-10 h-6 bg-gray-200 rounded"
                aria-label="Discover"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Delivery Time
            </h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <p className="font-semibold">Delivery Now</p>
            <p className="text-sm text-muted-foreground">
              Your order will be delivered within 45 minutes
            </p>
            <button className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 p-0">
              Schedule for later
            </button>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg mt-4">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="font-semibold">Super Veg Snack Pack</p>
                <p className="text-muted-foreground">₹ 500.00</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="p-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() => setVegQuantity(Math.max(1, vegQuantity - 1))}
                  aria-label="Decrease vegetarian quantity"
                >
                  <FaMinus className="h-4 w-4" />
                </button>
                <span aria-live="polite" aria-atomic="true">
                  {vegQuantity}
                </span>
                <button
                  className="p-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() => setVegQuantity(vegQuantity + 1)}
                  aria-label="Increase vegetarian quantity"
                >
                  <FaPlus className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="font-semibold">Classic Non Veg Snack Pack</p>
                <p className="text-muted-foreground">₹ 500.00</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="p-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
                  className="p-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() => setNonVegQuantity(nonVegQuantity + 1)}
                  aria-label="Increase non-vegetarian quantity"
                >
                  <FaPlus className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="bg-green-100 p-2 rounded-md text-green-800 text-sm mb-4">
              Safety Assured meals and contactless delivery
            </div>
            <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex justify-between items-center mb-4">
              Check available coupons
              <FaChevronRight className="h-4 w-4" />
            </button>
            <div className="flex items-center space-x-2 mb-4">
              <input
                type="checkbox"
                id="contact-less"
                className="form-checkbox h-5 w-5 text-blue-600"
                checked={contactLessDelivery}
                onChange={(e) => setContactLessDelivery(e.target.checked)}
              />
              <label htmlFor="contact-less" className="text-sm">
                Opt for Contact Less Delivery
              </label>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              Rider would leave your food parcel at a distance/ drop off at
              security gate.
            </p>
            <div className="space-y-2 border-t pt-2">
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
              <div className="flex justify-between font-bold">
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
