import Link from "next/link";
import React from "react";
const CardDokumentasi = ({
  title,
  tanggal,
  img1 = "https://images.pexels.com/photos/9436715/pexels-photo-9436715.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  img2 = "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
}) => {
  return (
    <div>
      <Link href={"/dokumentasi/sandy"}>
        <div className="w-full h-44 bg-white shadow-md rounded-lg">
          <div className="flex w-full h-full relative ">
            <img
              src={img1}
              alt=""
              className="w-[50%] h-full object-cover shadow-md rounded-tl-lg rounded-bl-lg"
            />
            <img
              src={img2}
              alt=""
              className="w-[50%] h-full object-cover shadow-md rounded-tr-lg rounded-br-lg"
            />
            <div className="w-full h-24 px-4 py-3 flex flex-col justify-end absolute bottom-0 bg-gradient-to-b from-transparent to-black/80 shadow-md rounded-lg">
              <h1 className="font-bold text-white text-xl">{title}</h1>
              <p className="font-bold text-white/70 text-xs">{tanggal}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardDokumentasi;
