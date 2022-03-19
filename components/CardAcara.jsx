import React from "react";
import Link from "next/link";
const CardAcara = ({
  nama_acara,
  jadwal,
  banner = "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
}) => {
  return (
    <div>
      <Link href={"/acara/1"}>
        <div className="w-full h-44 flex flex-col shadow-md rounded-lg  ">
          <img
            src={banner}
            alt=""
            className="w-full h-[70%] object-cover rounded-t-lg"
          />
          <div className="px-3 ">
            <h3 className="text-lg font-bold">{nama_acara}</h3>
            <p className="text-gray-500 text-sm ">{jadwal}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardAcara;
