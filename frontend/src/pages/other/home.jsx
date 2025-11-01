import { useState } from "react";
import FeaturedJobs from "../../components/employer/featuredJobs";
import HeroSection from "../../components/other/heroSection";
import StatsSection from "../../components/other/statsSection";
import CategoriesSection from "../../components/employer/categoriesSection";

export default function Home() {
  const [jobs, setJobs] = useState([
    {
      title: "Senior UX Designer",
      company: "Google Inc.",
      type: "Full-Time",
      salary: "$20k-25k",
      location: "San Francisco, CA",
      posted: "2 days ago",
      icon: "fab fa-google",
    },
    {
      title: "Frontend Developer",
      company: "Microsoft",
      type: "Full-Time",
      salary: "$30k-35k",
      location: "Seattle, WA",
      posted: "1 day ago",
      icon: "fab fa-microsoft",
    },
    {
      title: "Product Manager",
      company: "Amazon",
      type: "Full-Time",
      salary: "$40k-50k",
      location: "New York, NY",
      posted: "3 days ago",
      icon: "fab fa-amazon",
    },
    {
      title: "Data Scientist",
      company: "Facebook",
      type: "Full-Time",
      salary: "$35k-40k",
      location: "Austin, TX",
      posted: "1 week ago",
      icon: "fab fa-facebook",
    },
    {
      title: "Marketing Manager",
      company: "Apple Inc.",
      type: "Part-Time",
      salary: "$25k-30k",
      location: "Los Angeles, CA",
      posted: "5 days ago",
      icon: "fab fa-apple",
    },
    {
      title: "Backend Developer",
      company: "Tesla",
      type: "Full-Time",
      salary: "$35k-45k",
      location: "Palo Alto, CA",
      posted: "4 days ago",
      icon: "fas fa-bolt",
    },
  ]);

  const handleSearch = (searchTerm, location) => {
    console.log("Searching for:", searchTerm, "in", location);
    // Implement search functionality here
  };
  return (
    <>
      <HeroSection onSearch={handleSearch} />
      <StatsSection />
      <FeaturedJobs jobs={jobs} />
      <CategoriesSection />
    </>
  );
}
