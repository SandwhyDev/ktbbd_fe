import React from "react";
import Link from "next/link";
import CardDokumentasi from "../../components/CardDokumentasi";
import Navbar from "../../components/Navbar";

const DokumentasiAcara = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-2">
      <Navbar title="Dokumentasi Acara" />
      <div className="flex flex-col gap-2 w-full p-4">
        <CardDokumentasi />
        <CardDokumentasi />
        <CardDokumentasi />
        <CardDokumentasi />
        <CardDokumentasi />
      </div>
    </div>
  );
};

export default DokumentasiAcara;
