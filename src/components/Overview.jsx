import React from "react";
import "../components/backImg.css";
import img1 from "../assets/Landing-Img/About/img-1.png";
import img2 from "../assets/Landing-Img/About/img-2.png";
import img3 from "../assets/Landing-Img/About/img-3.png";

const Overview = () => {
  return (
    <>
      {/* SECTION: Overview with background */}
      <div className="overviewBackImg">
        <div className="bg-slate-800 bg-opacity-60 w-full">
          <div className="flex flex-col text-center items-center text-white py-16 px-4">
            <p className="text-3xl md:text-4xl font-semibold">
              <i className="bi text-yellow-500 bi-dot text-5xl"></i>
              OVERVIEW ABOUT <span className="text-yellow-500">THAISEVA</span>
            </p>
            <p className="mt-6 text-slate-300 md:w-2/3 lg:w-1/2">
              Improving your small business's growth through THAISEVA app. It also helps improve your customer service.
            </p>
          </div>

          {/* Grid Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-20">
            {/* Card 1 */}
            <div className="relative group">
              <img
                src={img1}
                alt="Clean Interface"
                className="w-full group-hover:opacity-30 transition duration-500 ease-in-out rounded-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white group-hover:bg-yellow-200 text-black rounded-3xl p-6 transition-transform group-hover:-translate-y-6 duration-500 ease-in-out shadow-lg">
                <p className="text-2xl font-bold">
                  <i className="bi bi-printer-fill text-yellow-500"></i> Clean Interface
                </p>
                <p className="mt-4 text-slate-600 font-semibold">
                  Improving your small business's growth through THAISEVA app. It also helps improve your customer service.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative group">
              <img
                src={img2}
                alt="Fast Performance"
                className="w-full group-hover:opacity-30 transition duration-500 ease-in-out rounded-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white group-hover:bg-yellow-200 text-black rounded-3xl p-6 transition-transform group-hover:-translate-y-6 duration-500 ease-in-out shadow-lg">
                <p className="text-2xl font-bold">
                  <i className="bi bi-speedometer text-yellow-500"></i> Fast Performance
                </p>
                <p className="mt-4 text-slate-600 font-semibold">
                  Improving your small business's growth through THAISEVA app. It also helps improve your customer service.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative group">
              <img
                src={img3}
                alt="Data Security"
                className="w-full group-hover:opacity-30 transition duration-500 ease-in-out rounded-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white group-hover:bg-yellow-200 text-black rounded-3xl p-6 transition-transform group-hover:-translate-y-6 duration-500 ease-in-out shadow-lg">
                <p className="text-2xl font-bold">
                  <i className="bi bi-shield-fill-check text-yellow-500"></i> Data Security
                </p>
                <p className="mt-4 text-slate-600 font-semibold">
                  Improving your small business's growth through THAISEVA app. It also helps improve your customer service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};





export default Overview;
