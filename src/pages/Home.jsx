import React from "react";
import Services from "../components/common/Services";
import Nav from "../components/common/Nav";
import Counting from "../components/common/Counting";
import Discount from "../components/common/Discount";
import Footer from "../components/common/Footer";
const Home = () => {
  return (
    <>
      <div className=" bg-black">
        <Nav />
        <Services />
        <Counting />
        <Discount />
        <Footer />
      </div>
    </>
  );
};

export default Home;
