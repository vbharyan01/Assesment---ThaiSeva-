import React from "react";
import "../components/backImg.css";
import img1 from "../assets/Landing-Img/About/img-1.png";
import img2 from "../assets/Landing-Img/About/img-2.png";
import img3 from "../assets/Landing-Img/About/img-3.png";

const Overview = () => {
  return (
    <>
      <div className="overviewBackImg">
        <div className="bg-slate-900 bg-opacity-80 w-full">
          <div className="flex flex-col text-center items-center text-white py-20 px-6">
            <p className="text-4xl md:text-5xl font-bold tracking-wide">
              <i className="bi bi-dot text-yellow-500 text-6xl"></i> 
              OVERVIEW ABOUT <span className="text-yellow-400">THAISEVA</span>
            </p>
            <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl">
              Empowering small businesses with a sleek interface, reliable performance, and secure data—all in one place.
            </p>
          </div>

          {/* Card Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 pb-24">
            {[
              {
                img: img1,
                title: "Clean Interface",
                icon: "bi-printer-fill",
                desc: "Navigate and manage your tasks with a minimalist and user-friendly UI.",
              },
              {
                img: img2,
                title: "Fast Performance",
                icon: "bi-speedometer",
                desc: "Optimized for speed to ensure seamless operations without lags.",
              },
              {
                img: img3,
                title: "Data Security",
                icon: "bi-shield-fill-check",
                desc: "Your data is encrypted and protected with industry-grade standards.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="relative group transition duration-300 transform hover:-translate-y-2 hover:scale-105"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-64 object-cover rounded-2xl shadow-xl group-hover:brightness-75 transition-all duration-500"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 group-hover:bg-yellow-100 text-black rounded-3xl p-6 shadow-2xl backdrop-blur-md transition-all duration-500">
                  <p className="text-2xl font-bold flex items-center gap-2">
                    <i className={`bi ${card.icon} text-yellow-500 text-3xl animate-pulse`}></i>
                    {card.title}
                  </p>
                  <p className="mt-3 text-slate-700 font-medium">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
