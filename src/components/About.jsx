import React from 'react'

function About() {
  return (
    <div data-scroll  className='w-full p-20 z-999 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl -mt-10'>
      <h1 className='font-["Neue_Montreal"] text-[4vw] text-zinc-900 tracking-tight leading-[3.5vw]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className='flex gap-5  w-full pt-10 border-t-[1px] mt-20 border-[#98aa57]'>
        <div className='w-1/2'>
            <h1 className='text-6xl text-zinc-900'>Our approach :</h1>
            <button className= 'flex items-center gap-10 px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white'>Read More
                <div className='w-2 h-2 bg-white rounded-full'></div>
            </button>
        </div>

        <div className='w-1/2 h-[70vh] rounded-3xl bg-[#808d50] overflow-hidden'>
            <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
        
      </div>
    </div>
  )
}

export default About;
