import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCookie } from "../../lib/cookies";
import useUI from "../../context/UIcontext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate("");
  const { logout } = useUI();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-50 shadow-md" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="shrink-0 flex items-center">
              <i className="fas fa-briefcase text-primary text-2xl mr-2"></i>
              <span className="font-bold text-xl text-gray-900">JobPilot</span>
            </Link>
          </div>

          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
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
              </div>
              <input
                type="text"
                placeholder="Job tittle, keyword, company"
                className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="ml-10 flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary transition"
            >
              Home
            </Link>
            <Link
              to="/find-job"
              className="text-gray-700 hover:text-primary transition"
            >
              Find Jobs
            </Link>
            <Link
              to="/find-employer"
              className="text-gray-700 hover:text-primary transition"
            >
              Employers
            </Link>
            <Link to="" className="text-gray-700 hover:text-primary transition">
              Candidates
            </Link>
            <Link to="" className="text-gray-700 hover:text-primary transition">
              About
            </Link>
            {getCookie("accessToken") ? (
              <>
                <Link
                  to={
                    getCookie("loginUserInfo")?.role === "applicant"
                      ? "applicant-dashboard"
                      : "employer-dashboard"
                  }
                  className="text-gray-700 hover:text-primary transition"
                >
                  Dashboard
                </Link>
                <div className="flex gap-5 items-center cursor-pointer">
                  <button
                    className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                  onClick={() => navigate("/auth/sign-in")}
                >
                  Sign In
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
