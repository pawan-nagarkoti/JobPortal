import React, { useEffect, useState } from "react";
import { MapPin, DollarSign, CircleX, CalendarDays, Bookmark, ArrowRight } from "lucide-react";
import LeftSidebar from "./LeftSidebar";
import { _get } from "../../../lib/api";
import { getCookie } from "../../../lib/cookies";
import { date } from "../../../lib/utils";
import { Link } from "react-router-dom";

export default function JobAlert() {
  const userId = getCookie("loginUserInfo");
  const [jobAlertData, setJobAlertData] = useState("");

  // fetch applicant detail on the basis of user id
  const fetchLoginApplicant = async () => {
    if (!userId) return;
    const response = await _get(`api/applicant/fetch?userId=${userId.id}`);
    if (response.data.success) {
      return response.data.applicants[0].alertJob;
    }
  };

  // fetch jobs on the basis of title and location
  const fetchJobAlert = async () => {
    const alertJob = await fetchLoginApplicant();
    if (!alertJob) return;

    let title = alertJob.jobTitle.join(",");
    let location = alertJob.alertLocation.join(",");

    const response = await _get(`api/jobList/fetch?title=${title}&location=${location}`);

    if (response.data.success) {
      setJobAlertData(response.data);
    }
  };

  useEffect(() => {
    fetchJobAlert();
  }, []);

  if (!jobAlertData) return <p>loading...</p>;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <LeftSidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-7xl px-6 py-8">
          {jobAlertData.data.length ? (
            jobAlertData.data.map((v, i) => (
              <div className="rounded-lg bg-white px-3 py-3 sm:px-6 lg:px-8" key={i}>
                <div className="border-b border-gray-200 py-3">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl">
                        <img src={v.employerId.logo} alt="YouTube logo" className="h-9 w-9 object-contain" />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="font-semibold text-gray-900">{v.title}</h3>
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                            {v.jobType}
                          </span>
                        </div>

                        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500 md:text-base">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-gray-300" />
                            <span>{v.location.country}</span>
                            <span>{v.location.city}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            ${v.salary.minSalary}- ${v.salary.maxSalary}
                            {v.salary.period}
                          </div>

                          <div className="flex items-center gap-2">
                            <CalendarDays className="h-4 w-4 text-gray-300" />
                            <span>{date(v.expirationDate)}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 lg:justify-end">
                      {v.isActive ? (
                        <Link to={`/job-detail/${v._id}`}>
                          <button
                            className="cursor-pointer inline-flex items-center gap-2 rounded-md bg-blue-50 px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-100 md:text-base"
                            type="button"
                          >
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
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>no alert job found</p>
          )}
        </div>
      </main>
    </div>
  );
}
