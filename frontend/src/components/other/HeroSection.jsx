import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (searchTerm) params.set("title", searchTerm);
    if (location) params.set("country", location);

    navigate(`/find-job?${params}`);
  };

  return (
    <div className="bg-linear-to-r from-blue-50 to-indigo-50 py-10 h-[50vh] flex flex-col justify-center items-center">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Find Your <span className="text-primary">Dream Job</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover thousands of job opportunities with all the information you need. Its your future.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-4 md:flex md:items-center md:space-x-4">
            <div className="flex-1 mb-4 md:mb-0">
              <div className="flex items-center border-b md:border-b-0 pb-4 md:pb-0 md:border-r px-4">
                <i className="fas fa-search text-gray-400 mr-3"></i>
                <input
                  type="text"
                  placeholder="Job title, keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full outline-none text-gray-700"
                />
              </div>
            </div>
            <div className="flex-1 mb-4 md:mb-0">
              <div className="flex items-center px-4">
                <i className="fas fa-map-marker-alt text-gray-400 mr-3"></i>
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full outline-none text-gray-700"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto bg-primary text-white px-8 py-3 rounded-md hover:bg-blue-700 transition font-medium"
            >
              Find Jobs
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;
