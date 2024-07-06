import React from 'react'
import { IoVolumeMute } from "react-icons/io5";
const HeroLayouts = ({bgimage , title, description}) => {
  return (
    <div className="relative bg-gray-900 text-white h-[587px]">
    <img
      src={bgimage.imgsrc}
      alt={bgimage.alt}
      className="absolute w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C] to-transparent h-full"></div>
    <div className="flex justify-center relative h-full items-end pb-16">
      <div className="w-11/12 mb-4">
        <div className="text-left max-w-2xl mb-4">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="mb-4">
          {description}
          </p>
        </div>
        <div className="flex items-center">
          <div className="flex items-center space-x-5">
            <button className="bg-customBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Mulai
            </button>
            <button className="bg-[#22282A] hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
              Selengkapnya
            </button>
            <span className="bg-gray-700 text-white py-1 px-2 rounded-full bg-opacity-0  border border-gray-700 ">18+</span>
          </div>
          <IoVolumeMute className="text-white text-2xl ml-auto rounded-full " />
        </div>
      </div>
    </div>
  </div>
  )
}
 
export default HeroLayouts
