import React from "react";
import CardAnggota from "../../components/CardAnggota";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const index = () => {
  return (
    <div className="w-screen h-screen flex flex-col ">
      <Navbar title="Tentang KTBBD" />
      <div className="w-full flex flex-col gap-2">
        <img
          src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt="About us"
          className="w-full h-[200px] object-cover"
        />
        <p className="text-center px-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nulla
          quae et omnis hic aspernatur assumenda dolores ut, dicta, magni ullam
          iste pariatur esse quas neque, incidunt amet in illo?
        </p>
        <h1 className="text-xl font-bold text-center">Our Team</h1>
        <div className="w-full h-[570px] ">
          <CardAnggota />
        </div>
        <div className=" z-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default index;
