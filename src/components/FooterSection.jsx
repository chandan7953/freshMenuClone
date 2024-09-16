import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import discoverIcon from "../assets/discoverIcon.svg";
import jcbIcon from "../assets/jcbIcon.svg";
import masterCardIcon from "../assets/masterCardIcon.svg";
import paypalIcon from "../assets/paypalIcon.svg";
import visaIcon from "../assets/visaIcon.svg";

export default function FooterSection() {
  return (
    <footer className="bg-[#3c1414] text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Social</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaFacebook className="mr-2" size={20} />
                <span>Facebook</span>
              </li>
              <li className="flex items-center">
                <FaInstagram className="mr-2" size={20} />
                <span>Instagram</span>
              </li>
              <li className="flex items-center">
                <FaTwitter className="mr-2" size={20} />
                <span>Twitter</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Help</h2>
            <ul className="space-y-2">
              <li>Payment</li>
              <li>Shipping</li>
              <li>Return & Cancelation</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">About</h2>
            <ul className="space-y-2">
              <li>Contact Us</li>
              <li>About Us</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Customer Policy</h2>
            <ul className="space-y-2">
              <li>Return & Cancelation</li>
              <li>Terms of Use</li>
              <li>Security & privacy</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h3 className="text-xl font-bold mb-4 text-center">
            We accept the following payment methods
          </h3>
          <div className="flex justify-center flex-wrap gap-4">
            <img
              src={visaIcon}
              alt="Visa"
              className="h-[35px] w-[80px] object-contain bg-white p-1"
            />
            <img
              src={paypalIcon}
              alt="PayPal"
              className="h-[35px] w-[80px] object-contain bg-white p-1"
            />
            <img
              src={discoverIcon}
              alt="Discover"
              className="h-[35px] w-[80px] object-contain bg-white p-1"
            />
            <img
              src={masterCardIcon}
              alt="Mastercard"
              className="h-[35px] w-[80px] object-contain bg-white p-1"
            />
            <img
              src={jcbIcon}
              alt="JCB"
              className="h-[35px] w-[80px] object-contain bg-white p-1"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
