import React, { useState } from "react";
import { Link } from "react-router-dom";
import useRequest from "../../Hooks/useRequest";
import 'animate.css'
import { motion } from "framer-motion";

const DonationRequests = () => {
    const [request] = useRequest()
    const featureVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };
    const [features, setFeatures] = useState([]);

    return (
        <div className="min-h-screen bg-red-50 py-10">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8 text-red-600">Blood Donation Requests</h1>
                <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {request.map((request) => (
                        <motion.div
                            key={request._id}
                            variants={featureVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            className="bg-white p-6 shadow-md rounded-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:scale-105 "
                        >
                            <div>
                                <h2 className="text-lg text-black font-semibold mb-2">
                                    Recipient: {request.recipientName}
                                </h2>
                                <p className="text-sm text-gray-700">
                                    <strong>Location:</strong> {request.fullAddress}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <strong>Blood Group:</strong> {request.bloodGroup}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <strong>Date:</strong> {request.donationDate}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <strong>Time:</strong> {request.donationTime}
                                </p>
                            </div>
                            <Link
                                to={`/donationRequestDetails/${request?._id}`}
                                className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
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