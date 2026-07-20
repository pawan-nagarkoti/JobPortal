import React, { useEffect, useState } from "react";
import { MapPin, DollarSign, CircleX, CalendarDays, Bookmark, ArrowRight } from "lucide-react";
import LeftSidebar from "./LeftSidebar";
import { _get } from "../../../lib/api";
import { date } from "../../../lib/utils";
import { Link } from "react-router-dom";

export default function AppliedJob({ isHide = false }) {
  const [appliedJob, setAppliedJob] = useState("");
  const fetchAppliedJob = async () => {
    const response = await _get("api/job-application/fetch");
    if (response.data.success) {
      setAppliedJob(response);
    }
  };

  useEffect(() => {
    fetchAppliedJob();
  }, []);

  if (!appliedJob) return <p>Loading...</p>;
  return (
    <div className="flex min-h-screen bg-gray-50">
      {!isHide && <LeftSidebar />}

      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
            <table className="min-w-full border-collapse">
              <thead className="border-b border-gray-200 bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Jobs</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Date Applied</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Action</th>
                </tr>
              </thead>

              <tbody>
                {appliedJob.data.data.length ? (
                  appliedJob.data.data.map((j, index) => (
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-5">
                        <div className="flex items-start gap-4">
                          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl">
                            <img
                              src={j.applicantId?.profilePicture}
                              alt="YouTube logo"
                              className="h-9 w-9 object-contain"
                            />
                          </div>

                          <div>
                            <div className="flex flex-wrap items-center gap-3">
                              <h3 className="text-lg font-semibold text-gray-900">{j.jobId.title}</h3>
                              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                                {j.jobId.workType}
                              </span>
                            </div>

                            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500">
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-gray-300" />
                                <span>
                                  {j.jobId.location.country},{j.jobId.location.city}
                                </span>
                              </div>

                              <div className="flex items-center gap-2">
                                <DollarSign className="h-4 w-4 text-gray-300" />
                                <span>
                                  ${j.jobId.salary.minSalary}- ${j.jobId.salary.maxSalary}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-600 whitespace-nowrap">{date(j.createdAt)}</td>

                      <td className="px-6 py-5">
                        {j.jobId.isActive ? (
                          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-600">
                            Active
                          </span>
                        ) : (
                          <span className="rounded-full  px-3 py-1  text-sm font-medium bg-gray-100 cursor-not-allowed md:text-base ">
                            Expired
                          </span>
                        )}
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex items-center justify-between gap-4">
                          {j.jobId.isActive ? (
                            <Link to={`/job-detail/${j.jobId._id}`}>
                              <button className="inline-flex items-center gap-2 rounded-md bg-blue-50 px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-100 md:text-base">
                                Apply Now
                                <ArrowRight className="h-4 w-4" />
                              </button>
                            </Link>
                          ) : (
                            <button className="rounded-md bg-gray-100 px-6 py-3 text-sm  text-gray-500  cursor-not-allowed md:text-base">
                              Expired Job
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <p>No job found</p>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
