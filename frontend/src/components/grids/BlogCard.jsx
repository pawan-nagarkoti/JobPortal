import React from "react";

const BlogCard = () => {
  return (
    <div className="max-w-4xl bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image */}
        <div className="md:w-1/3">
          <img
            src="/api/placeholder/400/300"
            alt="Blog post"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="md:w-2/3">
          {/* Date and Comments */}
          <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Nov 12, 2021</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>25 Comments</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Proin sit amet massa eget odio consectetur ultricies.
          </h3>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            Integer imperdiet mauris eget nisi ultrices, quis hendrerit est
            consequat. Vivamus et volutpat odio. Maecenas porta erat sed massa
            bibendum pellentesque.
          </p>

          {/* Read More Link */}
          <a
            href="#"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition"
          >
            Read more
            <svg
              className="w-5 h-5 ml-2"
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
