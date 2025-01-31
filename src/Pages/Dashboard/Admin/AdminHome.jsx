import React from 'react';
import { FaUserFriends, FaHandHoldingHeart, FaTint } from 'react-icons/fa';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useDonorsData from '../../../Hooks/useDonorsData';
import useRequest from '../../../Hooks/useRequest';
const AdminHome = () => {
 const [donors,  isLoading, refetch] = useDonorsData();
 const [request] = useRequest();
    const totalUsers = 500;
    const totalFunding = 12500;
    const totalBloodRequests = 300;
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Total Users Card */}
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
                <FaUserFriends className="text-red-500 text-5xl mb-3" />
                <h2 className="text-2xl font-bold">{donors?.length}</h2>
                <p className="text-gray-500">Total Donors</p>
            </div>

            {/* Total Funding Card */}
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
                <FaHandHoldingHeart className="text-red-500 text-5xl mb-3" />
                <h2 className="text-2xl font-bold">${totalFunding}</h2>
                <p className="text-gray-500">Total Funding</p>
            </div>

            {/* Total Blood Requests Card */}
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
                <FaTint className="text-red-500 text-5xl mb-3" />
                <h2 className="text-2xl font-bold">{request?.length}</h2>
                <p className="text-gray-500">Total Blood Requests</p>
            </div>
        </div>
    );
};

export default AdminHome;