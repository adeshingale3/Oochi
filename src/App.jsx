// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Services from './Components/Services'
import Feature from './Components/Feature'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import CustomCursor from './Components/CustomCursor'
import LocomotiveScroll from 'locomotive-scroll';
function App() {
  

const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <CustomCursor />
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Services/>
      <Feature/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
