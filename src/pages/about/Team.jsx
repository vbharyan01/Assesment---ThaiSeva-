import React from "react";
import TeamOne from "../../assets/AboutImg/Team-1.png";
import TeamTwo from "../../assets/AboutImg/Team-2.png";
import TeamThree from "../../assets/AboutImg/Team-3.png";
import WorkImg from "../../assets/AboutImg/work.png";

const Team = () => {
  return (
    <>
      {/* TEAM SECTION */}
      <div className="teamBackImg relative">
        <div className="bg-slate-900 bg-opacity-70 absolute -z-10 h-[100vh] w-full"></div>
        <div className="z-10 px-4 md:px-8">
          <div className="text-center text-white pt-20">
            <p className="md:text-4xl text-3xl font-semibold">
              MEET OUR <span className="text-yellow-500">TEAM</span>
            </p>
            <div className="flex justify-center">
              <p className="m-6 text-slate-300 text-lg italic max-w-2xl">
                ThaiSeva is powered by a passionate team of wellness advocates, tech innovators,
                and customer-first professionals dedicated to bringing authentic experiences to life.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
            {[TeamOne, TeamTwo, TeamThree].map((img, idx) => (
              <div key={idx} className="w-full">
                <img src={img} alt={`Team Member ${idx + 1}`} className="shadow-2xl w-full h-auto object-cover rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TEAM BIO SECTION */}
      <div className="bg-white py-10 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-100 shadow-xl text-black p-6 rounded-xl">
            <p className="text-xl font-semibold">Luna Smith</p>
            <p className="text-yellow-500 my-1 font-semibold">Lead Strategist</p>
            <p className="text-slate-800 mt-2">
              Luna brings over a decade of experience in digital wellness strategy. She's passionate
              about creating tech that heals and empowers.
            </p>
          </div>

          <div className="bg-slate-100 shadow-xl text-black p-6 rounded-xl">
            <p className="text-xl font-semibold">Mika Sharma</p>
            <p className="text-yellow-500 my-1 font-semibold">Product Designer</p>
            <p className="text-slate-800 mt-2">
              Mika leads our design efforts, ensuring that ThaiSeva is as intuitive and calming as the
              therapies we offer.
            </p>
          </div>

          <div className="bg-slate-100 shadow-xl text-black p-6 rounded-xl">
            <p className="text-xl font-semibold">Joy Patel</p>
            <p className="text-yellow-500 my-1 font-semibold">Developer & Tech Lead</p>
            <p className="text-slate-800 mt-2">
              Joy drives the backend architecture and app performance, ensuring seamless service
              across devices.
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-2 p-10">
          <div className="h-3 w-3 rounded-full bg-slate-300" />
          <div className="h-3 w-3 rounded-full bg-slate-300" />
          <div className="h-3 w-6 rounded-lg bg-yellow-300" />
          <div className="h-3 w-3 rounded-full bg-slate-300" />
          <div className="h-3 w-3 rounded-full bg-slate-300" />
        </div>
      </div>

      {/* WORK WITH US SECTION */}
      <div className="bg-white pb-16 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10 items-center">
          <div>
            <img src={WorkImg} alt="Work with ThaiSeva" className="rounded-xl shadow-lg w-full h-auto" />
          </div>
          <div>
            <p className="text-yellow-500 font-semibold text-2xl">THAISEVA</p>
            <p className="md:text-4xl text-3xl text-gray-800 font-bold mt-3 capitalize">
              Work With Us
            </p>
            <div className="border-b-[3px] rounded-xl border-yellow-500 md:w-80 w-[17rem] my-2" />
            <div className="text-lg space-y-4 mt-10 text-gray-700 leading-relaxed">
              <p>
                We are always looking for passionate individuals who believe in wellness,
                technology, and meaningful impact. Whether you're a developer, therapist, designer, or
                strategist — ThaiSeva offers a space to grow and thrive.
              </p>
              <p>
                Join us in shaping the future of well-being and digital service in India and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
