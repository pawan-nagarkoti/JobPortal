// Company Card Component
export default function CompanyCard({ company }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Card Content */}
      <div className="p-6">
        {/* Top Section - Logo, Name, Badge */}
        <div className="flex items-start justify-between mb-4">
          {/* Logo and Name */}
          <div className="flex items-center space-x-3">
            {/* Logo with colored background */}
            <div
              className={`w-14 h-14 ${company.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
            >
              <svg
                className="w-8 h-8 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
            </div>

            {/* Company Name and Location */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {company.name}
              </h3>
              <div className="flex items-center text-sm text-gray-500 mt-1">
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
                {company.location}
              </div>
            </div>
          </div>

          {/* Featured Badge */}
          {company.isFeatured && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-50 text-yellow-700 border border-yellow-200">
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Open Position Footer */}
      <div className="bg-blue-50 px-6 py-3 border-t border-gray-100">
        <button className="w-full text-center text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors">
          Open Position ({company.openPositions})
        </button>
      </div>
    </div>
  );
}
