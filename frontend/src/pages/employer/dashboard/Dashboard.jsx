import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { JobRowGrid } from "../../../components/grids/JobRowGrid";

export default function EmployerDashbord() {
  const stats = {
    openJobs: 589,
    savedCandidates: 2517,
  };

  const jobs = [
    {
      id: 1,
      title: "UI/UX Designer",
      type: "Full Time",
      daysRemaining: 27,
      status: "Active",
      applications: 798,
    },
    {
      id: 2,
      title: "Senior UX Designer",
      type: "Internship",
      daysRemaining: 8,
      status: "Active",
      applications: 185,
    },
    {
      id: 3,
      title: "Techical Support Specialist",
      type: "Part Time",
      daysRemaining: 4,
      status: "Active",
      applications: 556,
    },
    {
      id: 4,
      title: "Junior Graphic Designer",
      type: "Full Time",
      daysRemaining: 24,
      status: "Active",
      applications: 583,
    },
    {
      id: 5,
      title: "Front End Developer",
      type: "Full Time",
      date: "Dec 7, 2019",
      status: "Expire",
      applications: 740,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              Hello, Instagram
            </h1>
            <p className="text-gray-600">
              Here is your daily activities and applications
            </p>
          </div>

          {/* Stats Cards */}
          <StatsCards stats={stats} />

          {/* Jobs Table */}
          <JobsTable jobs={jobs} />
        </div>
      </main>
    </div>
  );
}

const StatsCards = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Open Jobs Card */}
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold text-gray-900 mb-1">
              {stats.openJobs}
            </p>
            <p className="text-gray-600">Open Jobs</p>
          </div>
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-blue-600"
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
          </div>
        </div>
      </div>

      {/* Saved Candidates Card */}
      <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold text-gray-900 mb-1">
              {stats.savedCandidates}
            </p>
            <p className="text-gray-600">Saved Candidates</p>
          </div>
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-yellow-600"
              fill="none"
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
          </div>
        </div>
      </div>
    </div>
  );
};

const JobsTable = ({ jobs }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h2 className="text-lg font-bold text-gray-900">
          Recently Posted Jobs
        </h2>
        <a
          href="#view-all"
          className="text-gray-600 hover:text-gray-900 font-medium flex items-center"
        >
          View all
          <svg
            className="w-5 h-5 ml-1"
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
        </a>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 text-sm font-medium text-gray-600 border-b border-gray-200">
        <div className="col-span-5">JOBS</div>
        <div className="col-span-3">STATUS</div>
        <div className="col-span-2">APPLICATIONS</div>
        <div className="col-span-2">ACTIONS</div>
      </div>

      {/* Job Rows */}
      <div>
        {jobs.map((job) => (
          <JobRowGrid key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};
