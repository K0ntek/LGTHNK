import React, { useState, useEffect } from 'react'
import { CiClock2 } from "react-icons/ci";
import { LiaTasksSolid } from "react-icons/lia";
import { MdDone } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Add from './Add';
import Todos from './Todos';

const Stats = () => {

    const [watch, setWatch] = useState('')
    const [todos, setTodos] = useState([])
    const [task, setTask] = useState('')
    const [category, setCategory] = useState('')
    const [time, setTime] = useState('')
    const [series, setSeries] = useState('')
    const [minRange, setMinRange] = useState('')
    const [maxRange, setMaxRange] = useState('')
    const [doneTask, setDoneTask] = useState(false)
    const [day, setDay] = useState('')
    function handleSubmit(e){
    e.preventDefault()
    setTodos([...todos, task + ' • ' + category + ' • ' + series +
     " serie" + ' • ' + "zakres powtórzeń: " + minRange +"-"+maxRange ])
    setTask('')
    setTime('')
    setCategory('')
    setSeries('')
    setMinRange('')
    setMaxRange('')
    // setActive(false)
    console.log(todos)
    }

    function taskChange(e){
    setTask(e.target.value)
    }

    function seriesChange(e){
        setSeries(e.target.value)
    }

    function minRangeChange(e){
        setMinRange(e.target.value)
    }

    function maxRangeChange(e){
        setMaxRange(e.target.value)
    }

    
      useEffect(() => {
      setInterval(() => {
        const date = new Date();
        setWatch(date.toLocaleTimeString());
      }, 1000);
    }, []);

    function handleDelete(index){
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    let done = 0

    if (doneTask){
        done+=1
    }
    else{
        done-1
    }

    const weekDays =[
        {
            day: 'Poniedziałek',
            shortcut: 'pon',
            id:0
        },
        {
            day: 'Wtorek',
            shortcut: 'wt',
            id:1
        },
        {
            day: 'Środa',
            shortcut: 'śr',
            id:2
        },
        {
            day: 'Czwartek',
            shortcut: 'czw',
            id:3
        },
        {
            day: 'Piątek',
            shortcut: 'pt',
            id:4
        },
        {
            day: 'Sobota',
            shortcut: 'sob',
            id:5
        },
        {
            day: 'Niedziela',
            shortcut: 'nd',
            id:6
        },
    ]

  return (
    <div className=' min-h-screen' id='stats'>

            <div className=' pb-10'>
                    <div className='flex flex-wrap gap-7 justify-center'>
                            <div className=' z-[90] bg-[#111] text-white rounded-3xl aspect-video relative cursor-pointer w-[80%] sm:w-[30%] min-w-[300px] hover:bg-[#0c0c0c] hover:mt-[-15px] hover:mb-[15px] transition-all duration-150'>
                        <CiClock2 className=' absolute right-5 top-2 text-3xl bg-[#111] text-white p-1 rounded-lg'/>
                        <div className='text-center  relative top-[50%] translate-y-[-50%]'>
                            <h1 className='text-3xl xl:text-4xl font-[300]'>Obecna godzina:</h1>
                            <h1 className=' text-3xl font-[100]'>{watch}</h1>
                        </div>
                        </div>

                        <div className=' z-[90] text-white bg-[#a55a27] p-4 aspect-video rounded-3xl cursor-pointer relative w-[80%] sm:w-[30%] min-w-[300px] hover:mt-[-15px] hover:mb-[15px] transition-all duration-150'>
                        <LiaTasksSolid className=' absolute right-5 top-2 text-4xl text-[#white] p-1 rounded-lg'/>
                        <div className=' relative top-[50%] translate-y-[-50%] space-y-3'>
                            <h1 className=' text-3xl xl:text-4xl text-center mt-4 font-[300]'> ćwiczenia</h1>
                            <h1 className=' text-center text-7xl rounded-lg w-fit px-5 py-2 mx-auto'>{todos.length}</h1>
                        </div>
                        </div>

                        <div className=' z-[90] text-black bg-[#e2e2e2] p-4 aspect-video rounded-3xl cursor-pointer relative w-[80%] sm:w-[30%] min-w-[300px] hover:mt-[-15px] hover:mb-[15px] transition-all duration-150'>
                        <MdDone  className=' absolute right-5 top-2 text-4xl text-[#111] p-1 rounded-lg'/>
                        <div className=' relative top-[50%] translate-y-[-50%] space-y-3'>
                            <h1 className=' text-3xl xl:text-4xl text-center mt-4'> Ukończone</h1>
                                <h1 className=' text-center text-7xl rounded-lg w-fit px-5 py-2 mx-auto'>
                                    <span className=' text-6xl relative top-[-15px] left-1 text-[#a55a27]'>{done}</span>/
                                    <span className=' text-6xl relative top-[15px] left-[-4px]'>{todos.length}</span>
                                </h1>
                        </div>
                        </div>
                    </div>

                    <Add 
                task={task}
                taskChange={taskChange}
                category={category} 
                setCategory={setCategory} 
                series={series} 
                seriesChange={seriesChange}
                minRange = {minRange}
                minRangeChange={minRangeChange}
                maxRange = {maxRange}
                maxRangeChange={maxRangeChange}
                handleSubmit={handleSubmit}
                day={day}
                setDay={setDay}
                />

                        <div className=' py-6 bg-[#e2e2e2] rounded-3xl w-[95%] mx-auto mt-6' id="script">
                            <h1 className=' text-5xl font-[600] m-6'>Twój plan treningowy</h1>
                            <div className=' grid md:grid-cols-2'>
                            {weekDays.map((dayElement, i)=>{
                                return(
                                    <div className=' my-8'>
                                        <h2 className=' text-2xl ml-6 font-[600]'>{dayElement.day}</h2>
                                                <div className=''>
                                                    {todos.map((todo, index) =>
                                                    //  {dayElement.id == index &&(
                                                        <Todos handleDelete={handleDelete} todo={todo} index={index} done={done} doneTask={doneTask} setDoneTask={setDoneTask}/>
                                                    //  )}
                                                     )}
                                                </div>
                                    </div>
                                )
                            })}
                            </div>
                        </div>

            </div>
    </div>
  )
}

export default Stats