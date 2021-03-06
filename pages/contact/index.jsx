import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Dev from "../../assets/pablita-finance.gif";
import Image from "next/image";
import Head from "next/head";

const Contact = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-2">
      <Head>
        <title>KTBBD</title>
        <meta
          name="description"
          content="Aplikasi yang berupa aktifitas dan acara - acara warga komplek bank bumi daya"
        />
        <link rel="icon" href="/Logo_BBD.svg" type="image/svg+xml" />
      </Head>
      <div className="flex flex-col gap-2">
        <Image src={Dev} alt="Gif" width={200} height={200} />
        <h1 className="text-3xl text-blue-400">On Development...</h1>
      </div>

      {/* <Navbar title="Contact Us" /> */}
      <Footer />
    </div>
  );
};

export default Contact;
