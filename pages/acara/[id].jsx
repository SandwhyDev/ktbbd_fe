import React from "react";
import Navbar from "../../components/Navbar";
import { BsArrowLeft } from "react-icons/bs";
import Footer from "../../components/Footer";

const DetailAcara = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Navbar title="Detail Acara" />
      <div className="w-full flex  flex-col gap-2">
        <div>
          <img
            src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
            className="w-full h-44 object-cover"
          />
        </div>
        <h1 className="text-xl font-bold text-center ">Judul Acara</h1>
        <div className="w-full px-4 flex flex-col gap-2">
          <div className="w-full">
            <h1 className="text-lg font-medium ">Konsep Acara</h1>
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              cum harum eius vero eum tempora a doloremque maxime nostrum
              accusamus expedita quas quibusdam sint, vel est illo pariatur
              reprehenderit distinctio!
            </p>
          </div>

          <div className="">
            <h1 className="text-lg font-medium ">Jadwal Acara</h1>
            <p className="font-light">Jumat, 18/03/2022</p>
            <p className="font-light">Waktu: 18:00-01:00</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailAcara;
