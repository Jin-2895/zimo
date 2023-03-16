import React from 'react'
import RealEstate from "../public/house.png"
import CarImage from "../public/car.png"
import Yachet from "../public/yach.png"
import Watch from "../public/wach.png"
import Image from 'next/image'

const Categories = () => {
  return (
    <div className='mt-10 py-10'>
      <div className='px-10'>
        <h1 className='text-[2rem] text-center lg:text-start font-[400] tracking-[0.5rem]'>OUR CATEGORIES</h1>
      </div>

    <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 justify-center gap-6 px-10'>
    <div className='relative mt-10 w-full object-contain'>
      <div className='w-[20rem] lg:w-[25rem] h-[20rem] md:h-[25rem]'>
        <Image className='w-full object-contain min-h-0 rounded transform -scale-x-100' src={RealEstate} alt="real estate"/>
      </div>
      <div className='w-full'>
        <h1 className='absolute ml-[4rem] lg:ml-[6rem] bottom-10 text-white items-center text-center font-[400] text-2xl flex justify-center tracking-[0.3rem]'>REAL ESTATE</h1>
      </div>
    </div>
    <div className='relative mt-10 w-full object-contain'>
      <div  className='w-[20rem] lg:w-[25rem] h-[20rem] md:h-[25rem]'>
        <Image className='w-full object-contain min-h-0 rounded' src={CarImage} alt="car"/>
      </div>
      <div className='w-full'>
        <h1 className='absolute ml-[8rem] lg:ml-[11rem] bottom-10 text-white items-center text-center font-[400] text-2xl flex justify-center tracking-[0.3rem]'>CARS</h1>
      </div>
    </div>
    <div className='relative mt-10 w-full object-contain'>
      <div className='w-[20rem] lg:w-[25rem] h-[20rem] md:h-[25rem]'>
        <Image className='w-full object-contain min-h-0 rounded transform -scale-x-100' src={Yachet} alt="yachts"/>
      </div>
      <div className='w-full'>
        <h1 className='absolute ml-[7rem] lg:ml-[10rem] bottom-10 text-white items-center text-center font-[400] text-2xl flex justify-center tracking-[0.3rem]'>YACHTS</h1>
      </div>
    </div>
    <div className='relative mt-10 w-full object-contain'>
      <div className='w-[20rem] lg:w-[25rem] h-[20rem] md:h-[25rem]'>
        <Image className='w-full object-center a object-scale-down min-h-0 rounded t' src={Watch} alt="watches"/>
      </div>
      <div className='w-full'>
        <h1 className='absolute ml-[6rem] lg:ml-[9rem] bottom-10 text-white items-center text-center font-[400] text-2xl flex justify-center tracking-[0.3rem]'>WATCHES</h1>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Categories