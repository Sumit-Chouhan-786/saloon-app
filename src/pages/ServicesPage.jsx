import React from "react";
import Services from "../components/common/Services";
import Discount from "../components/common/Discount";
import Reviews from "../components/common/Reviews";
import LatestNews from "../components/common/LatestNews";
import Footer from "../components/common/Footer";
import Pricing from "../components/Pricing";
const ServicesPage = () => {
  return (
    <>
      <Services />
      <Pricing />
      <Discount />
      <Reviews />
      <LatestNews />
      <Footer />
    </>
  );
};

export default ServicesPage;
