import React from "react";
import Navbar from "../../components/Navbar";
import googlePay from "../../assets/Landing-Img/Home/google-pay.png";
import AppStore from "../../assets/Landing-Img/Home/app-store.png";
import Iphone from "../../assets/Landing-Img/Home/iPhone-Pro.png";
import WorkImg from "../../assets/Landing-Img/Home/work-img.png";
import Work from "../../assets/Landing-Img/guide/img-1.png";

const Service = () => {
  return (
    <>
      <div className="overflow-x-hidden font-sans">
        <div className="backImg">
          <div className="bg-slate-950 bg-opacity-80">
            <Navbar />

            {/* Main Service Block */}
            <div className="bg-white grid grid-cols-12 px-6 py-16 md:px-20 md:gap-14">
              <div className="md:col-span-6 col-span-12">
                <img
                  src={WorkImg}
                  alt=""
                  className="w-full md:h-[24rem] rounded-2xl shadow-lg"
                />
              </div>
              <div className="md:col-span-6 col-span-12 mt-10 md:mt-0">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4 border-b-4 border-yellow-500 w-fit pb-1">
                  Services
                </h2>
                <p className="text-gray-700 text-lg font-medium leading-relaxed mt-4">
                  Improving your small business's growth through THAISEVA app.
                  It helps boost customer service, financial growth, and
                  operational efficiency.
                </p>
                <p className="text-gray-700 text-lg font-medium leading-relaxed mt-2">
                  Unlock your business's potential using our unique tools and
                  real-time local support.
                </p>
              </div>
            </div>

            {/* Thaiseva Services Section */}
            <div className="bg-yellow-50 py-16">
              <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12 underline underline-offset-4 decoration-yellow-400">
                What Kind Of Services Thaiseva Provide
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-10 lg:px-20">
                {[
                  {
                    icon: "bi-headset",
                    title: "Local Assistance",
                    color: "bg-purple-200",
                    iconColor: "text-purple-500",
                  },
                  {
                    icon: "bi-cup-straw",
                    title: "Food",
                    color: "bg-orange-200",
                    iconColor: "text-orange-500",
                  },
                  {
                    icon: "bi-house-door",
                    title: "Room",
                    color: "bg-blue-200",
                    iconColor: "text-blue-500",
                  },
                  {
                    icon: "bi-car-front",
                    title: "Travel",
                    color: "bg-green-200",
                    iconColor: "text-green-500",
                  },
                ].map((card, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-200 bg-white"
                  >
                    <div
                      className={`flex justify-center items-center w-16 h-16 ${card.color} rounded-full mx-auto mb-4`}
                    >
                      <i className={`bi ${card.icon} ${card.iconColor} text-3xl`}></i>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800">{card.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Improving your small business's growth through Onir app.
                      It also helps to improve your customer service.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works Section */}
            <div className="bg-white grid grid-cols-12 px-6 py-20 md:px-20 md:gap-14">
              <div className="md:col-span-6 col-span-12">
                <img
                  src={Work}
                  alt=""
                  className="w-full md:h-[24rem] rounded-2xl shadow-md"
                />
              </div>
              <div className="md:col-span-6 col-span-12 mt-10 md:mt-0">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
                  How Local Assistance<br />Service Works
                </h2>
                <p className="text-gray-700 text-lg font-medium leading-relaxed">
                  We connect locals with the best support nearby using the
                  THAISEVA app. From groceries to guidance — we make everything
                  easier and faster.
                </p>
              </div>
            </div>

            {/* About T2T Section */}
            <div className="bg-white grid grid-cols-12 px-6 py-20 md:px-20 md:gap-14">
              <div className="md:col-span-6 col-span-12 mt-10 md:mt-0">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  ABOUT T2T WORLD
                </h2>
                <p className="text-gray-700 text-lg font-medium leading-relaxed">
                  T2T is built for the people — supporting entrepreneurs, local
                  services, and creating impact on ground level using tech.
                </p>
              </div>
              <div className="md:col-span-6 col-span-12">
                <img
                  src={WorkImg}
                  alt=""
                  className="w-full md:h-[24rem] rounded-2xl shadow-md"
                />
              </div>
            </div>

            {/* T2T Services */}
            <div className="bg-white py-16">
              <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12 underline underline-offset-4 decoration-blue-400">
                What Kind Of Services T2T World Provide
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-10 lg:px-20">
                {["headset", "cup-straw", "house-door", "car-front"].map((icon, idx) => (
                  <div
                    key={idx}
                    className="text-center p-6 rounded-xl shadow bg-white hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="flex justify-center items-center w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4">
                      <i className={`bi bi-${icon} text-white text-3xl`}></i>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800 capitalize">
                      {icon.replace("-", " ")}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Improving your small business's growth through Onir app.
                      It also helps to improve your customer service.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Get App Section */}
            <div className="bg-yellow-50 px-10 py-16">
              <div className="grid grid-cols-12">
                <div className="lg:col-span-4 md:col-span-12 col-span-12 flex justify-center items-center">
                  <div>
                    <h2 className="text-4xl font-extrabold text-black leading-snug">
                      GET THIS APP FOR FREE
                    </h2>
                    <p className="text-black mt-6 font-medium">
                      Download the Thaiseva app on your mobile now and join our
                      growing community.
                    </p>
                    <div className="flex gap-6 mt-8">
                      <button>
                        <img
                          className="h-14"
                          src={googlePay}
                          alt="Google Play"
                        />
                      </button>
                      <button>
                        <img
                          className="h-14"
                          src={AppStore}
                          alt="App Store"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-8 md:col-span-12 col-span-12 mt-10 lg:mt-0">
                  <img
                    src={Iphone}
                    alt="iPhone"
                    className="w-full h-[32rem] object-contain"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
