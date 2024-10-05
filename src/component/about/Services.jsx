import React from "react";

const Services = ({ icon, title }) => {
  return (
    <div className="bg-[#F3F3F3] hover:bg-slate-300 group transition-all py-16 w-full flex flex-col items-center gap-6 cursor-pointer">
      <span className="group-hover:text-white transition-all">{icon}</span>
      <p className="text-primary font-primary text-lg font-medium group-hover:text-white transition-all">
        {title}
      </p>
    </div>
  );
};

export default Services;
