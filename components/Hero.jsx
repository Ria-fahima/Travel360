import React from 'react'

const Hero = ({heading, message}) => {
  return (
    <div className='flex justify-center items-center mb-12 bg-fixed h-screen bg-center bg-cover custom-img'>
        {/* overlay starts */}
       <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]"/>
        <div className='p-5 text-white z-[2]  mt-[-10rem]'>
            <h2 className='text-5xl font-bold pt-16'>{heading}</h2>
            <p className='py-6 text-xl'>{message}</p>
            <button className='px-8 py-2 border rounded hover:bg-white hover:text-black ease-in duration-300'>Book</button>
        </div>
    </div>
  )
}

export default Hero