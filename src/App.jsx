import React from 'react'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Makquee from './components/Makquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=' w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar />
      <LandingPage />
      <Makquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default App;
