import React from "react";
import Navbar from "../../components/Navbar";
import { BsArrowLeft } from "react-icons/bs";
import Footer from "../../components/Footer";
import ax from "../../libs/ax";
import Image from "next/image";
import Head from "next/head";

const DetailAcara = ({ data }) => {
  console.log(data);
  return (
    <div className="w-screen min-h-screen flex flex-col">
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
        <link rel="icon" href="/Logo_BBD.svg" type="image/svg+xml" />
      </Head>
      <Navbar back="/pengumanAcara" buttonBack="true" />
      <div className="w-full flex  flex-col gap-2 ">
        <div>
          {/* <img
            src={data[0].banner.location}
            alt=""
            className="w-full h-44 object-cover"
          /> */}
          {/* <Image
            src="https://images.pexels.com/photos/9436715/pexels-photo-9436715.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            width={100}
            height={60}
            layout="responsive"
            className="object-cover"
          /> */}
          <img
            src="https://images.pexels.com/photos/9436715/pexels-photo-9436715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="w-full h-44 sm:h-[250px] xl:h-[350px] object-cover"
          />
        </div>
        {/* <h1 className="text-xl font-bold text-center "></h1> */}
        <div className="w-full px-4 flex flex-col gap-2 md:px-6">
          <div className="w-full">
            <h1 className="text-lg font-medium ">Konsep acara</h1>
            {/* <p className="font-light w-full">{data[0].konsep}</p>
             */}
            <p className="sm:max-w-[450px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              voluptatem sit doloribus repudiandae minima tempore ad explicabo,
              earum natus officia totam sint aut tempora illo, nemo voluptate,
              id a qui.
            </p>
          </div>

          <div className="">
            <h1 className="text-lg font-medium ">Jadwal Acara</h1>
            {/* <p className="">{data[0].hari_tanggal}</p> */}
            <p>Sabtu, 24 maret 2022</p>
            {/* <p className="font-light">Waktu: {data[0].jam}</p> */}
            <p className="">Waktu: 16:00</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// export async function getServerSideProps(ctx) {
//   const result = await ax.get(`/acara_read/${ctx.params.nama_acara}`);
//   console.log(result.data.query);
//   return {
//     props: {
//       nama_acara: ctx.params.nama_acara,
//       data: result.data.query,
//     },
//   };
// }

export default DetailAcara;
