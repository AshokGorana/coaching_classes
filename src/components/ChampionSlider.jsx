// ImageSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

const ChampionSlider = () => {
  return (
    <div className="mt-5 grid grid-cols-2 gap-[12rem] px-24">
       <div className="flex justify-center flex-col leading-15">
        <div className="text-white text-4xl bold ">Your Dream.</div>
        <div className="text-white text-4xl bold ">Our Expertise.</div>
        <div className="text-white bold">What brings you to us today?</div>

        <div className="flex gap-5">
          <button className="border-2 border-white px-8 rounded-2xl cursor-pointer text-white">JEE</button>
          <button className="border-2 border-white px-5 rounded cursor-pointer text-white">NEET</button>
          <button className="border-2 border-white px-5 rounded cursor-pointer text-white">Grade 6-10</button>
        </div>
      </div>

      <div className="">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          // navigation
          // pagination={{ clickable: true }}
          loop={true}
        >
          <SwiperSlide>
            <img className="w-sm" src="/images/slide1.webp" alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-sm" src="/images/slide2.webp" alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-sm" src="/images/slide3.webp" alt="Slide 3" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ChampionSlider;
