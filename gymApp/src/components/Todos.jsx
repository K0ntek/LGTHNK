import React from 'react'
import { useState } from 'react';
import { MdDone } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Todos = ({handleDelete, todo, index, doneTask, setDoneTask}) => {
    
  return (
    <div key={index} onClick={()=>setDoneTask(!doneTask)}
        className={` bg-[#090909] text-white rounded-2xl py-4 px-8 w-4/5 my-3 relative mx-auto hover:bg-[#7a3d17] cursor-pointer`}>
            <div className=' flex space-x-2'>
                <p className={` ${doneTask ? 'text-green-600' : 'text-white'} mt-1`}><MdDone/></p>
                <p className='font-[600]'> {index+1}. {todo}</p>
                <div className='absolute right-2 text-xl top-[50%] translate-y-[-50%] flex'>
                {/* <button onClick={() =>handleUpdate(index)} className=' hover:text-black'><MdModeEdit/></button> */}
                <button onClick={() =>handleDelete(index)} className=' hover:text-black'><IoClose/></button>
            </div>
        </div>
    </div>
  )
}

export default Todos