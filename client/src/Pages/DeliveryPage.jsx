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
import DeliveryIteam from "../components/DeliveryIteam";

export default function Component() {
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
        <DeliveryIteam />
      </div>
    </main>
  );
}
