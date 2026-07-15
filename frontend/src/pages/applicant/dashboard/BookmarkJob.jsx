import React, { useEffect, useState } from "react";
import {
  MapPin,
  DollarSign,
  CircleX,
  CalendarDays,
  Bookmark,
  ArrowRight,
} from "lucide-react";
import LeftSidebar from "./leftSidebar";
import { _get } from "../../../lib/api";
import { remainingDate } from "../../../lib/utils";
import { Link } from "react-router-dom";

export default function BookmarkJob() {
  const [bookmarkJob, setBookmarJob] = useState("");

  const fetchBookmarkJob = async () => {
    const response = await _get("/api/bookmark-job/fetch");
    if (response.data.success) {
      setBookmarJob(response.data);
    }
    console.log(response.data.data);
  };
  useEffect(() => {
    fetchBookmarkJob();
  }, []);
  return (
    <div className="flex min-h-screen bg-gray-50">
      <LeftSidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="rounded-lg bg-white px-4 py-4 sm:px-6 lg:px-8">
            {bookmarkJob?.data?.length > 0 ? (
              bookmarkJob.data.map((b, i) => (
                <div className="border-t border-gray-200 py-6" key={i}>
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border">
                        <img
                          src={b.applicantId?.profilePicture}
                          alt="YouTube logo"
                          className="h-9 w-9 object-contain"
                        />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-lg font-semibold text-gray-900 md:text-xl">
                            {b.jobId.title}
                          </h3>
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                            {b.jobId.workType}
                          </span>
                        </div>

                        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500 md:text-base">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-gray-300" />
                            <span>
                              {b.jobId.location.country},{" "}
                              {b.jobId.location.city}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-gray-300" />
                            <span>
                              ${b.jobId.salary.minSalary}- $
                              {b.jobId.salary.maxSalary}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <CalendarDays className="h-4 w-4 text-gray-300" />
                            <span>
                              {remainingDate(b.jobId.expirationDate)} Days
                              Remaining
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 lg:justify-end">
                      {b.jobId.isActive ? (
                        <Link to={`/job-detail/${b.jobId._id}`}>
                          <button className="inline-flex items-center gap-2 rounded-md bg-blue-50 px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-100 md:text-base">
                            Apply Now
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </Link>
                      ) : (
                        <button className="rounded-md bg-gray-100 px-6 py-3 text-sm  text-gray-500  cursor-not-allowed md:text-base">
                          Deadline Expired
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No job is bookmarked</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
