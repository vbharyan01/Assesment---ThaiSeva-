import React from "react";
import Navbar from "./Navbar";
import googlePay from "../assets/Landing-Img/Home/google-pay.png";
import AppStore from "../assets/Landing-Img/Home/app-store.png";
import Iphone from "../assets/Landing-Img/Home/iPhone-Pro.png";
import WorkImg from "../assets/Landing-Img/Home/work-img.png";
// import Iphone from "../assets/Landing-Img/Home/work-img.png";
import "../components/backImg.css";
import Overview from "./Overview";
import Guide from "./Guide";
import Preview from "./Preview";
import User from "./User";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="bg-white overflow-x-hidden">
      <div className="backImg">
        <div className=" bg-slate-950  bg-opacity-80 ">
          <Navbar />
          <div className="px-10">
            <div className="grid grid-cols-12">
              <div className="lg:col-span-4 md:col-span-12 col-span-12 flex justify-center items-center">
                <div>
                  <p className="text-5xl mt-16 font-bold bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300 bg-[length:200%_auto] bg-clip-text text-transparent animate-text-shine">
                  GET THIS APP FOR FREE
                </p>

                  <p className="text-white mt-10 text-lg md:text-xl font-light animate-fade-in transition-opacity duration-1000 ease-in-out">
                  Thaiseva is your all-in-one digital companion for exploring, living, and thriving in Thailand 
                  — combining travel convenience with essential local support.
                </p>

                  <div className="flex gap-6 mt-10">
                    <button>
                      <img
                        className="lg:h-[3.5rem] md:h-[3.2rem] h-14"
                        src={googlePay}
                        alt=""
                      />
                    </button>
                    <button>
                      <img
                        className="lg:h-[3.5rem] md:h-[3.2rem] h-14"
                        src={AppStore}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8  md:col-span-12 col-span-12 ">
                <img
                src={Iphone}
                alt="iPhone Mockup"
                 className="w-full h-auto max-h-[32rem] object-contain mx-auto"/>
              </div>
            </div>
          </div>
        </div>
      </div>

     

<div className="bg-white grid grid-cols-12 px-4 py-10 md:px-20 md:py-20 md:gap-14 relative">
  <div className="md:col-span-6 col-span-12 relative">
    <img
  src={WorkImg}
  alt="How Thaiseva works"
  className="w-full h-auto max-h-[24rem] object-contain rounded-2xl shadow-md shadow-yellow-500"
/>

  </div>

  <div className="md:col-span-6 col-span-12 md:mt-0 mt-10">
    <strong className="text-gray-600 font-bold text-3xl sm:text-4xl flex items-center gap-2 mb-6 tracking-tight">
      How <span className="italic text-yellow-500">Thaiseva</span> works
      <div className="h-3 w-3 bg-yellow-500 rounded-lg mt-2"></div>
    </strong>

    <p className="text-gray-600 font-medium text-justify text-sm sm:text-base leading-relaxed mb-3">
      Improving your small business's growth through <span className="italic">Thaiseva</span> app. It helps you earn and manage money quickly while offering tools to strengthen your local presence.
    </p>
    <p className="text-gray-600 font-medium text-justify text-sm sm:text-base leading-relaxed mb-3">
      Whether you're handling customer service, logistics, or legal requirements — <span className="italic">Thaiseva</span> simplifies it all in one place.
    </p>
    <p className="text-gray-600 font-medium text-justify text-sm sm:text-base leading-relaxed mb-6">
      With our trusted local partners and full integration into daily services, <span className="italic">Thaiseva</span> gives you the freedom to focus on what matters most — growth.
    </p>

    {/* Video CTA Section */}
    <div className="lg:flex md:block mt-12 items-center gap-6">
      {/* Left Description */}
      <div className="font-bold relative mb-6 lg:mb-0">
        <p className="text-gray-700 font-bold text-lg">Watch shortly how this</p>
        <p className="text-gray-700 font-bold text-lg">app works</p>
        <div className="bg-yellow-200 h-10 w-10 rounded-3xl absolute top-0 -left-6 -z-10 border border-blue-200"></div>
        <div className="bg-yellow-200 h-10 w-10 rounded-3xl absolute top-1 left-2 -z-10"></div>
      </div>

      {/* Play Video Button */}
      <div className="flex gap-3 bg-black p-3 rounded-xl w-full md:w-60 justify-center items-center text-white shadow-md hover:shadow-lg transition duration-300">
        <i className="bi bi-play-circle-fill text-4xl"></i>
        <div>
          <p className="font-bold text-base">Watch the Video</p>
          <p className="text-sm text-gray-300">2:40 min</p>
        </div>
      </div>
    </div>
  </div>
</div>



      <Overview />
      <Guide />
      <Preview />
      <User />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
