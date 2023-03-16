import React from 'react'
import ZimoLogo from "../public/Logo_s/ZIMO_W.png"
import ZimoZigLogo from "../public/Logo_s/ZIMO_ZIG_W.png"
import ZimoMenuLogo from "../public/Logo_s/ZIMO_Menu_Icon_W.png"
import UKFlag from "../public/Images/ukflag.jpg"
import UserIcon from "../public/Logo_s/ZIMO_User.png"
import BagIcon from "../public/bag.png"
import DownArrow from "../public/Images/down_arrow.png"

import Image from 'next/image'
import HeroImage from './BackgroundImages/HeroImage'


const Hero = () => {
  return (
    <div className='relative h-full'>
        <div className='absolute -z-10 object-contain h-screen w-screen'><HeroImage /></div>
        <div className='w-full px-10 py-20 h-12 grid grid-cols-3'>
          <div className='hidden lg:flex lg:flex-row md:gap-10 relative'>
            <Image  width={50} src={ZimoMenuLogo} alt="zimo zig logo"/>
            <Image width={150} src={ZimoLogo} alt="zimo logo"/>
            <div className='relative'><h1 className='text-white text-lg font-normal tracking-[0.2rem] absolute -bottom-2'>ABOUT</h1></div>
          </div>
          <div className='flex justify-content-center'>
            <Image width={150} src={ZimoZigLogo} alt="zimo zig logo" className='ml-[6rem] sm:ml-[13rem] md:ml-[15rem]'/>
          </div>
          <div className='hidden lg:flex lg:flex-row gap-[1rem] 2xl:gap-[4rem] '>
            <div className='flex flex-row gap-4'>
              <div className='text-white text-sm font-thin w-[17rem] '>
                <p  className='tracking-[0.1rem]'><span className='tracking-[0.4rem]'>17:23</span> LONDON UNITED KINGDOM
                </p>
                <p className='text-sm text-yellow-600 font-thin flex justify-end tracking-[0.2rem] '>SUNDAY, 12 FEBRUARY 2023</p>
              </div>
              <div className=''><Image width={40} src={UKFlag} alt='flag' className='flex justify-items-center align-middle mt-2'/></div>
            </div>
            <div className='text-white hidden xl:flex xl:flex-row gap-[2rem] xl:gap-[6rem]'>
              <Image width={20} src={BagIcon} alt='flag' className='flex justify-items-center align-middle mb-1 object-contain'/>
              <Image width={20} src={UserIcon} alt='flag' className='flex justify-items-center align-middle mb-1 object-contain'/>
            </div>
          </div>
        </div>
        <div className='text-white px-10 mt-5'>
          <h1 className='text-white text-lg font-normal tracking-[0.2rem]'>{"←"} BACK</h1>
        </div>
        <div className='h-30 mt-[7rem] lg:mt-[18rem] px-10'>
          <div><h1 className='text-white text-[2.5rem] font-normal tracking-[0.4rem]'>DISCOVER</h1></div>
          <div><h1 className='text-white text-[4rem] font-normal tracking-[0.4rem]'>A NEW WORLD</h1></div>
          <div><h1 className='text-lg font-normal tracking-[0.3rem] text-gray-500'>FOR THOSE WHO WISH FOR MORE...</h1></div>
        </div>
        <div className='mt-[10rem] relative flex justify-center'>
          <h1 className='absolute bottom-0 text-lg font-normal tracking-[0.3rem] text-gray-500 text-center'>BRINGING THE WORLD CLOSER TOGETHER</h1>
        </div>
        <div className='relative flex justify-center'>
          <Image  width={50} src={DownArrow} alt="down arrow logo" className='mt-10'/>
        </div>
    </div>
  )
}

export default Hero