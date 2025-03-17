import React from 'react';
import { FaHandHoldingHeart, FaHeartbeat, FaRegSmileBeam } from 'react-icons/fa';

const Featured = () => {
    return (
            <div className="bg-red-50 py-12 my-5">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-red-600 mb-6">Why Donate Blood?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
                            <span className="text-red-600 text-4xl mb-4"><FaHeartbeat></FaHeartbeat></span>
                            <h3 className="text-xl font-semibold mb-2">Save Lives</h3>
                            <p className="text-gray-600">
                                Every blood donation can save up to three lives. Join the movement and be a hero today!
                            </p>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
                            <span className="text-red-600 text-4xl mb-4"><FaHandHoldingHeart></FaHandHoldingHeart></span>
                            <h3 className="text-xl font-semibold mb-2">Build Community</h3>
                            <p className="text-gray-600">
                                Connect with donors and recipients in your community and spread compassion.
                            </p>
                        </div>
                        
                        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
                            <span className="text-red-600 text-4xl mb-4 "><FaRegSmileBeam></FaRegSmileBeam></span>
                            <h3 className="text-xl font-semibold mb-2">Feel Good</h3>
                            <p className="text-gray-600">
                                Donating blood is a simple act of kindness that brings immense satisfaction and joy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Featured;