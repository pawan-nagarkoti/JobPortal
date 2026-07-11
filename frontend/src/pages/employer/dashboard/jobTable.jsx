import JobList from "../../../components/employer/jobList";
import { _get } from "../../../lib/api";
import { getCookie } from "../../../lib/cookies";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";

export default function JobTable() {
  const [job, setJob] = useState("");

  const userId = getCookie("loginUserInfo");

  const FetchEmployerOnTheBasisOfLoginUser = async () => {
    try {
      if (!userId) return;
      const response = await _get(`api/employer/fetch?loginUserId=${userId.id}`);
      if (response.data.success) {
        return response.data.data[0]._id;
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const fetchJobList = async () => {
    const employerId = await FetchEmployerOnTheBasisOfLoginUser();
    try {
      const res = await _get(`api/jobList/fetch?employerId=${employerId}`);
      if (res.data.success) {
        setJob(res.data);
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
            {job?.data?.map((v, i) => (
              <div key={i}>
                <JobList job={v} />
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
