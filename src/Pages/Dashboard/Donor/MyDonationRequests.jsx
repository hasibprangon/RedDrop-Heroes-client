import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useDonationRequests from '../../../Hooks/useDonationRequests';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

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
                    <option value="Done">Done</option>
                    <option value="Cancel">Canceled</option>
                </select>
            </div>

            {isLoading ? (
                <div className="text-center">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Recipient Name</th>
                                <th>Donation Date & Time</th>
                                <th>Blood Group</th>
                                <th>Donation Status</th>
                                <th>Donor requestrmation</th>
                                <th>Action</th>
                                <th>View Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map((request, idx) => (
                                <tr key={request._id}>
                                    <td>{idx + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <div className="font-bold">{request?.recipientName}</div>
                                                <div className="text-sm opacity-50">{request?.recipientUpazila}, {request?.recipientDistrict}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {request?.donationDate}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{request?.donationTime}</span>
                                    </td>
                                    <td>{request?.bloodGroup}</td>
                                    <th>
                                        {request?.donationStatus === 'Inprogress' ?

                                            <details className="dropdown">
                                                <summary className="btn m-1">{request?.donationStatus === "Inprogress" ? "Manage Status" : ""}</summary>
                                                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                                    <li onClick={() => handleDone(request?._id)}><a>Done</a></li>
                                                    <li onClick={() => handleCancel(request?._id)}><a>Cancel</a></li>
                                                </ul>
                                            </details>
                                            :

                                            <span>{request?.donationStatus}</span>}
                                    </th>
                                    <td>
                                        <span className='text-sm font-bold'> {request?.donorName}</span>
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{request?.donorEmail}</span>
                                    </td>
                                    <td className='flex'>
                                        <button className='btn btn-sm text-base bg-green-500 text-white'>
                                            <Link to={`updateDonation/${request?._id}`}><FaEdit></FaEdit></Link>
                                        </button>
                                        <button
                                            onClick={() => handleDelete(request?._id)}
                                            className='btn btn-sm text-base bg-red-500 text-white'><MdDeleteForever></MdDeleteForever></button>
                                    </td>
                                    <td>
                                        <Link className='btn btn-sm btn-outline' to={`/donationRequestDetails/${request?._id}`}>View Details</Link>
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
