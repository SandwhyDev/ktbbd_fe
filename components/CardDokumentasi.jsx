import React from "react";

const CardDokumentasi = () => {
  return (
    <div className="w-full h-44 bg-white shadow-md">
      <div className="flex w-full h-full relative  ">
        <img
          src="https://images.pexels.com/photos/9436715/pexels-photo-9436715.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
          srcset=""
          className="w-[50%] h-full object-cover"
        />
        <img
          src="https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
          srcset=""
          className="w-[50%] h-full object-cover"
        />
        <div className="w-full h-24 px-4 py-3 flex flex-col justify-end absolute bottom-0 bg-gradient-to-b from-transparent to-black/80 ">
          <h1 className="font-bold text-white text-xl">Acara</h1>
          <p className="font-bold text-white/70 text-xs">
            17 agustus 2022 - 20 agustus 2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDokumentasi;
