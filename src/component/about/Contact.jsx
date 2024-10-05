import React from "react";

const Contact = () => {
  return (
    <section className=" mb-24 ">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center bg-[#F3F3F3] py-[80px] px-16">
          <h2 className="text-primary font-primary text-3xl md:text-[42px] font-medium">
            Let’s work together!
          </h2>
          <a
            href="/"
            className="py-5 px-9 bg-black text-white font-primary text-xs font-medium"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
