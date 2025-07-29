import React, { useState } from "react";
import Users from "../assets/Landing-Img/users.png";

const faqData = [
  {
    question: "I’ve got older Mac. Is THAISEVA compatible with it?",
    answer: [
      "1. Identify the version of the operating system on your Mac.",
      "2. Check the version against THAISEVA's compatibility list.",
      "3. Verify if your hardware specifications meet the minimum requirements of THAISEVA.",
    ],
  },
  {
    question: "What are the requirements for using THAISEVA?",
    answer: [
      "1. Operating System: THAISEVA requires a certain version of macOS or Windows.",
      "2. Processor: A minimum speed and type of CPU is necessary to run THAISEVA.",
      "3. Memory: THAISEVA needs a specified amount of RAM to function properly.",
    ],
  },
  {
    question: "How does THAISEVA handle my privacy?",
    answer: [
      "1. Encrypts data.",
      "2. Details in their privacy policy.",
      "3. Complies with laws.",
    ],
  },
  {
    question: "What is THAISEVA privacy policy?",
    answer: [
      "1. Website: Check THAISEVA's website for a privacy policy link.",
      "2. Support: Reach out to their customer support for information.",
      "3. Documentation: Look through any provided product documentation.",
    ],
  },
];

const User = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-20 pb-10">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black relative inline-block">
          WHAT <span className="text-yellow-500">THAISEVA</span> USERS SAY
          <i className="bi bi-dot text-yellow-500 text-5xl absolute -left-6 -top-2"></i>
        </h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Improving your small business's growth through THAISEVA app. It also helps to improve your customer service.
        </p>
      </div>

      {/* Testimonials - You can leave these as-is */}

      {/* FAQ Section */}
      <div className="text-center mt-28 mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-black relative inline-block">
          <span className="text-yellow-500">FREQUENTLY </span>ASKED QUESTIONS
          <i className="bi bi-dot text-yellow-500 text-5xl absolute -left-5 -top-4"></i>
        </h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Helping you navigate THAISEVA with confidence. Check out our most common support topics below.
        </p>
      </div>

      {/* Accordion FAQ */}
      <div className="max-w-4xl mx-auto px-6 md:px-0 space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-slate-300 rounded-xl transition duration-300 hover:shadow-lg bg-white"
          >
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-black focus:outline-none"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>
              <i
                className={`bi ${
                  openIndex === index ? "bi-chevron-up rotate-180" : "bi-chevron-down"
                } text-2xl text-yellow-500 transition-transform duration-300`}
              ></i>
            </button>
            <div
              className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-96 py-2" : "max-h-0"
              }`}
            >
              <ul className="text-slate-600 list-disc pl-5 space-y-2">
                {faq.answer.map((line, idx) => (
                  <li key={idx} className="text-base">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
