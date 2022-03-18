import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const profile = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-2">
      <Navbar title="Profile" />
      <Footer />
    </div>
  );
};

export default profile;
