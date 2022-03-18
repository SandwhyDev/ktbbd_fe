import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const index = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-2">
      <Navbar title="Contact Us" />
      <Footer />
    </div>
  );
};

export default index;
