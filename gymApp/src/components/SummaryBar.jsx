import React from 'react'
import { useEffect } from 'react'
import gsap from 'gsap/all'

const SummaryBar = () => {

    useEffect(()=>{
        gsap.fromTo('.line', { y:"100%"}, {y:0, duration:.5, stagger:.2})
    },[])

  return (
    <div className=' min-w-[400px] max-w-[500px] my-4'>
        <div className=' w-full border-b-[1px] border-black px-5'>
            <div className=' grid grid-cols-6 gap-5 relative'>

                <div className=' h-[200px] mt-[200px] overflow-hidden'>
                    <div className='line w-full h-full bg-black'></div>
                </div>
                <div className=' h-[300px] mt-[100px] overflow-hidden'>
                    <div className='line w-full h-full bg-black'></div>
                </div>
                <div className=' h-[100px] mt-[300px] overflow-hidden'>
                    <div className='line w-full h-full bg-black'></div>
                </div>
                <div className=' h-[400px] overflow-hidden'>
                    <div className='line w-full h-full bg-black'></div>
                </div>
                <div className=' h-[200px] mt-[200px] overflow-hidden'>
                    <div className='line w-full h-full bg-black'></div>
                </div>
                <div className=' h-[300px] mt-[100px] overflow-hidden'>
                    <div className='line w-full h-full bg-black'></div>
                </div>

            </div>
        </div>
        <div className=' mx-auto'>
                    {/* <div className="relative size-40">
                    <svg viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="10" fill="none" className="stroke-current text-transparent" strokeWidth="1"></circle>
                        <g className="origin-center -rotate-90 transform">
                        <circle cx="18" cy="18" r="10" fill="none" className="stroke-current text-black" strokeWidth="1" strokeDasharray="100" strokeDashoffset="70"></circle>
                        </g>
                    </svg>
                    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <span className="text-center text-2xl font-bold text-black">72%</span>
                    </div>
                    </div> */}

                    {/* <div className="relative size-40">
                    <svg viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="10" fill="none" className="stroke-current text-transparent" stroke-width="1"></circle>
                        <g className="origin-center -rotate-90 transform">
                        <circle cx="18" cy="18" r="10" fill="none" className="stroke-current text-black" stroke-width="1" stroke-dasharray="100" stroke-dashoffset="50"></circle>
                        </g>
                    </svg>
                    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <span className="text-center text-2xl font-bold text-black">72%</span>
                    </div>
                    </div> */}

                    {/* <div className="relative size-40">
                    <svg viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="10" fill="none" className="stroke-current text-transparent" stroke-width="1"></circle>
                        <g className="origin-center -rotate-90 transform">
                        <circle cx="18" cy="18" r="10" fill="none" className="stroke-current text-black" stroke-width="1" stroke-dasharray="100" stroke-dashoffset="60"></circle>
                        </g>
                    </svg>
                    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <span className="text-center text-2xl font-bold text-black">72%</span>
                    </div>
                    </div> */}
                </div>
    </div>
  )
}

export default SummaryBar