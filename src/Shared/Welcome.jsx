import React from 'react';
import useUserdata from '../Hooks/useUserdata';
import Loading from '../Pages/Loading/Loading';
import { Link } from 'react-router-dom';

const Welcome = () => {
    const [userInfo, isLoading] = useUserdata();

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="h-80 flex items-center justify-center bg-gradient-to-br from-red-600 via-red-500 to-red-700 text-white relative overflow-hidden px-4">
            {/* Floating Blurred Circles for Depth */}
            <div className="absolute top-8 left-8 w-24 h-24 bg-red-400 opacity-30 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-8 right-8 w-28 h-28 bg-white opacity-20 rounded-full blur-2xl animate-pulse"></div>

            {/* Card Container */}
            <div className="relative w-full max-w-md p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 text-center transform hover:scale-105 transition-all duration-300">
                {/* Floating Glow Effect */}
                <div className="absolute inset-0 bg-white/5 rounded-2xl shadow-lg blur-lg opacity-30"></div>

                {/* Profile Image */}
                <img
                    src={userInfo?.photoUrl || "https://via.placeholder.com/150"}
                    alt="Profile"
                    className="w-24 h-24 rounded-full border-4 border-white shadow-lg mx-auto mb-3 transition-transform transform hover:scale-110"
                />

                {/* Welcome Text */}
                <h1 className="text-3xl font-bold mb-2 text-white drop-shadow-lg">{userInfo?.name || "Lifesaver"}</h1>
                <p className="text-base text-white/90 drop-shadow-sm">
                    Your generosity <span className="text-yellow-300 font-semibold">saves lives</span> ❤️.  
                    Every drop counts!
                </p>

                {/* CTA Button */}
                <Link to='/donationRequests' className="btn mt-5 px-5 py-2 text-lg font-semibold rounded-full bg-red-500 hover:bg-red-400 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-300">
                    Donate Blood Now
                </Link>
            </div>
        </div>
    );
};

export default Welcome;
