import { MoreVertical, Users, CheckCircle2, XCircle, PlusCircle, Eye, CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { date } from "../../lib/utils";

export default function JobList({ job }) {
  console.log(job);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const navigate = useNavigate();
  if (!job) return <p>loading...</p>;

  return (
    <div className="mx-auto max-w-7xl">
      <div className="rounded-xl border border-gray-200 bg-white mb-3">
        <div className="relative">
          <div className="grid grid-cols-12 items-center rounded-lg  border-gray-200 px-4 py-6 md:px-6">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-[18px] font-semibold text-gray-900">{job.title}</h2>
              <p className="mt-2 text-[15px] text-gray-500">
                {job.workType} <span className="mx-3">•</span> {date(job.expirationDate)}
              </p>
            </div>

            <div className="col-span-12 mt-4 flex items-center gap-10 md:col-span-4 md:mt-0">
              {job.isActive ? (
                <div className="flex items-center gap-2 text-green-500">
                  <CheckCircle size={22} />
                  <span className="text-[16px] font-medium">Active</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-500">
                  <XCircle size={22} />
                  <span className="text-[16px] font-medium">Expire</span>
                </div>
              )}

              <div className="flex items-center gap-2 text-gray-500">
                <Users size={22} />
                <span className="text-[16px]">556 Applications</span>
              </div>
            </div>

            <div className="col-span-12 mt-4 flex items-center justify-end gap-3 md:col-span-3 md:mt-0">
              <button
                className="rounded-md bg-gray-100 px-6 py-4 text-[16px] font-semibold text-blue-600 hover:bg-gray-200"
                onClick={() => navigate(`/employer/jobname/applicant-list/${job._id}`)}
                // onClick={() => navigate(`/employer/jobname/applicant-list/id=1`)}
              >
                View Applications
              </button>
              <button
                className="rounded-md bg-gray-100 p-3 text-gray-700 hover:bg-gray-200 cursor-pointer"
                onClick={() => setToggleDropdown((t) => !t)}
              >
                <MoreVertical size={22} />
              </button>
            </div>
          </div>

          {toggleDropdown && (
            <div className="absolute right-2 top-full z-50 mt-2 w-52 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
              <button className="flex w-full items-center gap-2 bg-blue-50 px-3 py-2.5 text-left text-sm font-medium text-blue-600">
                <PlusCircle size={16} />
                Promote Job
              </button>

              <button className="flex w-full items-center gap-2 px-3 py-2.5 text-left text-sm text-gray-600 hover:bg-gray-50">
                <Eye size={16} />
                View Detail
              </button>

              <button className="flex w-full items-center gap-2 px-3 py-2.5 text-left text-sm text-gray-400">
                <XCircle size={16} />
                Make it Expire
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
