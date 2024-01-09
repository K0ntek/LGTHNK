import React, { useEffect } from 'react';
import logo from '../../public/lgthnk.png';
import Animation from '../Animation';
import gsap from 'gsap';

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
  }, []);
  return (
    <div className='min-h-screen pt-10 grid grid-cols-2'>
      <div className=''>
        <div className=' sticky top-1 h-screen'>
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
      <div className='h-fit py-6 w-full'>
        <h1 className=' font-megrim text-center text-9xl text-[#311f12]'>
          CUSTOM
        </h1>
        <div className=' w-3/4 mx-auto'>
          <p className=' text-justify font-questrial text-xl'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
            dolor optio reiciendis eum adipisci quidem unde nobis, officia
            laborum placeat, tempore saepe illum voluptatem eligendi, voluptate
            eius qui velit libero vel sequi ut ad voluptates tenetur. Quasi enim
            fuga deleniti temporibus, ipsum, delectus quisquam tempore minima
            maxime, unde eveniet repellendus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Custom;
