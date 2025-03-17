import React, { useState } from "react";
import 'animate.css'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Blog = () => {

    const featureVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };
    const [features, setFeatures] = useState([]);

    const blogs = [
        {
            id: 1,
            title: "The Importance of Blood Donation",
            excerpt: "Learn why donating blood can save lives and how you can contribute.",
            author: "Hablu Khan",
            date: "2025-01-20",
            thumbnail: "https://i.ibb.co.com/mrbzRFLV/Blood-Donation-1.webp",
        },
        {
            id: 2,
            title: "Tips for First-Time Donors",
            excerpt: "Everything you need to know to make your first blood donation a success.",
            author: "Sona Mia",
            date: "2025-01-18",
            thumbnail: "https://i.ibb.co.com/9m4M0Bwk/download.jpg",
        },
        {
            id: 3,
            title: "How Blood Donation Benefits Your Health",
            excerpt: "Discover the surprising health benefits of donating blood.",
            author: "Rahim Khan",
            date: "2025-01-15",
            thumbnail: "https://i.ibb.co.com/Dfs3cwRF/Benefits-of-blood-donation.webp",
        },
    ];
    return (
        <div className="min-h-screen bg-red-50 py-10">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Blogs</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            variants={featureVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            className="bg-white p-6 shadow-md rounded-lg   hover:shadow-xl transition-all duration-300 hover:scale-105 ">
                            <img
                                src={blog.thumbnail}
                                alt={blog.title}
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                            <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
                            <p className="text-sm text-gray-700 mb-4">{blog.excerpt}</p>
                            <p className="text-sm text-gray-500 mb-2">
                                <strong>Author:</strong> {blog.author}
                            </p>
                            <p className="text-sm text-gray-500">
                                <strong>Date:</strong> {blog.date}
                            </p>
                            <Link
                                // to={`/blog/${blog.id}`}
                                className="mt-4 inline-block bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
                            >
                                Read More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;