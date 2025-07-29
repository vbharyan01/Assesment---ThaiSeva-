import React from 'react';
import Img1 from "../assets/Landing-Img/Group-logo.png";
import whatsapp from "../assets/Landing-Img/whatsapp-icon.png";
import facebook from "../assets/Landing-Img/facebook.png";
import instagram from "../assets/Landing-Img/instagram.png";
import twitter from "../assets/Landing-Img/twitter.png";
import AppStore from "../assets/Landing-Img/Home/app-store.png";
import googlePay from "../assets/Landing-Img/Home/google-pay.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Info */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img src={Img1} alt="Thaiseva Logo" className="w-12 h-12" />
            <h1 className="text-3xl font-bold">
              Thai<span className="text-yellow-400">seva</span>
            </h1>
          </div>
          <p className="text-lg mt-4">
            <i className="bi bi-envelope-at-fill"></i> taiseva@gmail.com
          </p>
          <p className="text-lg mt-2">
            <i className="bi bi-phone-fill"></i> +66 7209169866
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Company</h2>
          <ul className="space-y-4 text-lg text-gray-300">
            <li className="hover:text-yellow-400 cursor-pointer">About</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
            <li className="hover:text-yellow-400 cursor-pointer">Services</li>
          </ul>
        </div>

        {/* Contact Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Support</h2>
          <ul className="space-y-4 text-lg text-gray-300">
            <li className="hover:text-yellow-400 cursor-pointer">FAQs</li>
            <li className="hover:text-yellow-400 cursor-pointer">Help</li>
            <li className="hover:text-yellow-400 cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* Social & Store Buttons */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Connect with us</h2>
          <div className="flex space-x-4 mb-6">
            <img src={whatsapp} alt="WhatsApp" className="w-6 h-6 hover:scale-110 transition" />
            <img src={facebook} alt="Facebook" className="w-6 h-6 hover:scale-110 transition" />
            <img src={instagram} alt="Instagram" className="w-6 h-6 hover:scale-110 transition" />
            <img src={twitter} alt="Twitter" className="w-6 h-6 hover:scale-110 transition" />
          </div>
          <p className="text-lg font-semibold mb-3">Download Our App</p>
          <div className="space-y-3">
            <button>
              <img src={AppStore} alt="App Store" className="w-32 hover:opacity-80 transition" />
            </button>
            <button>
              <img src={googlePay} alt="Google Play" className="w-32 hover:opacity-80 transition" />
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 py-6 border-t border-gray-700 text-sm sm:text-base">
        © 2024 Thaiseva. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
