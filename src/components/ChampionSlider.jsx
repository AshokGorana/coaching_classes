// ChampionSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

const ChampionSlider = () => {
  const examButtons = [
    { label: "JEE", active: true },
    { label: "NEET", active: false },
    { label: "Grade 6-10", active: false },
  ];

  return (
    <section className="w-full py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content */}
          <div className="flex-col space-y-3 lg:space-y-5 text-center lg:text-left order-2 lg:order-1">
            <div className="">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold text-white leading-tight">
                Your Dream.
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold text-white leading-tight">
                Our Expertise.
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-gray-300 font-medium max-w-md mx-auto lg:mx-0">
              What brings you to us today?
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              {examButtons.map((exam) => (
                <button
                  key={exam.label}
                  className={`px-6 sm:px-8 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0f1824] ${
                    exam.active
                      ? "bg-white text-[#0f1824] shadow-lg"
                      : "border-2 border-white text-white hover:bg-white hover:text-[#0f1824]"
                  }`}
                >
                  {exam.label}
                </button>
              ))}
            </div>

            <div className="pt-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0f1824]">
                Start Your Journey
              </button>
            </div>
          </div>

          {/* Right slider */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              <Swiper
                className="rounded-2xl shadow-2xl overflow-hidden"
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                pagination={{
                  clickable: true,
                  bulletClass: "swiper-pagination-bullet-custom",
                  bulletActiveClass: "swiper-pagination-bullet-active-custom",
                }}
                loop={true}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={800}
              >
                <SwiperSlide>
                  <div className="flex justify-center items-center relative aspect-[4/3] overflow-hidden">
                    <img
                      className="w-full max-w-[400px] h-full object-cover hover:scale-110 transition-transform duration-700"
                      src="/images/slide1.webp"
                      alt="Students studying together"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center items-center relative aspect-[4/3] overflow-hidden">
                    <img
                      className="w-full max-w-[400px] h-full object-cover hover:scale-110 transition-transform duration-700"
                      src="/images/slide3.webp"
                      alt="Online learning platform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center items-center relative aspect-[4/3] overflow-hidden">
                    <img
                      className="w-full max-w-[400px] h-full object-cover hover:scale-110 transition-transform duration-700"
                      src="/images/slide3.webp"
                      alt="Academic success celebration"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </SwiperSlide>
              </Swiper>

              {/* Navigation Buttons */}
              <div className="flex justify-center mt-6 space-x-4">
                <button className="swiper-button-prev-custom w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="swiper-button-next-custom w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChampionSlider;
