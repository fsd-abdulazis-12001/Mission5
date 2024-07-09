import React from 'react'

 
import Modal from '@mui/material/Modal';
const index = ({handleClose, open}) => {
  return (
    <div className='relative bg-[#181A1C] w-full flex justify-center items-center'>
         <Modal
           open={open}
           onClose={handleClose}
           aria-labelledby="modal-modal-title"
           aria-describedby="modal-modal-description"
            className='overflow-scroll'
          >
            <div className='absolute flex-col justify-center items-start top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#181A1C] md:w-[50%]  rounded-md '>
                <div className='relative w-full h-[554px] '>
                    <img src="/img/thumbnail/PreviewSeries/tn1.png" alt="" className='w-full h-full object-cover'/>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C] to-transparent h-full">
      
                    </div>
                    <img src="/img/thumbnail/PreviewSeries/tn1.png" alt="" className='w-full h-full object-cover'/>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C] to-transparent h-full">
      
                    </div>
                </div>
            </div>
         </Modal>
     </div>
   
  )
}

export default index
