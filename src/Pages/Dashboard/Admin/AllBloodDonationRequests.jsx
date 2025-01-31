import React, { useState } from 'react';
import useRequest from '../../../Hooks/useRequest';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import useVolunteer from '../../../Hooks/useVolunteer';

const AllBloodDonationRequests = () => {
    const [request] = useRequest();
    const [status, setStatus] = useState('');

    const [isVolunteer, isVolunteerLoading] = useVolunteer();
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/request/${id}`)
                    .then(res => {
                        if (res?.data?.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });

    }

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

    // Apply filtering based on the selected status
    const filteredRequests = status
        ? request.filter(req => req.donationStatus.toLowerCase() === status.toLowerCase())
        : request;

    return (
        <div className="overflow-x-auto">
            <h2 className='text-2xl font-bold mb-5 text-center'>All Blood Donation Requests</h2>
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
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Recipient Name</th>
                        <th>Donation Date & Time</th>
                        <th>Blood Group</th>
                        <th>Donation Status</th>
                        <th>Donor Information</th>
                        {!isVolunteer && <th>Action</th>}
                        <th>View Details</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredRequests.map((request, idx) => (
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
                            <td>
                                {request?.donationStatus === 'Inprogress' ? (
                                    <details className="dropdown">
                                        <summary className="btn m-1">Manage Status</summary>
                                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                            <li onClick={() => handleDone(request?._id)}><a>Done</a></li>
                                            <li onClick={() => handleCancel(request?._id)}><a>Cancel</a></li>
                                        </ul>
                                    </details>
                                ) : (
                                    <span>{request?.donationStatus}</span>
                                )}
                            </td>
                            <td>
                                <span className='text-sm font-bold'> {request?.donorName}</span>
                                <br />
                                <span className="badge badge-ghost badge-sm">{request?.donorEmail}</span>
                            </td>
                            {!isVolunteer && <td className='flex'>
                                <button className='btn btn-sm text-base bg-green-500 text-white'>
                                    <Link to={`updateDonation/${request?._id}`}><FaEdit /></Link>
                                </button>
                                <button
                                    onClick={() => handleDelete(request?._id)}
                                    className='btn btn-sm text-base bg-red-500 text-white'><MdDeleteForever />
                                </button>
                            </td>}
                            <td>
                                <Link className='btn btn-sm btn-outline' to={`/donationRequestDetails/${request?._id}`}>View Details</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllBloodDonationRequests;
