import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuQrCode } from "react-icons/lu";

const MenuBars = () => {
  return (
    <section className="mb-[70px] mt-10">
    <div className="container bg-[#F5F5F5]">
        <ul className="py-10 flex justify-between">
            <li className="flex justify-center gap-2">
                <span className="pt-1"><FaArrowLeftLong /></span>
                <a href="#">PREV</a>
            </li>
            <li>
                <a href="#" className="text-primary text-2xl"><LuQrCode /></a>
            </li>
            <li className="flex justify-center gap-2">
                <a href="#">NEXT</a>
                <span className="pt-1"><FaArrowRightLong /></span>
            </li>
        </ul>
    </div>
</section>
  );
};

export default MenuBars;