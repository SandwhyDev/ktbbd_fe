import React from "react";
import Link from "next/link";
import CardDokumentasi from "../../components/CardDokumentasi";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ax from "../../libs/ax";

const DokumentasiAcara = ({ data }) => {
  return (
    <div className="w-full min-h-full flex flex-col gap-2">
      <Navbar title="Dokumentasi Acara" buttonBack="true" />
      <div className="flex flex-col gap-2 w-full p-4 ">
        <div className=" lg:w-full lg:flex lg:flex-row flex flex-col gap-2  ">
          <CardDokumentasi />
          <CardDokumentasi />
          <CardDokumentasi />
          <CardDokumentasi />
          <CardDokumentasi />
        </div>

        {/* {data.map((e) => {
          return (
            <CardDokumentasi
              key={e.id}
              title={e.nama_acara}
              tanggal={e.tanggal_acara}
              img1={e.photo[3].location}
              img2={e.photo[7].location}
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
//   const result = await ax.get("/dokumentasi_read");
//   return {
//     props: {
//       data: result.data.query,
//     },
//   };
// }
export default DokumentasiAcara;
