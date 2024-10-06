import React from "react";

const Banner = () => {
  return (
    <section className="bg-[url('/banner.png')] w-full h-12  pb-52 pt-24  sm:py-56 xl:py-80  bg-center bg-cover">
      <div className="container m-auto">
        <h1 className="font-medium text-3xl md:text-6xl text-primary text-center">
          Creative Studio
        </h1>
        <p className=" text-sm md:text-xl text-center text-secondery pt-5">
          We turn ideas into reality.
        </p>
      </div>
    </section>
  );
};

export default Banner;
