import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import AboutApp from "./AboutApp";
import Mission from "./Mission";
import Team from "./Team";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <div className="aboutImg min-h-screen w-full">
      <div className="bg-slate-950 bg-opacity-90 text-white">
        <Navbar />
        <div className="flex flex-col items-center justify-center text-center py-32 px-6 md:px-12 lg:px-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-yellow-500">ABOUT</span> US
          </h1>

          <div className="h-2 w-12 rounded-full bg-yellow-500 mb-6"></div>

          <p className="max-w-2xl text-base md:text-lg italic mb-8">
            Improving your small business's growth through the THAISEVA app. It also helps improve your customer service.
          </p>

          <div className="space-x-4 text-base md:text-lg font-semibold">
            <Link to="/" className="text-yellow-500 hover:underline">
              Home
            </Link>
            <span className="text-white">/ About</span>
          </div>
        </div>
      </div>

      <AboutApp />
      <Mission />
      <Team />
      <Footer />
    </div>
  );
};

export default About;
