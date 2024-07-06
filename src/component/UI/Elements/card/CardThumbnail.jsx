/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react'
 
const CardThumbnail = (props) => {
  return (
    <div className='relative group rounded-md w-[95px] h-[143px]  sm:w-[200px] sm:h-[300px] transition-transform duration-300 hover:scale-110 '>
      <img src={props.image} alt={props.title} className='w-full h-full object-cover rounded-md ' />
      {props.top10 === true && <span className="absolute top-0 right-2 p-2 w-6 sm:w-8 sm:h-18 rounded-md text-center bg-[#B71F1D] text-white text-[6px] sm:text-xs font-bold">Top 10</span>}
      {props.neweps === true && <span className="absolute top-1 sm:top-3 left-1 sm:left-3 p-2 w-auto h-auto rounded-xl text-center bg-[#0F1E93] text-white text-[6px] sm:text-xs font-bold">Episode Baru</span>}
    </div>
  )
}

export default CardThumbnail
