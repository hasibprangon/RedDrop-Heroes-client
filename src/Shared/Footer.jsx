import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-red-600 to-red-800 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                    
                    {/* About Us */}
                    <div>
                        <h3 className="text-2xl font-bold">About Us</h3>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            We are dedicated to connecting blood donors with those in need.
                            Join us in saving lives and making a difference in the community.
                        </p>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="text-2xl font-bold">Quick Links</h3>
                        <ul className="mt-4 space-y-3 text-gray-200">
                            
                            <li>
                                <Link to="/donors" className="hover:text-white transition-all duration-300">
                                    Search Donors
                                </Link>
                            </li>
                            <li>
                                <Link to="/register" className="hover:text-white transition-all duration-300">
                                    Join as a Donor
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-2xl font-bold">Get in Touch</h3>
                        <ul className="mt-4 space-y-2 text-gray-200">
                            <li><span className="font-semibold">Email:</span> redDrop@heroes.org</li>
                            <li><span className="font-semibold">Phone:</span> +123 456 7890</li>
                            <li><span className="font-semibold">Address:</span> 123 Blood Drive, Life City</li>
                        </ul>

                        {/* Social Icons */}
                        <div className="mt-6 flex justify-center md:justify-start space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-2xl hover:text-gray-300 transition-all duration-300"
                            >
                                <FaFacebook className="hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-2xl hover:text-gray-300 transition-all duration-300"
                            >
                                <FaXTwitter className="hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-2xl hover:text-gray-300 transition-all duration-300"
                            >
                                <FaInstagram className="hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-10 border-t border-red-400 pt-6 text-center text-sm text-gray-300">
                    <p>&copy; {new Date().getFullYear()} <span className="font-semibold text-white">RedDrop-Heroes</span>. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
