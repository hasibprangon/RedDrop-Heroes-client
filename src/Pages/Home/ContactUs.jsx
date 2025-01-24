import React from 'react';

const ContactUs = () => {
    return (
            <div className="bg-red-500 text-white py-12 mt-20 mb-5">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg">
                            <form>
                                <div className="mb-4">
                                    <label className="block text-sm font-bold mb-2" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-bold mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-bold mb-2" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        placeholder="Your Message"
                                        rows="4"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                            <p className="text-sm mb-4">
                                Have questions or need help? Feel free to reach out to us.
                            </p>
                            <p className="text-sm">
                                <strong>Phone:</strong> +123 456 7890
                            </p>
                            <p className="text-sm">
                                <strong>Email:</strong> redDrop@heroes.org
                            </p>
                            <p className="text-sm">
                                <strong>Address:</strong> 123 Blood Drive, Life City
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ContactUs;