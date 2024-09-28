import React from "react";
import IllustrateImg from "../img/illustration-intro.svg";

const HeroSection = () => {
  return (
    <section className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
      {/* Left Item */}
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
        <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
          Bring Everyone Together To Build Better Project
        </h1>
        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
          Manage makes it simple for the software team to plan day-to-day tasks
          while keeping the larger team goal in view
        </p>
        <div className="flex justify-center md:justify-start">
          <a
            href="#"
            className="p-3 px-6 text-white bg-bred rounded-full baseline hover:bg-bredLight"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Image Item */}
      <div className="md:w-1/2">
        <img src={IllustrateImg} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
