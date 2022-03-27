import React from "react";
import Link from "next/link";
import Image from "next/image";

const CardAcara = ({
  nama_acara = "nama acara",
  hari = "sabtu, 25 maret 2022",
  jadwal = "16:00",
  banner = "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
}) => {
  return (
    <div className="lg:w-[310px] lg:h-[300px] w-full rounded-lg ">
      <Link href={`/acara/${nama_acara}`} passHref>
        <div className="w-full  h-[200px] lg:h-[250px] lg:w-[300px]  flex flex-col shadow-md rounded-lg cursor-pointer   ">
          {/* <Image
            src={banner}
            width={100}
            height={50}
            layout="responsive"
            className="w-full h-[70%] object-cover rounded-t-lg"
          /> */}
          <img
            src={banner}
            alt=""
            className="w-full h-[70%] object-cover rounded-t-lg"
          />
          <div className="p-2 ">
            <h3 className="text-lg font-bold">{nama_acara}</h3>
            <p className="text-gray-500 text-sm ">
              {" "}
              {hari} | {jadwal} WIB
            </p>
            {/* <p className="text-gray-500 text-sm "> </p> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardAcara;
