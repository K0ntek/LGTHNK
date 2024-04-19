import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className=' my-10 z-[99]' id='header'>
        <div className=' p-6'>
             <TypeAnimation
                sequence={[
                    'Witaj ponownie !',
                ]}
                wrapper="span"
                speed={50}
                className=' text-5xl font-[600]'
                cursor={false}
                />
        </div>

       <div className=' w-[90%] mx-auto bg-[#070707] rounded-3xl p-6'>
          {/* <h1 className=' text-2xl font-[200]'>Co chcesz dzisiaj zrobić ?</h1> */}
          <div className='grid lg:grid-cols-2 gap-4 mt-5'>
              <div className=' mx-auto w-full sm:w-5/6 lg:w-full h-full rounded-3xl
              bg-[url("https://t3.ftcdn.net/jpg/06/06/54/92/360_F_606549277_BMzgu4QoNfqHDkmUgngJrFHuxZXvkS7d.jpg")]
              bg-no-repeat bg-cover row-span-2 aspect-square lg:aspect-square sm:aspect-video'></div>
             <Link to='add' smooth={true}>
             <div className=' mx-auto w-full sm:w-5/6 lg:w-full h-full rounded-3xl bg-[#141414] hover:bg-[#010101] aspect-video lg:aspect-auto'>
                <h1 className=' cursor-pointer text-white text-center font-[100] relative top-[50%] translate-y-[-50%] text-3xl sm:text-5xl lg:text-3xl xl:text-5xl'>USTAW SWÓJ<br /> <span className='text-[#7a3d17] text-2xl sm:text-4xl lg:text-2xl xl:text-3xl font-[200]'>PLAN TRENINGOWY</span></h1>
              </div>
             </Link>
              <div className=' mx-auto w-full sm:w-5/6 lg:w-full h-full rounded-3xl bg-[#e2e2e2] cursor-pointer aspect-video lg:aspect-auto'>
                <h1 className=' cursor-pointer text-3xl sm:text-5xl lg:text-2xl xl:text-3xl text-black text-center font-[600] relative top-[50%] translate-y-[-50%]'>Three little words: <br /> <span className=' text-[#7a3d17] text-4xl sm:text-5xl lg:text-3xl xl:text-5xl font-[200]'>"You've Got This.</span>"</h1>
              </div>
          </div>
       </div>
    </div>
  )
}

export default Header