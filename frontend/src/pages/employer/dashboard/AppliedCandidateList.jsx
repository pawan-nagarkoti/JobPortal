import { useState } from "react";
import CandidateCard from "../../../components/applicant/CandidateCard";
import Sidebar from "./Sidebar";

export default function AppliedCandidateList() {
  const candidate = {
    name: "Ronald Richards",
    role: "UI/UX Designer",
    avatar: "https://avatar.iran.liara.run/public/65",
    experience: "7 Years Experience",
    education: "Education: Master Degree",
    appliedDate: "Applied: Jan 23, 2022",
    cvUrl: "/path/to/cv.pdf",
  };
  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <ApplicantsHeader />
            <div className="grid grid-cols-4 gap-4 mt-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <CandidateCard candidate={candidate} name="pawan" />
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

const ApplicantsHeader = () => {
  const [sortBy, setSortBy] = useState("shortlist");

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left Side */}
        <h2 className="text-lg font-bold text-gray-900">All Applicants</h2>

        {/* Right Side */}
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500"
          >
            <option value="shortlist">Shortlist</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
    </div>
  );
};
