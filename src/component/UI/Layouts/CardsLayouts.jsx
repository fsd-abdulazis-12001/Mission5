import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CardsLayouts = ({title , children, height , amount}) => {
  return (
    <div className={`flex justify-center bg-[#181A1C] text-white ${height} py-11`}>
    <div className='flex flex-col w-11/12'>
      <h2 className="text-2xl font-bold text-left pt-3">{title}</h2>
      <div className='relative flex flex-row items-center justify-between h-[80%] pt-4'>
      <div className="overflow-y-visible overflow-x-clip h-full ">
      
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: amount-3,
            spaceBetween: 15,
          },
         600: {
            slidesPerView: amount-2,
            spaceBetween: 15,
          },
       
          900: {
            slidesPerView: amount-1,
            spaceBetween: 15,
          },
          1300: {
            slidesPerView: amount,
            spaceBetween: 15,
          },
        }}
      navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation]}
        className="flex justify-center gap-2 h-full" 
      >
       {children}
       <div className="swiper-button-prev flex items-center justify-center">
        <FaArrowLeft className='pl-2' />
       </div>
       <div className="swiper-button-next flex items-center justify-center">
        <FaArrowRight className='pl-2' />
       </div>
      </Swiper>
    
      </div>
      </div>
    </div>
  </div>
  )
}

export default CardsLayouts
