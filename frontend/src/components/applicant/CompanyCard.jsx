import { Link } from "react-router-dom";

// Company Card Component
export default function CompanyCard({ company }) {
  return (
    <>
      <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <Link
          to={`/employer-detail/${company._id}`}
          className="block text-gray-700 hover:text-primary transition"
        >
          {/* Card Content */}
          <div className="p-6">
            {/* Top Section - Logo, Name, Badge */}
            <div className="flex items-start justify-between mb-4">
              {/* Logo and Name */}
              <div className="flex items-center space-x-3">
                <div className="w-12 overflow-hidden h-auto max-h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                  <img
                    src={company?.logo}
                    alt={company?.name || "Company logo"}
                  />
                </div>

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
                    {company?.contact?.location?.country}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Social Links Footer */}
        <div className="bg-blue-50 px-6 py-3 border-t border-gray-100">
          <div className="flex items-center justify-center gap-4">
            {company.socialLinks?.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
