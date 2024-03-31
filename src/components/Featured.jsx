import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Power4 } from 'gsap';

function Featured() {
    const[isHovering, setHovering] = useState(false);
    
  return (
    <div  className='w-full py-20'>
       <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-8xl tracking-tight font-["Neue_Montreal"]'>Featured projects</h1>
       </div>
       <div className='px-20'>
            <div onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} className='cards flex gap-10 mt-10'>
                <div className='relative cardcontainer w-1/2  h-[75vh]'>
                    <h1 className='absolute text-[#CDEA68]  z-20 left-full -translate-x-[50%] top-1/2 -translate-y-1/2 text-8xl font-semibold tracking-tighter leading-none'>
                        <h1 className='absolute flex text-[#4b5d0a]  z-20 right-full translate-x-[50%] top-1/2 -translate-y-1/2 text-8xl font-semibold tracking-tighter leading-none overflow-hidden'>
                            {
                                "FEATURED".split('').map((item, index)=> {
                                    return <motion.span initial={{y:"100%"}} animate={isHovering ? ({y: 0}):({y:"100%"})} transition={{ease:[0.22, 1, 0.36, 1], delay:index*.06}}  key={index} className='inline-block'>{item}</motion.span>
                                })
                            }
                        </h1>
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden '>
                        <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </div>
                <div className='cardcontainer relative w-1/2  h-[75vh]'>
                    <h1 className='absolute flex overflow-hidden text-[#CDEA68]  z-20 right-full translate-x-[50%] top-1/2 -translate-y-1/2 text-8xl font-semibold tracking-tighter leading-none'>
                        {
                            "".split('').map((item, index)=> {
                                return <motion.span initial={{y:"100%"}} animate={isHovering ? ({y: 0}):({y:"100%"})} transition={{ease:[0.22, 1, 0.36, 1], delay:index*.06}}  key={index} className='inline-block'>{item}</motion.span>
                            })
                        }
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </div>
            </div>
       </div>
       
    </div>
  )
}

export default Featured;
