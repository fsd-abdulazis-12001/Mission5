/* eslint-disable react/prop-types */
import React  from 'react'
import { FaStar, FaPlay, FaCheck  } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import formatwaktu from '../../../../utils/formatwaktu';
import { useState } from "react";
const MovieCard = (props) => {
  const { style, index, type, title, image, rating, eps, duration, progress, totaleps, category, label } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`h-full object-cover transition-transform duration-300 ${style === "box-panjang" ? isHovered ? 'translate-y-[-15%] scale-x-[140%]' : '' : isHovered ? 'scale-[110%] translate-y-[-50%]' : ''} ${index === 0 && isHovered && 'translate-x-[5%]'}`}>
        <div className={`relative w-full h-full transition-height duration-300 ${style === "box-panjang" && isHovered && 'object-fill object-cover h-[65%]'}`}>
          {label === "Top 10" && <span className="absolute top-0 right-2 p-2 w-8 h-18 rounded-md text-center bg-[#B71F1D] text-white text-xs text-center font-bold">{label}</span>}
          {label === "new Episode" && <span className="absolute top-3 left-3 p-2 w-auto h-18 rounded-xl text-center bg-[#0F1E93] text-white text-xs font-bold">{label}</span>}
          {label === "Premium" && <span className="absolute top-3 left-3 p-2 w-auto h-18 rounded-xl text-center bg-[#B7A207] text-white text-xs font-bold">{label}</span>}

          <img src={image} alt={title} className={`object-cover w-full h-full rounded-md ${isHovered && 'rounded-b-none ' }`} />
        </div>

        {style === "box" &&
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 p-2 flex flex-row items-end justify-between">
            <h2 className={`text-white text-lg font-bold ${isHovered ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>{title}</h2>
            <div className={`flex items-center ${isHovered ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
              <FaStar className="mr-1" />
              <span className="text-white">{rating}</span>
            </div>
          </div>
        }

        <div className={`flex items-center justify-center rounded-b-md z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full h-[180px] transition-opacity duration-300 ${isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className='w-[95%]'>
            <div className="w-full h-[55px] flex flex-row items-center justify-between gap-3 px-2">
              <div className="flex flex-row items-center gap-4">
                <div
                  className="cursor-pointer w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center transition hover:bg-neutral-300"
                  onClick={() => { }}
                >
                  <FaPlay className="text-black w-4 h-4" />
                </div>
                <div
                  className="cursor-pointer w-8 h-8 lg:w-10 lg:h-10 bg-opacity-0 rounded-full border flex items-center justify-center transition hover:bg-gray-300"
                  onClick={() => { }}
                >
                  <FaCheck className="text-white" />
                </div>
              </div>
              <div
                className="cursor-pointer w-8 h-8 lg:w-10 lg:h-10 bg-opacity-0 rounded-full border flex items-center justify-center transition hover:bg-gray-300"
                onClick={() => { }}
              >
                <IoIosArrowDown className="text-white" />
              </div>
            </div>
            <div className="w-full pt-4 ">
              {type !== 'movie' && style !== "box-panjang" && (
                <p className="text-white text-sm pb-3 left-0">
                  &quot;{eps}&quot;
                </p>
              )}
              <div className='flex flex-row items-center gap-3 justify-start pb-3'>
                {style === "box-panjang" ? (
                  <>
                    <span className="bg-gray-700 text-white py-1 px-2 rounded-full border border-gray-700">13+</span>
                    <p>{totaleps} Episode</p>
                  </>
                ) : (
                  <>
                    <div className="w-[80%] bg-gray-400 rounded-full h-1.5">
                      <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: progress }}></div>
                    </div>
                    <p className="text-white text-xs">{formatwaktu(duration)}</p>
                  </>
                )}
              </div>

              <div className="flex flex-wrap gap-1 justify-between w-full">
                {category.map((cat, idx) => (
                  <React.Fragment key={idx}>
                    <span className="text-white py-1 px-2 text-xs">{cat}</span>
                    {idx < category.length - 1 && <span className="text-white py-1 px-2 text-xs">•</span>}
                  </React.Fragment>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard
