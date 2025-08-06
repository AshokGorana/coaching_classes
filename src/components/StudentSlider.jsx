import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const StudentSlider = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <Swiper className="max-w-5xl"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <img className="mb-8" src="/images/studentSlide1.avif" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="mb-8" src="/images/studentSlide2.png" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="mb-8" src="/images/studentSlide3.png" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default StudentSlider;

