import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

const Footer = () => {

  const socials =[
    {
      link: '',
      icon: <FaGithub/>
    },
    {
      link: '',
      icon: <FaFacebookF/>
    },
    {
      link: '',
      icon: <FaInstagram/>
    }
  ]

  return (
    <>
    <div className=' grid md:grid-cols-3 py-10 space-y-3 lg:space-y-0'>
          <div className=' mx-auto text-center space-y-[-10px]'>
                <div className=' flex mx-auto text-center w-fit text-white'>
                        <div className='w-6 h-[2px] bg-[#7a3d17] mt-[17px]'></div>  
                    <h1 className=' text-2xl'>GYM</h1>
                        <div className='w-6 h-[2px] bg-[#7a3d17] mt-[17px]'></div>
                </div>

            <h1 className='text-xl text-[#7a3d17]'>TRAINING</h1>

                <div className='flex mx-auto text-center w-fit text-white'>
                    <div className='w-7 h-[1px] bg-[#7a3d17] mt-[12px]'></div>
                <h1>PLANS</h1>
                    <div className='w-7 h-[1px] bg-[#7a3d17] mt-[12px]'></div>
                </div>
        </div>

        <div className=' w-fit mx-auto'>
          <h1 className=' text-3xl text-[#7a3d17] font-[200] text-center mb-2'>Zaglądnij!</h1>
          <p className=' text-[#fafafa] hover:text-[silver] cursor-pointer text-sm py-1'>PLANY TRENINGOWE</p>
          <p className=' text-[#fafafa] hover:text-[silver] cursor-pointer text-sm py-1'>KALKULATOR BMI</p>
          <p className=' text-[#fafafa] hover:text-[silver] cursor-pointer text-sm py-1'>OBLICZANIE KALORII</p>
        </div>

        <div>
          <h1 className=' text-3xl text-[#7a3d17] font-[200] text-center'>Zaobserwuj! </h1>
          <div className=' flex space-x-3 mt-3 text-center justify-center'>
              {socials.map((element, i)=>{
                return(
                  <div className=' text-white text-2xl text-center hover:text-[silver]'>
                    <p>{element.icon}</p>
                  </div>
                )
              })}
          </div>
        </div>
    </div>
    <div>
        <p className="text-white text-[10px] text-center py-2">GYM WEBSITE 2024 ©
        <a href="https://jakubkontekcv.onrender.com/" className=" text-[#7a3d17] font-bold"> JAKUB KONTEK</a></p>
    </div>
    </>
  )
}

export default Footer