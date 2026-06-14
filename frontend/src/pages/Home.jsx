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

  const handleSearch = (searchTerm, location) => {
    console.log("Searching for:", searchTerm, "in", location);
    // Implement search functionality here
  };

  const companies = [
    {
      id: 1,
      name: "Dribbble",
      logo: "https://cdn.dribbble.com/assets/logo-small-2x-9fe74d2ad7b25fba0f50168523c15fda4c35534f9ea0b1011179275383035439.png",
      location: "Dhaka, Bangladesh",
      isFeatured: true,
      openPositions: 3,
      bgColor: "bg-pink-500",
    },
    {
      id: 2,
      name: "Dribbble",
      logo: "https://cdn.dribbble.com/assets/logo-small-2x-9fe74d2ad7b25fba0f50168523c15fda4c35534f9ea0b1011179275383035439.png",
      location: "Dhaka, Bangladesh",
      isFeatured: true,
      openPositions: 3,
      bgColor: "bg-pink-500",
    },
    {
      id: 3,
      name: "Dribbble",
      logo: "https://cdn.dribbble.com/assets/logo-small-2x-9fe74d2ad7b25fba0f50168523c15fda4c35534f9ea0b1011179275383035439.png",
      location: "Dhaka, Bangladesh",
      isFeatured: true,
      openPositions: 3,
      bgColor: "bg-pink-500",
    },
    {
      id: 4,
      name: "Dribbble",
      logo: "https://cdn.dribbble.com/assets/logo-small-2x-9fe74d2ad7b25fba0f50168523c15fda4c35534f9ea0b1011179275383035439.png",
      location: "Dhaka, Bangladesh",
      isFeatured: true,
      openPositions: 3,
      bgColor: "bg-pink-500",
    },
    {
      id: 5,
      name: "Dribbble",
      logo: "https://cdn.dribbble.com/assets/logo-small-2x-9fe74d2ad7b25fba0f50168523c15fda4c35534f9ea0b1011179275383035439.png",
      location: "Dhaka, Bangladesh",
      isFeatured: true,
      openPositions: 3,
      bgColor: "bg-pink-500",
    },
    {
      id: 6,
      name: "Dribbble",
      logo: "https://cdn.dribbble.com/assets/logo-small-2x-9fe74d2ad7b25fba0f50168523c15fda4c35534f9ea0b1011179275383035439.png",
      location: "Dhaka, Bangladesh",
      isFeatured: true,
      openPositions: 3,
      bgColor: "bg-pink-500",
    },
  ];

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
      <HeroSection onSearch={handleSearch} />
      <StatsSection />
      <FeaturedJobs jobs={jobList} />
      <TopCompanies companies={companies} />
      <CategoriesSection />
      <CTACards />
    </>
  );
}
