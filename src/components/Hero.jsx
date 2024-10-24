import React from "react";
import Nav from "./common/Nav";
import heroLogo from "../assets/images/webp/hero-logo.webp";
const Hero = () => {
  return (
    <>
      <div className="bg-hero flex flex-col bg-cover bg-center bg-no-repeat min-h-screen">
        <Nav />
        <div className="lg:max-w-[1332px] container px-4 mx-auto lg:py-10 py-5 flex-grow-[1] h-full flex items-center justify-center">
          <img src={heroLogo} alt="hero" className="w-full max-w-[864px]" />
        </div>
      </div>
    </>
  );
};

export default Hero;
