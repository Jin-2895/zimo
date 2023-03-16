import React from 'react'
import Image from 'next/image'
import Zimo from "../public/Logo_s/ZIMO_ZIG_B.png"
import DownArrowBlack from "../public/Images/down_arrow_black.jpg"

const Introduction = () => {
  return (
    <div className='flex flex-col'>
        <h1 className='text-black font-normal text-xl text-center tracking-[0.3rem] pt-10 py-10'>A REAL ESTATE AND PROPERTY PLATFORM THAT IS CHANGING THE WORLD</h1>
        <div className='pt-8 md:pt-10'>
          <h3 className='text-black font-normal text-[1rem] md:text-[2rem] text-center lg:text-start tracking-[0.1rem] px-12'>A REVOLUTIONARY PLATFORM</h3>
          <h2 className='text-black font-normal text-[1.5rem] md:text-[3.24rem] text-center lg:text-start tracking-[0.2rem] px-12'>ENTRIES - SELLERS</h2>
          <h1 className='text-black font-normal text-[2.5rem] md:text-[4.7rem] text-center lg:text-start tracking-[0.3rem] px-12'>WORLDWIDE</h1>
        </div>
        <div className='flex flex-col justify-end items-end mt-10 md:mt-0'>
          <div className='flex flex-col gap-6'>
          <Image width={600} src={Zimo} alt="zimo logo" className='ml-3 sm:ml-10 lg:ml-1 w-[18rem] md:w-[30rem]'/>
          <h3 className='text-black text-[1.2rem] font-normal text-center tracking-[0.1rem] px-12 pt-10'>CONNECTING USERS FROM ACROSS THE GLOBE</h3>
          <h2 className='text-black text-[1.2rem] font-normal  text-center tracking-[0.2rem] px-12'>TO FACILITATE LIFE'S MOST IMPORTANT</h2>
          <h1 className='text-black text-[1.2rem] font-normal  text-center tracking-[0.3rem] px-12'>PERSONAL TRANSACTIONS</h1>
          </div>
        </div>
        <div className='pt-8 md:pt-10 mt-10 md:mt-0'>
          <h3 className='text-black font-[400] text-[2rem] text-center lg:text-start tracking-[0.1rem] px-2 md:px-12'>TO BEST OF THE BEST</h3>
          <p className='text-black font-[500] text-xs tracking-[0.1rem] mt-2 text-center lg:text-start px-2 md:px-12 w-full lg:w-[18rem] md:w-[40rem]'>A COMBINATION OF AUTOMATION AND MANUAL CURATION OUR PRO AGENTS AND MODERATION TEAM SELECTS THE HIGHEST QUALITY LISTINGS OF THE MARKET FROM ACROSS THE WORLD</p>
        </div>
        <div className='relative flex justify-center'>
          <Image  width={50} src={DownArrowBlack} alt="down arrow logo" className='mt-10'/>
        </div>
    </div>
  )
}

export default Introduction