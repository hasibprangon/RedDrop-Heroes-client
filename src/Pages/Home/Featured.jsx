import React from 'react';
import { FaHandHoldingHeart, FaHeartbeat, FaRegSmileBeam } from 'react-icons/fa';

const Featured = ({ theme }) => {
    return (
        <div className={`py-12 transition-all duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-red-50 text-gray-800'}`}>
            <div className="container mx-auto px-4 text-center">
                <h2 className={`text-2xl font-bold mb-6 md:text-4xl`}>
                    Why Donate Blood?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Card 1: Save Lives */}
                    <div className={`rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                        <span className={`text-4xl mb-4 block transition-colors duration-300 ${theme === 'dark' ? 'text-red-300' : 'text-red-600'}`}>
                            <FaHeartbeat />
                        </span>
                        <h3 className="text-xl font-semibold mb-2">Save Lives</h3>
                        <p className="transition-colors duration-300">
                            Every blood donation can save up to three lives. Join the movement and be a hero today!
                        </p>
                    </div>

                    {/* Card 2: Build Community */}
                    <div className={`rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                        <span className={`text-4xl mb-4 block transition-colors duration-300 ${theme === 'dark' ? 'text-red-300' : 'text-red-600'}`}>
                            <FaHandHoldingHeart />
                        </span>
                        <h3 className="text-xl font-semibold mb-2">Build Community</h3>
                        <p className="transition-colors duration-300">
                            Connect with donors and recipients in your community and spread compassion.
                        </p>
                    </div>

                    {/* Card 3: Feel Good */}
                    <div className={`rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                        <span className={`text-4xl mb-4 block transition-colors duration-300 ${theme === 'dark' ? 'text-red-300' : 'text-red-600'}`}>
                            <FaRegSmileBeam />
                        </span>
                        <h3 className="text-xl font-semibold mb-2">Feel Good</h3>
                        <p className="transition-colors duration-300">
                            Donating blood is a simple act of kindness that brings immense satisfaction and joy.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Featured;
