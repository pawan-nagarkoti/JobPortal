import React from "react";

const CTACards = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Become a Candidate Card */}
          <div className="relative bg-gray-100 rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop"
                alt="Laptop workspace"
                className="w-full h-full object-cover opacity-90"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100/95 to-gray-100/80"></div>
            </div>

            {/* Content */}
            <div className="relative p-8 md:p-12 min-h-[320px] flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Become a Candidate
              </h2>
              <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                cursus a dolor convallis efficitur.
              </p>
              <div>
                <button className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg group">
                  Register Now
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Become an Employer Card */}
          <div className="relative bg-blue-600 rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=500&fit=crop"
                alt="Professional businessman"
                className="w-full h-full object-cover opacity-20"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/95 to-blue-700/95"></div>
            </div>

            {/* Content */}
            <div className="relative p-8 md:p-12 min-h-[320px] flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Become a Employers
              </h2>
              <p className="text-blue-100 mb-8 max-w-md leading-relaxed">
                Cras in massa pellentesque, mollis ligula non, luctus dui. Morbi
                sed efficitur dolor. Pelque augue risus, aliqu.
              </p>
              <div>
                <button className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-100 transition-all duration-300 shadow-md hover:shadow-lg group">
                  Register Now
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Optional: Professional Image */}
            <div className="absolute bottom-0 right-0 hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces"
                alt="Professional"
                className="h-80 w-auto object-cover opacity-80 mix-blend-overlay"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTACards;
