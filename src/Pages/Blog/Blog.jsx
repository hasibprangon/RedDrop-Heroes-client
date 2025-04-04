import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "animate.css";

const Blog = ({ theme }) => {
    const featureVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const blogs = [
        {
            id: 1,
            title: "The Importance of Blood Donation",
            excerpt: "Learn why donating blood can save lives and how you can contribute.",
            author: "Hablu Khan",
            date: "2025-01-20",
            thumbnail: "https://i.ibb.co/mrbzRFLV/Blood-Donation-1.webp",
        },
        {
            id: 2,
            title: "Tips for First-Time Donors",
            excerpt: "Everything you need to know to make your first blood donation a success.",
            author: "Sona Mia",
            date: "2025-01-18",
            thumbnail: "https://i.ibb.co/9m4M0Bwk/download.jpg",
        },
        {
            id: 3,
            title: "How Blood Donation Benefits Your Health",
            excerpt: "Discover the surprising health benefits of donating blood.",
            author: "Rahim Khan",
            date: "2025-01-15",
            thumbnail: "https://i.ibb.co/Dfs3cwRF/Benefits-of-blood-donation.webp",
        },
    ];

    return (
        <div className={`min-h-screen py-10 transition-all duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-red-50 text-gray-800'}`}>
            <div className="container mx-auto px-4">
                <h1 className={`text-3xl font-bold text-center mb-8 transition-colors duration-300`}>
                    Latest Blogs
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <motion.div
                            key={blog.id}
                            variants={featureVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            className={`p-6 flex flex-col shadow-md rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 
                                ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}
                            `}
                        >
                            <div className="flex-1">
                                <img
                                    src={blog.thumbnail}
                                    alt={blog.title}
                                    className="w-full h-40 object-cover rounded-lg mb-4"
                                />
                                <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
                                <p className="text-sm mb-4">{blog.excerpt}</p>
                                <p className="text-sm text-gray-500">
                                    <strong>Author:</strong> {blog.author}
                                </p>
                                <p className="text-sm text-gray-500 mb-8">
                                    <strong>Date:</strong> {blog.date}
                                </p>
                            </div>
                            <Link
                                to={`/blog/${blog.id}`}
                                className={`font-semibold py-3 px-5 rounded-lg shadow-lg transition duration-300 ${theme === "dark" ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white text-red-600 hover:bg-gray-100"
                                    }`}
                            >
                                Read More
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
