import Image from 'next/image'
import React from 'react'
import ZimaB from "../public/Logo_s/ZIMO_B.png"
import mension from "../public/mension.png"

const Platform = () => {
  return (
    <div>
      <h1 className='text-center py-7 mt-7 font-[400] tracking-[0.3rem] text-[3.5rem]'>ONE PLATFORM FOR ALL PREMIUM LISTINGS</h1>
      <h1 className='text-center py-7 mt-7 font-[400] tracking-[0.3rem] text-[3rem]'>UNLIMITED POTENTIAL</h1>

      <div className=''>
        <div className='flex flex-col lg:flex-row mt-[10rem]'>
          <div className='px-10 py-10 mt-p[10rem] flex justify-center flex-col lg:flex-col'>
            <div className='px-10 mt-10 py-10'>
              <Image width={550} src={ZimaB} alt=""/>
              </div>
              <div className='px-10'>
                <h1 className='font-[500] tracking-[0.3rem] text-[2rem]'>ONE SOURCE</h1>
                <h1 className='font-[500] tracking-[0.3rem] text-[3rem]'>ENTRY TICKETS</h1>
                <h1 className='font-[500] tracking-[0.3rem] text-[1.2rem] text-gray-500'>FOR ALL PREMIUM LISTINGS</h1>
              </div>
          </div>
          <div className='mt-10 pt-10 px-10 lg:px-0'>
            <Image className='bg-black/[50] rounded-[1.2rem]' src={mension} alt='house logo'/>
            <div>
              <h1 className='text-black font-normal text-2xl text-center tracking-[0.3rem] pt-10 py-10'>LET YOUR DREAMS FIND YOU</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Platform