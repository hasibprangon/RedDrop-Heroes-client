import React, { useState } from "react";
import useProfile from "../../Hooks/useProfile";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import useReqDetails from "../../Hooks/useReqDetails";
import Swal from "sweetalert2";

const requestDetails = () => {
    const params = useParams()
    const { details, refetch } = useReqDetails()
    const { profile } = useProfile();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const axiosPublic = useAxiosPublic();

    const handleDonate = () => {
        setIsModalOpen(true);
    };
    const donorInfo = {
        donorEmail: profile?.email,
        donorName: profile?.name,
        donationStatus: 'Inprogress'
    }

    const handleConfirmDonation = () => {
        axiosPublic.patch(`/request/${params?.id}`, donorInfo)
        .then(res => {
            if(res?.data?.modifiedCount > 0) {
                refetch()
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Your Donate request is in progress",
                    showConfirmButton: false,
                    timer: 1500
                  }); 
            }
        })
        setIsModalOpen(false)

    };

    return (
        <div className="max-w-3xl mx-auto my-8 p-6 bg-white shadow rounded-xl">
            <h2 className="text-2xl font-bold text-center text-red-500 mb-6">
                Donation Request Details
            </h2>
            <div className="space-y-4">
                <p>
                    <span className="font-medium">Requester Name: {details?.requesterName}</span>
                </p>
                <p>
                    <span className="font-medium">Requester Email: {details.requesterEmail}</span>
                </p>
                <p>
                    <span className="font-medium">Recipient Name: {details.recipientName}</span>
                </p>
                <p>
                    <span className="font-medium">Recipient District: {details.recipientDistrict}</span>
                </p>
                <p>
                    <span className="font-medium">Recipient Upazila: {details.recipientUpazila}</span>
                </p>
                <p>
                    <span className="font-medium">Hospital Name: {details.hospitalName}</span>
                </p>
                <p>
                    <span className="font-medium">Full Address: {details.fullAddress}</span>
                </p>
                <p>
                    <span className="font-medium">Blood Group: {details.bloodGroup}</span>
                </p>
                <p>
                    <span className="font-medium">Donation Date: {details.donationDate}</span>
                </p>
                <p>
                    <span className="font-medium">Donation Time: {details.donationTime}</span>
                </p>
                <p>
                    <span className="font-medium">Request Message: {details.requestMessage}</span>
                </p>
                <p>
                    <span className="font-medium">Status: {details.donationStatus}</span>
                </p>
            </div>

            {/* Donate Button */}
            <div className="text-center mt-6">
                <button
                    onClick={handleDonate}
                    className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
                >
                    Donate
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
                        <h3 className="text-xl font-bold text-red-500 text-center mb-4">
                            Confirm Donation
                        </h3>

                        {/* Modal Form */}
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleConfirmDonation();
                            }}
                            className="space-y-4"
                        >
                            {/* Donor Name */}
                            <div>
                                <label className="block font-medium text-gray-700">Donor Name</label>
                                <input
                                    type="text"
                                    value={profile.name}
                                    readOnly
                                    className="w-full mt-1 p-2 border rounded-md bg-gray-100"
                                />
                            </div>

                            {/* Donor Email */}
                            <div>
                                <label className="block font-medium text-gray-700">Donor Email</label>
                                <input
                                    type="email"
                                    value={profile.email}
                                    readOnly
                                    className="w-full mt-1 p-2 border rounded-md bg-gray-100"
                                />
                            </div>

                            {/* Confirm Button */}
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
                                >
                                    Confirm Donation
                                </button>
                            </div>
                        </form>

                        {/* Close Modal */}
                        {/* <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                        >
                            ✖
                        </button> */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default requestDetails;
