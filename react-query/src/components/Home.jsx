import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://source.unsplash.com/random/1600x900')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay */}

        <div className="relative z-10 max-w-3xl text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Welcome to the Blog World
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Explore articles on various topics, from technology and lifestyle to art and culture. Discover stories that inspire and inform.
          </p>

          <Link
            to="/posts"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition transform hover:scale-105"
          >
            View Posts
          </Link>
        </div>
      </div>

      {/* Featured Articles Section */}
      <div className="bg-gray-800 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">Featured Articles</h2>
          <p className="text-lg text-gray-400 mb-12">Handpicked articles just for you!</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Featured Article Card */}
            <div className="bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-white mb-4">The Future of Technology</h3>
              <p className="text-gray-300 mb-4">
                An in-depth look into the latest technological trends shaping our world.
              </p>
              <Link to="/posts" className="text-blue-400 hover:underline">
                Read More
              </Link>
            </div>

            <div className="bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-white mb-4">Living a Minimalist Life</h3>
              <p className="text-gray-300 mb-4">
                A practical guide to decluttering and embracing simplicity.
              </p>
              <Link to="/posts" className="text-blue-400 hover:underline">
                Read More
              </Link>
            </div>

            <div className="bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-white mb-4">Exploring Art & Culture</h3>
              <p className="text-gray-300 mb-4">
                Discover the beauty of art, history, and cultural experiences around the globe.
              </p>
              <Link to="/posts" className="text-blue-400 hover:underline">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2025 My Blog. All rights reserved.</p>
          <p className="mt-2">Crafted with ❤️ and React</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
