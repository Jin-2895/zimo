import React from 'react'
import GlobalImage from './BackgroundImages/GlobalImage'

const GlobalVision = () => {
  return (
    <div className='relative h-full top-[10rem]'>
    <div className='absolute -z-10  h-full w-screen'><GlobalImage /></div>
    <div className='h-[100vh] flex flex-col justify-center'>
      <h1 className='text-[2.8rem] flex justify-center items-center  font-normal tracking-[0.3rem] text-black text-center'>GLOBAL VISION </h1>
      <h1 className='text-[2.8rem] flex justify-center items-center  font-normal tracking-[0.3rem] text-black text-center'>(404 - Background image not found)</h1>
      <p className='text-[1.5rem] mt-8 lg:mt-12 flex justify-center items-center  font-normal tracking-[0.3rem] text-black text-center'>WITH A REMOTE CULTURE , DIVERSITY IS NATURALLY IN OUR DNA.</p>
      <p className='text-[1.5rem] mt-4 flex justify-center items-center  font-normal tracking-[0.3rem] text-black text-center'>BASED ACROSS THE GLOBE , MAKING UP OVER 23 DIFFERENT NATIONALITIES .</p>
    </div>
</div>
  )
}

export default GlobalVision