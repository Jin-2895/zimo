import Image from 'next/image'
import React from 'react'
import ZimaB from "../public/Logo_s/ZIMO_B.png"
import Partner1 from "../public/partner1.png"
import Partner2 from "../public/partner2.png"

const Partners = () => {
  return (
    <div className='h-[100vh]'>
      <div className='ml-0 lg:ml-10'>
        <div className='flex flex-col lg:flex-row mt-[10rem]'>
          <div className='px-10 py-10 mt-p[10rem] flex justify-center flex-col lg:flex-col'>
            <div className='px-10 mt-10 py-10'>
              <Image width={300} src={ZimaB}/>
              </div>
              <div className='px-0 lg:px-10'>
                <h1 className='font-[500] text-gray-400 tracking-[0.3rem] leading-3 text-[2.5rem] lg:text-[3.5rem] mt-5'>PARTNERS</h1>
              </div>
          </div>
          <div className='mt-10 pt-10 ml-2 lg:ml-10 px-0 lg:px-10'>
            <div className='ml-0 lg:ml-10'>
              <div>
                <Image src={Partner1} alt='house logo'/>
              </div>
              <div className='mt-5 ml-0 lg:ml-10'>
                <Image src={Partner2} alt='house logo'/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
