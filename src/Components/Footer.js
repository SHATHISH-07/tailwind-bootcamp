import React from "react";
import Logo from "../img/logo-white.svg";
import FaceBook from "../img/icon-facebook.svg";
import YouTube from "../img/icon-youtube.svg";
import Twitter from "../img/icon-twitter.svg";
import Pinterest from "../img/icon-pinterest.svg";
import Instagram from "../img/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      {/* Flex container */}
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* Logo and social link*/}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2024, All Rights Reserved
          </div>
          {/* logo */}
          <div className="mb-5">
            <img src={Logo} className="h-8" alt="" />
          </div>
          {/* Social links container */}
          <div className="flex justify-center space-x-4 cursor-pointer">
            <a href="#">
              <img src={FaceBook} alt="" className="h-8 cursor-pointer" />
            </a>
            <a href="#">
              <img src={YouTube} alt="" className="h-8 cursor-pointer" />
            </a>
            <a href="#">
              <img src={Instagram} alt="" className="h-8 cursor-pointer" />
            </a>
            <a href="#">
              <img src={Twitter} alt="" className="h-8 cursor-pointer" />
            </a>
            <a href="#">
              <img src={Pinterest} alt="" className="h-8 cursor-pointer" />
            </a>
          </div>
        </div>

        {/* List container */}
        <div className="flex justify-around space-x-32 ">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-bred cursor-pointer">
              Home
            </a>
            <a href="#" className="hover:text-bred cursor-pointer">
              Pricing
            </a>
            <a href="#" className="hover:text-bred cursor-pointer">
              Products
            </a>
            <a href="#" className="hover:text-bred cursor-pointer">
              About
            </a>
          </div>

          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-bred cursor-pointer">
              Careers
            </a>
            <a href="#" className="hover:text-bred cursor-pointer">
              Community
            </a>
            <a href="#" className="hover:text-bred cursor-pointer">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Input Container */}
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full"
                placeholder="Updates in your inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-bred hover:bg-bredLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2024, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
