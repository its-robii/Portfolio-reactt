import React from "react";
import { FaFacebookF, FaTwitter, FaDribbble } from "react-icons/fa";
import { AiOutlinePinterest } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black m-auto pt-24 pb-8">
      <div className="container m-auto">
        <ul className="flex gap-3 md:gap-10 justify-center font-medium text-white">
          <li>
            <Link to="/" className="transition-all hover:text-slate-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="transition-all hover:text-slate-500">
              About
            </Link>
          </li>
          <li>
            <a href="#" className="transition-all hover:text-slate-500">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="transition-all hover:text-slate-500">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="transition-all hover:text-slate-500">
              Contact
            </a>
          </li>
        </ul>
        <ul className="flex gap-3 justify-center pt-10 pb-12">
          <li>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-extrabold text-xl"
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-extrabold text-xl"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-extrabold text-xl"
            >
              <FaDribbble />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-extrabold text-xl"
            >
              <AiOutlinePinterest />
            </a>
          </li>
        </ul>
      </div>
      <div className="py-9 border-t border-slate-700">
        <p className="text-white text-center">© 2020 CaliberThemes</p>
      </div>
    </footer>
  );
};

export default Footer;
