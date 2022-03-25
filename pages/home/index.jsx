import Image from "next/image";
import React from "react";
import Footer from "../../components/Footer";
import SwiperBanners from "../../components/SwiperBanners";
import { BsArrowRight } from "react-icons/bs";
import CardAcara from "../../components/CardAcara";
import CardDokumentasi from "../../components/CardDokumentasi";
import Link from "next/link";
import ax from "../../libs/ax";
const index = ({ data_acara, data_dokumentasi }) => {
  return (
    <div className="  w-screen min-h-screen  flex flex-col items-center sm:px-[50px] ">
      <div className="w-full p-4 bg-white flex items-center justify-between lg:py-4 lg:px-0">
        <h1 className="text-lg font-bold">Halo, Users</h1>
        <div className="w-10 h-10 bg-blue-300"></div>
      </div>
      <div className="w-full h-full bg-red-500 ">
        <SwiperBanners />
      </div>

      <div className="w-full p-4 flex flex-col gap-2 justify-between items-center  lg:h-[300px] lg:py-4 lg:px-0 ">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-xl font-bold">Pengumuman Acara</h1>
          <span className="text-2xl font-bold lg:hidden">
            <Link href={"/pengumanAcara"} passHref>
              <BsArrowRight />
            </Link>
          </span>
        </div>
        <div className="w-full flex flex-col gap-2 lg:flex lg:flex-row lg:h-[300px] lg:w-full   ">
          <CardAcara />
          <CardAcara />
          <div className="lg:w-full lg:h-full lg:flex lg:flex-row gap-2  hidden lg:items-end lg:justify-end">
            <CardAcara />
            <CardAcara />
          </div>
          {/* <CardAcara
            key={data_acara[0]?.id}
            nama_acara={data_acara[0]?.nama_acara}
            hari={data_acara[0]?.hari_tanggal}
            jadwal={data_acara[0]?.jam}
            banner={data_acara[0]?.banner.location}
          />
          <CardAcara
            key={data_acara[1]?.id}
            nama_acara={data_acara[1]?.nama_acara}
            hari={data_acara[1]?.hari_tanggal}
            jadwal={data_acara[1]?.jam}
            banner={data_acara[1]?.banner.location}
          /> */}
        </div>
      </div>

      <div className="w-full -mt-4 p-4 flex flex-col gap-2  items-center lg:h-[250px] lg:mt-2 lg:mb-10 lg:py-4 lg:px-0">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-xl font-bold">Dokumentasi Acara</h1>
          <span className="text-2xl font-bold lg:hidden">
            <Link href={"/dokumentasiAcara"} passHref>
              <BsArrowRight />
            </Link>
          </span>
        </div>
        <div className="w-full flex flex-col gap-2 lg:flex lg:flex-row lg:h-[300px] lg:w-full lg:justify-between mb-10   ">
          <CardDokumentasi />
          <CardDokumentasi />
          <div className="lg:w-full lg:h-full lg:flex lg:flex-row gap-2  hidden">
            <CardDokumentasi />
            <CardDokumentasi />
          </div>
          {/* <CardAcara
            key={data_acara[0]?.id}
            nama_acara={data_acara[0]?.nama_acara}
            hari={data_acara[0]?.hari_tanggal}
            jadwal={data_acara[0]?.jam}
            banner={data_acara[0]?.banner.location}
          />
          <CardAcara
            key={data_acara[1]?.id}
            nama_acara={data_acara[1]?.nama_acara}
            hari={data_acara[1]?.hari_tanggal}
            jadwal={data_acara[1]?.jam}
            banner={data_acara[1]?.banner.location}
          /> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

// export async function getServerSideProps() {
//   const acara = await ax.get("/acara_read");
//   const dokumentasi = await ax.get("/dokumentasi_read");

//   return {
//     props: {
//       data_acara: acara.data.query,
//       data_dokumentasi: dokumentasi.data.query,
//     },
//   };
// }

export default index;
