import React, { useState } from "react";
import Sidebar from "./Sidebar";

const PostJobForm = () => {
  const [selectedBenefits, setSelectedBenefits] = useState([
    "Distributed Team",
    "Medical Insurance",
    "401k matching",
    "company retreats",
    "We hire old (and young)",
  ]);

  const benefits = [
    "401k Salary",
    "Distributed Team",
    "Async",
    "Vision Insurance",
    "Dental Insurance",
    "Medical Insurance",
    "Unlimited vacation",
    "4 day workweek",
    "401k matching",
    "company retreats",
    "Learning budget",
    "Free gym membership",
    "Pay in crypto",
    "Profit Sharing",
    "Equity Compensation",
    "No whiteboard interview",
    "No politics at work",
    "We hire old (and young)",
  ];

  const toggleBenefit = (benefit) => {
    if (selectedBenefits.includes(benefit)) {
      setSelectedBenefits(selectedBenefits.filter((b) => b !== benefit));
    } else {
      setSelectedBenefits([...selectedBenefits, benefit]);
    }
  };

  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto p-6 bg-white">
              <h1 className="text-2xl font-bold text-gray-900 mb-8">
                Post a job
              </h1>

              {/* Job Title */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Tittle
                </label>
                <input
                  type="text"
                  placeholder="Add job tittle, role, vacancies etc"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Tags and Job Role */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags
                  </label>
                  <input
                    type="text"
                    placeholder="Job keyword, tags etc..."
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Role
                  </label>
                  <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                    <option>Select...</option>
                  </select>
                </div>
              </div>

              {/* Salary Section */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Salary</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Min Salary
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Minimum salary..."
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-16"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                        USD
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Max Salary
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Maximum salary..."
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-16"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                        USD
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Salary Type
                    </label>
                    <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                      <option>Select...</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Advance Information */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Advance Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Education
                    </label>
                    <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                      <option>Select...</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Experience
                    </label>
                    <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                      <option>Select...</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Type
                    </label>
                    <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                      <option>Select...</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vacancies
                    </label>
                    <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                      <option>Select...</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      placeholder="DD/MM/YYYY"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Level
                    </label>
                    <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                      <option>Select...</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="mb-6 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Location
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country
                    </label>
                    <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                      <option>Select...</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                      <option>Select...</option>
                    </select>
                  </div>
                </div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 rounded"
                    defaultChecked
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Fully Remote Position -{" "}
                    <span className="font-semibold">Worldwide</span>
                  </span>
                </label>
              </div>

              {/* Job Benefits */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Job Benefits
                </h3>
                <div className="flex flex-wrap gap-2">
                  {benefits.map((benefit) => (
                    <button
                      key={benefit}
                      onClick={() => toggleBenefit(benefit)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                        selectedBenefits.includes(benefit)
                          ? "bg-blue-100 text-blue-700 border border-blue-300"
                          : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {benefit}
                    </button>
                  ))}
                </div>
              </div>

              {/* Job Description */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Description
                </label>
                <div className="border border-gray-300 rounded-lg">
                  <textarea
                    className="w-full px-4 py-3 border-0 focus:ring-0 resize-none"
                    rows="8"
                    placeholder="Add your job description..."
                  />
                  <div className="flex items-center space-x-1 px-3 py-2 border-t border-gray-300 bg-gray-50">
                    <button className="p-2 text-gray-600 hover:bg-gray-200 rounded">
                      <span className="text-sm font-bold">B</span>
                    </button>
                    <button className="p-2 text-gray-600 hover:bg-gray-200 rounded italic">
                      <span className="text-sm font-serif">I</span>
                    </button>
                    <button className="p-2 text-gray-600 hover:bg-gray-200 rounded">
                      <span className="text-sm font-semibold underline">U</span>
                    </button>
                    <button className="p-2 text-gray-600 hover:bg-gray-200 rounded">
                      <span className="text-sm line-through">S</span>
                    </button>
                    <button className="p-2 text-gray-600 hover:bg-gray-200 rounded">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
                    </button>
                    <button className="p-2 text-gray-600 hover:bg-gray-200 rounded">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 10h16M4 14h16M4 18h16"
                        />
                      </svg>
                    </button>
                    <button className="p-2 text-gray-600 hover:bg-gray-200 rounded">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Apply Job on */}
              <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Apply Job on:
                </h3>
                <div className="space-y-4">
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="radio"
                      name="apply"
                      className="mt-1 w-4 h-4 text-blue-600"
                      defaultChecked
                    />
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">On Jobpilot</p>
                      <p className="text-sm text-gray-600">
                        Candidate will apply job using jobpilot & all
                        application will show on your dashboard.
                      </p>
                    </div>
                  </label>
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="radio"
                      name="apply"
                      className="mt-1 w-4 h-4 text-blue-600"
                    />
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">
                        External Platform
                      </p>
                      <p className="text-sm text-gray-600">
                        Candidate apply job on your website, all application on
                        your own website.
                      </p>
                    </div>
                  </label>
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="radio"
                      name="apply"
                      className="mt-1 w-4 h-4 text-blue-600"
                    />
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">
                        On Your Email
                      </p>
                      <p className="text-sm text-gray-600">
                        Candidate apply job on your email address, and all
                        application in your email.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Post Job Button */}
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 flex items-center">
                Post Job
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
        </main>
      </div>
    </>
  );
};

export default PostJobForm;
