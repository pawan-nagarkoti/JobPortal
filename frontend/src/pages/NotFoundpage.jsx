import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex items-center justify-center p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block text-7xl sm:text-8xl font-extrabold text-blue-600/10 leading-none select-none">
              404
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">
              Oops! Page not found
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
              Something went wrong. It looks like the link is broken or the page has been removed.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button
                onClick={() => navigate("/")}
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 hover:shadow-md active:scale-95 transition-all flex items-center justify-center"
              >
                Back to Home
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={() => navigate(-1)}
                className="w-full sm:w-auto px-6 py-3 text-blue-600 font-semibold rounded-lg border border-transparent hover:border-blue-200 hover:bg-blue-50 active:scale-95 transition-all flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Go Back
              </button>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="flex justify-center">
            <svg
              viewBox="0 0 200 200"
              className="w-full max-w-md drop-shadow-xl animate-[float_3s_ease-in-out_infinite]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="100" cy="100" r="90" fill="#EEF2FF" />
              <text x="100" y="95" textAnchor="middle" fontSize="48" fontWeight="bold" fill="#4F46E5">
                404
              </text>
              <text x="100" y="130" textAnchor="middle" fontSize="14" fill="#6366F1">
                Page Not Found
              </text>
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;
