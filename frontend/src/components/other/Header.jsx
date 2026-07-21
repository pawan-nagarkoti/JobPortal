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

          <div className="ml-10 flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition">
              Home
            </Link>
            <Link to="/find-job" className="text-gray-700 hover:text-primary transition">
              Find Jobs
            </Link>
            <Link to="/find-employer" className="text-gray-700 hover:text-primary transition">
              Employers
            </Link>
            <Link to="find-candidate" className="text-gray-700 hover:text-primary transition">
              Candidates
            </Link>
            <Link to="/about-us" className="text-gray-700 hover:text-primary transition">
              About
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-primary transition">
              Blog
            </Link>
            {getCookie("accessToken") ? (
              <>
                <Link
                  to={getCookie("loginUserInfo")?.role === "applicant" ? "applicant-dashboard" : "employer/profile"}
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
