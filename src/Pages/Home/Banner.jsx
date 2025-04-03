import React from "react";
import { Link } from "react-router-dom";
import { motion, easeInOut } from "framer-motion";
import heroImg from "../../../src/assets/Animations/redDrop-heroes-motion.gif";
import useAuth from "../../Hooks/useAuth";
import { Typewriter } from "react-simple-typewriter";

const Banner = ({ theme }) => {
  const { user } = useAuth();

  return (
    <div
      className={`relative py-16 px-8 md:py-24 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10 transition-all duration-500 
      ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gradient-to-r from-red-600 to-red-800 text-white"}`}
    >
      {/* Left Section: Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          RedDrop Heroes: Save Lives, Be a Hero!
        </h1>
        <motion.p className="mt-4 text-lg md:text-xl opacity-90">
          <Typewriter
            words={["Join our mission to connect life-saving blood donors with those in need. Every drop counts!"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.p>

        {/* Call to Action Buttons */}
        <div className="mt-8 flex flex-col items-center md:items-start gap-4 md:flex-row">
          {!user && (
            <Link
              to="/register"
              className={`font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ${
                theme === "dark" ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white text-red-600 hover:bg-gray-100"
              }`}
            >
              Join as a Donor
            </Link>
          )}
          <Link
            to="/search"
            className={`font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ${
              theme === "dark"
                ? "border-r-2 border-t-2 border-gray-300 text-white hover:bg-gray-700"
                : "border-r-2 border-t-2 border-white text-white font-semibold py-3 px-6 rounded-lg shadow-xl hover:bg-white hover:text-red-600 hover:scale-105 transition duration-300"
            }`}
          >
            Search Donors
          </Link>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="md:w-1/2 flex justify-center">
        <motion.img
          src={heroImg}
          alt="Blood Donation"
          className="w-full max-w-sm md:max-w-md rounded-t-2xl rounded-r-2xl border-l-8 border-b-8 border-red-900 shadow-lg"
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 10, delay: 1, ease: easeInOut, repeat: Infinity }}
        />
      </div>
    </div>
  );
};

export default Banner;
