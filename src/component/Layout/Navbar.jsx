import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="relative">
      <div className="container py-5  flex items-center justify-between">
        <Link to="/" className="w-1/4">
          <img src="/logo.png.png" alt="logo" />
        </Link>
       <button onClick={() => setShow(!show)} className="block md:hidden">
       <FaBarsStaggered />
       </button>
        <ul className={`absolute top-full left-0 md:static bg-white h-screen md:h-auto w-full md:w-fit flex flex-col md:flex-row items-center gap-10 font-medium font-primary text-primary transition-all ${
          show ? "translate-x-0" : "-translate-x-full md:translate-x-0" }`}>
          <li>
            <Link to="/" className="transition-all hover:text-secondery">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="transition-all hover:text-secondery">
              About
            </Link>
          </li>
          <li>
            <Link to="/layouts" className="transition-all hover:text-secondery">
              Portfolio Layouts
            </Link>
          </li>
          <li>
            <Link to="/portfoliosingle" className="transition-all hover:text-secondery">
              Portfolio Single
            </Link>
          </li>
          <li>
            <Link to="/blog" className="transition-all hover:text-secondery">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
