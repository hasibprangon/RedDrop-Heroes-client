import React from "react";

const Testimonials = () => {
    return (
        <section className="py-12 px-6 mt-14 bg-red-50">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-red-700 border-b-4 border-red-500 inline-block pb-2">
                    What Our Heroes Are Saying
                </h2>
                <p className="mt-6 text-lg text-gray-700">
                    Hear from our community of blood donors who have made a difference in the lives of others.
                </p>
            </div>

            <div className="mt-12 max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                {[
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
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between items-center border-l-4 border-red-500 hover:shadow-xl transition-all duration-300"
                    >
                        <p className="text-lg italic text-gray-600">"{item.testimonial}"</p>
                        <div className="mt-4 text-center">
                            <h3 className="font-semibold text-red-700">{item.name}</h3>
                            <p className="text-sm text-gray-500">{item.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
