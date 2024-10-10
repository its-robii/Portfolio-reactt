import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
          <div className="container py-5 flex items-center justify-between">
            <div>
              <Link to="/">
                <img src="/logo.png.png" alt="logo" />
              </Link>
            </div>
    
            <div>
              <button
                className="md:hidden block"
                onClick={toggleMenu}
                aria-label="Toggle navigation"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
    
              <ul
                className={`${
                  isOpen ? "block" : "hidden"
                } md:flex gap-10 font-medium font-primary text-primary md:items-center md:static absolute top-[90px] left-0 w-full bg-white md:bg-transparent`}
              >
                <li>
                  <Link
                    to="/"
                    className="block md:inline transition-all hover:text-slate-400 py-2 md:py-0"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block md:inline transition-all hover:text-slate-400 py-2 md:py-0"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/layouts"
                    className="block md:inline transition-all hover:text-slate-400 py-2 md:py-0"
                  >
                    Portfolio Layouts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfoliosingle"
                    className="block md:inline transition-all hover:text-slate-400 py-2 md:py-0"
                  >
                    Portfolio Single
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="block md:inline transition-all hover:text-slate-400 py-2 md:py-0"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  );
};

export default Navbar;