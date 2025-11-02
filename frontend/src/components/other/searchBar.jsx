import SheetCompoent from "../common/sheetCompoent";

export default function SearchBar() {
  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="flex items-center divide-x divide-gray-200">
          {/* Search Input */}
          <div className="flex-1 flex items-center px-4 py-5">
            <svg
              className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search by: Job title, Position, Keyword..."
              className="w-full outline-none text-gray-600 placeholder-gray-400 text-sm"
            />
          </div>

          {/* Location Input */}
          <div className="flex-1 flex items-center px-4 py-5">
            <svg
              className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0"
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
            <input
              type="text"
              placeholder="City, state or zip code"
              className="w-full outline-none text-gray-600 placeholder-gray-400 text-sm"
            />
          </div>

          {/* Location Button */}
          <button className="px-4 py-5 hover:bg-gray-50 transition-colors">
            <svg
              className="w-5 h-5 text-gray-600"
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
          </button>

          {/* Filters Button */}
          <button className="flex items-center px-5 py-5 hover:bg-gray-50 transition-colors">
            <svg
              className="w-5 h-5 text-gray-700 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            <span className="font-semibold text-gray-900 text-sm">Filters</span>
          </button>
          <SheetCompoent />

          {/* Find Job Button */}
          <button className="px-8 py-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-r-lg transition-colors text-sm">
            Find Job
          </button>
        </div>
      </div>
    </>
  );
}
