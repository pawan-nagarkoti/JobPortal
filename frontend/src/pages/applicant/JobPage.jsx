import JobCard from "../../components/applicant/JobCard";
import SearchBar from "../../components/other/SearchBar";
import { _get } from "../../lib/api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function JobPage() {
  const [jobList, setJobList] = useState("");
  const [searchParams] = useSearchParams();
  const [, setSearchParams] = useSearchParams();

  const title = searchParams.get("title") || "";
  const country = searchParams.get("country") || "";
  const city = searchParams.get("city") || "";
  const jobType = searchParams.get("jobType") || "";
  const workType = searchParams.get("workType") || "";
  const salary = searchParams.get("salary") || "";
  const isFeatured = searchParams.get("isFeatured") || "";

  // fetch all jobs
  const fetchJobs = async () => {
    const fetchJobsResponse = await _get(
      `api/jobList/fetch?title=${title}&country=${country}&city=${city}&jobType=${jobType}&isFeatured=${isFeatured}&salary=${salary}&workType=${workType}`,
    );
    if (fetchJobsResponse.data.success) {
      setJobList(fetchJobsResponse.data);
    }
  };

  useEffect(() => {
    setSearchParams({}); // delete all query param after refresh page
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [searchParams]);

  if (!jobList) return "Loding...";

  return (
    <>
      <div className="container mx-auto">
        {jobList.data.length ? (
          <>
            <div className="mt-5 mb-4">
              <SearchBar />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
              {jobList.data?.map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </div>
          </>
        ) : (
          <p className="text-center my-5">No job found</p>
        )}
      </div>
    </>
  );
}
