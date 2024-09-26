import React from "react";
import Logo from "../img/logo.svg";

const NavBar = () => {
  return (
    <nav className="relative container mx-auto p-6">
      {/* <!-- Flex container --> */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <img src={Logo} alt="" />
        </div>

        {/* Menu Items */}
        <div className=" hidden md:flex space-x-6 ">
          <a href="#" className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>

        {/* Button */}
        <a className="hidden md:block p-3 px-6 text-white bg-bred rounded-full baseline hover:bg-bredLight">
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
