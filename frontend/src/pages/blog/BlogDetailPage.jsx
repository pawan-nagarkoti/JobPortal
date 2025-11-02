import React from "react";
import BlogSidebar from "../../components/other/BlogSidebar";

export default function BlogDetailPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto p-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>

            <div className="lg:col-span-3">
              <article className="bg-white rounded-lg">
                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                  20 cool fonts for web and graphic design
                </h1>

                {/* Author, Date, Comments */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                      alt="Kevin Gilbert"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700">
                      Kevin Gilbert
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 mr-1 text-blue-600"
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
                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 mr-1 text-blue-600"
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

                {/* Featured Image */}
                <div className="mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop"
                    alt="Featured"
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>

                {/* Article Content */}
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Check out these 20 cool fonts for your next web or graphic
                    design project. Typography, font, and typeface are focal
                    design elements.
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Their aesthetic nature influences people's perception of a
                    brand, making font all the more necessary for digital
                    designers to consider when designing for the web and beyond.
                    Font goes the extra mile. It cements a brand's messaging,
                    aligning a brand to its target audience with each line of
                    header text and subtext within a web design. Below you'll
                    find 20 cool fonts worth checking out for personal use or
                    your next web or graphic design project. And don't worry;
                    we've made sure to include both free and paid fonts!
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    The Graphik family has 18 different styles, from bold to
                    regular, compact light, semibold, medium, and so on. Graphik
                    is a gorgeous typeface with a wide range of font styles,
                    each contemporary in its own respect.
                  </p>

                  {/* Quote Block */}
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                    <div className="flex">
                      <svg
                        className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-gray-700 italic text-lg leading-relaxed">
                        Vintage meets vogue is the only way to describe this
                        serif typeface. Neue World encompasses the mode
                        high-fashion aesthetic of the 1960s with a commercial
                        take.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    EB Garamond and Relative (free+paid).
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Relative is an OpenType sans-serif font known for its range.
                    Designed by The Entente in 2011, this type font family comes
                    in two halves: Book to Black (with italics) and faux
                    monospace. This range gives you versatility and readability.
                    Coming in four weights and 12 styles, Relative is great for
                    both personal and commercial use due to its duality.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-8">
                    If you're looking for a serif font that is both girly and
                    refined but want to explore typefaces outside of the typical
                    Playfair Display, EB Garamond is the font you've been
                    seeking.
                  </p>

                  {/* Image Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <img
                      src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop"
                      alt="Design 1"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop"
                      alt="Design 2"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                      alt="Design 3"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                      alt="Design 4"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
