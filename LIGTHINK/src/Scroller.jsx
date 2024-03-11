import React from 'react'
import { IoMdArrowDropup } from "react-icons/io";

const Scroller = () => {

    const scrollerToTop=()=>{
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
  return (
    <div className='scroller w-[40px] aspect-square bg-[#070707] fixed bottom-1 right-1 rounded-md text-white z-[98] border-[1px] border-black' onClick={scrollerToTop}>
        <IoMdArrowDropup  className='scrollerArrow text-2xl absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'/>
    </div>
  )
}

export default Scroller