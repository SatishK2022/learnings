import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkClass =
    "px-4 py-2 text-sm font-medium hover:text-blue-400 transition";

  return (
    <nav className="bg-gray-800 shadow-md sticky top-0">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">My Blog</h1>
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${navLinkClass} text-blue-400` : navLinkClass
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              isActive ? `${navLinkClass} text-blue-400` : navLinkClass
            }
          >
            Posts
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${navLinkClass} text-blue-400` : navLinkClass
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
