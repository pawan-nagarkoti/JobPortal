import React from "react";

const CategoriesSection = () => {
  const categories = [
    {
      name: "Technology",
      icon: "fa-laptop-code",
      jobs: 2534,
      color: "bg-blue-50 text-blue-600",
    },
    {
      name: "Marketing",
      icon: "fa-bullhorn",
      jobs: 1853,
      color: "bg-purple-50 text-purple-600",
    },
    {
      name: "Design",
      icon: "fa-palette",
      jobs: 1247,
      color: "bg-pink-50 text-pink-600",
    },
    {
      name: "Healthcare",
      icon: "fa-heartbeat",
      jobs: 3421,
      color: "bg-red-50 text-red-600",
    },
    {
      name: "Finance",
      icon: "fa-chart-line",
      jobs: 2156,
      color: "bg-green-50 text-green-600",
    },
    {
      name: "Education",
      icon: "fa-graduation-cap",
      jobs: 1674,
      color: "bg-yellow-50 text-yellow-600",
    },
    {
      name: "Sales",
      icon: "fa-shopping-cart",
      jobs: 2842,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      name: "Engineering",
      icon: "fa-cogs",
      jobs: 1923,
      color: "bg-orange-50 text-orange-600",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Categories
          </h2>
          <p className="text-gray-600">Explore jobs by category</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition cursor-pointer text-center"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 ${category.color} rounded-full mb-4`}
              >
                <i className={`fas ${category.icon} text-2xl`}></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500">
                {category.jobs} jobs available
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
