import React from 'react'
import { FaFacebookF,FaTwitter,FaDribbble } from "react-icons/fa";
import { AiOutlinePinterest } from "react-icons/ai";
const Footerr = () => {
  return (
    <footer className="py-9 border-t-[1px] ">
        <div className="container flex justify-between">
            <div>
                <p className="text-sm font-primary font-normal text-secondery">© 2020 CaliberThemes</p>
            </div>
            <div>
                <ul className="flex gap-5">
                    <li>
                        <a href="#"><FaFacebookF /></a>
                    </li>
                    <li>
                        <a href="#"><FaTwitter /></a>
                    </li>
                    <li>
                        <a href="#"><FaDribbble /></a>
                    </li>
                    <li>
                        <a href="#"><AiOutlinePinterest /></a>
                    </li>
                </ul>
            </div>
        </div>

    </footer>
  );
};

export default Footerr;
