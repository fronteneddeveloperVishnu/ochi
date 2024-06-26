import React from 'react'
import { motion } from 'framer-motion';

function Makquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap overflow-hidden'>
        <motion.h1 initial={{x: 0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className='text-[15vw] tracking-tighter leading-none font-bold pt-10 mb-30 pr-20'>WE ARE OCHI</motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className='text-[15vw] tracking-tighter leading-none font-bold pt-10 mb-20 pr-20'>WE ARE OCHI</motion.h1>
        {/* <motion.h1 initial={{x: 0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 3}} className='text-[15vw] tracking-tight leading-none font-semibold pt-10 mb-20'>WE ARE OCHI</motion.h1> */}
        {/* <motion.h1 initial={{x: 0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[15vw] tracking-tight leading-none font-semibold pt-10 mb-20'>WE ARE OCHI</motion.h1> */}
      </div>
    </div>
  )
}

export default Makquee; 
