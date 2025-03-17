import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-12 px-6 mt-14 bg-red-50">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-700 border-b-4 border-red-500 inline-block pb-2">
          About RedDrop-Heroes
        </h2>
        <p className="mt-6 text-lg text-gray-700">
          **RedDrop-Heroes** is a platform dedicated to connecting blood donors with those in need. By joining our community, you can become a life-saving hero and help patients battling illnesses, injuries, and emergencies requiring blood transfusions.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="mt-12 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {[ 
          {
            title: "Save Lives Anytime",
            text: "Your donation can save the lives of patients in hospitals, helping them recover from critical surgeries and illnesses that require immediate blood transfusions.",
          },
          {
            title: "A Lifeline for Hospitals",
            text: "Blood banks and hospitals rely on donations to maintain a steady supply. Your action ensures that no patient will be left without the help they need during emergencies.",
          },
          {
            title: "Health Benefits for You",
            text: "Donating blood regularly can reduce the risk of certain heart diseases, balance your iron levels, and stimulate the production of new blood cells, helping to improve your overall health.",
          },
          {
            title: "Safe & Easy Donation Process",
            text: "The donation process is quick and safe, supervised by professionals ensuring that both you and the recipient are protected. It’s a simple act that makes a big difference.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl border-b p-4 font-semibold text-red-700">{item.title}</h3>
            <p className="mt-3 p-4 bg-red-300 text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-red-600">Become a Hero. Donate Blood.</h3>
        <p className="text-lg text-gray-700 mt-4">
          Every drop counts. Join the **RedDrop-Heroes** community today, and make a life-changing impact by donating blood.
        </p>
        <Link to="/login">
          <button
            aria-label="Join as a donor"
            className="px-2 sm:px-4 py-2 sm:py-2 mt-4 bg-red-500 hover:bg-red-700 border text-white text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Join as a Donor
          </button>
        </Link>
      </div>
    </section>
  );
};

export default About;
