import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CardImages from "../../components/CardImages";
import CardImagesWide from "../../components/CardImageWide";
import Head from "next/head";

const DetailAcara = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Head>
        <title>KTBBD</title>
        <meta
          name="description"
          content="Aplikasi yang berupa aktifitas dan acara - acara warga komplek bank bumi daya"
        />
        <link rel="icon" href="/Logo_BBD.svg" type="image/svg+xml" />
      </Head>
      <Navbar title="Dokumentasi" buttonBack back="/dokumentasiAcara" />
      <div className="w-full flex flex-wrap gap-[.9px]">
        <CardImages image="https://images.pexels.com/photos/9802281/pexels-photo-9802281.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <CardImages image="https://images.pexels.com/photos/11129005/pexels-photo-11129005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <CardImages />
        <CardImages image="https://images.pexels.com/photos/10022592/pexels-photo-10022592.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <CardImages />
        <CardImages />
        <CardImages />
        <CardImages />
        <CardImages />
        <CardImages />
        <CardImages />
        <CardImages />
        <CardImages />
        <CardImages />
        <CardImages />
        <CardImages />
        <CardImages />
        <CardImages />
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default DetailAcara;
