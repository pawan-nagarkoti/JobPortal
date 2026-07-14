import Sidebar from "./Sidebar";
import { _get } from "../../../lib/api";
import { getCookie } from "../../../lib/cookies";
import CandidatesList from "../CandidateList";

export default function BookmarkCandidate() {
  const userId = getCookie("loginUserInfo");
  if (!userId) {
    alert("Employer Id is not found");
  }
  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <CandidatesList hideLocation={true} applicantId={userId?.id} />
          </div>
        </main>
      </div>
    </>
  );
}
