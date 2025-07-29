import React from "react";
import MissionImg from "../../assets/AboutImg/mission.png";
import MissionImgTwo from "../../assets/AboutImg/mission-2.png";

const Mission = () => {
  return (
    <>
      <div className="bg-white py-12 px-4 md:px-10">
        {/* OUR MISSION */}
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 col-span-12 space-y-4">
            <p className="text-yellow-500 font-semibold text-2xl tracking-wide">THAISEVA</p>
            <h2 className="md:text-4xl text-3xl text-gray-800 font-bold mt-2 capitalize">
              Our Mission Statement
            </h2>
            <div className="border-b-4 rounded-xl border-yellow-500 w-3/4 max-w-md my-3"></div>
            <div className="text-lg space-y-5 text-gray-700 font-medium leading-relaxed">
              <p>
                At ThaiSeva, our mission is to seamlessly connect traditional Thai wellness practices
                with modern lifestyles. We aim to offer authentic experiences that promote holistic
                health, emotional balance, and cultural enrichment for every individual.
              </p>
              <p>
                We are committed to empowering local therapists and small businesses by providing
                them a digital platform to reach wider audiences while preserving their art and
                integrity.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <img src={MissionImg} alt="Mission visual" className="w-full rounded-xl shadow-lg" />
          </div>
        </div>

        {/* OUR PHILOSOPHY */}
        <div className="grid grid-cols-12 gap-8 items-center mt-20">
          <div className="lg:col-span-6 hidden lg:block">
            <img src={MissionImgTwo} alt="Philosophy visual" className="w-full rounded-xl shadow-lg" />
          </div>
          <div className="lg:col-span-6 col-span-12 space-y-4">
            <p className="text-yellow-500 font-semibold text-2xl tracking-wide">THAISEVA</p>
            <h2 className="md:text-4xl text-3xl text-gray-800 font-bold mt-2 capitalize">
              Our Philosophy
            </h2>
            <div className="border-b-4 rounded-xl border-yellow-500 w-3/4 max-w-md my-3"></div>
            <div className="text-lg space-y-5 text-gray-700 font-medium leading-relaxed">
              <p>
                We believe wellness is not a luxury—it’s a lifestyle. Our philosophy blends the
                wisdom of Thai traditions with personalized care to create meaningful, healing
                experiences for our clients.
              </p>
              <p>
                Respect for culture, compassion in service, and commitment to quality form the core
                of every session, interaction, and journey we offer.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 lg:hidden block mt-6 col-span-12">
            <img src={MissionImgTwo} alt="Philosophy visual" className="w-full rounded-xl shadow-lg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
