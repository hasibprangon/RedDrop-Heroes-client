import React, { useEffect, useState } from "react";// Import the custom hook
import useDonorsData from "../../Hooks/useDonorsData";

const Search = () => {
  const [donors] = useDonorsData(); // Fetch all donors
  const [searchResults, setSearchResults] = useState(null); // Stores filtered results
  const [upazilas, setUpazilas] = useState(null);
  const [districts, setDistricts] = useState(null);

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

  const handleSearch = (e) => {
    e.preventDefault();

    // Get form values
    const bloodGroup = e.target.bloodGroup.value;
    const district = e.target.district.value;
    const upazila = e.target.upazila.value;

    // Filter donors based on search criteria
    const results = donors?.filter(
      (donor) =>
        (!bloodGroup || donor.bloodGrp === bloodGroup) &&
        (!district || donor.district === district) &&
        (!upazila || donor.upazila === upazila)
    );

    setSearchResults(results);
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      {/* Search Form */}
      <div className="bg-red-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Search for Donors</h2>
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Blood Group */}
          <div>
            <label htmlFor="bloodGroup" className="block text-gray-700 font-medium">
              Blood Group
            </label>
            <select
              id="bloodGroup"
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
          <div className="form-control">
            <label className="block font-bold">Districts</label>
            <select
              name='district' className="select select-bordered w-full " required>
              <option disabled selected>Select your District</option>
              {
                districts?.map(district => <option key={district.id}>
                  {district.name}
                </option>)
              }
            </select>
          </div>

          {/* Upazila */}
          <div className="form-control">
            <label className="block font-bold">Upazila</label>
            <select
              name="upazila"
              className="select select-bordered w-full " required>
              <option disabled selected>Select your Upazila</option>
              {
                upazilas?.map(district => <option key={district.id}>
                  {district.name}
                </option>)
              }
            </select>
          </div>

          {/* Search Button */}
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

      {/* Search Results */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4 text-gray-700">Donor List</h3>
        {searchResults ? (
          searchResults.length > 0 ? (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {searchResults.map((donor, index) => (
                <li
                  key={index}
                  className="p-4 border border-gray-300 rounded-lg bg-white shadow-md"
                >
                  <img src={donor.photoUrl} alt={donor.name} className="w-20 h-20 rounded-full mx-auto mb-3" />
                  <p className="font-bold text-red-600">{donor.name}</p>
                  <p>Blood Group: {donor.bloodGrp}</p>
                  <p>District: {donor.district}</p>
                  <p>Upazila: {donor.upazila}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700">No donors found. Please try a different search.</p>
          )
        ) : (
          <p className="text-gray-500">Fill out the form above and search to see results.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
