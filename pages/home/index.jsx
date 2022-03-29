import Image from "next/image";
import React from "react";
import Footer from "../../components/Footer";
import SwiperBanners from "../../components/SwiperBanners";
import { BsArrowRight } from "react-icons/bs";
import CardAcara from "../../components/CardAcara";
import CardDokumentasi from "../../components/CardDokumentasi";
import Link from "next/link";
import ax from "../../libs/ax";
import Head from "next/head";

const Home = ({ data_acara, data_dokumentasi }) => {
  return (
    <div className="  w-screen min-h-screen  flex flex-col items-center sm:px-[50px] ">
      <Head>
        <title>KTBBD</title>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/sandwhy/image/upload/v1648451046/Logo_BBD_ls9zfc.png"
        />
        <meta
          name="description"
          content="Aplikasi yang berupa aktifitas dan acara - acara warga komplek bank bumi daya"
        />
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/sandwhy/image/upload/v1648451046/Logo_BBD_ls9zfc.png"
          type="image/png"
        />
      </Head>
      <div className="w-full p-4 bg-white   flex items-center justify-between lg:py-4 lg:px-0">
        <h1 className="text-xl font-medium text-blue-400 ">Halo, Users</h1>
        <div className="w-10 h-10 bg-blue-300">
          <Image src={"/Logo.png"} alt="Logo" width={40} height={40} />
        </div>
      </div>
      <div className="w-full h-full bg-red-500 ">
        <SwiperBanners />
      </div>

      <div className="w-full p-4 flex flex-col gap-2 justify-between items-center  lg:h-[350px] sm:py-4 sm:px-0    ">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-xl text-blue-400  ">Pengumuman Acara</h1>
          <span className="text-2xl  font-bold xl:hidden text-blue-400 cursor-pointer">
            <Link href={"/pengumanAcara"} passHref>
              <BsArrowRight />
            </Link>
          </span>
        </div>
        <div className="w-full flex flex-col gap-2 md:flex md:flex-row md:h-[300px] md:w-full md:gap-6 md:overflow-x-hidden overflow-y-hidden  h-[415px] ">
          <CardAcara />
          <CardAcara />
          <div className="lg:w-full lg:h-[300px] lg:flex lg:flex-row gap-2  hidden lg:items-end   ">
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

      <div className="w-full -mt-4 p-4 flex flex-col gap-2  items-center lg:h-[250px] lg:-mt-10 md:-mt-28 lg:mb-10 lg:py-4 lg:px-0">
        <div className="w-full  flex justify-between items-center">
          <h1 className="text-xl text-blue-400   ">Dokumentasi Acara</h1>
          <span className="text-2xl text-blue-400 font-bold lg:hidden cursor-pointer ">
            <Link href={"/dokumentasiAcara"} passHref>
              <BsArrowRight />
            </Link>
          </span>
        </div>
        <div className="w-full  flex flex-col gap-2 md:flex md:flex-row md:h-[200px] md:w-full md:justify-between mb-10    ">
          <CardDokumentasi />
          <CardDokumentasi />
          <div className="lg:w-[90%]  lg:h-full lg:flex lg:flex-row gap-2  hidden">
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

export default Home;
