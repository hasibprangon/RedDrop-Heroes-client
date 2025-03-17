import React from 'react';
import { FaUserFriends, FaHandHoldingHeart, FaTint } from 'react-icons/fa';
import useDonorsData from '../../../Hooks/useDonorsData';
import useRequest from '../../../Hooks/useRequest';

const AdminHome = () => {
    const [donors] = useDonorsData();
    const [request] = useRequest();
    const totalUsers = 500;
    const totalFunding = 12500;
    const totalBloodRequests = 300;

    return (
        <div className="mt-10 bg-gradient-to-br from-red-500 via-red-400 to-red-300 py-10 px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Total Users Card */}
                <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out flex flex-col items-center justify-center text-center">
                    <FaUserFriends className="text-red-600 text-6xl mb-4 transform hover:scale-110 transition-all duration-200" />
                    <h2 className="text-3xl font-semibold text-gray-800 mb-2">{donors?.length || totalUsers}</h2>
                    <p className="text-gray-500">Total Donors</p>
                </div>

                {/* Total Funding Card */}
                <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out flex flex-col items-center justify-center text-center">
                    <FaHandHoldingHeart className="text-red-600 text-6xl mb-4 transform hover:scale-110 transition-all duration-200" />
                    <h2 className="text-3xl font-semibold text-gray-800 mb-2">${totalFunding}</h2>
                    <p className="text-gray-500">Total Funding</p>
                </div>

                {/* Total Blood Requests Card */}
                <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out flex flex-col items-center justify-center text-center">
                    <FaTint className="text-red-600 text-6xl mb-4 transform hover:scale-110 transition-all duration-200" />
                    <h2 className="text-3xl font-semibold text-gray-800 mb-2">{request?.length || totalBloodRequests}</h2>
                    <p className="text-gray-500">Total Blood Requests</p>
                </div>

            </div>
        </div>
    );
};

export default AdminHome;
