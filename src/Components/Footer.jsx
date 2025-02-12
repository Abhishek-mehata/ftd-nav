import React from 'react'
import clientAudioPhile from "../images/client-audiophile.svg";
import clientDatabiz from "../images/client-databiz.svg"
import clientMaker from '../images/client-maker.svg'
import clientMeet from "../images/client-meet.svg"

const Footer = () => {
  return (
    <div className='flex flex-wrap justify-center md:justify-between items-center p-4'>
      <img className='w-[70px] h-[20px] sm:w-[90px] sm:h-[30px] mx-2 my-1' src={clientDatabiz} alt="Databiz" />
      <img className='w-[80px] h-[20px] sm:w-[100px] sm:h-[30px] mx-2 my-1' src={clientAudioPhile} alt="AudioPhile" />
      <img className='w-[70px] h-[20px] sm:w-[90px] sm:h-[30px] mx-2 my-1' src={clientMeet} alt="Meet" />
      <img className='w-[70px] h-[20px] sm:w-[90px] sm:h-[30px] mx-2 my-1' src={clientMaker} alt="Maker" />
    </div>
  )
}

export default Footer
