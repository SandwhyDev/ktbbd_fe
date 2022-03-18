import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PhotoAwal from "../assets/splash.jpg";
import Logo from "../assets/logo.png";
import { useRouter } from "next/router";
export default function Home() {
  const navigate = useRouter();

  const handleDaftar = () => {
    navigate.push("/daftar");
  };

  const handleLogin = () => {
    navigate.push("/login");
  };
  return (
    <div className="w-screen h-screen bg-blue-600 flex flex-col items-center">
      <div className="w-full h-[46%] bg-red-500">
        <Image src={PhotoAwal} alt="" width="400" height="470" />
      </div>
      <div className="w-screen p-4 z-10 flex -mt-10 flex-col gap-4 justify-center items-center text-white ">
        <Image src={Logo} alt="" />
        <h1 className="text-[30px] text-white">KTBBDApp</h1>
        <p className="text-center text-[20px]">
          Kumpulan foto, pengumuman acara, dan aktivitas warga Komplek Bank Bumi
          Daya
        </p>
        <div className="w-full flex  gap-2">
          <button
            className="w-full p-3 bg-blue-400 rounded-md"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="w-full p-3 bg-white rounded-md border-2 border-blue-300"
            onClick={handleDaftar}
          >
            <h1 className=" text-blue-500">Daftar</h1>
          </button>
        </div>
      </div>
    </div>
  );
}
