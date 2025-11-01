import React from "react";
import JobCard from "./jobCard";

const FeaturedJobs = ({ jobs }) => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Jobs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Know your worth and find the job that qualifies your life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-blue-700 transition font-medium">
            Load More Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
