import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <i className="fas fa-briefcase text-primary text-2xl mr-2"></i>
              <span className="font-bold text-xl text-white">JobPilot</span>
            </div>
            <p className="text-sm mb-4">
              Find your dream job and build your career with the best companies.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">For Candidates</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Browse Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Candidate Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Job Alerts
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">For Employers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Browse Candidates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Employer Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Applications
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2025 JobPilot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
