import React, { useState } from "react";
import AboutImg from "../../assets/AboutImg/about.png";

const faqData = [
  {
    question: "How we work?",
    answers: [
      "Collaboration: We work together to achieve common goals.",
      "Communication: Open and clear communication is essential.",
      "Adaptability: We remain flexible to navigate challenges and changes.",
    ],
  },
  {
    question: "How many services do we provide?",
    answers: [
      "Depends on our expertise and resources.",
      "We offer a range of services tailored to client needs.",
      "It can vary from consulting to product development to support.",
    ],
  },
  {
    question: "How does local assistance work?",
    answers: [
      "Local team familiar with the area.",
      "Tailored support for community needs.",
      "Direct, accessible assistance.",
    ],
  },
  {
    question: "How can you book a car with one click?",
    answers: [
      "Quick booking interface in the app.",
      "Location-based smart suggestions.",
      "Seamless confirmation with a tap.",
    ],
  },
];

const AboutApp = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* About Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
          <div>
            <img
              src={AboutImg}
              alt="About"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-yellow-500 text-2xl font-semibold mb-2">
              THAISEVA
            </h2>
            <h3 className="text-4xl text-gray-700 font-bold mb-2">
              ABOUT OUR APP
            </h3>
            <div className="w-24 h-1 bg-yellow-500 mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg mb-4">
           Thaiseva bridges the gap between traditional shops and digital consumers. We bring kirana stores, small vendors, and service providers online—making it easier for customers to discover and support local businesses.


            </p>
            <p className="text-gray-600 text-lg">
              🛍️ Built for Bharat, Powered by Simplicity
Designed with simplicity in mind, Thaiseva is user-friendly for both tech-savvy youth and non-tech users. With just a few taps, vendors can list their services and customers can place orders easily.

📦 From Shop to Doorstep
Our app enables users to browse items, place orders, and choose payment modes—all from their mobile. Meanwhile, sellers get real-time order notifications to fulfill them efficiently.

🤝 Local Empowerment is Our Mission
Thaiseva isn’t just an app—it’s a mission to empower micro-entrepreneurs, boost visibility, and build trust between local sellers and buyers in your own neighborhood.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="useAppBackImg">
        <div className="bg-slate-900 bg-opacity-80 py-16 px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-white">
            <div>
              <h2 className="text-yellow-500 text-2xl font-semibold">
                THAISEVA
              </h2>
              <h3 className="text-4xl font-bold mt-2 capitalize">
                Why you use <span className="text-yellow-500">our app</span>
              </h3>
              <div className="w-32 h-1 bg-yellow-500 mt-2 mb-6 rounded-full"></div>
              <p className="text-lg leading-relaxed">
             Thaiseva is a one-stop platform designed to connect small businesses with local buyers seamlessly.
We aim to empower vendors by giving them a digital presence and streamline customer experience with features like direct ordering, real-time updates, and doorstep service.
Whether you're a seller looking to expand or a customer seeking convenience, Thaiseva brings your local marketplace to your fingertips.
              </p>
            </div>

            <div>
              {faqData.map((item, index) => (
                <div key={index} className="border-b border-slate-600 py-4">
                  <button
                    className="flex justify-between items-center w-full text-left text-lg font-semibold focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>{item.question}</span>
                    <i
                      className={`bi ${
                        activeIndex === index
                          ? "bi-chevron-up"
                          : "bi-chevron-down"
                      }`}
                    ></i>
                  </button>
                  {activeIndex === index && (
                    <ul className="mt-3 space-y-2 text-base text-slate-200 pl-2">
                      {item.answers.map((answer, i) => (
                        <li key={i} className="hover:text-yellow-400 transition">
                          {answer}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutApp;
