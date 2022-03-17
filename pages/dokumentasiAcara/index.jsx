import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import CardDokumentasi from "../../components/CardDokumentasi";

const index = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-2">
      <div className="w-full h-12 p-4  shadow-md flex items-center justify-between">
        <span className="text-xl font-bold">
          <Link href={"/home"}>
            <BsArrowLeft />
          </Link>
        </span>
        <h1 className="text-lg font-semibold">Dokumentasi Acara</h1>
        <h1 className="bg-transparent w-8"></h1>
      </div>

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

export default index;
