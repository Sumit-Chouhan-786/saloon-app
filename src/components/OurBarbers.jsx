import React from "react";
import { FaceBookIcon, InstagramIcon, TwitterIcon } from "../utilits/icons";
import { ourBarbers } from "../utilits/helper";
const OurBarbers = () => {
  return (
    <div className="bg-white py-[60px]">
      <div className="container px-4 mx-auto">
        <p className="text-yellow font-medium text-xl leading-normal text-center">
          MEET THE FAMILY
        </p>
        <h2 className="font-abril font-normal text-[50px] tracking-[0.5px] !leading-[135%] mb-[60px] text-center">
          OUR BARBER
        </h2>
        <div className=" flex flex-wrap gap-y-4 sm:max-w-full max-w-[330px] sm:mx-0 mx-auto">
          {ourBarbers.map((obj, index) => {
            return (
              <div
                className="xl:w-3/12 lg:w-4/12 md:w-6/12 w-full sm:px-2 "
                key={index}
              >
                <div className=" w-full max-w-[400px] lg:max-w-full md:mx-0 mx-auto">
                  <img
                    src={obj.img}
                    alt="barber-img"
                    className="w-full max-w-[400px]"
                  />
                  <div className="bg-raisinBlack p-5 flex justify-center items-center">
                    <div className="max-w-[306px] flex flex-col items-center">
                      <p className="text-white text-center font-abril xl:text-2xl text-xl font-normal">
                        {obj.barberName}
                      </p>
                      <div className="flex items-center justify-center my-4 gap-x-2">
                        <a href={obj.facebookLink}>
                          <FaceBookIcon />
                        </a>
                        <a href={obj.twitterLink}>
                          <TwitterIcon />
                        </a>
                        <a href={obj.instagramLink}>
                          <InstagramIcon />
                        </a>
                      </div>
                      <button className="text-yellow border-[2px] border-yellow text-center font-abril text-sm py-3 px-5 mx-auto font-normal relative after:content-[''] after:absolute after:top-0 hover:after:w-full after:left-0 after:w-0 transition-all ease-in-out duration-300 after:transition-all after:ease-in-out after:duration-300 after:h-0 hover:after:h-full after:bg-yellow hover:text-black">
                        <span className="relative z-10 uppercase">
                          BOOK NOW
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurBarbers;
