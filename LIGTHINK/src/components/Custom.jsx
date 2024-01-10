import React, { useEffect } from 'react';
import logo from '../../public/lgthnk.png';
import Animation from '../Animation';
import gsap from 'gsap';
import { TypeAnimation } from 'react-type-animation';

const Custom = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      '.animationLogo',
      { y: 200, display: 'none' },
      { y: 0, display: 'block', duration: 0.5, stagger: 0.2, delay: 1.5 }
    );

    gsap.fromTo('.formWrapper', {x:200, opacity:0}, {x:0, opacity:1, duration:.5, stagger:.2, delay:.3})
    gsap.fromTo(['.headerTitle', '.alert', '.button'], {y:200, opacity:0}, {y:0, opacity:1, duration:.5, stagger:.2})
  }, []);
  return (
    <div className='min-h-screen pt-10 lg:grid lg:grid-cols-2 bg-[#f1f1f1]'>
      <div className='h-fit py-6 w-full mx-auto'>
        <h1 className='headerTitle font-megrim text-center text-9xl text-[#311f12]'>
          CUSTOM
        </h1>
        <div className=' w-3/4 mx-auto text-justify h-[90px]'>
        <TypeAnimation
              sequence={[' ', 500, ' Masz bluzę, której chciałbyś nadać nowe życie? Odezwij się do nas !']}
              speed={60}
              delay={200}
              className=' font-questrial text-2xl'
            />
        </div>

         <div className='lg:w-3/4 mx-auto space-y-[60px] mt-7'>
             <div className=' space-y-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 w-[80%] mx-auto'>
             <div className="formWrapper flex space-x-5 justify-center relative">
                  <input required='required' type="text" name="mail" className="px-7 relative bg-transparent border-b-[1px] border-black w-full focus:outline-none focus:border-[#5a402f] text-lg font-questrial "/>
                    <span className=" absolute left-[10px] bottom-1 font-megrim font-bold text-black text-md">IMIE</span>
                    <i></i>
              </div>

            <div className="formWrapper flex space-x-5 justify-center relative">
                  <input required='required' type="text" name="mail" className="px-7 relative bg-transparent border-b-[1px] border-black w-full focus:outline-none focus:border-[#5a402f] text-lg font-questrial "/>
                    <span className=" absolute left-[10px] bottom-1 font-megrim font-bold text-black text-md">NAZWISKO</span>
                    <i></i>
              </div>

              <div className="formWrapper flex space-x-5 justify-center relative">
                  <input required='required' type="email" name="mail" className="px-7 relative bg-transparent border-b-[1px] border-black w-full focus:outline-none focus:border-[#5a402f] text-lg font-questrial "/>
                    <span className=" absolute left-[10px] bottom-1 font-megrim font-bold text-black text-md">E-MAIL</span>
                    <i></i>
              </div>
              <div className="formWrapper flex space-x-5 justify-center relative">
                  <input required='required' type="text" name="mail" className="px-7 relative bg-transparent border-b-[1px] border-black w-full focus:outline-none focus:border-[#5a402f] text-lg font-questrial "/>
                    <span className=" absolute left-[10px] bottom-1 font-megrim font-bold text-black text-md">NUMER TELEFONU</span>
                    <i></i>
              </div>
             </div>

              <div className="formWrapper w-[80%] mx-auto">
                  <textarea required='required' placeholder='TRESC WIADOMOSCI' type="text" name="mail" className=" px-7 relative bg-transparent border-b-[1px] border-black w-full focus:outline-none focus:border-[#5a402f] text-lg font-questrial "></textarea>
              </div>

              <div className='alert flex relative space-x-4 w-3/4 mx-auto'>
              <input type='checkbox' className=' absolute top-[6px]'/>
              <p className=' text-justify font-questrial text-[14px]'>Kupujący potwierdza i akceptuje, że zamówiony produkt został spersonalizowany zgodnie z jego specyfikacjami i preferencjami. Zgodnie z tym, kupujący zrzeka się prawa do zwrotu tego produktu. W przypadku wadliwości lub niezgodności, kupujący zobowiązuje się poinformować Sprzedającego w terminie 14 dni od daty otrzymania towaru.</p>
              </div>
            <div className='text-center button'><button className=' font-megrim text-xl bg-[#2b180c] text-white px-5 py-2 hover:rounded-xl transition-all duration-200'> PRZESLIJ</button></div>
         </div>
      </div>

      <div className=' pt-5'>
        <div className=' sticky top-1'>
          <Animation />
          <div className=' absolute top-[5%]'>
            <img
              src={logo}
              alt=''
              className='animationLogo mx-auto w-3/4 opacity-[10%]'
            />
            <img
              src={logo}
              alt=''
              className='animationLogo mx-auto w-3/4 opacity-[20%]'
            />
            <img
              src={logo}
              alt=''
              className='animationLogo mx-auto w-3/4 opacity-[30%]'
            />
            <img
              src={logo}
              alt=''
              className='animationLogo mx-auto w-3/4 opacity-[40%]'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom;
