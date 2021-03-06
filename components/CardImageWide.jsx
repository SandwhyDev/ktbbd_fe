import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
const CardImagesWide = ({
  image = "https://images.pexels.com/photos/10022592/pexels-photo-10022592.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
}) => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div>
      <div className="w-full h-full" onClick={handleClick}>
        <img src={image} alt="" className="w-[370px] h-[150px] object-cover " />
      </div>

      {click && (
        <div className="w-full h-full bg-black/70 flex flex-col gap-2 items-end justify-center touch-none fixed top-0 left-0 bottom-0 z-20">
          <img src={image} alt="" className="w-full  " />

          <span
            className="text-3xl text-white  flex px-6 justify-end z-50"
            onClick={() => {
              alert("test");
            }}
          >
            <FiDownload />
          </span>
          <div
            className="w-full h-full bg-transparent fixed top-0 right-14 -z-20"
            onClick={handleClick}
          ></div>
        </div>
      )}
    </div>
  );
};

export default CardImagesWide;
