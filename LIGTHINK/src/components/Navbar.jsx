import React, { useEffect, useState } from 'react';
// import {BiShoppingBag} from 'react-icons/all'
import Logo from '../../public/lgthnklight.png';
import { BsFillPersonFill, BsSearch, BsBag } from 'react-icons/bs';
import { PiBagBold } from 'react-icons/pi';
import { IoMdClose } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { FiInstagram } from 'react-icons/fi';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import ProductsInBag from './ProductsInBag';

const Navbar = () => {
  const navElements = [
    {
      link: '/women',
      title: 'Kobieta',
    },
    {
      link: '/men',
      title: 'Mężczyzna',
    },
    // {
    //   link: '/collections',
    //   title: 'Kolecje',
    // },
    {
      link: '/about',
      title: 'O nas',
    },
    {
      link: '/custom',
      title: 'Custom',
    },
  ];

  const toggleBag = () => {
    gsap.to('.bag', { right: 0 });
  };
  const hideBag = () => {
    gsap.to('.bag', { right: '-100%' });
  };

  const toggleNavbar = () => {
    gsap.to('.navbar', { top: 0, display: 'block' });
  };
  const hideNavbar = () => {
    gsap.to('.navbar', { top: '-100%', display: 'none' });
  };

  if (window.innerWidth > 1024) {
    gsap.to('.navbar', { top: 0, display: 'block' });
  } else {
    gsap.to('.navbar', { top: '-100%', display: 'none' });
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

  // const [activeNavbar, setNavbar] = useState('navbar')
  // const mobileToggleNavbar = () => {
  //     activeNavbar === 'navbar' ? setNavbar('navbar activeNavbar') : setNavbar('navbar');
  // }

  return (
    <>
      <div>
        <div className=' fixed top-0 left-0 w-full h-[60px] z-[99] bg-[#020202]'>
          <FiMenu
            className=' lg:hidden text-[30px] text-white absolute top-3 right-3'
            onClick={toggleNavbar}
          />
          <div className='relative'>
            <Link to={'/'}>
              <img
                src={Logo}
                className=' mx-auto w-[120px] absolute top-2 left-[50%] translate-x-[-50%] lg:left-[5%] h-auto z-[99]'
                onClick={windowWidth < 1024 ? hideNavbar : false}
              />
            </Link>
            {/* 			    <div className="w-0 h-[2px] bg-white mx-auto rounded-full hover:w-1/2 transition-all duration-200"></div> */}
          </div>
          <div>{/* <BiShoppingBag /> */}</div>
          {/*fixed top-[-100%] lg:relative lg:top-0 */}
          <div
            className={`navbar bg-black h-screen lg:bg-transparent lg:h-[60px] mt-3 fixed top-[-100%] w-full lg:top-0 hidden lg:block`}>
            <AiOutlineClose
              className='text-[30px] text-white absolute top-0 right-3 lg:hidden hover:text-gray-600'
              onClick={hideNavbar}
            />
            <ul className='lg:flex space-x-4 w-fit mx-auto relative top-[20%] lg:top-0'>
              {navElements.map((element, i) => {
                return (
                  <Link to={element.link} key={i}>
                    <div className='w-fit group'  onClick={windowWidth < 1024 ? hideNavbar : false}>
                      <li className=' text-white font-questrial text-xl'>
                        {element.title}
                      </li>
                      <div className='w-0 h-[2px] bg-white mx-auto group-hover:w-[60%] transition-all duration-200'></div>
                    </div>
                  </Link>
                );
              })}
            </ul>
            <div className='absolute bottom-[30%] right-[50%] translate-x-[50%] lg:absolute lg:top-[0px] lg:right-0 lg:translate-x-0 lg:flex space-x-2'>
              <div className='flex'>
                <Link to={'/register'}>
                  <BsFillPersonFill className='text-white text-[35px] p-2 rounded-full hover:bg-white hover:text-black transition-all duration-200' onClick={windowWidth < 1024 ?? hideNavbar}/>
                </Link>
                <PiBagBold
                  className='text-white text-[35px] p-2 rounded-full hover:bg-white hover:text-black transition-all duration-200'
                  onClick={toggleBag}
                />
              </div>
              <div className='flex'>
                <input
                  type='text'
                  className='bg-transparent focus:outline-none text-white border-b-[2px] border-white h-8'
                />
                <BsSearch className=' text-white relative top-[50%] lg:translate-y-[-50%] mx-3 hover:text-[#aaaaaa]' />
              </div>
            </div>

            <div className=' absolute bottom-[15%] left-[50%] translate-x-[-50%] lg:hidden'>
              <div className='socials z-[99] space-x-4 flex'>
                <FiInstagram className='text-3xl text-white hover:text-[silver] transition-all duration-200' />
                <FaFacebook className='text-3xl text-white hover:text-[silver] transition-all duration-200' />
                <FaTwitter className='text-3xl text-white hover:text-[silver] transition-all duration-200' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      {/* -------------------------------------------------------------------------------BAG------------------------------------------------------------------------------------------- */}
      {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      <div className='relative'>
        <div className='bag w-full sm:w-[85%] md:w-[60%] lg:w-[40%] xl:w-[30%] h-screen bg-[#dbdbdb] fixed top-0 right-[-100%] z-[99]'>
          <IoMdClose
            className=' absolute top-2 left-2 text-4xl hover:text-red-600'
            onClick={hideBag}
          />
          <h1 className=' font-questrial text-2xl mt-3 text-center'>KOSZYK</h1>
          <div className='mt-[50px] px-3 h-[70%] overflow-y-scroll'>
            <div>
              <ProductsInBag />
            </div>
          </div>

          <h1 className="mt-4 text-center text-lg font-inter">WARTOŚĆ KOSZYKA : 1000 PLN</h1>
          <div className='w-full mx-auto justify-center absolute bottom-[5%] left-[10%]'>
            <Link to={'/summary'}>
              <button className='w-[80%] py-4 bg-black text-white text-lg hover:rounded-2xl hover:bg-[#070707] transition-all duration-150'>
                PRZEJDŹ DO PODSUMOWANIA
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;