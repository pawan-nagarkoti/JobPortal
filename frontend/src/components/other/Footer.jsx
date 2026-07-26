import React from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../lib/cookies";

const Footer = () => {
  const loggedIn = getCookie("loginUserInfo");
  const navigate = useNavigate();

  const redirectToPage = (name) => {
    if (loggedIn?.role === "employer" && name === "employer") {
      navigate("/employer/profile");
    } else if (loggedIn?.role === "employer" && name === "postJob") {
      navigate("/employer-job-post");
    } else if (loggedIn?.role === "employer" && name === "jobs") {
      navigate("/employer/job-list");
    } else if (loggedIn?.role === "applicant" && name === "applicant") {
      navigate("/applicant-dashboard");
    } else if (loggedIn?.role === "applicant" && name === "jobAlert") {
      navigate("/applicant-dashboard/job-alert");
    } else if (loggedIn?.role === "applicant" && name === "appliedJob") {
      navigate("/applicant-dashboard/applied-job");
    } else {
      navigate("/auth/sign-in");
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <i className="fas fa-briefcase text-primary text-2xl mr-2"></i>
              <span className="font-bold text-xl text-white">JobPilot</span>
            </div>
            <p className="text-sm mb-4">Find your dream job and build your career with the best companies.</p>
            <div className="flex space-x-4">
              <i
                className="fab fa-facebook text-xl text-gray-400 hover:text-primary transition cursor-pointer"
                onClick={() => {
                  redirectToPage();
                }}
              ></i>
              <i
                className="fab fa-twitter text-xl text-gray-400 hover:text-primary transition cursor-pointer"
                onClick={() => {
                  redirectToPage();
                }}
              ></i>
              <i
                className="fab fa-linkedin text-xl text-gray-400 hover:text-primary transition cursor-pointer"
                onClick={() => {
                  redirectToPage();
                }}
              ></i>
              <i
                className="fab fa-instagram text-xl text-gray-400 hover:text-primary transition cursor-pointer"
                onClick={() => {
                  redirectToPage();
                }}
              ></i>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">For Candidates</h4>
            <ul className="space-y-2 text-sm">
              <li
                className="hover:text-primary transition cursor-pointer"
                onClick={() => {
                  redirectToPage("applicant");
                }}
              >
                Candidate Dashboard
              </li>
              <li
                className="hover:text-primary transition cursor-pointer"
                onClick={() => {
                  redirectToPage("appliedJob");
                }}
              >
                Applied Jobs
              </li>

              <li
                className="hover:text-primary transition cursor-pointer"
                onClick={() => {
                  redirectToPage("jobAlert");
                }}
              >
                Job Alerts
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">For Employers</h4>
            <ul className="space-y-2 text-sm">
              <li
                className="hover:text-primary transition cursor-pointer"
                onClick={() => {
                  redirectToPage("employer");
                }}
              >
                Employer Dashboard
              </li>
              <li
                className="hover:text-primary transition cursor-pointer"
                onClick={() => {
                  redirectToPage("postJob");
                }}
              >
                Post a Job
              </li>
              <li
                className="hover:text-primary transition cursor-pointer"
                onClick={() => {
                  redirectToPage("jobs");
                }}
              >
                Jobs
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-primary transition cursor-pointer">FAQs</li>
              <li className="hover:text-primary transition cursor-pointer" onClick={() => navigate("/privacy")}>
                Privacy Policy
              </li>
              <li className="hover:text-primary transition cursor-pointer" onClick={() => navigate("/contact-us")}>
                Contact Us
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2026 JobPilot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
