import React from "react";
import Services from "./Services";
import { BsBoxSeam } from "react-icons/bs";
import { GoPencil } from "react-icons/go";
import { CiFileOn, CiCloudOn } from "react-icons/ci";

const AboutMe = () => {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="font-primary text-primary text-2xl md:text-4xl font-medium">
          About Me
        </h2>
        <p className="font-primary text-secondery text-sm md:text-lg font-normal mt-6 mb-14">
          I’m a Product designer currently working as freelancer. I’m from
          Iceland but my work is essentially in Sydney. Specialized in graphic,
          webdesign and interface design. I’ve been working as a designer for
          six years. I’ve Completed my education from most popular universities.
          Learning is the essential part of my life. I take on freelance
          projects that pique my interest. Outside of my work, I enjoy good food
          and the outdoors games with friends and relatives. I also spend my
          spare time in libraries.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Services
            title="Branding"
            icon={<BsBoxSeam className="text-5xl" />}
          />
          <Services
            title="Caligraphy"
            icon={<GoPencil className="text-5xl" />}
          />
          <Services title="Graphics" icon={<CiFileOn className="text-5xl" />} />
          <Services
            title="Social Media"
            icon={<CiCloudOn className="text-5xl" />}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
