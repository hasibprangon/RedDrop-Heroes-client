import React from "react";
import { Link } from "react-router-dom";
import { motion, easeInOut } from "framer-motion";
import heroImg from "../../../src/assets/Animations/redDrop-heroes-motion.gif";
import useAuth from "../../Hooks/useAuth";

const Banner = () => {
  const { user } = useAuth();
  return (
    <div className="relative mb-10 bg-gradient-to-r from-red-600 to-red-800 text-white py-16 px-8 md:py-24 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Section: Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          RedDrop Heroes: Save Lives, Be a Hero!
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-90">
          Join our mission to connect life-saving blood donors with those in need. Every drop counts!
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-8 flex flex-col items-center md:items-start gap-4 md:flex-row">
          {
            user ? '' :
              <Link
                to="/register"
                className="bg-white text-red-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition duration-300"
              >
                Join as a Donor
              </Link>
          }
          <Link
            to="/search"
            className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-white hover:text-red-600 hover:scale-105 transition duration-300"
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
