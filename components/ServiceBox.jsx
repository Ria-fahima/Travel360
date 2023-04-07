import React from 'react';
import Image from 'next/image';

const ServiceBox = ({ travelImg , travelCont}) => {
  return (
    <div className='relative'>
        <Image src={travelImg} alt='/' className='w-full max-h-48' layout="responsive"/>
        <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group'>
            <div>
            <h4 className='text-gray-200 hidden group-hover:block ease-in duration-300'>{travelCont}</h4>
            
            <button className='px-8 py-2 mt-2 border rounded bg-white text-black hidden group-hover:block hover:bg-black hover:text-white'>Book Now</button>
            </div>
        </div>
    </div>
  )
}

export default ServiceBox