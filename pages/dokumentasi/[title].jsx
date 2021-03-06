import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CardImages from "../../components/CardImages";
import CardImagesWide from "../../components/CardImageWide";
import Head from "next/head";

const DetailAcara = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col ">
      <Head>
        <title>KTBBD</title>
        <meta
          name="description"
          content="Aplikasi yang berupa aktifitas dan acara - acara warga komplek bank bumi daya"
        />
        <link rel="icon" href="/Logo_BBD.svg" type="image/svg+xml" />
      </Head>
      <Navbar title="Dokumentasi" buttonBack back="/dokumentasiAcara" />
      <div className="w-full sm:ml-7 lg:ml-[50px] xl:ml-1 md:items-center md:justify-center  md:flex md:flex-wrap">
        <div className="w-full flex flex-wrap gap-[.9px]   sm:items-start sm:gap-2 sm:p-2   sm:max-w-[700px] lg:max-w-[900px] xl:max-w-[1300px]">
          <CardImages image="https://images.pexels.com/photos/9802281/pexels-photo-9802281.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <CardImages image="https://images.pexels.com/photos/11129005/pexels-photo-11129005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <CardImages image="https://images.pexels.com/photos/10194726/pexels-photo-10194726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <CardImages image="https://images.pexels.com/photos/10022592/pexels-photo-10022592.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <CardImages image="https://images.pexels.com/photos/11389730/pexels-photo-11389730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <CardImages />
          <CardImages image="https://images.pexels.com/photos/4110472/pexels-photo-4110472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <CardImages image="https://images.pexels.com/photos/3867035/pexels-photo-3867035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <CardImages image="https://images.pexels.com/photos/5637599/pexels-photo-5637599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <CardImages image="https://images.pexels.com/photos/5637524/pexels-photo-5637524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <CardImages image="https://images.pexels.com/photos/2199486/pexels-photo-2199486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <CardImages image="https://images.pexels.com/photos/2774292/pexels-photo-2774292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <CardImages image="https://images.pexels.com/photos/3050325/pexels-photo-3050325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <CardImages image="https://images.pexels.com/photos/1737405/pexels-photo-1737405.jpeg" />
          <CardImages image="https://images.pexels.com/photos/10194726/pexels-photo-10194726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <CardImages image="https://images.pexels.com/photos/3336875/pexels-photo-3336875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <CardImages image="https://images.pexels.com/photos/11389730/pexels-photo-11389730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <CardImages image="https://images.pexels.com/photos/1690081/pexels-photo-1690081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <CardImages image="https://images.pexels.com/photos/4110472/pexels-photo-4110472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <CardImages image="https://images.pexels.com/photos/3867035/pexels-photo-3867035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <CardImages image="https://images.pexels.com/photos/5637599/pexels-photo-5637599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <CardImages image="https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <CardImages image="https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
          <CardImages image="https://images.pexels.com/photos/3182829/pexels-photo-3182829.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
        </div>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default DetailAcara;
