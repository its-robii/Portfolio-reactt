import React from "react";

const Portfolio = () => {
  return (
    <section className="mt-10 mb-24">
      <div className="container m-auto">
        <ul className="flex justify-center  font-normal gap-3.5 text-base text-slate-900 mb-9">
          <li>
            <a href="#">All /</a>
          </li>
          <li>
            <a href="#">Branding /</a>
          </li>
          <li>
            <a href="#">Illustration /</a>
          </li>
          <li>
            <a href="#">Logo</a>
          </li>
        </ul>

        <div className="grid grid-cols-3 gap-7">
          <img src="/container1.png" alt="" className="w-full" />
          <img src="/Container 2.png" alt="" className="w-full" />
          <img src="/Container 3.png" alt="" className="w-full" />
          <img src="/Container 4.png" alt="" className="w-full" />
          <img src="/Container 5.png" alt="" className="w-full" />
          <img src="/Container 6.png" alt="" className="w-full" />
          <img src="/Container 7.png" alt="" className="w-full" />
          <img src="/Container 8.png" alt="" className="w-full" />
          <img src="/Container 9.png" alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
