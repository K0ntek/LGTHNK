import React, {useState, useEffect} from 'react'
import { IoStatsChart, IoAdd} from "react-icons/io5";
import { CgFormatLeft } from "react-icons/cg";
import { GrHomeOption } from "react-icons/gr";
import { Link } from 'react-scroll';
import { RiMenu4Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import gsap from 'gsap/all';

const Navbar = () => {

    const navElements =[
        {
            link: 'header',
            icon: <GrHomeOption/>,
            name: 'strona główna',
        },
        {
            link: 'stats',
            icon: <IoStatsChart/>,
            name: 'statystyki',
        },
        {
            link: 'add',
            icon: <IoAdd/>,
            name: 'dodaj ćwiczenia',
        },
        {
            link: 'script',
            icon: <CgFormatLeft/>,
            name: 'plan treningowy',
        },
    ]

    const toggleNavbar =()=>{
        gsap.to('.navIcon', {display:'none', duration:.2})
        gsap.to('.closeBar', {display:'block', delay:.2})
        gsap.to('.navbar', {top:0, duration:.5})
    }

    const hideNavbar=()=>{
        gsap.to('.closeBar', {display:'none', duration:.2})
        gsap.to('.navIcon', {display:'block', delay:.2})
        gsap.to('.navbar', {top:'-100%', duration:1})
    }

    if (window.innerWidth > 1024) {
        gsap.to('.navIcon', {display:'none', duration:.2})
        gsap.to('.closeBar', {display:'none', duration:.2})
      } else {
        gsap.to('.navIcon', {display:'block', delay:.2})
      }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const setWindowDimensions = () => {
        setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', setWindowDimensions);
        return () => {
        window.removeEventListener('resize', setWindowDimensions);
        };
    }, []);

  return (
    <div className=' w-full  text-white fixed top-0 lg:sticky lg:top-[5%] bg-[#090909] z-[99] rounded-b-xl'>
        <div className='relative'>
            <RiMenu4Line className='navIcon text-4xl absolute right-2 top-2 lg:hidden lg:text-[#090909]' onClick={toggleNavbar}/>
            <IoMdClose className='closeBar absolute top-2 right-2 text-white text-3xl hover:text-[#7a3d17] hidden lg:text-[#090909]' onClick={hideNavbar}/>
        </div>
        <div className=' mx-auto text-center space-y-[-10px] z-[99] static'>
                <div className=' flex mx-auto text-center w-fit '>
                        <div className='w-6 h-[2px] bg-[#7a3d17] mt-[17px]'></div>  
                    <h1 className=' text-2xl'>GYM</h1>
                        <div className='w-6 h-[2px] bg-[#7a3d17] mt-[17px]'></div>
                </div>

            <h1 className='text-xl text-[#7a3d17] '>TRAINING</h1>

                <div className='flex mx-auto text-center w-fit'>
                    <div className='w-7 h-[1px] bg-[#7a3d17] mt-[12px]'></div>
                <h1>PLANS</h1>
                    <div className='w-7 h-[1px] bg-[#7a3d17] mt-[12px]'></div>
                </div>
        </div>
        <div className='navbar fixed lg:static top-[-100%] w-full bg-[#090909] z-[90] mt-[60px]'>
           <div className=''>
             {navElements.map((element, i)=>{
            return(
                <Link key={i} to={element.link} smooth={true}>
                    <div className=' text-white font-inter text-xl py-3 ps-3 flex space-x-2 group hover:bg-white/20 group cursor-pointer'>
                        <p className='mt-1 text-[#7a3d17]'>{element.icon}</p>
                        <p className=' group-hover:ml-4 transition-all duration-150'>{element.name}</p>
                    </div>
                </Link>
            )
        })}
           </div>
        </div>

        <div className=' flex space-x-3 ps-2 lg:mt-6 absolute top-0 left-0 lg:static lg:hover:bg-white/20 py-3 cursor-pointer'>
            <div className=' w-[35px] lg:w-[50px] h-[35px] lg:h-[50px] aspect-square rounded-full bg-white'></div>
           <div className=' h-[50px]'>
             <p className=' text-xl relative top-[50%] translate-y-[-50%] hidden lg:block'>User</p>
           </div>
        </div>
    </div>
  )
}

export default Navbar