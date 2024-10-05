import React from 'react'
import { FaFacebookF,FaTwitter,FaDribbble } from "react-icons/fa";

const Share = () => {
  return (
    <section className="mb-[70px]">
    <div className="container grid sm:grid-cols-12">
      <div className="sm:col-span-9 bg-[#F5F5F5] flex justify-between">
      <div>
      <h3 className="text-primary font-primary font-medium text-[22px] pl-6 py-[18px]">
          Share
        </h3>
      </div>
        <div>
          <ul  className="flex pr-6 py-[18px] gap-[18px] text-xl">
              <li>
                  <a href="#"><FaFacebookF/></a>
              </li>
              <li>
                  <a href="#"><FaTwitter/></a>
              </li>
              <li>
                  <a href="#"><FaDribbble/></a>
              </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Share