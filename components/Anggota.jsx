import React from "react";
import Image from "next/image";

const Anggota = ({
  position = "position",
  name = "nama",
  image = "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
}) => {
  return (
    <div className="w-full h-full  flex flex-col gap-2 items-center p-2  ">
      <h1 className="text-xl font-bold capitalize">{position}</h1>
      <div className="w-[300px] h-[300px] ">
        <div className="relative">
          {/* <Image
            src={image}
            width={100}
            height={150}
            layout="responsive"
            className="w-full h-[450px] object-cover rounded-lg "
          /> */}
          <img
            src={image}
            alt=""
            className="w-full h-[450px] object-cover rounded-lg "
          />

          <div className="w-full p-4 absolute bottom-0 bg-gradient-to-b from-transparent to-black/80 rounded-lg  ">
            <h1 className="text-xl font-bold text-white capitalize">{name}</h1>
            <p className="text-white font-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              aliquam quidem
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anggota;
