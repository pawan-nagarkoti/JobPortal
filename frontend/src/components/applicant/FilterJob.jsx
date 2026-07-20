import React, { use, useEffect, useState } from "react";
import { JOB_LEVELS, JOB_TYPES, WORK_TYPE } from "../../lib/constant";
import { Slider } from "@/components/ui/slider";
import { useSearchParams } from "react-router-dom";

export default function FilterJob() {
  const [isJobType, setIsJobType] = useState("");
  const [isWorkType, setIsWorkType] = useState("");
  const [isSalary, setIsSalary] = useState([0, 500000]);
  const [isFeatured, setIsFeatured] = useState(false);
  const [, setSearchParams] = useSearchParams("");

  const handleFilter = () => {
    setSearchParams((prev) => {
      if (isFeatured) {
        prev.set("isFeatured", isFeatured);
      } else {
        prev.delete("isFeatured");
      }
      if (isJobType) {
        prev.set("jobType", isJobType);
      } else {
        prev.delete("jobType");
      }
      if (isWorkType) {
        prev.set("workType", isWorkType);
      } else {
        prev.delete("workType");
      }

      if (isSalary.length > 0 && (isSalary[0] > 0 || isSalary[1] < 500000)) {
        prev.set("salary", `${isSalary[0]}-${isSalary[1]}`);
      } else {
        prev.delete("salary");
      }

      return prev;
    });
  };

  const handleClearAll = () => {
    setSearchParams("");
    setIsJobType("");
    setIsWorkType("");
    setIsFeatured(false);
    setIsSalary([0, 500000]);
  };

  return (
    <>
      <aside className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-sm mt-3">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Filter Jobs</h2>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700" onClick={handleClearAll}>
            Clear all
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">Job Type</label>
            <select
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              value={isJobType}
              onChange={(e) => setIsJobType(e.target.value)}
            >
              <option>Select Job Type</option>
              {JOB_TYPES?.map((j, i) => (
                <option key={i}>{j.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">Work Type</label>
            <select
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              value={isWorkType}
              onChange={(e) => setIsWorkType(e.target.value)}
            >
              <option>Select job type</option>
              {WORK_TYPE.map((w, i) => (
                <option key={i}>{w.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">Salary Range</label>
            <Slider value={isSalary} onValueChange={setIsSalary} min={0} max={50000} step={1} />
            <div className="mt-2 flex justify-between text-sm text-gray-500">
              <span>${isSalary[0]}</span>
              <span>${isSalary[1]}</span>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-gray-800">Featured Job</p>
              <p className="text-xs text-gray-500">Show only Featured jobs</p>
            </div>

            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                className="peer sr-only"
                checked={isFeatured}
                onChange={(e) => setIsFeatured(e.target.checked)}
              />
              <div className="h-6 w-11 rounded-full bg-gray-300 transition peer-checked:bg-blue-600 after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-5"></div>
            </label>
          </div>
        </div>

        <button
          className="mt-8 w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
          onClick={handleFilter}
        >
          Apply Filters
        </button>
      </aside>
    </>
  );
}
