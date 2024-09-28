import { React, useState } from "react";
import Logo from "../img/logo.svg";

const NavBar = () => {
  const [isOpen, setIsOPen] = useState("false");

  function toggleMenu() {
    setIsOPen(!isOpen);
  }

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
        <a
          href="#"
          className="hidden md:block p-3 px-6 text-white bg-bred rounded-full baseline hover:bg-bredLight"
        >
          Get Started
        </a>

        {/* Hamburger Icon */}

        <button
          id="menu-btn"
          className={`block hamburger md:hidden focus:outline-none ${
            isOpen ? "open" : ""
          }`}
          onClick={toggleMenu}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div
          id="menu"
          className=" absolute  flex flex-col items-center self-end  py-8 mt-10 space-y-6 font-bold bg-white drop-shadow-md sm:w-auto sm:self-center left-6 right-6 "
        >
          <a href="#">Pricing</a>
          <a href="#">Products</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
