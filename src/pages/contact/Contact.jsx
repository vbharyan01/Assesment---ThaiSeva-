import React from "react";
import Navbar from "../../components/Navbar";
import mapImg from "../../assets/ContactImg/Map.png";
import Footer from "../../components/Footer";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="contactBackImg">
        <div className="bg-slate-950 h-full bg-opacity-80 text-white text-center">
          <Navbar />
          <div className="py-[8.5rem] px-10">
            <div className="flex justify-center gap-2">
              <p className="text-5xl font-semibold">CONTACT US</p>
            </div>
            <div className="flex justify-center my-8">
              <p className="lg:w-2/4 md:w-2/3 text-lg italic text-slate-300">
                Improving your small business's growth through the ThaiSeva app.
                We help elevate your customer experience with intuitive digital solutions.
              </p>
            </div>

            <div className="grid grid-cols-12 mt-20 text-xl">
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <i className="bi text-4xl text-yellow-500 pb-4 bi-telephone-outbound-fill"></i>
                <p className="my-1 mt-4">+66 9689643354</p>
                <p>+66 7036790005</p>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-4 md:border-s-2 lg:border-e-2 md:my-0 my-16">
                <i className="bi text-4xl text-yellow-500 bi-geo-alt-fill"></i>
                <p className="my-1 mt-4">Bang Lamung District,</p>
                <p>Chon Buri 20150, Thailand</p>
              </div>
              <div className="col-span-12 md:col-span-6 md:col-start-4 md:mt-20 lg:mt-0 sm:col-span-8 sm:col-start-3 lg:col-span-4">
                <i className="bi text-4xl text-yellow-500 bi-envelope-at-fill"></i>
                <p className="my-1 mt-5">thaiseva@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white min-h-screen">
        <div className="text-center pt-20 pb-10">
          <p className="md:text-4xl text-3xl text-gray-700 font-bold">
            WE CAN HELP YOU
          </p>
          <div className="flex justify-center mt-3">
            <div className="h-[2px] bg-yellow-500 w-[20rem]"></div>
          </div>
        </div>

        <div className="grid grid-cols-12 mx-6 md:mx-20 lg:mx-36 gap-8">
          <div className="col-span-12 md:col-span-6">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-300 transition duration-300 bg-gray-100 shadow-sm"
            />
          </div>

          <div className="col-span-12 md:col-span-6">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-300 transition duration-300 bg-gray-100 shadow-sm"
            />
          </div>

          <div className="col-span-12">
            <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-300 transition duration-300 bg-gray-100 shadow-sm"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-center pt-10">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition duration-300">
            Send Your Message
          </button>
        </div>

        <div className="mt-20">
          <img src={mapImg} alt="Map Location" className="w-full object-cover" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
