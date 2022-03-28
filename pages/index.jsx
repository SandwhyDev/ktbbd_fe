import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const navigate = useRouter();

  const handleDaftar = () => {
    navigate.push("/daftar");
  };

  const handleLogin = () => {
    navigate.push("/login");
  };

  useEffect(() => {
    setTimeout(() => {
      navigate.push("/home");
    }, 3000);
  }, []);
  return (
    <div className="home w-screen h-screen bg-[#2D31FA] flex flex-col items-center justify-center">
      <Head>
        <title>KTBBD</title>
        {/* <meta
          property="og:image"
          content="https://res.cloudinary.com/sandwhy/image/upload/v1648451046/Logo_BBD_ls9zfc.png"
        /> */}
        <meta
          name="description"
          content="Aplikasi yang berupa aktifitas dan acara - acara warga komplek bank bumi daya"
        />

        <link
          rel="icon"
          href="/Logo_BBD.svg"
          type="image/svg+xml"
          sizes="16x16"
        />
      </Head>
      {/* <div className="left w-full h-[46%] bg-red-500"></div> */}
      <div className="fadeInUp w-screen p-4 z-10 flex  flex-col gap-4 justify-center items-center text-white lg:mt-20 ">
        <span className="-mt-6">
          <Image src={"/Logo.png"} alt="logo bbd" width={100} height={100} />
        </span>
        <h1 className="text-[30px] text-white">KTBBD</h1>
        {/* <p className="text-center text-[20px]">
          Kumpulan foto, pengumuman acara, dan aktivitas warga Komplek Bank Bumi
          Daya
        </p> */}
        {/* <div className="buttonOpt w-full flex  gap-2">
          <button
            className="w-full p-3 bg-blue-400 rounded-md"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="w-full p-3 bg-white rounded-md border-2 border-blue-300"
            onClick={handleDaftar}
          >
            <h1 className=" text-blue-500">Daftar</h1>
          </button>
        </div> */}
      </div>
    </div>
  );
}
