import React from 'react'
import Navbar from './Components/Navbar'
import HeroContent from './Components/HeroContent'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='lg:w-[95vw] w-[99vw] mx-auto'>
      <Navbar />
      <HeroContent />
      <Footer />
    </div>
  )
}

export default App