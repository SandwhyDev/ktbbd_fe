import Image from "next/image";
import React from "react";
import Footer from "../../components/Footer";
import SwiperBanners from "../../components/SwiperBanners";
import { BsArrowRight } from "react-icons/bs";
import CardAcara from "../../components/CardAcara";
import CardDokumentasi from "../../components/CardDokumentasi";
import Link from "next/link";
const index = () => {
  return (
    <div className="w-screen min-h-screen  flex flex-col items-center">
      <div className="w-full p-4 bg-white flex items-center justify-between">
        <h1 className="text-lg font-bold">Halo, Users</h1>
        <div className="w-10 h-10 bg-blue-300"></div>
      </div>
      <div className="w-full h-44 bg-red-500 ">
        <SwiperBanners />
      </div>

      <div className="w-full p-4 flex flex-col gap-2 justify-between items-center">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-xl font-bold">Pengumuman Acara</h1>
          <span className="text-2xl font-bold">
            <Link href={"/pengumanAcara"}>
              <BsArrowRight />
            </Link>
          </span>
        </div>
        <div className="w-full flex flex-col gap-2">
          <CardAcara />
          <CardAcara />
        </div>
      </div>

      <div className="w-full -mt-4 p-4 flex flex-col gap-2 justify-between items-center">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-xl font-bold">Dokumentasi Acara</h1>
          <span className="text-2xl font-bold">
            <Link href={"/dokumentasiAcara"}>
              <BsArrowRight />
            </Link>
          </span>
        </div>
        <div className="w-full flex flex-col gap-2">
          <CardDokumentasi />
          <CardDokumentasi />
        </div>
      </div>
      <div className="w-full mt-14">
        <Footer />
      </div>
    </div>
  );
};

export default index;
