import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';

const DonationTable = ({ data, refetch }) => {

    const axiosSecure = useAxiosSecure();

    const doneStatus = {
        donationStatus: 'Done'
    }

    const handleDone = (id) => {
        Swal.fire({
            title: "Did you get the blood?",
            text: "Confirm if you get",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I have Got "
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/request/${id}`, doneStatus)
                    .then(res => {
                        refetch()
                        if (res?.data?.modifiedCount > 0) {
                            Swal.fire({
                                title: "We are glad to help you",
                                text: "Thanks For Choosing Us",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    const cancelStatus = {
        donationStatus: 'Cancel'
    }

    const handleCancel = (id) => {
        Swal.fire({
            title: "Did you get the blood somewhere else?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I have Got "
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/request/${id}`, cancelStatus)
                    .then(res => {
                        refetch()
                        if (res?.data?.modifiedCount > 0) {
                            Swal.fire({
                                title: "We are glad to help you",
                                text: "Thanks For Choosing Us",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Recipient Name</th>
                            <th>Donation Date & Time</th>
                            <th>Blood Group</th>
                            <th>Donation Status</th>
                            <th>Donor Information</th>
                            <th>Action</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((info, idx) =>
                            <tr>
                                <th>
                                    {idx + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        {/* <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div> */}
                                        <div>
                                            <div className="font-bold">{info?.recipientName}</div>
                                            <div className="text-sm opacity-50">{info?.recipientUpazila}, {info?.recipientDistrict}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {info?.donationDate}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{info?.donationTime}</span>
                                </td>
                                <td>{info?.bloodGroup}</td>
                                <th>
                                    {info?.donationStatus === 'Inprogress' ?

                                        <details className="dropdown">
                                            <summary className="btn m-1">{info?.donationStatus === "Inprogress" ? "Manage Status" : ""}</summary>
                                            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                                <li onClick={() => handleDone(info?._id)}><a>Done</a></li>
                                                <li onClick={() => handleCancel(info?._id)}><a>Cancel</a></li>
                                            </ul>
                                        </details>
                                        :

                                        <span>{info?.donationStatus}</span>}
                                </th>
                                <td>
                                    <span className='text-sm font-bold'> {info?.donorName}</span>
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{info?.donorEmail}</span>
                                </td>
                                <td className='flex'>
                                    <button className='btn btn-sm text-base bg-green-500 text-white'><FaEdit></FaEdit></button>
                                    <button className='btn btn-sm text-base bg-red-500 text-white'><MdDeleteForever></MdDeleteForever></button>
                                </td>
                                <td>
                                    <Link className='btn btn-sm btn-outline' to={`/donationRequestDetails/${info?._id}`}>View Details</Link>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DonationTable;