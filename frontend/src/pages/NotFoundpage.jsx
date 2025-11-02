import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Opps! Page not found
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Something went wrong. It's look like the link is broken or the
              page is removed.
            </p>
            <div className="flex items-center gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition flex items-center">
                Home
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
              <button className="px-6 py-3 text-blue-600 font-semibold hover:text-blue-700 transition">
                Go Back
              </button>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="flex justify-center">
            <img
              src="https://illustrations.popsy.co/amber/error-404.svg"
              alt="404 Error Robot"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
