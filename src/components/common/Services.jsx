import React from "react";
import tool from "../../assets/images/png/scissor.png";
import beard from "../../assets/images/png/beard.png";
import facial from "../../assets/images/png/facial.png";
import razor from "../../assets/images/png/razor.png";
import mustache from "../../assets/images/png/mustache.png";
import hairStyling from "../../assets/images/png/hair.png";

const Services = () => {
  const services = [
    { id: 1, image: tool, title: "HAIRCUT & BEARD TRIM" },
    { id: 2, image: beard, title: "SHAVES & HAIRCUT" },
    { id: 3, image: razor, title: "FACIAL & SHAVE" },
    { id: 4, image: facial, title: "FACIAL" },
    { id: 5, image: mustache, title: "MUSTACHE TRIMMING" },
    { id: 6, image: hairStyling, title: "HAIR STYLING" },
  ];
  return (
    <div className="bg-services-bg bg-no-repeat bg-cover py-[70px]">
      <div className="lg:max-w-[1332px] container px-4 mx-auto">
        <p className="text-center text-xl mb-0 text-yellow">OUR TREATMENT</p>
        <h2 className="text-center text-[50px] text-white leading-[50px] mb-16 font-abril">
          SERVICES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service) => (
            <div
              key={service.id}
              className="border border-yellow py-12 flex flex-col items-center justify-center px-10 p-4"
            >
              <img src={service.image} alt={service.title} />
              <h3 className="text-white text-[20px] leading-[26px] tracking-[5%] my-4 font-abril">
                {service.title}
              </h3>
              <p className="text-white text-center text-[16px]">
                Duis porta, ligula rhoncuseuism od pretium, nisi tellus eleifend
                odio, luctus viverra sem.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
