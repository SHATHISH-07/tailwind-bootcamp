import React from "react";
import AvatarAnisha from "../img/avatar-anisha.png";
import AVatarAli from "../img/avatar-ali.png";
import AvatarShanai from "../img/avatar-shanai.png";

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">
          What's Different About Manage?
        </h2>
        {/* Testimonials Container */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* Testimonial 1 */}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src={AvatarAnisha} className="w-16 -mt-14 " alt="" />
            <h5 className="text-lg font-bold ">Anisha Li</h5>
            <p className="text-sm text-darkGrayishBlue">
              "Manage has superCharged our team's workFlow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className=" hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src={AVatarAli} className="w-16 -mt-14 " alt="" />
            <h5 className="text-lg font-bold ">Ali Bravo Li</h5>
            <p className="text-sm text-darkGrayishBlue">
              "We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused"
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className=" hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src={AvatarShanai} className="w-16 -mt-14 " alt="" />
            <h5 className="text-lg font-bold ">shanai</h5>
            <p className="text-sm text-darkGrayishBlue">
              "Manage has superCharged our team's workFlow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated."
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="my-16">
          <a
            href="#"
            className="p-3 px-6 text-white bg-bred rounded-full baseline hover:bg-bredLight"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
