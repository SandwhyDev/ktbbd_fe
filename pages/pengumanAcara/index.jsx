import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import CardAcara from "../../components/CardAcara";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ax from "../../libs/ax";

const index = ({ data_acara }) => {
  return (
    <div className="w-screen min-h-screen flex flex-col gap-2">
      <Navbar title="Pengumuman Acara" buttonBack="true" />

      <div className="flex flex-col gap-2 w-full p-4 ">
        <div className=" lg:w-full lg:flex lg:flex-row flex flex-col gap-2 lg:items-center lg:justify-between ">
          <CardAcara />
          <CardAcara />
          <CardAcara />
          <CardAcara />
          {/* <CardAcara /> */}
        </div>
        {/* {data_acara.map((e) => {
          return (
            <CardAcara
              key={e.id}
              nama_acara={e.nama_acara}
              hari={e.hari_tanggal}
              jadwal={e.jam}
              banner={e.banner.location}
            />
          );
        })} */}
      </div>
      <div className="w-full mt-8">
        <Footer />
      </div>
    </div>
  );
};

// export async function getServerSideProps() {
//   const acara = await ax.get("/acara_read");

//   return {
//     props: {
//       data_acara: acara.data.query,
//     },
//   };
// }

export default index;
