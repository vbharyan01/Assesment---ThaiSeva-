import React from "react";
import "../components/backImg.css";
import img1 from "../assets/Landing-Img/guide/img-1.png";
import img2 from "../assets/Landing-Img/guide/img-2.png";
import img3 from "../assets/Landing-Img/guide/img-3.png";
import img4 from "../assets/Landing-Img/guide/img-4.png";

const guideData = [
  {
    number: "01",
    title: "Local Assistance",
    desc: "Boost your small business with hands-on local support, giving you a reliable edge in customer service and community reach.",
    img: img1,
    bgClass: "guideBackImg1",
    reverse: false,
    aos: "fade-right",
  },
  {
    number: "02",
    title: "Easy Food Ordering",
    desc: "Simplify food delivery with a seamless interface, making orders faster and easier for both customers and staff.",
    img: img2,
    bgClass: "guideBackImg2",
    reverse: true,
    aos: "fade-left",
  },
  {
    number: "03",
    title: "Fast Room Booking",
    desc: "Efficient and quick booking system ensures your guests find rooms with ease and minimal friction.",
    img: img3,
    bgClass: "guideBackImg3",
    reverse: false,
    aos: "fade-right",
  },
  {
    number: "04",
    title: "Car Booking with Best Sightseeing Packages",
    desc: "Provide tourists with a complete experience through smart car bookings and curated sightseeing plans.",
    img: img4,
    bgClass: "guideBackImg4",
    reverse: true,
    aos: "fade-left",
  },
];

const Guide = () => {
  return (
    <div className="bg-white pt-10">
      {/* Header */}
      <div className="text-center items-center pt-10 pb-6" data-aos="fade-up">
        <p className="md:text-4xl text-3xl font-semibold tracking-wide">
          <i className="bi text-yellow-500 bi-dot text-5xl"></i>
          GET YOUR BEST GUIDE, <span className="text-yellow-500">THAISEVA</span>
        </p>
        <div className="flex justify-center">
          <p className="mt-4 text-slate-600 lg:w-[40%] md:w-[60%] text-base leading-relaxed">
            Helping your small business thrive with THAISEVA’s all-in-one platform for customer service and operational ease.
          </p>
        </div>
      </div>

      {/* Guide Sections */}
      <div className="grid grid-cols-12 gap-0 text-white mx-6 md:mx-10 lg:mx-20">
        {guideData.map((item, index) => (
          <React.Fragment key={index}>
            {item.reverse ? (
              <>
                {/* Text First */}
                <div
                  className={`col-span-12 md:col-span-6 lg:col-span-6 ${item.bgClass} p-8 lg:p-12 flex flex-col justify-center`}
                  data-aos={item.aos}
                >
                  <p className="text-5xl text-slate-700 font-semibold">{item.number}</p>
                  <p className="my-4 text-2xl md:text-3xl font-semibold">{item.title}</p>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
                {/* Image */}
                <div
                  className="col-span-12 md:col-span-6 lg:col-span-6"
                  data-aos="zoom-in"
                >
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
              </>
            ) : (
              <>
                {/* Image */}
                <div
                  className="col-span-12 md:col-span-6 lg:col-span-6"
                  data-aos="zoom-in"
                >
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                {/* Text */}
                <div
                  className={`col-span-12 md:col-span-6 lg:col-span-6 ${item.bgClass} p-8 lg:p-12 flex flex-col justify-center`}
                  data-aos={item.aos}
                >
                  <p className="text-5xl text-slate-700 font-semibold">{item.number}</p>
                  <p className="my-4 text-2xl md:text-3xl font-semibold">{item.title}</p>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Guide;
