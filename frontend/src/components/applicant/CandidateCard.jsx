import React from "react";

const CandidateCard = ({ candidate = {} }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 p-6">
      {/* Profile Section */}
      <div className="flex items-start space-x-4 mb-6">
        <img
          src={candidate.avatar || "/api/placeholder/80/80"}
          alt={candidate.name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900">{candidate.name}</h3>
          <p className="text-gray-600">{candidate.role}</p>
        </div>
      </div>

      {/* Details List */}
      <ul className="space-y-3 mb-6">
        <li className="flex items-center text-gray-700">
          <svg
            className="w-4 h-4 mr-3 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <circle cx="10" cy="10" r="2" />
          </svg>
          <span className="text-sm">{candidate.experience}</span>
        </li>
        <li className="flex items-center text-gray-700">
          <svg
            className="w-4 h-4 mr-3 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <circle cx="10" cy="10" r="2" />
          </svg>
          <span className="text-sm">{candidate.education}</span>
        </li>
        <li className="flex items-center text-gray-700">
          <svg
            className="w-4 h-4 mr-3 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <circle cx="10" cy="10" r="2" />
          </svg>
          <span className="text-sm">{candidate.appliedDate}</span>
        </li>
      </ul>

      {/* Download CV Button */}
      <a
        href={candidate.cvUrl}
        download
        className="flex items-center justify-center w-full px-4 py-2.5 text-blue-600 font-medium text-sm rounded-lg border border-blue-600 hover:bg-blue-50 transition"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        Download Cv
      </a>
    </div>
  );
};

export default CandidateCard;
