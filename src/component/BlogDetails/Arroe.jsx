import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Arroe = () => {
  return (
    <section className="mb-5">
    <div className="container grid grid-cols-12">
      <div className="col-span-9 flex justify-between ">
        <ul className="flex gap-2 items-center">
          <li>
            <a href="#">
              <FaArrowLeftLong />
            </a>
          </li>
          <li>
            <a href="#" className="">
              Prev
            </a>
          </li>
        </ul>
        <div>
          <ul className="flex gap-2 items-center ">
            <li>
              <a href="#">Next</a>
            </li>
            <li>
              <a href="#" className="font-primary  text-base">
                <FaArrowRightLong />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Arroe