import React from "react";
import Logo from "../assets/Landing-Img/Group-logo.png";
import AppStore from "../assets/Landing-Img/Home/app-store.png";
import googlePay from "../assets/Landing-Img/Home/google-pay.png";

const Subscribe = () => {
  return (
    <>
      {/* Newsletter Section */}
      <div className="previewBackImg pb-20 px-4">
        <div className="text-center pt-24">
          <p className="md:text-4xl text-3xl text-white font-semibold">
            Subscribe to Our
            <span className="text-yellow-500"> Newsletter </span>
          </p>
          <p className="mt-4 text-slate-300 max-w-xl mx-auto">
            Improving your small business's growth through the THAISEVA app.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center mt-10 gap-4 px-4">
          <input
            type="email"
            className="p-3 w-full max-w-md rounded-lg sm:rounded-s-lg sm:rounded-e-none text-black bg-white text-base sm:text-lg"
            placeholder="Enter your email"
          />
          <button className="bg-yellow-500 px-8 py-3 rounded-lg sm:rounded-e-lg sm:rounded-s-none font-semibold text-black text-base sm:text-lg">
            Subscribe
          </button>
        </div>
      </div>

      {/* App Download Section */}
      <div className="text-center pt-20 pb-10 px-4 bg-white">
        <p className="md:text-4xl text-3xl font-semibold relative text-black inline-block">
          <i className="bi bi-dot text-yellow-500 text-5xl absolute -left-6 -top-3"></i>
          DOWNLOAD <span className="text-yellow-500">THAISEVA APP</span> TODAY!
        </p>
        <p className="mt-4 text-gray-700 max-w-xl mx-auto">
          Improving your small business's growth through the THAISEVA app.
        </p>
      </div>

      {/* Store Cards */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16 px-6 pb-20">
        {/* App Store */}
        <div className="text-center">
          <div className="bg-yellow-100 h-36 w-36 p-4 rounded-lg mx-auto">
            <div className="h-full w-full bg-slate-900 rounded-lg flex flex-col justify-center items-center">
              <img src={Logo} alt="Logo" className="h-20 mb-2" />
              <p className="text-white text-lg font-semibold">THAISEVS</p>
            </div>
          </div>

          <div className="mt-6">
            <img src={AppStore} alt="App Store" className="mx-auto h-12" />
            <div className="flex justify-center items-center text-yellow-500 mt-4 gap-1">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="bi bi-star-fill"></i>
              ))}
              <p className="text-black text-sm ml-2">(305)</p>
            </div>
            <p className="text-black text-base mt-1">Rating 4.2</p>
          </div>
        </div>

        {/* Google Play */}
        <div className="text-center mt-10 sm:mt-0">
          <div className="bg-yellow-100 h-36 w-36 p-4 rounded-lg mx-auto">
            <div className="h-full w-full bg-slate-900 rounded-lg flex flex-col justify-center items-center">
              <img src={Logo} alt="Logo" className="h-20 mb-2" />
              <p className="text-white text-lg font-semibold">THAISEVS</p>
            </div>
          </div>

          <div className="mt-6">
            <img src={googlePay} alt="Google Play" className="mx-auto h-12" />
            <div className="flex justify-center items-center text-yellow-500 mt-4 gap-1">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="bi bi-star-fill"></i>
              ))}
              <p className="text-black text-sm ml-2">(395)</p>
            </div>
            <p className="text-black text-base mt-1">Rating 4.8</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
