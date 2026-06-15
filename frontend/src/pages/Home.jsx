import { useState, useEffect } from "react";
import HeroSection from "../components/other/HeroSection";
import StatsSection from "../components/other/StatsSection";
import FeaturedJobs from "../components/applicant/FeaturedJobs";
import TopCompanies from "../components/applicant/TopCompanies";
import CategoriesSection from "../components/applicant/CategoriesSection";
import CTACards from "../components/other/CTACards";
import { _get } from "../lib/api";

export default function Home() {
  const [jobList, setJobList] = useState("");
  const [companies, setCompanies] = useState("");

  const handleSearch = (searchTerm, location) => {
    console.log("Searching for:", searchTerm, "in", location);
    // Implement search functionality here
  };

  // fetch all jobs

  const fetchJobs = async () => {
    const fetchJobsResponse = await _get("api/jobList/fetch");
    if (fetchJobsResponse.data.success) {
      setJobList(fetchJobsResponse.data);
    }
  };

  // fetch employer
  const fetchEmployers = async () => {
    const fetchEmployersResponse = await _get("api/employer/fetch");
    if (fetchEmployersResponse.data.success) {
      setCompanies(fetchEmployersResponse.data);
    }
  };

  useEffect(() => {
    fetchJobs();
    fetchEmployers();
  }, []);

  return (
    <>
      <HeroSection onSearch={handleSearch} />
      <StatsSection />
      <FeaturedJobs jobs={jobList} />
      <TopCompanies companies={companies} />
      <CategoriesSection />
      <CTACards />
    </>
  );
}
