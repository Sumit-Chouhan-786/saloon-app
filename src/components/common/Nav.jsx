import React, { useState } from "react";
import { NavLogo, NavMenu } from "../../utilits/icons";
import Button from "./Button";
import MobileNav from "./MobileNav";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const NavOpenHandler = () => {
    if (isOpen === true) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="lg:max-w-[1332px] container px-4 mx-auto md:py-10 py-5 flex-grow-0">
        <div className="flex justify-between items-center relative z-50">
          <a href="/">
            <NavLogo />
          </a>
          <div className="lg:flex hidden gap-10 items-center">
            <a
              href="/"
              className="capitalize text-white relative after:content-[''] after:absolute after:bottom-[-10px] hover:after:w-full after:left-[50%] hover:after:left-0 after:w-0 transition-all ease-in-out duration-300 after:transition-all after:ease-in-out after:duration-300 after:h-[2px] after:bg-white"
            >
              Home
            </a>
            <a
              href="/services"
              className="text-lightBlack font-inter relative after:content-[''] after:absolute after:bottom-[-10px] hover:after:w-full after:left-[50%] hover:after:left-0 after:w-0 transition-all ease-in-out duration-300 after:transition-all after:ease-in-out after:duration-300 after:h-[2px] after:bg-lightBlack"
            >
              Services
            </a>
            <a
              href="/about-us"
              className="text-lightBlack font-inter relative after:content-[''] after:absolute after:bottom-[-10px] hover:after:w-full after:left-[50%] hover:after:left-0 after:w-0 transition-all ease-in-out duration-300 after:transition-all after:ease-in-out after:duration-300 after:h-[2px] after:bg-lightBlack"
            >
              About Us
            </a>
            <a
              href="/blog"
              className="text-lightBlack font-inter relative after:content-[''] after:absolute after:bottom-[-10px] hover:after:w-full after:left-[50%] hover:after:left-0 after:w-0 transition-all ease-in-out duration-300 after:transition-all after:ease-in-out after:duration-300 after:h-[2px] after:bg-lightBlack"
            >
              Blog
            </a>
            <a
              href="/contact-us"
              className="text-lightBlack font-inter relative after:content-[''] after:absolute after:bottom-[-10px] hover:after:w-full after:left-[50%] hover:after:left-0 after:w-0 transition-all ease-in-out duration-300 after:transition-all after:ease-in-out after:duration-300 after:h-[2px] after:bg-lightBlack"
            >
              Contact Us
            </a>
          </div>
          <div className="lg:block hidden">
            <Button content="BOOK APPOINTMENT" />
          </div>
          <button className="lg:hidden block" onClick={NavOpenHandler}>
            <NavMenu />
          </button>
        </div>
      </div>
      <MobileNav NavOpenHandler={NavOpenHandler} isOpen={isOpen} />
    </>
  );
};

export default Nav;
