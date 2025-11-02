import JobGrid from "../../../components/grids/JobGrid";
import LeftSidebar from "./leftSidebar";

export default function Dashboard() {
  // Dummy data
  const stats = {
    appliedJobs: 589,
    favoriteJobs: 238,
    jobAlerts: 574,
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <LeftSidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              Hello, Esther Howard
            </h1>
            <p className="text-gray-600">
              Here is your daily activities and job alerts
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Applied Jobs */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">
                    {stats.appliedJobs}
                  </p>
                  <p className="text-gray-600">Applied jobs</p>
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

            {/* Favorite Jobs */}
            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">
                    {stats.favoriteJobs}
                  </p>
                  <p className="text-gray-600">Favorite jobs</p>
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

            {/* Job Alerts */}
            <div className="bg-green-50 rounded-lg p-6 border border-green-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">
                    {stats.jobAlerts}
                  </p>
                  <p className="text-gray-600">Job Alerts</p>
                </div>
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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

          {/* Profile Alert */}
          <div className="bg-red-500 rounded-lg p-6 mb-8 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Profile"
                className="w-16 h-16 rounded-full border-2 border-white"
              />
              <div className="text-white">
                <h3 className="text-lg font-semibold mb-1">
                  Your profile editing is not completed.
                </h3>
                <p className="text-red-100">
                  Complete your profile editing & build your custom Resume
                </p>
              </div>
            </div>
            <button className="px-6 py-2.5 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 flex items-center">
              Edit Profile
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

          {/* Recently Applied Section */}
          <div className="bg-white rounded-lg border border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900">
                Recently Applied
              </h2>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
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
              <div className="col-span-5">Job</div>
              <div className="col-span-3">Date Applied</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2">Action</div>
            </div>

            <JobGrid />
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-gray-500">
            © 2021 Jobpilot - Job Board. All rights Reserved
          </div>
        </div>
      </main>
    </div>
  );
}
