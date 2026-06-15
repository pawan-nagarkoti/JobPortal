import JobCard from "../../components/applicant/JobCard";
import SearchBar from "../../components/other/SearchBar";
import { _get } from "../../lib/api";
import { useEffect, useState } from "react";

export default function JobPage() {
  const [jobList, setJobList] = useState("");

  // fetch all jobs
  const fetchJobs = async () => {
    const fetchJobsResponse = await _get("api/jobList/fetch");
    if (fetchJobsResponse.data.success) {
      setJobList(fetchJobsResponse.data);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <div className="mt-5 mb-4">
          <SearchBar />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
          {jobList.data?.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    </>
  );
}
