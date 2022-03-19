import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Anggota from "./Anggota";
const CardAnggota = () => {
  return (
    <div className="w-full h-full ">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        className=" w-full h-[500px]  "
        loop={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Anggota
            position="ketua"
            name="anjas"
            image="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Anggota
            position="wakil ketua"
            name="anjay"
            image="https://images.pexels.com/photos/11129005/pexels-photo-11129005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Anggota
            position="Design"
            name="budi"
            image="https://images.pexels.com/photos/5461428/pexels-photo-5461428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940s"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Anggota position="Developer App" name="Sandy" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CardAnggota;
