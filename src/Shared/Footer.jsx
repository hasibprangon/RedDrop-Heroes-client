import React from 'react';
import { FaFacebook, FaInstagram} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="bg-red-500 text-white py-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold">About Us</h3>
                            <p className="mt-4 text-sm leading-6">
                                We are dedicated to connecting blood donors with those in need.
                                Join us in saving lives and making a difference in the community.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold">Useful Links</h3>
                            <ul className="mt-4 space-y-2">
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/donors" className="hover:underline">
                                        Search Donors
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/register" className="hover:underline">
                                        Join as a Donor
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:underline">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold">Contact Us</h3>
                            <ul className="mt-4 space-y-2 text-sm">
                                <li>Email: redDrop@heroes.org</li>
                                <li>Phone: +123 456 7890</li>
                                <li>Address: 123 Blood Drive, Life City</li>
                            </ul>
                            <div className="mt-6 flex space-x-4">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gray-200"
                                >
                                    <button><FaFacebook></FaFacebook></button>
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gray-200"
                                >
                                    <button><FaXTwitter></FaXTwitter></button>
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gray-200"
                                >
                                    <button><FaInstagram></FaInstagram></button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 border-t border-red-300 pt-6 text-center text-sm">
                        <p>&copy; 2025 RedDrop-Heroes. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;