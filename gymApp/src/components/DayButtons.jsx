import React from 'react'
import { useState } from 'react'

const DayButtons = ({dayButton, day, setDay}) => {
    const [active, setActive] = useState(false)
  return (
    <div>
          <input type="radio" name={dayButton.name} checked={day === dayButton.name} id={dayButton.name} value={dayButton.name} className='hidden' onClick={()=>setDay(dayButton.name, setActive(!active))}/>
         <label htmlFor={dayButton.name}>
           <div className={` ${active  ? 'text-[#eee] bg-[#090909]' : 'bg-[#eee]'} w-[50px] h-[50px] aspect-square rounded-3xl hover:text-[#eeeeee] hover:bg-[#090909]`}>
             <div className=' relative top-[50%] translate-y-[-50%]'>
                 {/* <div className=' text-5xl mt-4 w-fit mx-auto'>{categoryElement.icon}</div> */}
                 <p className=' text-center font-[600]'>{dayButton.name} </p>
             </div>
         </div>
         </label>
       </div>
  )
}

export default DayButtons