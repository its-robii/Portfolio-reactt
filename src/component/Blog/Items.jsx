import React from "react";
import { Link } from "react-router-dom";


const Items = ({data}) => {
  console.log(data);
  
  return (
    <section className="pt-10 ">
      <div className="container gap-12  grid sm:grid-cols-12 pb-[60px]">
        <div className="sm:col-span-7">
          <img src={data.images[0]} alt="items" className="w-full" />
        </div>
        <div className="sm:col-span-5 place-content-center">
          <h2 className="text-3xl font-semibold font-primary text-primary ">
            {data.title}
          </h2>
          <p className="text-sm font-semibold font-primary text-primary pt-3 pb-5">
            {new Date(data.creationAt).toDateString()}
          </p>
          <p className="text-sm font-primary font-normal text-secondery leading-7 pb-8">
           {data.description.substring(0,150)}...
          </p>
         <Link to={`/details/${data.id}`} className="text-sm font-primary font-medium text-primary border-2 border-[#151515] py-2 px-5">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Items;