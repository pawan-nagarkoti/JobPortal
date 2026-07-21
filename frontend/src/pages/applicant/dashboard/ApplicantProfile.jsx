import React from "react";
import LeftSidebar from "./LeftSidebar";

export const ApplicantProfile = () => {
  const stats = {
    appliedJobs: 24,
    savedJobs: 12,
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <LeftSidebar />
      <main className="flex-1 p-8">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">Hello, Esther Howard</h1>
              <p className="text-gray-600">Here is your daily activities and job alerts</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Applied Jobs */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-gray-900 mb-1">{stats.appliedJobs}</p>
                    <p className="text-gray-600">Applied jobs</p>
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

              {/* Favorite Jobs */}
              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-gray-900 mb-1">{stats.favoriteJobs}</p>
                    <p className="text-gray-600">Favorite jobs</p>
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

              {/* Job Alerts */}
              <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-gray-900 mb-1">{stats.jobAlerts}</p>
                    <p className="text-gray-600">Job Alerts</p>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Left */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
              {/* Basic Info */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">Basic Information</h2>

                <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter full name"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Professional Title</label>
                    <input
                      type="text"
                      placeholder="e.g. Frontend Developer"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Date of Birth</label>
                    <input
                      type="date"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Nationality</label>
                    <input
                      type="text"
                      placeholder="Enter nationality"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Gender</label>
                    <select className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500">
                      <option>Select gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Marital Status</label>
                    <select className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500">
                      <option>Select marital status</option>
                      <option>Single</option>
                      <option>Married</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Professional Details */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">Professional Details</h2>

                <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Experience</label>
                    <input
                      type="text"
                      placeholder="e.g. 2 years"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Education</label>
                    <input
                      type="text"
                      placeholder="Enter education"
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

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Profile Picture URL</label>
                    <input
                      type="text"
                      placeholder="Paste profile image URL"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-sm font-medium text-gray-700">Biography</label>
                  <textarea
                    rows="5"
                    placeholder="Write something about yourself"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                  ></textarea>
                </div>
              </div>

              {/* Contact Info */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">Contact Information</h2>

                <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
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

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="text"
                      placeholder="Enter phone number"
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

              {/* Job Alerts */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">Job Alerts</h2>

                <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Preferred Job Title</label>
                    <input
                      type="text"
                      placeholder="e.g. React Developer"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Preferred Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Delhi, Remote"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Resume Section */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Resume</h2>
                  <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Replace Resume
                  </button>
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  Upload and manage your latest resume for employers to review.
                </p>

                <div className="mt-5 rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  </div>

                  <h3 className="mt-4 text-sm font-semibold text-gray-900">Upload Resume</h3>
                  <p className="mt-1 text-sm text-gray-500">PDF or DOC/DOCX, max 5 MB</p>

                  <div className="mt-4">
                    <input type="file" className="hidden" id="resumeUpload" />
                    <label
                      htmlFor="resumeUpload"
                      className="inline-flex cursor-pointer rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700"
                    >
                      Choose File
                    </label>
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-gray-200 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50">
                        <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 7h10M7 11h10M7 15h6M6 3h9l5 5v13a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z"
                          />
                        </svg>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-gray-900">resume-pawan.pdf</p>
                        <p className="text-xs text-gray-500">PDF • 2.4 MB • Uploaded 2 days ago</p>
                      </div>
                    </div>

                    <button className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">Profile Preview</h2>

                <div className="mt-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-200 text-sm text-gray-500">
                      Photo
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Candidate Name</h3>
                      <p className="text-sm text-gray-500">Professional Title</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm leading-6 text-gray-600">
                      Your candidate biography preview will appear here.
                    </p>

                    <div className="mt-4 space-y-2 text-sm text-gray-500">
                      <p>Experience: 2 Years</p>
                      <p>Education: Bachelor Degree</p>
                      <p>Location: India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">Privacy Settings</h2>

                <div className="mt-4 space-y-3">
                  <label className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3">
                    <span className="text-sm font-medium text-gray-700">Profile Privacy</span>
                    <input type="checkbox" className="h-4 w-4" />
                  </label>

                  <label className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3">
                    <span className="text-sm font-medium text-gray-700">Resume Privacy</span>
                    <input type="checkbox" className="h-4 w-4" />
                  </label>
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

              {/* Change Password */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Change Password</h2>

                <div className="col-span-12 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                      />
                      <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                      />
                      <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                      />
                      <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <button className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
                  Change Password
                </button>
              </div>

              {/* Delete Account */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Delete Account</h2>
                <p className="text-sm text-gray-600 mb-4">
                  If you delete your account, you will lose access to applied jobs, saved jobs, alerts, and your
                  candidate profile information.
                </p>
                <button className="flex items-center text-red-600 hover:text-red-700 font-medium">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Close Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
