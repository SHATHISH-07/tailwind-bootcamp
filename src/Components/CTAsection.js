import React from "react";

const CTAsection = () => {
  return (
    <section id="cta" className="bg-bred">
      {/* Flex-container */}
      <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
        <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
          Simplify how your team works today
        </h2>

        {/* Button */}
        <div className="my-16">
          <a
            href="#"
            className="p-3 px-6 text-bred bg-white rounded-full shadow-2xl baseline hover:bg-gray-900"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTAsection;
