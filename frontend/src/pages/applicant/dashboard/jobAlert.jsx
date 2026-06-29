import React from "react";
import {
  MapPin,
  DollarSign,
  CircleX,
  CalendarDays,
  Bookmark,
  ArrowRight,
} from "lucide-react";
import LeftSidebar from "./leftSidebar";

export default function JobAlert() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <LeftSidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="rounded-lg bg-white px-4 py-4 sm:px-6 lg:px-8">
            <div className="border-t border-gray-200 py-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-red-600">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                      alt="YouTube logo"
                      className="h-9 w-9 object-contain"
                    />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold text-gray-900 md:text-xl">
                        UI/UX Designer
                      </h3>
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                        Full Time
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500 md:text-base">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-300" />
                        <span>Minnesota, USA</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-gray-300" />
                        <span>$10K-$15K</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-gray-300" />
                        <span>4 Days Remaining</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 lg:justify-end">
                  <button className="text-gray-900 hover:text-blue-600">
                    <Bookmark className="h-5 w-5 fill-current" />
                  </button>

                  <button className="inline-flex items-center gap-2 rounded-md bg-blue-50 px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-100 md:text-base">
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
