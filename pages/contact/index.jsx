import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const index = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-2">
      <div className="w-full h-12 shadow-md flex gap-20 justify-center items-center px-4 ">
        {/* <span className="text-3xl" onClick={handleBack}>
          <BsArrowLeft />
        </span> */}
        <h1 className="text-xl ">Contact Us</h1>
      </div>
      <Footer />
    </div>
  );
};

export default index;
