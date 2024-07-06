import React from 'react';
import { useSwiper } from 'swiper/react';
import { FaArrowLeft , FaArrowRight } from "react-icons/fa";
const SwiperNavButton = () => {
    const swiper = useSwiper();
  return (
    <div className="swiper-nav-btns z-10">
    
    <button onClick={() => swiper.slidePrev()}>Prev</button>
    <button onClick={() => swiper.slideNext()}>Next</button>
  </div>
  )
}

export default SwiperNavButton
