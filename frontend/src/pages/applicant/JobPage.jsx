import JobCard from "../../components/applicant/JobCard";
import { BreadcrumbSection } from "../../components/other/Breadcrumb";
import SearchBar from "../../components/other/SearchBar";
import { jobsObj } from "../../lib/constant";

export default function JobPage() {
  return (
    <>
      <BreadcrumbSection />
      <div className="container mx-auto">
        <div className="mt-5 mb-4">
          <SearchBar />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobsObj.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    </>
  );
}
