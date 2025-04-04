import React, { useState } from "react";
import { Link } from "react-router-dom";
import useRequest from "../../Hooks/useRequest";
import 'animate.css';
import { motion } from "framer-motion";

const DonationRequests = ({ theme }) => {
    const [request] = useRequest();

    const featureVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className={`min-h-screen py-10 transition-all duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-red-50 text-gray-800'}`}>
            <div className="container mx-auto">
                <h1 className={`text-2xl font-bold text-center mt-12 md:text-4xl`}>
                    Blood Donation Requests
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {request.map((request) => (
                        <motion.div
                            key={request._id}
                            variants={featureVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            className={`p-6 shadow-md rounded-lg flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:scale-105 
                                ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}
                            `}
                        >
                            <div>
                                <h2 className="text-lg font-semibold mb-2">
                                    Recipient: {request.recipientName}
                                </h2>
                                <p className="text-sm">
                                    <strong>Location:</strong> {request.fullAddress}
                                </p>
                                <p className="text-sm">
                                    <strong>Blood Group:</strong> {request.bloodGroup}
                                </p>
                                <p className="text-sm">
                                    <strong>Date:</strong> {request.donationDate}
                                </p>
                                <p className="text-sm">
                                    <strong>Time:</strong> {request.donationTime}
                                </p>
                            </div>
                            <Link
                                to={`/donationRequestDetails/${request?._id}`}
                                className={`font-semibold mt-2 py-3 px-6 rounded-lg shadow-lg transition duration-300 ${
                                    theme === "dark" ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white text-red-600 hover:bg-gray-100"
                                  }`}
                            >
                                View Details
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DonationRequests;
