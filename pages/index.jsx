import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SplashScreen from "../components/SplashScreen";
import HomePage from "./home";
export default function Home() {
  const navigate = useRouter();

  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="home w-screen h-screen bg-white flex flex-col items-center justify-center">
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

      {Loading ? (
        <SplashScreen />
      ) : (
        <div className="w-full h-full">
          <HomePage />
        </div>
      )}
      {/* <div className="fadeInUp w-screen p-4 z-10 flex  flex-col gap-4 justify-center items-center text-white lg:mt-20 ">
        <span className="-mt-6">
          <Image src={"/Logo.png"} alt="logo bbd" width={100} height={100} />
        </span>
        <h1 className="text-[30px] text-white">KTBBD</h1>
      </div> */}
    </div>
  );
}
