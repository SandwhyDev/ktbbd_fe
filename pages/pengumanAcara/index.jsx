import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import CardAcara from "../../components/CardAcara";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const index = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col gap-2">
      <Navbar title="Pengumuman Acara" />

      <div className="flex flex-col gap-2 w-full p-4 ">
        <CardAcara />
        <CardAcara />
        <CardAcara />
        <CardAcara />
        <CardAcara />
        <CardAcara />
        <CardAcara />
      </div>
      <div className="w-full mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default index;
