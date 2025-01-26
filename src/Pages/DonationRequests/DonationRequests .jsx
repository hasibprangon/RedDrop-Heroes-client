import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useRequest from "../../Hooks/useRequest";

const DonationRequests = () => {
    const navigate = useNavigate();
  const [request] = useRequest()

    // Mock data for donation requests
    const donationRequests = [
        {
            id: 1,
            recipientName: "John Doe",
            location: "Dhaka, Bangladesh",
            bloodGroup: "A+",
            date: "2025-01-20",
            time: "10:00 AM",
        },
        {
            id: 2,
            recipientName: "Jane Smith",
            location: "Chittagong, Bangladesh",
            bloodGroup: "O-",
            date: "2025-01-22",
            time: "2:30 PM",
        },
        {
            id: 3,
            recipientName: "Rahim Khan",
            location: "Sylhet, Bangladesh",
            bloodGroup: "B+",
            date: "2025-01-25",
            time: "1:00 PM",
        },
    ];

    // Mock login state
    const isLoggedIn = false; // Replace with actual authentication logic

    const handleViewDetails = (id) => {
        if (!isLoggedIn) {
            navigate("/login");
        } else {
            navigate(`/donation-details/${id}`);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Blood Donation Requests</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {request.map((request) => (
                        <div
                            key={request._id}
                            className="bg-white p-6 shadow-md rounded-lg flex flex-col justify-between"
                        >
                            <div>
                                <h2 className="text-lg font-semibold mb-2">
                                    Recipient: {request.recipientName}
                                </h2>
                                <p className="text-sm text-gray-700">
                                    <strong>Location:</strong> {request.fullAddress}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <strong>Blood Group:</strong> {request.bloodGroup}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <strong>Date:</strong> {request.donationDate}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <strong>Time:</strong> {request.donationTime}
                                </p>
                            </div>
                            <Link
                            to={`/donationRequestDetails/${request?._id}`}
                                className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DonationRequests;