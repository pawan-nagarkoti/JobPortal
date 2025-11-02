import React from "react";
import { BreadcrumbSection } from "../../components/other/Breadcrumb";
import DiloagContainer from "../../components/common/DiloagContainer";

export default function JobDetailPage() {
  const job = {
    title: "Senior UX Designer",
    company: "Facebook",
    location: "Dhaka, Bangladesh",
    type: "FULL-TIME",
    featured: true,
    salary: "$100,000 - $120,000",
    salaryNote: "Yearly salary",
    remote: "Worldwide",
    posted: "14 Jun, 2021",
    expires: "14 Aug, 2021",
    experience: "$50k-80k/month",
    education: "Graduation",
    jobLevel: "Entry Level",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    logoBg: "bg-blue-600",
  };

  const benefits = [
    "401k Salary",
    "Async",
    "Learning budget",
    "Vision Insurance",
    "4 day workweek",
    "Profit Sharing",
    "Free gym membership",
    "Equity Compensation",
    "No politics at work",
  ];

  const jobDescription = `Velstar is a Shopify Plus agency, and we partner with brands to help them grow, we also do the same with our people!
  
  Here at Velstar, we don't just make websites, we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level. From Platform Migration, User Experience & User Interface Design, to Digital Marketing, we have a proven track record in delivering outstanding eCommerce solutions and driving sales for our clients.
  
  The role will involve translating project specifications into clean, test-driven, easily maintainable code. You will work with the Project and Development teams as well as with the Technical Director, adhering closely to project plans and delivering work that meets functional & non-functional requirements. You will have the opportunity to create new, innovative, secure and scalable features for our clients on the Shopify platform
  
  Want to work with us? You're in good company!`;

  const requirements = [
    "Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on",
    "3+ years of experience in back-end development working either with multiple smaller projects simultaneously or large-scale applications",
    "Experience with HTML, JavaScript, CSS, PHP, Symphony and/or Laravel",
    "Working regularly with APIs and Web Services (REST, GraphQL, SOAP, etc)",
    "Have experience/awareness in Agile application development, commercial off-the-shelf software, middleware, servers and storage, and database management.",
    "Familiarity with version control and project management (e.g., Github, Jira)",
    "Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on",
    "Ambitious and hungry to grow your career in a fast-growing agency",
  ];

  const desirable = [
    "Working knowledge of eCommerce platforms, ideally Shopify but also others e.g. Magento, WooCommerce, Visualsoft to enable seamless migrations.",
    "Working knowledge of payment gateways",
    "API platform experience / Building restful APIs",
  ];

  const companyBenefits = [
    "Early finish on Fridays for our end of week catch up (4:30 finish, and drink of your choice from the bar)",
    "28 days holiday (including bank holidays) rising by 1 day per year PLUS an additional day off on your birthday",
    "Generous annual bonus.",
    "Healthcare package",
    "Paid community days to volunteer for a charity of your choice",
    "£100 contribution for your own personal learning and development",
    "Free Breakfast on Mondays and free snacks in the office",
    "Access to Perkbox with numerous discounts plus free points from the company to spend as you wish.",
  ];
  return (
    <>
      <BreadcrumbSection />
      <div className="container mx-auto">
        <div className="min-h-screen bg-gray-50">
          {/* Header Section */}
          <div className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  {/* Company Logo */}
                  <div
                    className={`w-16 h-16 ${job.logoBg} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <svg
                      className="w-10 h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>

                  {/* Job Info */}
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h1>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <span>at {job.company}</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                        {job.type}
                      </span>
                      {job.featured && (
                        <span className="px-3 py-1 bg-yellow-50 text-yellow-700 text-xs font-medium rounded border border-yellow-200">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3">
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
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
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                  </button>
                  <button className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 flex items-center">
                    Apply Now
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
                  <DiloagContainer />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Job Description */}
              <div className="lg:col-span-2 space-y-8">
                {/* Job Description */}
                <div className="bg-white rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Job Description</h2>
                  <div className="text-gray-700 space-y-4">
                    {jobDescription.split("\n\n").map((paragraph, index) => (
                      <p key={index} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Requirements */}
                <div className="bg-white rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Requirements</h2>
                  <ul className="space-y-3">
                    {requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Desirable */}
                <div className="bg-white rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Desirable:</h2>
                  <ul className="space-y-3">
                    {desirable.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="bg-white rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Benefits</h2>
                  <ul className="space-y-3">
                    {companyBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-6">
                {/* Salary Card */}
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-gray-600">
                      Salary (USD)
                    </h3>
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-2xl font-bold text-green-600 mb-1">
                    {job.salary}
                  </p>
                  <p className="text-sm text-gray-500">{job.salaryNote}</p>
                </div>

                {/* Job Location */}
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-gray-600">
                      Job Location
                    </h3>
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold text-gray-900 mb-2">
                    {job.location}
                  </p>
                  <div className="flex items-center text-sm text-gray-600 mt-4">
                    <svg
                      className="w-5 h-5 mr-2"
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
                    <div>
                      <p className="font-medium">Remote Job</p>
                      <p className="text-gray-500">{job.remote}</p>
                    </div>
                  </div>
                </div>

                {/* Job Benefits */}
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">Job Benefits</h3>
                  <div className="flex flex-wrap gap-2">
                    {benefits.map((benefit, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-green-50 text-green-700 text-sm rounded-md border border-green-200"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Job Overview */}
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">Job Overview</h3>
                  <div className="space-y-4">
                    {/* Job Posted */}
                    <div className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-600 mr-3 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <p className="text-xs text-gray-500 uppercase">
                          Job Posted:
                        </p>
                        <p className="font-semibold">{job.posted}</p>
                      </div>
                    </div>

                    {/* Job Expire */}
                    <div className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-600 mr-3 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <p className="text-xs text-gray-500 uppercase">
                          Job Expire In:
                        </p>
                        <p className="font-semibold">{job.expires}</p>
                      </div>
                    </div>

                    {/* Job Level */}
                    <div className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-600 mr-3 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                      <div>
                        <p className="text-xs text-gray-500 uppercase">
                          Job Level:
                        </p>
                        <p className="font-semibold">{job.jobLevel}</p>
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-600 mr-3 mt-0.5"
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
                      <div>
                        <p className="text-xs text-gray-500 uppercase">
                          Experience
                        </p>
                        <p className="font-semibold">{job.experience}</p>
                      </div>
                    </div>

                    {/* Education */}
                    <div className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-600 mr-3 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                      <div>
                        <p className="text-xs text-gray-500 uppercase">
                          Education
                        </p>
                        <p className="font-semibold">{job.education}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Share Job */}
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">Share this job:</h3>
                  <div className="flex items-center space-x-3">
                    <button className="flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      Copy Links
                    </button>
                    <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
                      </svg>
                    </button>
                    <button className="p-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </button>
                    <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Job Tags */}
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">Job tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Back-end",
                      "PHP",
                      "Laravel",
                      "Development",
                      "Front-end",
                    ].map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-md hover:bg-gray-200 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
