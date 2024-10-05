import React from "react";
import EduItems from "./EduItems";

const Education = () => {
  return (
    <section className="pb-24">
      <div className="container">
        <h2 className="font-primary text-primary text-4xl font-medium">
          Education / Experiences
        </h2>
        <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-x-8">
          <EduItems date="2015 - 2016" styles="border-b mb-5 pb-5">
            I am a graduate of the design at the Newyork University.
          </EduItems>
          <EduItems date="2017 - 2018" styles="border-b mb-5 pb-5">
            I enjoyed working with zentech technology as creative director.
          </EduItems>
          <EduItems date="2014 - 2015" styles="border-b sm:border-none mb-5 pb-5 sm:pb-0">
            I am a computer graduate at the California State University.
          </EduItems>
          <EduItems date="2016 - 2017" styles="border-b sm:border-none mb-5 pb-5 sm:pb-0">
            I enjoyed working at converse studio as a product designer.
          </EduItems>
        </div>
      </div>
    </section>
  );
};

export default Education;
