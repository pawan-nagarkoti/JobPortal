import React from "react";
import CTACards from "../components/other/CTACards";
import StatsSection from "../components/other/StatsSection";

const AboutUs = () => {
  const companyLogos = ["Amazon", "Google", "ENSIGMA", "NIO", "IEEE", "WIDE"];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Who We Are Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Content */}
          <div>
            <p className="text-blue-600 text-sm font-semibold uppercase mb-3">Who we are</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">We're highly skilled and professionals team.</h2>
            <p className="text-gray-600 leading-relaxed">
              Praesent non sem facilisis, hendrerit nisi vitae, volutpat quam. Aliquam metus mauris, semper eu eros
              vitae, blandit tristique metus. Vestibulum maximus nec justo sed maximus.
            </p>
          </div>

          {/* Right Stats */}
          <div className="space-y-4">
            <StatsSection />
          </div>
        </div>

        {/* Company Logos */}
        <div className="mb-20">
          <div className="flex flex-wrap justify-center items-center gap-12">
            {companyLogos.map((company, index) => (
              <div key={index} className="text-gray-400 text-2xl font-bold opacity-60">
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
            <p className="text-blue-600 text-sm font-semibold uppercase mb-3">Our Mission</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our mission is help people to find the perfect job.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Praesent non sem facilisis, hendrerit nisi vitae, volutpat quam. Aliquam metus mauris, semper eu eros
              vitae, blandit tristique metus. Vestibulum maximus nec justo sed maximus.
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
