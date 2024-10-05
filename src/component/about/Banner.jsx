import React from "react";

const Banner = () => {
  return (
    <section className="pt-[70px] bg-[#F5F5F5]">
      <div className="container flex items-center">
        <div className="w-3/5">
          <h1 className="text-3xl md:text-6xl font-primary text-primary font-medium">
            Mike Reaves
          </h1>
          <p className="text-xl md:text-2xl font-primary text-secondery font-normal">
            Product designer
          </p>
        </div>
        <div className="w-2/5">
          <img src="/about-banner.png" alt="banner" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
