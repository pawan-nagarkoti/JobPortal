import { useEffect, useState } from "react";
import { AppliedCandidate } from "../../../components/employer/appliedCandidate";
import Sidebar from "./Sidebar";
import { _get } from "../../../lib/api";
import { useLocation, useParams } from "react-router-dom";

export default function AppliedCandidateList() {
  const [candidate, setCandidate] = useState("");
  const { id } = useParams();

  const fetchJobList = async () => {
    try {
      const res = await _get(`api/job-application/fetch?jobId=${id}`);
      if (res.data.success) {
        setCandidate(res.data);
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    fetchJobList();
  }, []);
  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <ApplicantsHeader />
            <div className="grid grid-cols-4 gap-4 mt-4">
              {candidate?.data?.map((c, i) => (
                <div key={i}>
                  <AppliedCandidate candidate={c} />
                </div>
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
