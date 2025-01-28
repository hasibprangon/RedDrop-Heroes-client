import React from 'react';
import useUserdata from '../Hooks/useUserdata';
import Loading from '../Pages/Loading/Loading';

const Welcome = () => {
    const [userInfo, isLoading, refetch] = useUserdata();

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white">
            <div className="text-center p-6 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg">
                <h1 className="text-4xl font-bold mb-4">Welcome, {userInfo?.name || "Donor"}!</h1>
                <p className="text-lg mb-6">
                    Thank you for being a lifesaver and contributing to our community. Your donations help save lives!
                </p>
                <img
                    src={userInfo?.photoUrl}
                    alt="Donation"
                    className="w-36 h-36 mx-auto mb-6 animate-pulse"
                />
            </div>
        </div>
    );
};

export default Welcome;