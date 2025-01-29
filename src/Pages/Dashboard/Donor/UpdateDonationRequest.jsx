import React, { useEffect, useState } from 'react';
import useReqDetails from '../../../Hooks/useReqDetails';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const UpdateDonationRequest = () => {
    const { details, refetch } = useReqDetails()
    const [upazilas, setUpazilas] = useState(null);
    const [districts, setDistricts] = useState(null);
    const axiosSecure = useAxiosSecure();

    const [showDistrict, setShowDistrict] = useState();
    const [showUpazila, setShowUpazila] = useState();
    const [blood, setBlood ] = useState();

    useEffect(() =>{
        if(details?.recipientUpazila) {
            setShowUpazila(details?.recipientUpazila)
        }
    },[details])

    useEffect(() =>{
        if(details?.recipientDistrict) {
            setShowDistrict(details?.recipientDistrict)
        }
    },[details])

    useEffect(() =>{
        if(details?.bloodGroup) {
            setBlood(details?.bloodGroup)
        }
    },[details])

    useEffect(() => {
        fetch('/Districts.json')
            .then(res => res.json())
            .then(data => setDistricts(data))
    }, [])

    useEffect(() => {
        fetch('/Upazilas.json')
            .then(res => res.json())
            .then(data => setUpazilas(data))
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const recipientName = form?.recipientName.value
        const recipientDistrict = form?.recipientDistrict.value
        const recipientUpazila = form?.recipientUpazila.value
        const hospitalName = form?.hospitalName.value
        const fullAddress = form?.fullAddress.value
        const bloodGroup = form?.bloodGroup.value
        const donationDate = form?.donationDate.value
        const donationTime = form?.donationTime.value
        const requestMessage = form?.requestMessage.value

        const info = {
            recipientName,
            recipientDistrict,
            recipientUpazila,
            hospitalName,
            fullAddress,
            bloodGroup,
            donationDate,
            donationTime,
            requestMessage
        }

        axiosSecure.put(`/request/update/${details?._id}`, info)
        .then(res => {
            refetch()
            if(res?.data?.modifiedCount > 0) {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Your request has been updated",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

    }
    return (
        <div className="max-w-3xl mx-auto my-8 p-6 bg-white shadow rounded-xl">
            <h2 className="text-2xl font-bold text-center text-red-500 mb-6">
                Update Donation Request
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Requester Name */}
                <div>
                    <label className="block font-medium text-gray-700">Requester Name</label>
                    <input
                        type="text"
                        defaultValue={details?.requesterName}
                        readOnly
                        className="w-full mt-1 p-2 border rounded-md bg-gray-100"
                    />
                </div>

                {/* Requester Email */}
                <div>
                    <label className="block font-medium text-gray-700">Requester Email</label>
                    <input
                        type="email"
                        defaultValue={details?.requesterEmail}
                        readOnly
                        className="w-full mt-1 p-2 border rounded-md bg-gray-100"
                    />
                </div>

                {/* Recipient Name */}
                <div>
                    <label className="block font-medium text-gray-700">Recipient Name</label>
                    <input
                        type="text"
                        name="recipientName"
                        defaultValue={details?.recipientName}
                        required
                        className="w-full mt-1 p-2 border rounded-md"
                        placeholder="Enter recipient's name"
                    />
                </div>

                {/* Recipient District */}
                <div>
                    <label className="block font-medium text-gray-700">Recipient District</label>
                    <select
                        name='recipientDistrict' value={showDistrict || ''} 
                        onChange={(e) => setShowDistrict(e.target.value)}
                        className="select select-bordered w-full " required>
                        <option disabled selected>Select your District</option>
                        {
                            districts?.map(district => <option key={district.id}>
                                {district.name}
                            </option>)
                        }
                    </select>
                </div>

                {/* Recipient Upazila */}
                <div>
                    <label className="block font-medium text-gray-700">Recipient Upazila</label>
                    <select
                        name="recipientUpazila"
                        value={showUpazila || ''}
                        onChange={(e) => setShowUpazila(e.target.value)}
                        className="select select-bordered w-full " required>
                        <option disabled selected>Select your Upazila</option>
                        {
                            upazilas?.map(district => <option key={district.id}>
                                {district.name}
                            </option>)
                        }
                    </select>
                </div>

                {/* Hospital Name */}
                <div>
                    <label className="block font-medium text-gray-700">Hospital Name</label>
                    <input
                        type="text"
                        name="hospitalName"
                        defaultValue={details?.hospitalName}
                        required
                        className="w-full mt-1 p-2 border rounded-md"
                        placeholder="Enter hospital name"
                    />
                </div>

                {/* Full Address */}
                <div>
                    <label className="block font-medium text-gray-700">Full Address</label>
                    <input
                        type="text"
                        name="fullAddress"
                        defaultValue={details?.fullAddress}
                        required
                        className="w-full mt-1 p-2 border rounded-md"
                        placeholder="Enter full address"
                    />
                </div>

                {/* Blood Group */}
                <div>
                    <label className="block font-medium text-gray-700">Blood Group</label>
                    <select
                        name="bloodGroup"
                        value={blood}
                        onChange={(e) => setBlood(e.target.value)}
                        required
                        className="w-full mt-1 p-2 border rounded-md"
                    >
                        <option value="" disabled>
                            Select Blood Group
                        </option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>

                {/* Donation Date */}
                <div>
                    <label className="block font-medium text-gray-700">Donation Date</label>
                    <input
                        type="date"
                        name="donationDate"
                        defaultValue={details?.donationDate}
                        required
                        className="w-full mt-1 p-2 border rounded-md"
                    />
                </div>

                {/* Donation Time */}
                <div>
                    <label className="block font-medium text-gray-700">Donation Time</label>
                    <input
                        type="time"
                        name="donationTime"
                        defaultValue={details?.donationTime}
                        required
                        className="w-full mt-1 p-2 border rounded-md"
                    />
                </div>

                {/* Request Message */}
                <div>
                    <label className="block font-medium text-gray-700">Request Message</label>
                    <textarea
                        name="requestMessage"
                        defaultValue={details?.requestMessage}
                        required
                        className="w-full mt-1 p-2 border rounded-md"
                        placeholder="Why do you need blood?"
                    ></textarea>
                </div>

                {/* Request Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
                    >
                        Update Request
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateDonationRequest;