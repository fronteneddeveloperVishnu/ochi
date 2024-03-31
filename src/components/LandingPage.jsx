import { motion } from 'framer-motion'
import React from 'react'
import {FaArrowUpLong} from "react-icons/fa6"


function LandingPage() {
    
  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-90 pt-2'>
      <div className='textstructure mt-52 px-20'>
        {
            ["We Create", "Eye Opening", "Presentation"].map( (item, index) => {
                return (
                    <div className='masker  '>
                        <div className='w-fit flex gap-6 '>
                            {index === 1 &&
                            (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration: 1 }}  className='w-[9vw] h-[6vw] relative top-[1vw] rounded-lg  bg-green-500'></motion.div>)}
                            <h1 className=' leading-[7vw]  tracking-tighter font-semibold uppercase text-[8vw]'>{item}</h1>
                        </div>
                    </div>
                )
            })
        }
        
      </div>
      <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
        {
            ["For public and private companies", "From the first pitch to IPO"].map( (item, index)=> {
                return (
                    <p className='text-md font-light tracking-tight leading-none'>{item}</p>
                )
            })
        }
        <div className='start flex items-center gap-5'>
            <div className='px-5 py-2 border-[2px] font-light text-sm uppercase border-zinc-500 rounded-full'>start the project</div>
            <div className='w-10 h-10 flex item-center justify-center rounded-full border-[2px] border-zinc-500'>
                <span className='rotate-[45deg]'>
                    <FaArrowUpLong />
                </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
