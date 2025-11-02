import React from "react";
import CTACards from "../components/other/CTACards";

const AboutUs = () => {
  const stats = [
    {
      id: 1,
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      number: "1,75,324",
      label: "Live Job",
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      number: "97,354",
      label: "Companies",
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      number: "38,47,154",
      label: "Candidates",
    },
  ];

  const companyLogos = ["Amazon", "Google", "ENSIGMA", "NIO", "IEEE", "WIDE"];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Who We Are Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Content */}
          <div>
            <p className="text-blue-600 text-sm font-semibold uppercase mb-3">
              Who we are
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              We're highly skilled and professionals team.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Praesent non sem facilisis, hendrerit nisi vitae, volutpat quam.
              Aliquam metus mauris, semper eu eros vitae, blandit tristique
              metus. Vestibulum maximus nec justo sed maximus.
            </p>
          </div>

          {/* Right Stats */}
          <div className="space-y-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-blue-50 rounded-lg p-6 flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-white p-3 rounded-lg">{stat.icon}</div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">
                      {stat.number}
                    </p>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Logos */}
        <div className="mb-20">
          <div className="flex flex-wrap justify-center items-center gap-12">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="text-gray-400 text-2xl font-bold opacity-60"
              >
                {company}
              </div>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop"
              alt="Team member"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=300&fit=crop"
                alt="Team member"
                className="w-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&h=300&fit=crop"
                alt="Team member"
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=600&fit=crop"
              alt="Team meeting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-blue-600 text-sm font-semibold uppercase mb-3">
              Our Mission
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our mission is help people to find the perfect job.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Praesent non sem facilisis, hendrerit nisi vitae, volutpat quam.
              Aliquam metus mauris, semper eu eros vitae, blandit tristique
              metus. Vestibulum maximus nec justo sed maximus.
            </p>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=600&fit=crop"
              alt="Mission illustration"
              className="w-full max-w-md rounded-lg"
            />
          </div>
        </div>

        <CTACards />
      </div>
    </div>
  );
};

export default AboutUs;
