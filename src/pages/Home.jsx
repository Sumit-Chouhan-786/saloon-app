import React from "react";
import Services from "../components/common/Services";
import Counting from "../components/common/Counting";
import Discount from "../components/common/Discount";
import Reviews from "../components/common/Reviews";
import Brand from "../components/common/Brand";
import Footer from "../components/common/Footer";
const Home = () => {
  return (
    <>
      <div className=" bg-black">
        <Services />
        <Counting />
        <Discount />
        <Reviews/>
        <Brand/>
        <Footer />
      </div>
    </>
  );
};

export default Home