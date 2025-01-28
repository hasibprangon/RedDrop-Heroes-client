import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useDonationRequests from '../../../Hooks/useDonationRequests';

const MyDonationRequests = () => {
    const { user } = useAuth(); 
    const [page, setPage] = useState(1); 
    const [status, setStatus] = useState(''); 
    const limit = 5; 

    
    const { data: requests, total, isLoading } = useDonationRequests({
        email: user?.email,
        page,
        limit,
        status,
    });

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
        setPage(1); 
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">My Donation Requests</h2>

            <div className="form-control mb-4 w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Filter by Status:</span>
                </label>
                <select
                    className="select select-bordered"
                    value={status}
                    onChange={handleStatusChange}
                >
                    <option value="">All</option>
                    <option value="pending">Pending</option>
                    <option value="Inprogress">In Progress</option>
                    <option value="done">Done</option>
                    <option value="canceled">Canceled</option>
                </select>
            </div>

            {isLoading ? (
                <div className="text-center">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>Recipient Name</th>
                                <th>Blood Group</th>
                                <th>District</th>
                                <th>Upazila</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map((request) => (
                                <tr key={request._id}>
                                    <td>{request.recipientName}</td>
                                    <td>{request.bloodGroup}</td>
                                    <td>{request.recipientDistrict}</td>
                                    <td>{request.recipientUpazila}</td>
                                    <td>{request.donationDate}</td>
                                    <td>{request.donationTime}</td>
                                    <td>
                                        <span
                                            className={`badge ${
                                                request.donationStatus === 'pending'
                                                    ? 'badge-warning'
                                                    : request.donationStatus === 'inprogress'
                                                    ? 'badge-info'
                                                    : request.donationStatus === 'done'
                                                    ? 'badge-success'
                                                    : 'badge-error'
                                            }`}
                                        >
                                            {request.donationStatus}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <div className="flex justify-center mt-4">
                {[...Array(Math.ceil(total / limit)).keys()].map((_, index) => (
                    <button
                        key={index}
                        className={`btn ${page === index + 1 ? 'btn-active' : ''} mx-1`}
                        onClick={() => setPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MyDonationRequests;
