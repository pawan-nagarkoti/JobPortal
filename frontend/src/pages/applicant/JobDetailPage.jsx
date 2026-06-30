import React, { useEffect, useState } from "react";
import { BreadcrumbSection } from "../../components/other/Breadcrumb";
import DiloagContainer from "../../components/common/DiloagContainer";
import { _delete, _get, _post } from "../../lib/api";
import { useParams } from "react-router-dom";
import { date } from "../../lib/utils";
import { HtmlSanitizer } from "../../components/other/htmlSanitizer";
import ResumeModal from "../../components/applicant/resumeModal";
import useUI from "../../context/UIcontext";
import { showSuccess, showInfo } from "../../lib/toast";
import { getCookie } from "../../lib/cookies";

export default function JobDetailPage() {
  const [job, setJob] = useState("");
  const { id } = useParams();
  const { openModal, setOpenModal } = useUI();
  const [toggleBookmark, setToggleBookmark] = useState(false);
  const [applicantData, setApplicantData] = useState("");
  const role = getCookie("loginUserInfo")?.role;
  const isApplicant = role === "applicant";

  const fetchJobDetail = async () => {
    const response = await _get(`api/jobList/single/${id}`);
    if (response?.data?.success) {
      setJob(response.data.data);
    }
  };

  const fetchApplicant = async () => {
    const response = await _get(`api/applicant/fetch`);
    if (response.data.success) {
      setApplicantData(response.data.applicants[0]);
      if (response.data.applicants[0]._id) {
        await checkBookmark(response.data.applicants[0]._id);
      }
    }
  };

  const checkBookmark = async (applicantID) => {
    const hasBookmark = await _get(
      `api/bookmark-job/fetch?jobId=${id}&applicantId=${applicantID}`,
    );
    if (hasBookmark.data.success) {
      hasBookmark.data.data.length && setToggleBookmark(true);
      return hasBookmark;
    }
  };

  useEffect(() => {
    fetchJobDetail();
    fetchApplicant();
  }, []);

  const addBookmark = async () => {
    const addResponse = await _post("api/bookmark-job/add", {
      jobId: id,
      applicantId: applicantData._id,
      notes: "",
    });
    if (addResponse.data.success) {
      showSuccess("add bookmark");
    }
  };

  const removeBookmark = async () => {
    let hasBookmark = await checkBookmark(applicantData._id);

    if (hasBookmark.data.success) {
      const deleteResponse = await _delete(
        `api/bookmark-job/delete/${hasBookmark?.data?.data[0]?._id}`,
      );
      if (deleteResponse.data.success) {
        setToggleBookmark(false);
        showInfo("Remove bookmark");
      }
    }
  };

  if (!job) return "Loading...";

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
                    className={`w-16 h-16  rounded-lg flex items-center justify-center shrink-0`}
                  >
                    <img src={job?.employerId?.logo} alt="" />
                  </div>

                  {/* Job Info */}
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h1>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <span>at {job?.employerId?.name}</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                        {job.workType}
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
                  <button
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    onClick={() => {
                      setToggleBookmark((prev) => !prev);
                    }}
                  >
                    {toggleBookmark ? (
                      <span onClick={() => removeBookmark()}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="currentColor"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M6 2c-1.1 0-2 .9-2 2v18l8-4 8 4V4c0-1.1-.9-2-2-2H6z" />
                        </svg>
                      </span>
                    ) : (
                      <span onClick={() => addBookmark()}>
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
                      </span>
                    )}
                  </button>

                  <div className="relative group inline-block">
                    <button
                      className={`px-6 py-2.5 text-white font-semibold rounded-lg flex items-center ${
                        isApplicant
                          ? "bg-blue-600"
                          : "bg-gray-400 cursor-not-allowed"
                      }`}
                      disabled={!isApplicant}
                      onClick={() => {
                        if (isApplicant) setOpenModal(true);
                      }}
                    >
                      Open
                    </button>

                    {!isApplicant && (
                      <span className="absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 scale-95 whitespace-nowrap rounded bg-black px-3 py-1 text-sm text-white opacity-0 shadow-lg transition-all group-hover:scale-100 group-hover:opacity-100">
                        Login as an applicant
                      </span>
                    )}
                  </div>
                  <DiloagContainer open={openModal} setOpen={setOpenModal}>
                    <ResumeModal />
                  </DiloagContainer>
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
                    {HtmlSanitizer(job?.description)}
                  </div>
                </div>

                {/* Requirements */}
                {/* <div className="bg-white rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Requirements</h2>
                  <ul className="space-y-3">
                    {requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div> */}

                {/* Desirable */}
                {/* <div className="bg-white rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Desirable:</h2>
                  <ul className="space-y-3">
                    {desirable.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div> */}

                {/* Benefits */}
                <div className="bg-white rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Benefits</h2>
                  <ul className="space-y-3">
                    {job?.jobBenefits?.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-700">{benefit.name}</span>
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
                      Salary [{job.salary.currency}]
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
                    ${job.salary.minSalary} - ${job.salary.maxSalary}
                  </p>
                  <p className="text-sm text-gray-500">{job.salary.period}</p>
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
                    {job.location.city} &nbsp;
                    {job.location.country}
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
                      <p className="font-medium">
                        {job.jobLevel} {job.jobType} Job
                      </p>
                      {job.location.isRemoteWorldwidePosition && (
                        <p className="text-gray-500">Worldwide</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Job Benefits */}
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">Job Benefits</h3>
                  <div className="flex flex-wrap gap-2">
                    {job?.jobBenefits.map((benefit, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-green-50 text-green-700 text-sm rounded-md border border-green-200"
                      >
                        {benefit.name}
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
                        {/* <p className="font-semibold">{job.posted}</p> */}
                        <p className="font-semibold">{date(job.createdAt)}</p>
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
                        <p className="font-semibold">
                          {date(job?.expirationDate)}
                        </p>
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
                        <p className="font-semibold">
                          {/* ${job.salary.minSalary} - ${job.salary.minSalary}/
                          {job.salary.period} */}
                          {job?.experience}
                        </p>
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
                    {job?.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-md hover:bg-gray-200 cursor-pointer"
                      >
                        {tag.name}
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
