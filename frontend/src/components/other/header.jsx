import React, { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
            <div className="shrink-0 flex items-center">
              <i className="fas fa-briefcase text-primary text-2xl mr-2"></i>
              <span className="font-bold text-xl text-gray-900">JobPilot</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-primary transition"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary transition"
              >
                Find Jobs
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary transition"
              >
                Employers
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary transition"
              >
                Candidates
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary transition"
              >
                About
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              <i
                className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
              ></i>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Find Jobs
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Employers
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Candidates
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              About
            </a>
            <button className="w-full text-left px-3 py-2 text-primary font-medium">
              Sign In
            </button>
            <button className="w-full bg-primary text-white px-3 py-2 rounded-md mt-2">
              Post Job
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
