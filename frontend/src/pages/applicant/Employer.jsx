import React, { useEffect, useState } from "react";
import SearchBar from "../../components/other/SearchBar";
import { _get } from "../../lib/api";
import CompanyCard from "../../components/applicant/CompanyCard";

export default function Employer() {
  const [companies, setCompanies] = useState("");

  // fetch employer
  const fetchEmployers = async () => {
    const fetchEmployersResponse = await _get("api/employer/fetch");
    if (fetchEmployersResponse.data.success) {
      setCompanies(fetchEmployersResponse.data);
    }
  };

  useEffect(() => {
    fetchEmployers();
  }, []);

  if (!companies) return "loading...";

  return (
    <>
      <div className="container mx-auto">
        {companies.data.length ? (
          <>
            <div className="mt-5 mb-4">
              <SearchBar />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
              {companies?.data?.map((company, i) => (
                <CompanyCard key={i} company={company} />
              ))}
            </div>
          </>
        ) : (
          <p className="text-center my-5">No companies found</p>
        )}
      </div>
    </>
  );
}
