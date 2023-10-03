import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Navigation, Pagination } from 'swiper';




SwiperCore.use([Navigation, Pagination]);


function Banner () {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoHeight
      navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }} 
      pagination={{ clickable: true }} 
    >
      <div className="swiper-button-next"></div> 
      <div className="swiper-button-prev"></div> 
      <SwiperSlide><Image  src="/cover1.jpeg" alt="product banner" className="d-block w-100 h-100 bg-dark cover" width={100} height='460' unoptimized/></SwiperSlide>
      <SwiperSlide><Image  src="/cover5.jpg" alt="product banner" className="d-block w-100 h-100 bg-dark cover" width={100} height='460' unoptimized/></SwiperSlide>
      <SwiperSlide><Image  src="/cover6.jpg" alt="product banner" className="d-block w-100 h-100 bg-dark cover" width={100} height='460' unoptimized/></SwiperSlide>

    </Swiper>
  );
};

export default Banner;
