import React from "react";
import Image from "next/image";

import Gif from "../../assets/flame-remote-working.gif";
const Maintenance = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-white p-14">
      <div>
        <Image src={Gif} width={350} height={350} />
      </div>
      <h1 className="xl:text-2xl text-xl text-blue-500 text-center font-bold capitalize">
        Mohon Maaf website <br /> sedang dalam perbaikan
      </h1>
    </div>
  );
};

export default Maintenance;
