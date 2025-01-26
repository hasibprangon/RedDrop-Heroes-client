import React, { useEffect, useState } from 'react';
import useProfile from '../../Hooks/useProfile';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const Profile = () => {
    const { profile, isLoading } = useProfile();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [isEditable, setIsEditable] = useState(false);
    const [upazilas, setUpazilas] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        district: '',
        bloodGrp: '',
        upazila: '',
    });

    useEffect(() => {
        if (profile) {
            setFormData({
                name: profile.name || '',
                district: profile.district || '',
                bloodGrp: profile.bloodGrp || '',
                upazila: profile.upazila || '',
            });
        }
    }, [profile]);

    useEffect(() => {
        fetch('/Districts.json')
            .then((res) => res.json())
            .then((data) => setDistricts(data));
    }, []);

    useEffect(() => {
        fetch('/Upazilas.json')
            .then((res) => res.json())
            .then((data) => setUpazilas(data));
    }, []);

    if (isLoading) {
        return <span className="loading loading-spinner loading-lg"></span>;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleEditToggle = () => {
        setIsEditable(!isEditable);
    };

    const updateProfile = async (e) => {
        e.preventDefault(); 
        try {
            const res = await axiosSecure.put(`/user/update/${user?.email}`, formData);
            if (res?.data?.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Profile Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool',
                });
            }
            setIsEditable(false); 
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Profile</h1>
            <div className="flex gap-6 items-center">
                <img
                    src={profile?.photoUrl}
                    alt="Avatar"
                    className="w-24 h-24 rounded-full border-2 border-gray-300"
                />
                <button
                    onClick={isEditable ? updateProfile : handleEditToggle}
                    className={`px-4 py-2 rounded text-white ${isEditable
                        ? 'bg-green-500 hover:bg-green-600'
                        : 'bg-blue-500 hover:bg-blue-600'
                        }`}
                >
                    {isEditable ? 'Save' : 'Edit'}
                </button>
            </div>
            <form
                onSubmit={updateProfile}
                className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                <div>
                    <label className="block font-semibold mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        className={`w-full px-4 py-2 rounded border ${isEditable
                            ? 'border-gray-400'
                            : 'bg-gray-200 cursor-not-allowed'
                            }`}
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={profile?.email}
                        disabled
                        className="w-full px-4 py-2 rounded border bg-gray-200 cursor-not-allowed"
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-1">District</label>
                    <select
                        name="district"
                        value={formData.district}
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        className={`select select-bordered w-full ${!isEditable ? 'bg-gray-200 text-black cursor-not-allowed' : 'text-black'}`}
                    >
                        <option disabled value="">
                            Select your District
                        </option>
                        {districts?.map((district) => (
                            <option key={district.id} value={district.name}>
                                {district.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block font-semibold mb-1">Upazila</label>
                    <select
                        name="upazila"
                        value={formData.upazila}
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        className={`select select-bordered w-full ${!isEditable ? 'bg-gray-200 cursor-not-allowed' : ''}`}
                    >
                        <option disabled value="">
                            Select your Upazila
                        </option>
                        {upazilas?.map((upazila) => (
                            <option key={upazila.id} value={upazila.name}>
                                {upazila.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block font-semibold mb-1">Blood Group</label>
                    <select
                        name="bloodGrp"
                        value={formData.bloodGrp}
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        className={`select select-bordered w-full ${!isEditable ? 'bg-gray-200 cursor-not-allowed' : ''}`}
                    >
                        <option disabled value="">
                            Select your blood group
                        </option>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                        <option>O+</option>
                        <option>O-</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default Profile;
