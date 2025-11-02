import React from "react";
import CandidateGrid from "../../components/applicant/CandidateGrid";

const CandidatesList = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              {/* Location Radius Filter */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">
                    Location Radius:{" "}
                    <span className="text-blue-600">32 miles</span>
                  </h3>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Range Slider */}
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="32"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>
              </div>

              {/* Gender Filter */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Gender</h3>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Radio Options */}
                <div className="space-y-3">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-700">All</span>
                  </label>

                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      defaultChecked
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-700">Male</span>
                  </label>

                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-700">Female</span>
                  </label>

                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-700">Others</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Candidates List */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              <CandidateGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidatesList;
