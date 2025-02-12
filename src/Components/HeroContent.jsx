import React from 'react'
// import mobileHero from "../images/image-hero-mobile.png"
// import desktopHero from "../images/image-hero-desktop.png"

import desktopHero from "../images/image-hero-mobile.png"
import mobileHero from "../images/image-hero-desktop.png"

const HeroContent = () => {
    return (
        <div className='flex flex-col items-center justify-center px-4 md:px-8 lg:px-16'>

            <img className='w-full h-auto md:hidden' src={mobileHero} alt="Hero" />
            <img className='w-full h-auto hidden md:block' src={desktopHero} alt="Hero" />

            <div className='text-center flex flex-col items-center justify-center mt-4 md:mt-8'>
                <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl'>Make remote work</h1>
                <p className='mt-2 md:mt-4 lg:mt-6 text-sm md:text-base lg:text-lg'>
                    Get your team in sync, no matter your location. Streamline processes,
                    create team rituals, and watch productivity soar.
                </p>
            </div>

            <button className='w-[150px] md:w-[200px] lg:w-[250px] text-center rounded-full bg-black text-teal-50 p-3 my-4 md:my-6 lg:my-8'>
                Learn More
            </button>
        </div>
    )
}

export default HeroContent
