import React from "react";
import { Link } from "react-router-dom";

const About = ({ theme }) => {
  return (
    <section className={`py-12 px-6 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-red-50 text-black'}`}>
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight drop-shadow-lg">
          About RedDrop-Heroes
        </h2>
        <p className={`mt-6 text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
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
            className={`bg-white rounded-lg shadow-lg border-l-4 ${theme === 'dark' ? 'border-red-500 bg-gray-700' : 'border-red-500 bg-white'} hover:shadow-xl transition-all duration-300`}
          >
            <h3 className={`text-xl border-b p-4 font-semibold ${theme === 'dark' ? 'text-red-500' : 'text-red-700'}`}>{item.title}</h3>
            <p className={`mt-3 p-4 ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-red-300 text-gray-600'}`}>{item.text}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-red-500' : 'text-red-600'}`}>Become a Hero. Donate Blood.</h3>
        <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
          Every drop counts. Join the **RedDrop-Heroes** community today, and make a life-changing impact by donating blood.
        </p>
        <Link to="/login">
          <button
            aria-label="Join as a donor"
            className={`font-semibold py-3 px-6 mt-5 rounded-lg shadow-lg transition duration-300 ${
              theme === "dark" ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white text-red-600 hover:bg-gray-100"
            }`}
          >
            Join as a Donor
          </button>
        </Link>
      </div>
    </section>
  );
};

export default About;
