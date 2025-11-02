import { useState } from "react";
import HeroSection from "../components/other/HeroSection";
import StatsSection from "../components/other/StatsSection";
import FeaturedJobs from "../components/applicant/FeaturedJobs";
import TopCompanies from "../components/applicant/TopCompanies";
import CategoriesSection from "../components/applicant/CategoriesSection";
import CTACards from "../components/other/CTACards";
import { jobsObj } from "../lib/constant";

export default function Home() {
  const [jobs] = useState(jobsObj);

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
  return (
    <>
      <HeroSection onSearch={handleSearch} />
      <StatsSection />
      <FeaturedJobs jobs={jobs} />
      <TopCompanies companies={companies} />
      <CategoriesSection />
      <CTACards />
    </>
  );
}
