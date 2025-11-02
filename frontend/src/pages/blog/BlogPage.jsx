import React from "react";
import BlogCard from "../../components/grids/BlogCard";
import BlogSidebar from "../../components/other/BlogSidebar";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      image: "/images/blog1.jpg",
      date: "Nov 12, 2021",
      comments: 25,
      title: "Proin sit amet massa eget odio consectetur ultricies.",
      excerpt:
        "Integer imperdiet mauris eget nisi ultrices, quis hendrerit est consequat. Vivamus et volutpat odio. Maecenas porta erat sed massa bibendum pellentesque.",
    },
    {
      id: 2,
      image: "/images/blog2.jpg",
      date: "Nov 15, 2021",
      comments: 18,
      title: "Another blog post title here",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto p-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content - Left Side */}
            {/* Sidebar - Right Side */}
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
            <div className="lg:col-span-3">
              <div className="space-y-6">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
