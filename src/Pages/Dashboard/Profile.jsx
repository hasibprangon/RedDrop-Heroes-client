import React, { useEffect, useState } from 'react';
import useProfile from '../../Hooks/useProfile';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const Profile = () => {
    const { profile, isLoading, refetch } = useProfile();
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
            refetch();
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
                // Refetch the profile after successful update
                refetch(); // This ensures the profile data is instantly updated
            }
            setIsEditable(false); 
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <div className="bg-gradient-to-r from-red-400 to-red-600 min-h-screen p-10 flex items-center justify-center">
            <div className="max-w-4xl w-full bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center">
                    <img
                        src={profile?.photoUrl}
                        alt="Avatar"
                        className="w-32 h-32 rounded-full border-4 border-pink-500 mx-auto mb-6 shadow-xl"
                    />
                    <h1 className="text-3xl font-semibold text-gray-800">{profile?.name}</h1>
                    <p className="text-gray-600 text-lg mb-6">{profile?.email}</p>
                    <button
                        onClick={isEditable ? updateProfile : handleEditToggle}
                        className={`w-full border-2 border-white text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-white hover:text-red-600 hover:scale-105 transition duration-300 ${isEditable ? 'bg-red-500 hover:bg-red-600' : 'bg-red-500 hover:bg-red-600'}`}
                    >
                        {isEditable ? 'Save' : 'Edit Profile'}
                    </button>
                </div>

                <form onSubmit={updateProfile} className="mt-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                disabled={!isEditable}
                                className={`w-full px-4 py-3 rounded-lg border-2 ${isEditable ? 'border-pink-300' : 'bg-gray-200 cursor-not-allowed'}`}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={profile?.email}
                                disabled
                                className="w-full px-4 py-3 rounded-lg border-2 bg-gray-200 cursor-not-allowed"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">District</label>
                            <select
                                name="district"
                                value={formData.district}
                                onChange={handleInputChange}
                                disabled={!isEditable}
                                className={`w-full px-4 py-3 rounded-lg border-2 ${isEditable ? 'border-pink-300' : 'bg-gray-200 cursor-not-allowed'}`}
                            >
                                <option disabled value="">
                                    Select District
                                </option>
                                {districts?.map((district) => (
                                    <option key={district.id} value={district.name}>
                                        {district.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Upazila</label>
                            <select
                                name="upazila"
                                value={formData.upazila}
                                onChange={handleInputChange}
                                disabled={!isEditable}
                                className={`w-full px-4 py-3 rounded-lg border-2 ${isEditable ? 'border-pink-300' : 'bg-gray-200 cursor-not-allowed'}`}
                            >
                                <option disabled value="">
                                    Select Upazila
                                </option>
                                {upazilas?.map((upazila) => (
                                    <option key={upazila.id} value={upazila.name}>
                                        {upazila.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Blood Group</label>
                        <select
                            name="bloodGrp"
                            value={formData.bloodGrp}
                            onChange={handleInputChange}
                            disabled={!isEditable}
                            className={`w-full px-4 py-3 rounded-lg border-2 ${isEditable ? 'border-pink-300' : 'bg-gray-200 cursor-not-allowed'}`}
                        >
                            <option disabled value="">
                                Select Blood Group
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
        </div>
    );
};

export default Profile;
