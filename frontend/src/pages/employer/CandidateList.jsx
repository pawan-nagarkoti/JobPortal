import React, { useEffect, useState } from "react";
import CandidateGrid from "../../components/applicant/CandidateGrid";
import { _get } from "../../lib/api";
import DiloagContainer from "../../components/common/diloagContainer";
import CandidateProfile from "./CandidateProfile";
import useUI from "../../context/UIcontext";

const CandidatesList = ({ hideLocation = false }) => {
  const [candidateList, setCandidateList] = useState("");
  const { openModal, setOpenModal } = useUI();
  const [gender, setGender] = useState("all");

  const fetchCandidateList = async () => {
    try {
      let g = gender === "all" ? "" : `?gender=${gender}`;
      const response = await _get(`api/applicant/fetch${g}`);
      if (response.data.success) {
        setCandidateList(response.data);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchCandidateList();
  }, [gender]);

  if (!candidateList) return <p>Loading...</p>;
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Filters */}
          {!hideLocation && (
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                {/* Location Radius Filter */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">
                      Location Radius: <span className="text-blue-600">32 miles</span>
                    </h3>
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
                  </div>

                  {/* Radio Options */}
                  <div className="space-y-3">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        defaultChecked
                        value={gender}
                        onChange={() => setGender("all")}
                      />
                      <span className="ml-3 text-gray-700">All</span>
                    </label>

                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        value={gender}
                        onChange={() => setGender("male")}
                      />
                      <span className="ml-3 text-gray-700">Male</span>
                    </label>

                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        value={gender}
                        onChange={() => setGender("female")}
                      />
                      <span className="ml-3 text-gray-700">Female</span>
                    </label>

                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        value={gender}
                        onChange={() => setGender("other")}
                      />
                      <span className="ml-3 text-gray-700">Others</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Right Content - Candidates List */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {candidateList?.applicants?.length > 0 ? (
                candidateList?.applicants?.map((v, i) => (
                  <div key={i}>
                    <CandidateGrid candidate={v} />
                  </div>
                ))
              ) : (
                <p>No candidate found</p>
              )}
            </div>
          </div>

          <DiloagContainer open={openModal} setOpen={setOpenModal} showClass={true}>
            <CandidateProfile />
          </DiloagContainer>
        </div>
      </div>
    </div>
  );
};

export default CandidatesList;
