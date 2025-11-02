import React from "react";
import CandidateProfile from "../../pages/employer/CandidateProfile";

const CandidateGrid = () => {
  // Dummy candidates data
  const candidates = [
    {
      id: 1,
      name: "Cody Fisher",
      role: "Marketing Officer",
      location: "New York",
      experience: "3 Years experience",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      isBookmarked: false,
    },
    {
      id: 2,
      name: "Darrell Steward",
      role: "Interaction Designer",
      location: "New York",
      experience: "3 Years experience",
      image: "https://randomuser.me/api/portraits/men/43.jpg",
      isBookmarked: true,
    },
    {
      id: 3,
      name: "Guy Hawkins",
      role: "Junior Graphic Designer",
      location: "New York",
      experience: "3 Years experience",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      isBookmarked: true,
    },
  ];

  return (
    <div className="space-y-4">
      {candidates.map((candidate) => (
        <div
          key={candidate.id}
          className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
        >
          <div className="p-6">
            <div className="flex items-center justify-between">
              {/* Left - Profile Info */}
              <div className="flex items-center space-x-4">
                {/* Profile Image */}
                <img
                  src={candidate.image}
                  alt={candidate.name}
                  className="w-20 h-20 rounded-xl object-cover"
                />

                {/* Info */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {candidate.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{candidate.role}</p>

                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {candidate.location}
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      {candidate.experience}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Actions */}
              <div className="flex items-center space-x-3">
                {/* Bookmark Button */}
                <button
                  className={`p-2 rounded-lg border transition ${
                    candidate.isBookmarked
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill={candidate.isBookmarked ? "currentColor" : "none"}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </button>

                {/* View Profile Button */}
                <button className="px-6 py-2.5 bg-blue-50 text-blue-600 font-semibold rounded-lg hover:bg-blue-100 transition flex items-center">
                  View Profile
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <CandidateProfile />
    </div>
  );
};

export default CandidateGrid;
