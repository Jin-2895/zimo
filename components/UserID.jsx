import React from 'react'
import YachtImage from './BackgroundImages/YachtImage'
import ASAS from "../public/asasa.png"
import Image from 'next/image'
import UserArrow from "../public/user_arrow.png"

const UserID = () => {
  return (
    <div className='relative h-full'>
        <div className='absolute -z-10 object-cover h-[100vh] w-screen'><YachtImage /></div>
        <div className='lg:px-[10rem] lg:py-[6rem]'>
          <h1 className='text-[2rem] lg:text-[2.8rem] font-normal tracking-[0.3rem] text-white text-center lg:text-end'>PERSONALISED FOR YOU</h1>
          <div className='flex justify-end'>
            <h1 className='text-gray-400 w-full lg:w-[37.2rem] mt-10 text-[1.2rem] font-normal tracking-[0.2rem] leading-10  text-start px-4 lg:px-0'>DELIVERING THOUSANDS OF PERSONALISED ALERTS EVERYDAY, OUR USERS CAN BE FIRST IN LINE WHEN THAT OPPORTUNITY OF A LIFETIME IS HERE.</h1>
          </div>
        </div>
        <div className='px-[10rem] py-[6rem] flex justify-between'>
          <Image src={ASAS} alt="logo" />
          <div className='flex gap-2 flex-row'>
            <h1 className='text-white text-[1.3rem] font-normal tracking-[0.2rem] leading-10'>CREATE USER ID </h1>
              <div className='mt-2'>
                <Image className=''  src={UserArrow} alt="user arrow"/>
              </div>
          </div>
        </div>
    </div>
  )
}

export default UserID
