import Link from "next/link";
import React from "react";
import Image from "next/image";

const CardDokumentasi = ({
  title = "acara dokumentasi",
  tanggal = "20 maret 2022 - 23 maret 2022",
  img1 = "https://images.pexels.com/photos/9436715/pexels-photo-9436715.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  img2 = "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
}) => {
  return (
    <div>
      <Link href={"/dokumentasi/sandy"} passHref>
        <div className="w-full h-44 bg-white shadow-md rounded-lg cursor-pointer  ">
          <div className=" w-full h-full flex relative  ">
            {/* <Image
              src={img1}
              width={100}
              height={53}
              layout="responsive"
              className="w-[50%] h-full object-cover shadow-md rounded-tl-lg rounded-b-lg"
            /> */}
            <img
              src={img1}
              alt=""
              className="w-[50%] h-full object-cover shadow-md rounded-tl-lg rounded-bl-lg"
            />
            {/* <Image
              src={img2}
              width={100}
              height={60}
              layout="responsive"
              className="object-cover"
            /> */}
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
