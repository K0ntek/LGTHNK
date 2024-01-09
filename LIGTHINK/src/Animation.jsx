import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Animation = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      '.horizontal',
      { width: 0 },
      {
        width: '100%',
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: { trigger: '.animationWrapper', start: 'top 60%' },
      }
    );
    gsap.fromTo(
      '.vertical',
      { height: 0 },
      {
        height: '100%',
        duration: 0.5,
        stagger: 0.1,
        delay: 0.2,
        scrollTrigger: { trigger: '.animationWrapper', start: 'top 60%' },
      }
    );

    gsap.fromTo(
      '.horizontalBlock',
      { width: 0 },
      {
        width: '100%',
        duration: 0.3,
        stagger: 0.1,
        scrollTrigger: { trigger: '.animationWrapper', start: 'top 60%' },
      }
    );
  }, []);

  return (
    <div className='animationWrapper grid grid-cols-5 h-screen'>
      <div className='  aspect-square'>
        <div className='horizontal w-full h-full bg-black'>
          <div className=' space-y-3 relative top-[50%] translate-y-[-50%]'>
            <div className=' horizontalBlock w-full h-2 bg-[#2b180c]'></div>
            <div className=' horizontalBlock w-full h-2 bg-[#2b180c]'></div>
            <div className=' horizontalBlock w-full h-2 bg-[#2b180c]'></div>
          </div>
        </div>
      </div>

      <div className='  aspect-square'>
        <div className='vertical w-full h-full bg-[#111]'></div>
      </div>

      <div className='  aspect-square'>
        <div className='horizontal w-full h-full bg-black'></div>
      </div>

      <div className='  aspect-square'>
        <div className='vertical w-full h-full bg-[#111]'>
          <div className=' space-y-3 relative top-[50%] translate-y-[-50%] rotate-90'>
            <div className=' horizontalBlock w-full h-2 bg-[#2b180c]'></div>
            <div className=' horizontalBlock w-full h-2 bg-[#2b180c]'></div>
            <div className=' horizontalBlock w-full h-2 bg-[#2b180c]'></div>
          </div>
        </div>
      </div>

      <div className='  aspect-square'>
        <div className='horizontal w-full h-full bg-black'></div>
      </div>

      <div className='  aspect-square'>
        <div className='vertical w-full h-full bg-[#111]'>
          <div className=' space-y-3 relative top-[50%] translate-y-[-50%] rotate-90'>
            <div className=' horizontalBlock w-full h-2 bg-[#5a402f]'></div>
            <div className=' horizontalBlock w-full h-2 bg-[#5a402f]'></div>
            <div className=' horizontalBlock w-full h-2 bg-[#5a402f]'></div>
          </div>
        </div>
      </div>
      <div className='  aspect-square'>
        <div className='horizontal w-full h-full bg-black'></div>
      </div>

      <div className='  aspect-square'>
        <div className='vertical w-full h-full bg-[#111]'>
          <div className=' space-y-3 relative top-[50%] translate-y-[-50%] rotate-90'>
            <div className=' horizontalBlock w-full h-2 bg-[#5a402f]'></div>
            <div className=' horizontalBlock w-full h-2 bg-[#5a402f]'></div>
            <div className=' horizontalBlock w-full h-2 bg-[#5a402f]'></div>
          </div>
        </div>
      </div>
      <div className='  aspect-square'>
        <div className='horizontal w-full h-full bg-black'></div>
      </div>

      <div className='  aspect-square'>
        <div className='vertical w-full h-full bg-[#111]'>
          <div className=' space-y-3 relative top-[50%] translate-y-[-50%]'>
            <div className=' horizontalBlock w-full h-2 bg-[#5a402f]'></div>
            <div className=' horizontalBlock w-full h-2 bg-[#5a402f]'></div>
            <div className=' horizontalBlock w-full h-2 bg-[#5a402f]'></div>
          </div>
        </div>
      </div>
      <div className='  aspect-square'>
        <div className='horizontal w-full h-full bg-black'></div>
      </div>

      <div className='  aspect-square'>
        <div className='vertical w-full h-full bg-[#111]'></div>
      </div>
      <div className='  aspect-square'>
        <div className='horizontal w-full h-full bg-black'>
          <div className=' space-y-3 relative top-[50%] translate-y-[-50%]'>
            <div className=' horizontalBlock w-full h-2 bg-[#2b180c]'></div>
            <div className=' horizontalBlock w-full h-2 bg-[#2b180c]'></div>
            <div className=' horizontalBlock w-full h-2 bg-[#2b180c]'></div>
            <div className=' horizontalBlock w-full h-2 bg-[#2b180c]'></div>
          </div>

          <div className=' space-y-3 relative top-[50%] translate-y-[-150%] rotate-90'>
            <div className=' horizontalBlock w-full h-2 bg-[#2b180c]'></div>
            <div className=' horizontalBlock w-full h-2 bg-[#2b180c]'></div>
            <div className=' horizontalBlock w-full h-2 bg-[#2b180c]'></div>
            <div className=' horizontalBlock w-full h-2 bg-[#2b180c]'></div>
          </div>
        </div>
      </div>

      <div className='  aspect-square'>
        <div className='vertical w-full h-full bg-[#111]'></div>
      </div>
      <div className='  aspect-square'>
        <div className='horizontal w-full h-full bg-black'></div>
      </div>

      <div className='  aspect-square'>
        <div className='vertical w-full h-full bg-[#111]'></div>
      </div>
      <div className='  aspect-square'>
        <div className='horizontal w-full h-full bg-black'>
          <div className=' space-y-3 relative top-[50%] translate-y-[-50%]'>
            <div className=' horizontalBlock w-full h-2 bg-[#5a402f]'></div>
            <div className=' horizontalBlock w-full h-2 bg-[#5a402f]'></div>
            <div className=' horizontalBlock w-full h-2 bg-[#5a402f]'></div>
          </div>
        </div>
      </div>

      <div className='  aspect-square'>
        <div className='vertical w-full h-full bg-[#111]'></div>
      </div>
      <div className='  aspect-square'>
        <div className='horizontal w-full h-full bg-black'></div>
      </div>

      <div className='  aspect-square'>
        <div className='vertical w-full h-full bg-[#111]'>
          <div className=' space-y-3 relative top-[50%] translate-y-[-50%] rotate-90'>
            <div className=' horizontalBlock w-full h-2 bg-[#2b180c]'></div>
            <div className=' horizontalBlock w-full h-2 bg-[#2b180c]'></div>
            <div className=' horizontalBlock w-full h-2 bg-[#2b180c]'></div>
          </div>
        </div>
      </div>
      <div className='  aspect-square'>
        <div className='horizontal w-full h-full bg-black'></div>
      </div>

      <div className='  aspect-square'>
        <div className='vertical w-full h-full bg-[#111]'></div>
      </div>
      <div className='  aspect-square'>
        <div className='horizontal w-full h-full bg-black'>
          <div className=' space-y-3 relative top-[50%] translate-y-[-50%] rotate-90'>
            <div className=' horizontalBlock w-full h-2 bg-[#2b180c]'></div>
            <div className=' horizontalBlock w-full h-2 bg-[#2b180c]'></div>
            <div className=' horizontalBlock w-full h-2 bg-[#2b180c]'></div>
          </div>
        </div>
      </div>

      <div className='  aspect-square'>
        <div className='vertical w-full h-full bg-[#111]'>
          <div className=' space-y-3 relative top-[50%] translate-y-[-50%]'>
            <div className=' horizontalBlock w-full h-2 bg-[#5a402f]'></div>
            <div className=' horizontalBlock w-full h-2 bg-[#5a402f]'></div>
            <div className=' horizontalBlock w-full h-2 bg-[#5a402f]'></div>
          </div>
        </div>
      </div>
      <div className='  aspect-square'>
        <div className='horizontal w-full h-full bg-black'></div>
      </div>
    </div>
  );
};

export default Animation;
