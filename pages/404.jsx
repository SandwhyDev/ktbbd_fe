import Image from "next/image";
import React from "react";
import lottie from "lottie-web";
import NotFound from "../assets/animation_500_l1nli027.gif";
const PageNotFound = () => {


  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center ">
      <Image src={NotFound} width={500} height={500} />
      <div className="flex flex-col items-center gap-2">
        {/* <h1 className="text-xl text-blue-400 font-mono">Error 404</h1> */}
        <h1 className="text-xl text-blue-400 font-mono -mt-16">
          Halaman Tidak di temukan
        </h1>
      </div>
    </div>
  );
};

export default PageNotFound;
