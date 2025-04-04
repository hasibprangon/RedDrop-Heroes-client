import React from "react";
import { motion } from "framer-motion";

const Testimonials = ({ theme }) => {
    const testimonials = [
        {
            name: "John Doe",
            location: "Dhaka, Bangladesh",
            testimonial: "Donating blood is a simple yet powerful way to give back. It's amazing to think how something so small can help save so many lives.",
        },
        {
            name: "Jane Smith",
            location: "Chittagong, Bangladesh",
            testimonial: "I joined RedDrop-Heroes to do my part for those in need. It's a rewarding experience knowing my donation helps someone recover and thrive.",
        },
        {
            name: "Ali Hossain",
            location: "Sylhet, Bangladesh",
            testimonial: "I never realized how much of an impact a single donation can have. I feel proud to be part of this community of lifesavers!",
        },
    ];

    return (
        <section className={`py-16 px-6 transition-all duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-red-50 text-gray-800'}`}>
            <div className="max-w-4xl mx-auto text-center">
                <h2 className={`text-4xl font-bold border-b-4 inline-block pb-2 transition-all duration-300 
                    ${theme === 'dark' ? ' border-red-500' : 'border-red-500'}`}>
                    What Our Heroes Are Saying
                </h2>
                <p className="mt-6 text-lg">
                    Hear from our community of blood donors who have made a difference in the lives of others.
                </p>
            </div>

            <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className={`rounded-lg shadow-lg p-6 flex flex-col justify-between items-center border-l-4 transition-all duration-300 
                            ${theme === 'dark' ? 'bg-gray-800 border-red-500 text-white' : 'bg-white border-red-500 text-gray-800'} 
                            hover:shadow-2xl hover:scale-105`}
                    >
                        <p className="text-lg italic">"{item.testimonial}"</p>
                        <div className="mt-4 text-center">
                            <h3 className="font-semibold text-red-500">{item.name}</h3>
                            <p className="text-sm">{item.location}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
