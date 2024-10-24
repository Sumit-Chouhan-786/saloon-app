import React from "react";
import Services from "../components/common/Services";
import Nav from "../components/common/Nav";

const Home = () => {
  return (
    <>
      <div className=" bg-black">
        <Nav />
        <Services />
      </div>
    </>
  );
};

export default Home;
