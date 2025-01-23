import React from "react";
import bannerImg from '../../../src/assets/image/banner.jpg'
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative mb-10 text-white py-16 px-8 md:py-24 md:px-12">
      <div
        className="absolute inset-0 h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      ></div>
      <div className="relative z-10 flex flex-col items-start text-start">
        <h1 className="text-4xl font-bold md:text-6xl">
          Save Lives, Be a Hero
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Join our mission to connect donors with those in need.
        </p>
        <div className="mt-8 flex flex-col gap-4 md:flex-row">
          <Link
            to="/register"
            className="bg-white text-red-500 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Join as a Donor
          </Link>
          <Link to='/search'
            className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-white hover:text-red-500 transition"
          >
            Search Donors
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
