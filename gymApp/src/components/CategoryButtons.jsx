import React from 'react'
import { useState } from 'react'

const CategoryButtons = ({categoryElement, category, setCategory, key}) => {

  const [active, setActive] = useState(false)
  
    return(
        <div>
          <input type="radio" name={categoryElement.category} checked={category === categoryElement.category} id={categoryElement.category} value={categoryElement.category} className='hidden' onClick={()=>setCategory(categoryElement.category, setActive(!active))}/>
         <label htmlFor={categoryElement.category}>
           <div className={` ${active  ? 'text-[#eee] bg-[#090909]' : 'bg-[#eee]'} w-[100px] h-[100px] aspect-square rounded-3xl hover:text-[#eeeeee] hover:bg-[#090909]`}>
             <div className=' relative top-[50%] translate-y-[-50%]'>
                 {/* <div className=' text-5xl mt-4 w-fit mx-auto'>{categoryElement.icon}</div> */}
                 <p className=' text-center font-[600]'>{categoryElement.category} </p>
             </div>
         </div>
         </label>
       </div>
       )
}
export default CategoryButtons