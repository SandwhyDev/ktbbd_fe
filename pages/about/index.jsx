import React from "react";
import CardAnggota from "../../components/CardAnggota";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Image from "next/image";
const index = () => {
  return (
    <div className="w-screen h-screen flex flex-col ">
      <Navbar title="Tentang KTBBD" />
      <div className="w-full flex flex-col gap-2 sm:px-20  ">
        {/* <Image
          src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=12600"
          width={100}
          height={60}
          layout="responsive"
          className="object-cover sm:h-[100px]"
        /> */}

        <img
          src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt="About us"
          className="w-full h-[200px] object-cover sm:h-[250px] md:h-[300px] lg:h-[400px]"
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
      </div>
      <div className=" z-10">
        <Footer />
      </div>
    </div>
  );
};

export default index;
