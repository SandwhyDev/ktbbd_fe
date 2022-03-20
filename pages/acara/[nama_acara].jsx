import React from "react";
import Navbar from "../../components/Navbar";
import { BsArrowLeft } from "react-icons/bs";
import Footer from "../../components/Footer";
import ax from "../../libs/ax";

const DetailAcara = ({ data }) => {
  console.log(data);
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Navbar title={data[0].nama_acara} back="/pengumanAcara" />
      <div className="w-full flex  flex-col gap-2">
        <div>
          <img
            src={data[0].banner.location}
            alt=""
            className="w-full h-44 object-cover"
          />
        </div>
        {/* <h1 className="text-xl font-bold text-center "></h1> */}
        <div className="w-full px-4 flex flex-col gap-2">
          <div className="w-full">
            <h1 className="text-lg font-medium ">Konsep acara</h1>
            <p className="font-light w-full">{data[0].konsep}</p>
          </div>

          <div className="">
            <h1 className="text-lg font-medium ">Jadwal Acara</h1>
            <p className="font-light">{data[0].hari_tanggal}</p>
            <p className="font-light">Waktu: {data[0].jam}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const result = await ax.get(`/acara_read/${ctx.params.nama_acara}`);
  console.log(result.data.query);
  return {
    props: {
      nama_acara: ctx.params.nama_acara,
      data: result.data.query,
    },
  };
}

export default DetailAcara;
