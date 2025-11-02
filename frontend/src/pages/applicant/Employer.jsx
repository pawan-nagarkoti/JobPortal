import React from "react";
import SearchBar from "../../components/other/SearchBar";
import { BreadcrumbSection } from "../../components/other/Breadcrumb";

export default function Employer() {
  return (
    <>
      <BreadcrumbSection />
      <div className="container mx-auto">
        <div className="mt-5 mb-4">
          <SearchBar />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <h1>employer grid</h1>
        </div>
      </div>
    </>
  );
}
