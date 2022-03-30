import React, { useEffect } from "react";
import Image from "next/image";

const SplashScreen = () => {
  //   useEffect(() => {
  //     setTimeout(() => {
  //       navigate.push("/home");
  //     }, 3000);
  //   }, []);
  return (
    <div className="w-screen h-screen bg-[#2D31FA] flex flex-col items-center justify-center">
      <div className="fadeInUp w-screen p-4 z-10 flex  flex-col gap-4 justify-center items-center text-white lg:mt-20 ">
        <span className="-mt-6">
          <Image src={"/Logo.png"} alt="logo bbd" width={100} height={100} />
        </span>
        <h1 className="text-[30px] text-white">KTBBD</h1>
      </div>
    </div>
  );
};

export default SplashScreen;
