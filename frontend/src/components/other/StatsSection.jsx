import React from "react";

const StatsSection = () => {
  const stats = [
    { number: "1,75,324", label: "Live Jobs", icon: "fa-briefcase" },
    { number: "97,354", label: "Companies", icon: "fa-building" },
    { number: "38,47,154", label: "Candidates", icon: "fa-users" },
    { number: "7,532", label: "New Jobs", icon: "fa-plus-circle" },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
                <i className={`fas ${stat.icon} text-primary text-2xl`}></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
