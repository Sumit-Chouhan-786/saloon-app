import React from "react";
import Button from "./Button";

const MobileNav = ({ NavOpenHandler, isOpen }) => {
  return (
    <div
      className={` fixed top-0 transition-all ease-in-out duration-300 z-10 h-screen bg-black w-full ${
        isOpen ? "start-0" : "-start-full"
      }`}
    >
      <div className="flex lg:hidden flex-col gap-5 items-center h-full justify-center">
        <a
          href="#"
          onClick={NavOpenHandler}
          className="capitalize text-white md:text-sm text-xs font-inter relative after:content-[''] after:absolute after:bottom-[-10px] hover:after:w-full after:left-[50%] hover:after:left-0 after:w-0 transition-all ease-in-out duration-300 after:transition-all after:ease-in-out after:duration-300 after:h-[2px] after:bg-white"
        >
          Home
        </a>
        <a
          href="/services"
          onClick={NavOpenHandler}
          className="text-lightBlack font-inter md:text-sm text-xs relative after:content-[''] after:absolute after:bottom-[-10px] hover:after:w-full after:left-[50%] hover:after:left-0 after:w-0 transition-all ease-in-out duration-300 after:transition-all after:ease-in-out after:duration-300 after:h-[2px] after:bg-lightBlack"
        >
          Services
        </a>
        <a
          href="/about-us"
          onClick={NavOpenHandler}
          className="text-lightBlack font-inter md:text-sm text-xs relative after:content-[''] after:absolute after:bottom-[-10px] hover:after:w-full after:left-[50%] hover:after:left-0 after:w-0 transition-all ease-in-out duration-300 after:transition-all after:ease-in-out after:duration-300 after:h-[2px] after:bg-lightBlack"
        >
          About Us
        </a>
        <a
          href="/blog"
          onClick={NavOpenHandler}
          className="text-lightBlack font-inter md:text-sm text-xs relative after:content-[''] after:absolute after:bottom-[-10px] hover:after:w-full after:left-[50%] hover:after:left-0 after:w-0 transition-all ease-in-out duration-300 after:transition-all after:ease-in-out after:duration-300 after:h-[2px] after:bg-lightBlack"
        >
          Blog
        </a>
        <a
          href="/contact-us"
          onClick={NavOpenHandler}
          className="text-lightBlack font-inter md:text-sm text-xs relative after:content-[''] after:absolute after:bottom-[-10px] hover:after:w-full after:left-[50%] hover:after:left-0 after:w-0 transition-all ease-in-out duration-300 after:transition-all after:ease-in-out after:duration-300 after:h-[2px] after:bg-lightBlack"
        >
          Contact Us
        </a>
        <Button onClick={NavOpenHandler} content="BOOK APPOINTMENT" />
      </div>
    </div>
  );
};

export default MobileNav;
