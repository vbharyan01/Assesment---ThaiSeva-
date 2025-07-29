import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Img1 from "../assets/Landing-Img/Group-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/service", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <motion.div
        className="flex p-6 items-center justify-between w-full h-20 z-50 backdrop-blur-md bg-black/30 shadow-lg relative"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={Img1} className="h-auto w-12" alt="Thaiseva logo" />
          <span className="text-3xl font-semibold text-white">
            Thai<span className="text-yellow-400">seva</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="space-x-8 text-lg text-white hidden lg:flex">
          {menuItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={item.path}
                className="hover:text-yellow-400 transition-all duration-300 font-medium"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/get-app"
              className="bg-yellow-400 hover:bg-yellow-300 focus:ring-2 text-black focus:ring-yellow-300 font-semibold rounded-full px-3 py-1.5 text-sm md:text-base text-center inline-flex items-center transition-all duration-300"
            >
              Get App
            </Link>
          </motion.div>
        </div>

        {/* Hamburger Icon */}
        <div
          className="lg:hidden block cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="bi bi-list text-4xl text-white hover:text-yellow-400 transition-all duration-300"></i>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-20 left-0 w-full bg-black/90 p-6 flex flex-col space-y-4 text-white text-center z-50 lg:hidden"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="hover:text-yellow-400 transition-all duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* ✅ Mobile Get App Button */}
              <Link
                to="/get-app"
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-full px-5 py-2 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get App
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Navbar;
