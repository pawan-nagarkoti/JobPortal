import React from "react";
import Sidebar from "./Sidebar";

export const ProfileForEmployer = () => {
  const stats = {
    openJobs: 589,
    savedCandidates: 2517,
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h1 className="text-2xl font-semibold text-gray-900">Employer Profile</h1>
            <p className="mt-1 text-sm text-gray-500 mb-3">
              Manage your company details, branding, and contact information.
            </p>

            {/* Stats Cards */}
            <StatsCards stats={stats} />
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Left */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
              {/* Basic Info */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">Basic Information</h2>

                <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Company Name</label>
                    <input
                      type="text"
                      placeholder="Enter company name"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Organization</label>
                    <input
                      type="text"
                      placeholder="Enter organization"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Industry</label>
                    <input
                      type="text"
                      placeholder="Enter industry"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Team Size</label>
                    <input
                      type="text"
                      placeholder="e.g. 10-50"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Establishment Year</label>
                    <input
                      type="date"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Website URL</label>
                    <input
                      type="url"
                      placeholder="https://example.com"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Branding */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">Branding</h2>

                <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Logo URL</label>
                    <input
                      type="text"
                      placeholder="Paste logo URL"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Banner URL</label>
                    <input
                      type="text"
                      placeholder="Paste banner URL"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    rows="5"
                    placeholder="Write company description"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                  ></textarea>
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-sm font-medium text-gray-700">Company Vision</label>
                  <textarea
                    rows="4"
                    placeholder="Write company vision"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                  ></textarea>
                </div>
              </div>

              {/* Contact */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">Contact Information</h2>

                <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Country</label>
                    <input
                      type="text"
                      placeholder="Enter country"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Location</label>
                    <input
                      type="text"
                      placeholder="Enter location"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Country Code</label>
                    <input
                      type="text"
                      placeholder="+91"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="text"
                      placeholder="Enter phone number"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      placeholder="Enter email"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Social Links</h2>
                  <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                    Add Link
                  </button>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Platform name"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                    <input
                      type="url"
                      placeholder="Profile URL"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Platform name"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                    <input
                      type="url"
                      placeholder="Profile URL"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">Profile Preview</h2>

                <div className="mt-5">
                  <div className="h-32 rounded-2xl bg-gray-100"></div>
                  <div className="-mt-10 ml-4 flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-white bg-gray-200 text-sm text-gray-500">
                    Logo
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900">Company Name</h3>
                    <p className="text-sm text-gray-500">Industry • Team Size</p>
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      Your company description preview will appear here.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">Actions</h2>

                <div className="mt-4 space-y-3">
                  <button className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700">
                    Save Profile
                  </button>
                  <button className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Preview Public Page
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const StatsCards = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Open Jobs Card */}
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.openJobs}</p>
            <p className="text-gray-600">Open Jobs</p>
          </div>
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.savedCandidates}</p>
            <p className="text-gray-600">Saved Candidates</p>
          </div>
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
