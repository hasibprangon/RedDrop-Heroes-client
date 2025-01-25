import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Search = () => {
    const [upazilas, setUpazilas] = useState(null);
    const [districts, setDistricts] = useState(null);

    useEffect(() => {
        fetch('Districts.json')
            .then(res => res.json())
            .then(data => setDistricts(data))
    }, [])

    useEffect(() => {
        fetch('Upazilas.json')
            .then(res => res.json())
            .then(data => setUpazilas(data))
    }, [])

    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target

        const bloodGroup = form.bloodGroup.value;
        const district = form.district.value;
        const upazila = form.upazila.value;

        
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <Helmet>
                <title>Search || RedDrop-Heroes</title>
            </Helmet>
            <div className="bg-red-100 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-red-600 mb-4">Search for Donors</h2>
                <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Blood Group */}
                    <div>
                        <label htmlFor="bloodGroup" className="block text-gray-700 font-medium">
                            Blood Group
                        </label>
                        <select
                            name="bloodGroup"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                        >
                            <option value="">Select Blood Group</option>
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

                    {/* District */}
                    <div>
                        <label htmlFor="district" className="block text-gray-700 font-medium">
                            District
                        </label>
                        <select
                            name="district"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                        >
                            <option value="">Select District</option>
                            {
                                districts?.map(district => <option key={district.id}>
                                    {district.name}
                                </option>)
                            }
                        </select>
                    </div>

                    {/* Upazila */}
                    <div>
                        <label htmlFor="upazila" className="block text-gray-700 font-medium">
                            Upazila
                        </label>
                        <select
                            name="upazila"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                        >
                            <option value="">Select Upazila</option>
                            {
                                upazilas?.map(district => <option key={district.id}>
                                    {district.name}
                                </option>)
                            }
                        </select>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition"
                        >
                            Search Donors
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Search;
