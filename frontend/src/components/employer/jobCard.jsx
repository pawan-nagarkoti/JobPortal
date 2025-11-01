const JobCard = ({ job }) => {
  return (
    <div className="job-card bg-white rounded-lg border border-gray-200 p-6 transition-all duration-300 cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
            <i className={`${job.icon} text-primary text-xl`}></i>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-1">
              {job.title}
            </h3>
            <p className="text-gray-600 text-sm">{job.company}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-red-500 transition">
          <i className="far fa-heart"></i>
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full">
          <i className="fas fa-briefcase mr-1"></i>
          {job.type}
        </span>
        <span className="inline-flex items-center px-3 py-1 bg-yellow-50 text-yellow-700 text-xs rounded-full">
          <i className="fas fa-dollar-sign mr-1"></i>
          {job.salary}
        </span>
      </div>

      <div className="flex items-center text-sm text-gray-500 mb-4">
        <i className="fas fa-map-marker-alt mr-2"></i>
        <span>{job.location}</span>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-xs text-gray-500">{job.posted}</span>
        <button className="text-primary hover:text-blue-700 font-medium text-sm transition">
          Apply Now <i className="fas fa-arrow-right ml-1"></i>
        </button>
      </div>
    </div>
  );
};

export default JobCard;
