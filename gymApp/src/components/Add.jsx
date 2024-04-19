import React, {useState} from 'react'
import { LiaTasksSolid } from "react-icons/lia";
import { CiClock2 } from "react-icons/ci";
import CategoryButtons from './CategoryButtons';
import DayButtons from './DayButtons';
import { FaAngleDown,  FaAngleUp } from "react-icons/fa";

const Add = ({task, taskChange, category, setCategory,
              handleSubmit,  series={series}, seriesChange,
              minRange = {minRange}, minRangeChange,
              maxRange = {maxRange}, maxRangeChange,
              day, setDay={setDay}}) => {
        const categories =[
      {
        category: 'klatka piersiowa',
        id: 0
      },
      {
        category: 'plecy',
        id: 1
      },
      {
        category: 'ramiona',
        id: 2
      },
      {
        category: 'nogi',
        id: 3
      },
    ]

    const days =[
      {
        name:'pon',
        id:0
      },
      {
        name:'wt',
        id:1
      },
      {
        name:'śr',
        id:2
      },
      {
        name:'czw',
        id:3
      },
      {
        name:'pt',
        id:4
      },
      {
        name:'sob',
        id:5
      },
      {
        name:'nd',
        id:6
      },
    ]
    

  return (
    <div className=' p-6 w-[95%] bg-[#fafafa] mx-auto rounded-3xl' id='add'>
        <h1 className='m-6  text-5xl font-[600]'>Dodaj ćwiczenie</h1>
         <form className='mx-auto text-center w-[90%] sm:w-[500px] relative space-y-3 py-[50px]'>
                <div className='flex text-xl relative border-b-[2px] border-black space-x-6'><LiaTasksSolid className=' absolute top-[50%] translate-y-[-50%]'/><input type='text' value={task} onChange={taskChange} placeholder='ćwiczenie' required='required' className=' bg-transparent relative px-2 top-[1px] py-2  focus:outline-none w-full placeholder:text-black'/></div>
                <div className='flex text-xl relative border-b-[2px] border-black space-x-6'><LiaTasksSolid className=' absolute top-[50%] translate-y-[-50%]'/><input type='number' value={series} onChange={seriesChange} placeholder='liczba serii' required='required' className=' bg-transparent relative px-2 top-[1px] py-2  focus:outline-none w-full placeholder:text-black'/></div>
                <h1 className=' text-start ml-6 text-2xl font-[600]'>Zakres powtórzeń</h1>
                <div className=' grid grid-cols-2 gap-9'>
                  <div className='flex text-xl relative border-b-[2px] border-black space-x-6'><FaAngleDown className=' absolute top-[50%] translate-y-[-50%]'/><input type='number' value={minRange} onChange={minRangeChange} placeholder='min' required='required' className=' bg-transparent relative px-2 top-[1px] py-2  focus:outline-none w-full placeholder:text-black'/></div>
                  <div className='flex text-xl relative border-b-[2px] border-black space-x-6'><FaAngleUp className=' absolute top-[50%] translate-y-[-50%]'/><input type='number' value={maxRange} onChange={maxRangeChange} placeholder='max' required='required' className=' bg-transparent relative px-2 top-[1px] py-2  focus:outline-none w-full placeholder:text-black'/></div>
                </div>
                {/* <div className='flex text-xl relative border-b-[2px] border-black space-x-6'><CiClock2 className=' absolute top-[50%] translate-y-[-50%]'/><input type='text' value={time} onChange={timeChange} placeholder='time' required='required' className=' bg-transparent relative px-2 top-[1px] py-2  focus:outline-none w-full placeholder:text-black'/></div> */}
                <h2 className=' text-2xl font-[600] text-start ml-6'>Wybierz kategorię</h2>
                <div className=' flex flex-wrap gap-4 mx-auto justify-center'>
                    {categories.map((categoryElement, i) => <CategoryButtons category={category} setCategory={setCategory} categoryElement={categoryElement} key={i}/>)}
                </div>

                <h2 className=' text-2xl font-[600] text-start ml-6'>Wybierz dzień tygodnia</h2>
                <div className=' flex mx-auto justify-center gap-2'>
                  {days.map((dayButton, i) => <DayButtons day={day} setDay={setDay} dayButton={dayButton} key={i}/>)}
                </div>
                <button onClick={handleSubmit} className=' bg-[#a55a27] text-xl px-4 py-2 rounded-full text-white z-[99]'>+ Add</button>
              </form>
    </div>
  )
}

export default Add