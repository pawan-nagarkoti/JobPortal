import React, { useState } from "react";

const BlogSidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState("Code & Programing");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "Graphics & Design",
    "Code & Programing",
    "Digital Marketig",
    "Video & Animation",
    "Musica & Audio",
    "Finance & Accounting",
    "Health & Care",
    "Data Science",
  ];

  const recentPosts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      date: "Nov 12, 2021",
      comments: 25,
      title:
        "Integer volutpat fringilla ipsum, nec tempor risus facilisis eget.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
      date: "Nov 12, 2021",
      comments: 25,
      title:
        "Integer volutpat fringilla ipsum, nec tempor risus facilisis eget.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
      date: "Nov 12, 2021",
      comments: 25,
      title:
        "Integer volutpat fringilla ipsum, nec tempor risus facilisis eget.",
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop",
  ];

  const popularTags = [
    "Design",
    "Programming",
    "Health & Care",
    "Motion Design",
    "Photography",
    "Politics",
  ];

  return (
    <div className="w-full max-w-sm space-y-6">
      {/* Search Widget */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Category Widget */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Category</h3>
          <button className="text-gray-400 hover:text-gray-600">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
        <div className="space-y-3">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={category === selectedCategory}
                onChange={() => setSelectedCategory(category)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Recent Post Widget */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Post</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex gap-3">
              <img
                src={post.image}
                alt="Post"
                className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center text-xs text-gray-500 mb-1">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.comments} Comments</span>
                </div>
                <p className="text-sm text-gray-700 line-clamp-2">
                  {post.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Widget */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Gallery</h3>
        <div className="grid grid-cols-3 gap-2">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full aspect-square object-cover rounded-lg hover:opacity-80 transition cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* Popular Tag Widget */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tag</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <button
              key={tag}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                tag === "Programming"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
