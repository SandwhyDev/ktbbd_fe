import Image from "next/image";
import React from "react";
import NotFound from "../assets/pablita-595.gif";
const PageNotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center ">
      <Image src={NotFound} width={300} height={250} />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-xl text-blue-400 font-mono">Error 404</h1>
        <h1 className="text-xl text-blue-400 font-mono">
          Halaman Tidak di temukan
        </h1>
      </div>
    </div>
  );
};

export default PageNotFound;
