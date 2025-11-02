import React from "react";

export default function JobGrid() {
  const recentlyApplied = [
    {
      id: 1,
      title: "Networking Engineer",
      company: "Upwork",
      logo: "bg-green-500",
      location: "Washington",
      salary: "$50k-80k/month",
      type: "Remote",
      dateApplied: "Feb 2, 2019 19:28",
      status: "Active",
    },
    {
      id: 2,
      title: "Product Designer",
      company: "Dribbble",
      logo: "bg-pink-500",
      location: "Dhaka",
      salary: "$50k-80k/month",
      type: "Full Time",
      dateApplied: "Dec 7, 2019 23:26",
      status: "Active",
    },
    {
      id: 3,
      title: "Junior Graphic Designer",
      company: "Apple",
      logo: "bg-gray-900",
      location: "Brazil",
      salary: "$50k-80k/month",
      type: "Temporary",
      dateApplied: "Feb 2, 2019 19:28",
      status: "Active",
    },
    {
      id: 4,
      title: "Visual Designer",
      company: "Microsoft",
      logo: "bg-gradient-to-br from-red-500 via-green-500 via-blue-500 to-yellow-500",
      location: "Wisconsin",
      salary: "$50k-80k/month",
      type: "Contract Base",
      dateApplied: "Dec 7, 2019 23:26",
      status: "Active",
      isHighlighted: true,
    },
  ];
  return (
    <>
      {/* Job Rows */}
      <div>
        {recentlyApplied.map((job) => (
          <div
            key={job.id}
            className={`grid grid-cols-12 gap-4 px-6 py-4 items-center border-b border-gray-200 hover:bg-gray-50 ${
              job.isHighlighted ? "bg-blue-50 border-2 border-blue-200" : ""
            }`}
          >
            {/* Job Info */}
            <div className="col-span-5 flex items-center space-x-4">
              <div
                className={`w-14 h-14 ${job.logo} rounded-lg flex items-center justify-center flex-shrink-0`}
              >
                <span className="text-white text-xl font-bold">
                  {job.company}
                </span>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="font-semibold text-gray-900">{job.title}</h3>
                  <span
                    className={`px-2 py-0.5 text-xs rounded ${
                      job.type === "Remote"
                        ? "bg-blue-100 text-blue-700"
                        : job.type === "Full Time"
                        ? "bg-green-100 text-green-700"
                        : job.type === "Temporary"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {job.type}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600 space-x-3">
                  <span className="flex items-center">
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
                    {job.location}
                  </span>
                  <span className="flex items-center">
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
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {job.salary}
                  </span>
                </div>
              </div>
            </div>

            {/* Date Applied */}
            <div className="col-span-3 text-sm text-gray-700">
              {job.dateApplied}
            </div>

            {/* Status */}
            <div className="col-span-2">
              <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {job.status}
              </span>
            </div>

            {/* Action */}
            <div className="col-span-2">
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
