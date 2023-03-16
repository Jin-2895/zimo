import React from 'react'
import FooterImage from './BackgroundImages/FooterImage'
import Image from 'next/image'
import Jeep from "../public/car22.png"

const Footer = () => {
  return (
    <div className='relative h-full'>
    <div className='absolute -z-10 object-contain h-screen w-screen'><FooterImage /></div>
    <div className='relative h-[100vh] -bottom-10 px-1 md:px-4 lg:px-10'>
      <div className='px-1 absolute -bottom-[20rem] md-px-4 lg:px-10'><Image src={Jeep}  alt='car log' /></div>
      {/* <div><Image  alt='car log' /></div> */}
      
    </div>
    </div>
  )
}

export default Footer
