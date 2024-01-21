import React from 'react'
import { IoMdArrowDropup } from "react-icons/io";

const Scroller = () => {

    const scrollerToTop=()=>{
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
  return (
    <div className=' w-[60px] aspect-square bg-white fixed bottom-0 right-0 text-black z-[99] rounded-lg border-[1px] border-black' onClick={scrollerToTop}>
        <IoMdArrowDropup  className='text-4xl absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'/>
    </div>
  )
}

export default Scroller