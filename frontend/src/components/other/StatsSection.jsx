import React from "react";
import { useEffect } from "react";
import { _get } from "../../lib/api";
import { useState } from "react";

const StatsSection = () => {
  const [count, setCount] = useState("");

  const fetchTotalCount = async () => {
    try {
      const res = await _get("/api/totalCount/count");
      if (res.data.success) {
        setCount(res.data.data);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchTotalCount();
  }, []);

  if (!count) return "loading...";

  const stats = [
    { number: count?.activeJobs, label: "Live Jobs", icon: "fa-briefcase" },
    { number: count?.companies, label: "Companies", icon: "fa-building" },
    { number: count?.candidates, label: "Candidates", icon: "fa-users" },
    { number: count?.newJobs, label: "New Jobs", icon: "fa-plus-circle" },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
                <i className={`fas ${stat.icon} text-primary text-2xl`}></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
