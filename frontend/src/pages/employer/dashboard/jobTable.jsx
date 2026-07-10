import React from "react";
import JobList from "../../../components/employer/jobList";
import Sidebar from "./Sidebar";

export default function JobTable() {
  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <JobList />
          </div>
        </main>
      </div>
    </>
  );
}
