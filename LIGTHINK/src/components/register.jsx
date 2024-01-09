import React, { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { gsap } from 'gsap';

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      '.formWrapper',
      { x: '100px', opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.2, delay: 0.3 }
    );
    gsap.fromTo(
      '.title',
      { y: '-100px', opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2 }
    );
    gsap.fromTo('button', { opacity: 0 }, { opacity: 1, duration: 0.5 });
  }, []);
  return (
    <div className='min-h-screen grid lg:grid-cols-2'>
      <div className=' w-full h-screen bg-black text-center mx-auto justify-center'>
        <div className=' relative top-[20%] space-y-9'>
          <h1 className=' font-megrim text-6xl text-[#502f1b] title'>
            LOGOWANIE
          </h1>

          <div>
            <TypeAnimation
              sequence={[' ', 500, 'JESTEŚ JUŻ UŻYTKOWNIKIEM ?']}
              speed={60}
              delay={200}
              className=' font-gruppo text-white text-2xl'
            />
          </div>

          <div className=' space-y-10'>
            <div className='formWrapper flex space-x-5 justify-center relative w-[40%] mx-auto'>
              <input
                required='required'
                type='text'
                name='mail'
                className='relative bg-transparent border-b-[1px] border-white w-full focus:outline-none focus:border-[silver] text-white text-2xl font-gruppo '
              />
              <span className=' absolute left-[10px] bottom-1 font-megrim text-white text-md'>
                E-MAIL
              </span>
              <i></i>
            </div>

            <div className='formWrapper flex space-x-5 justify-center relative w-[40%] mx-auto'>
              <input
                required='required'
                type='text'
                name='password'
                className='relative bg-transparent border-b-[1px] border-white w-full focus:outline-none focus:border-[silver] text-white text-2xl font-gruppo'
              />
              <span className=' absolute left-[10px] bottom-1 font-megrim text-white text-md'>
                HASLO
              </span>
              <i></i>
            </div>
          </div>
          <button className='button bg-[silver] font-megrim text-2xl px-[20px] py-[5px] hover:rounded-xl hover:bg-slate-300 transition-all duration-200'>
            ZALOGUJ
          </button>
        </div>
      </div>
      <div className=' w-full h-screen bg-gradient-to-b from-[#080608] to-black'>
        <div className='relative top-[30%] text-center space-y-6'>
          <h1 className=' font-megrim text-6xl text-[silver] title'>
            REJESTRACJA
          </h1>
          <div>
            <TypeAnimation
              sequence={[' ', 500, 'JESTEŚ TU PIERWSZY RAZ ?']}
              speed={60}
              className=' font-gruppo text-white text-2xl'
            />
          </div>

          <div className=' space-y-10'>
            <div className='formWrapper flex space-x-5 justify-center relative w-[40%] mx-auto'>
              <input
                required='required'
                type='text'
                name='mail'
                className='relative bg-transparent border-b-[1px] border-white w-full focus:outline-none focus:border-[silver] text-white text-2xl font-gruppo '
              />
              <span className=' absolute left-[10px] bottom-1 font-megrim text-white text-md'>
                E-MAIL
              </span>
              <i></i>
            </div>

            <div className='xl:flex w-[40%] mx-auto space-y-10 xl:space-y-0'>
              <div className='formWrapper xl:w-[45%] flex space-x-5 justify-center relative mx-auto'>
                <input
                  required='required'
                  type='text'
                  name='mail'
                  className='relative bg-transparent border-b-[1px] border-white w-full focus:outline-none focus:border-[silver] text-white text-2xl font-gruppo '
                />
                <span className=' absolute left-[10px] bottom-1 font-megrim text-white text-md'>
                  IMIE
                </span>
                <i></i>
              </div>
              <div className='formWrapper xl:w-[45%] flex space-x-5 justify-center relative mx-auto'>
                <input
                  required='required'
                  type='text'
                  name='mail'
                  className='relative bg-transparent border-b-[1px] border-white w-full focus:outline-none focus:border-[silver] text-white text-2xl font-gruppo '
                />
                <span className=' absolute left-[10px] bottom-1 font-megrim text-white text-md'>
                  NAZWISKO
                </span>
                <i></i>
              </div>
            </div>

            <div className='formWrapper flex space-x-5 justify-center relative w-[40%] mx-auto'>
              <input
                required='required'
                type='text'
                name='password'
                className='relative bg-transparent border-b-[1px] border-white w-full focus:outline-none focus:border-[silver] text-white text-2xl font-gruppo'
              />
              <span className=' absolute left-[10px] bottom-1 font-megrim text-white text-md'>
                HASLO
              </span>
              <i></i>
            </div>
          </div>

          <button className='button bg-[#2b180c] text-[#c4c4c4] font-megrim text-2xl px-[20px] py-[5px] hover:rounded-xl hover:bg-[#5a402f] transition-all duration-200'>
            STWORZ KONTO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
