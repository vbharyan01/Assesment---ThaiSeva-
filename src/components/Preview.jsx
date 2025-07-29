import React, { useEffect, useState } from "react";
import Iphone from "../assets/Landing-Img/Preview/iPhone-img.png";
import Img1 from "../assets/Landing-Img/Preview/img-1.png";
import Img2 from "../assets/Landing-Img/Preview/img-2.png";
import Img3 from "../assets/Landing-Img/Preview/img-3.png";
import Img4 from "../assets/Landing-Img/Preview/img-4.png";
import Img5 from "../assets/Landing-Img/Preview/img-5.png";
import Img6 from "../assets/Landing-Img/Preview/img-6.png";

const images = [Img1, Img2, Img3, Img4, Img5, Img6];

const Preview = () => {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [countThree, setCountThree] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => (prev >= 150 ? 150 : prev + 5));
      setCountTwo((prev) => (prev >= 100 ? 100 : prev + 5));
      setCountThree((prev) => (prev >= 50 ? 50 : prev + 5));
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
{/* HEADER */}
<div className="flex flex-col text-center items-center mt-24 px-4">
  <p className="text-3xl md:text-5xl font-extrabold tracking-tight relative inline-block text-gray-900">
    <span className="relative z-10">
      <span className="text-yellow-500">App</span> Preview
    </span>
    <i className="bi bi-dot text-yellow-500 text-5xl absolute -right-6 -bottom-2 z-0 animate-ping" />
  </p>

  <p className="mt-6 text-gray-700 text-sm md:text-lg max-w-2xl leading-relaxed">
    🚀 <span className="text-black font-medium">Boost your small business</span> with the <span className="text-yellow-500 font-semibold">THAISEVA</span> app — enhancing customer service and streamlining performance like never before.
  </p>
</div>


      {/* CAROUSEL */}
<div className="flex justify-center mb-20 mt-10 px-4">
  <div className="flex flex-col sm:flex-row items-center justify-between bg-slate-100 p-4 rounded-xl w-full max-w-5xl gap-4">
    <button
      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold"
      onClick={goToPrev}
    >
      Prev
    </button>

    <div className="w-full flex justify-center">
      <img
        src={images[activeIndex]}
        alt="App preview"
        className="w-full sm:w-[20rem] md:w-[24rem] lg:w-[28rem] max-h-[32rem] object-contain rounded-xl"
      />
    </div>

    <button
      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold"
      onClick={goToNext}
    >
      Next
    </button>
  </div>
</div>

      {/* COUNTER SECTION */}
      <div className="previewBackImg group">
        <div className="bg-slate-900 bg-opacity-80 py-10 lg:h-[29rem]">
          <div className="grid grid-cols-12 px-4 md:px-10 gap-6 items-center">
            {/* Counter Cards */}
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className="bg-slate-800 border-2 border-yellow-300 text-white hover:bg-slate-700 p-4 h-40 w-full max-w-[10rem] mx-auto rounded-2xl flex flex-col justify-center items-center text-center">
                <p className="text-sm">PEOPLE USE</p>
                <p className="font-bold text-yellow-300">THAISEVA</p>
                <p className="text-4xl mt-2 font-bold">{countThree}+</p>
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className="bg-slate-800 border-2 border-yellow-300 text-white hover:bg-slate-700 p-4 h-40 w-full max-w-[10rem] mx-auto rounded-2xl flex flex-col justify-center items-center text-center">
                <p className="text-sm">PEOPLE LIKE</p>
                <p className="font-bold text-yellow-300">THAISEVA</p>
                <p className="text-4xl mt-2 font-bold">{countTwo}+</p>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-4 lg:col-span-2">
              <div className="bg-slate-800 border-2 border-yellow-300 text-white hover:bg-slate-700 p-4 h-40 w-full max-w-[10rem] mx-auto rounded-2xl flex flex-col justify-center items-center text-center">
                <p className="text-sm">TOTAL</p>
                <p className="font-bold text-yellow-300">DOWNLOADS</p>
                <p className="text-4xl mt-2 font-bold">{count}+</p>
              </div>
            </div>

            {/* iPhone Image */}
            <div className="col-span-12 lg:col-span-6 flex justify-center mt-10 lg:mt-0">
              <img src={Iphone} alt="iPhone Preview" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;
