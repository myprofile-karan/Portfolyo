import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/bundle";

const Testimonials = ({ testimonials }) => {
  return (
    <div id="testimonials" className="section my-10 relative">
      <div className="bg absolute w-full h-[200px] top-1/3 md:top-1/2 md:rotate-0 rotate-90 text-8xl md:text-9xl tracking-[2rem] text-center font-bold opacity-10">
        TESTIMONIALS
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="headnig flex items-center justify-center gap-3 my-10">
          <hr className="bg-white w-[400px] h-[2px]" />
          <h2
            className="font-bold text-2xl md:text-4xl py-2"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            TESTIMONIALS
          </h2>
          <hr className="bg-white w-[400px] h-[2px]" />
        </div>
      </div>
      <Swiper
        className=""
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={2}
        autoplay
        loop
      >
        {testimonials?.map((item) => {
          return (
            <SwiperSlide className="flex">
              <div
                key={item._id}
                className="flex items-center justify-center flex-col md:flex-row"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="w-1/2">
                  <img
                    src={item?.image.url}
                    alt={item?.name}
                    className="w-full hover:opacity-80 transition-opacity duration-300"
                    data-aos="flip-right"
                    data-aos-duration="1000"
                  />
                </div>
                <div className="w-1/2 text-center">
                  <h2 className="text-2xl font-bold">{item?.name}</h2>
                  <p className="text-gray-600">{item?.position}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
