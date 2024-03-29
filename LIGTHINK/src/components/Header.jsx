import React from 'react';
import Logo from '../../public/lgthnklight.png';
import { gsap } from 'gsap';
import { useEffect, useState} from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Timeline } from 'gsap/gsap-core';

import { FiInstagram } from 'react-icons/fi';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import NewProducts from './NewProducts';
import { Link } from 'react-router-dom';
import Animation from '../Animation';
const Header = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.headerImage', { y: '300', opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.5 });

    gsap.fromTo('.logo', { y: '-200', opacity: 0 }, { y: 0, opacity: 1, ease: 'easeIn', delay: 0.2 });

    gsap.fromTo('.socials', { y: '100px', opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });

    if (window.innerWidth > 700) {
      gsap.fromTo('.descTitle', { y: '100%', opacity: 0 }, { y: 0, opacity: 1, stagger: 0.5, scrollTrigger: {
            trigger: '.desc',
            start: 'top 60%',
            end: 'top 20%',
            scrub: 2,
          },
        }
      );
      gsap.fromTo('.productsTitle', { x: '60%', opacity: 0 }, { x: 0, opacity: 1, scrollTrigger: {
            trigger: '.products',
            start: 'top 70%',
            end: 'top 20%',
            scrub: 1,
          },
        }
      );
    }
    gsap.fromTo('.markPassword', { x: '-300', opacity: 0 } , {x: 0, opacity: 1, duration: 0.5, scrollTrigger: {
            trigger: '.markPasswordWrapper',
            start: 'top 80%',
            end: 'top 60%',
            scrub: 1,
           },
      }
    );
    gsap.fromTo('.markPasswordContent', { y: 300, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.5, scrollTrigger: {
          trigger: '.markPassword',
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
      }
    );

    // gsap.fromTo('.gender', {x:200, opacity:0}, {x:0, opacity:1, duration:.5, stagger:.2, scrollTrigger:{trigger:'.gendersWrapper', start:'top 40%'}})

      gsap.fromTo('.announcement', { left: '100%'}, { left: '-1200px', duration:14, repeat: Infinity, stagger:14, ease:'none'});

    let tl = gsap.timeline();
    tl.fromTo(
      '.logoBorder',
      { width: 0 },
      { duration: 0.5, width: '100%', delay: 0.7 }
    ).to('.logoBorder', { width: '40%', marginLeft: '30%', ease: 'easeInOut' });
  }, []);

  useEffect(() => {
    let collectionButton = document.querySelector('.button');
    let collectionButtonHover = gsap.to('.buttonBorder', {
      width: '80%',
      paused: true,
      duration: 0.2,
    });

    collectionButton.addEventListener('mouseenter', () => collectionButtonHover.play());
    collectionButton.addEventListener('mouseleave', () => collectionButtonHover.reverse());
  }, []);

  return (
    <div className='bg-[#020202]'>
      <div className=' header w-full min-h-screen relative mb-[10%]'>
        <div className=' absolute right-2 top-[35%] md:top-[50%] translate-y-[-50%] h-fit  z-[98]'>
          <div className='socials z-[99] space-y-3'>
            <FiInstagram className='text-xl text-white hover:text-[silver] transition-all duration-200' />
            <FaFacebook className='text-xl text-white hover:text-[silver] transition-all duration-200' />
            <FaTwitter className='text-xl text-white hover:text-[silver] transition-all duration-200' />
          </div>
          <div className='socialBorder w-[2px] h-[120px] bg-[#25160d] mx-auto relative top-[-100px] z-[-1]'></div>
        </div>

        <div className='h-fit'>
          <div className=' w-[70%] xl:w-[55%] mx-auto text-justify relative top-[100px]'>
            <p className='font-gruppo text-transparent md:text-2xl'>
              Vestimenta a mythologia inspirata, quae tuum vestiarium fabula
              extraordinaria ditabunt. Quisque pars nostrae collectionis est
              iter mysticum per fabulas et mythologias, transformans modum in
              aventuram epiceam. Ingredere in mundum LGTHNK et construe tuam
              legendam expressionis modae!
            </p>
            <TypeAnimation
              sequence={[
                ' ',
                500,
                'Vestimenta a mythologia inspirata, quae tuum vestiarium fabula extraordinaria ditabunt. Quisque pars nostrae collectionis est iter mysticum per fabulas et mythologias, transformans modum in aventuram epiceam. Ingredere in mundum LGTHNK et construe tuam legendam expressionis modae!',
                5000,
                ' ',
                100,
              ]}
              speed={80}
              repeat={Infinity}
              className=' absolute top-0 font-megrim text-white md:text-2xl'
            />
          </div>
        </div>
        <div className='relative mt-[300px]'>
          <div className='mx-auto absolute top-[-15%] left-[50%] translate-x-[-50%] z-[98]'>
            <div className=' w-fit'>
              <img src={Logo} alt='logo' className='logo mx-auto w-[700px]' />
              <div className='logoBorder border-b-[4px] border-white w-1/2 mx-auto rounded-full'></div>
            </div>
          </div>
          <div className=' mx-auto z-[1] w-[90%] md:w-[80%] lg:w-[80%] xl:w-[60%]'>
            <img
              src='https://images.unsplash.com/reserve/unsplash_52d3d6f9853e9_1.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2063&q=80'
              alt='headerImage'
              className='headerImage rounded-3xl mx-auto'
            />
          </div>
        </div>
      </div>
          <div className='relative z-[98] overflow-x-hidden'>
            <div className='w-full bg-black'>
            <p className='flex w-[90%] text-white text-2xl my-0 mx-auto font-megrim font-[200] py-5'>
              <span className='announcement whitespace-nowrap absolute top-1 w-[1200px]'>Wybrana kolekcja obowiazuje od <span className="text-red-600">11.03.2024 r.</span> do <span className="text-red-600">15.04.2024 r.</span> NIE ZWLEKAJ !</span>
              <span className='announcement whitespace-nowrap absolute top-1 w-[1200px]'>Wybrana kolekcja obowiazuje od <span className="text-red-600">11.03.2024 r.</span> do <span className="text-red-600">15.04.2024 r.</span> NIE ZWLEKAJ !</span></p>
            </div>
          </div>
      <div className='newCollection aspect-square sm:aspect-video w-full bg-white relative overflow-x-hidden'>
        {/* <div className="absolute w-full h-full bg-gradient-to-b from-[rgba(0,0,0,.2)] to-[rgba(0,0,0,0.8)] z-[92]"></div> */}
        <div className='newCollectionContent absolute bottom-[10%] lg:bottom-[25%] left-[50%] translate-x-[-50%] z-[92] space-y-7 bg-black/70 w-3/4 sm:w-1/2 md:w-fit mx-auto p-7'>
          <h1 className=' font-questrial text-2xl sm:text-3xl md:text-6xl xl:text-8xl text-white text-center'>
            NOWA KOLEKCJA
          </h1>
          <div className='relative '>
          <div className='w-fit mx-auto'>
                <div className='buttonBorder w-[40%] h-[2px] bg-red-800 mx-auto'></div>
                <Link to='/collections'>
                  <button className='button font-sen text-[#fff] px-4 md:px-8 py-2 md:py-4 md:text-2xl hover:tracking-[2px] transition-all duration-200'>
                    KUP TERAZ
                  </button>
                </Link>
                <div className='buttonBorder w-[40%] h-[2px] bg-[silver] mx-auto'></div>
              </div>
          </div>
        </div>
      </div>
      {/* <div className="h-[20px] grid grid-cols-2 relative top-[-30px]">
                <div className=" h-screen bg-black"></div>
                <div className=" h-screen bg-[#e0e0e0]"></div>
        </div> */}

      <div className='relative'>
        <div className=' hidden md:block absolute font-megrim text-4xl w-fit left-[50%] translate-x-[-50%] top-[50px] z-[90]'>
          <h1 className='text-center bg-[#e0e0e0] text-[#74523f] tracking-[7px] pl-4 rounded-full'>
            LGT
            <span className='text-gray-600 bg-black px-3 ml-3 rounded-e-full'>
              HNK
            </span>
          </h1>
        </div>

        <div className=' md:min-h-screen grid md:grid-cols-2 rounded-3xl relative space-y-0'>
          <div className='gendersWrapper h-fit md:h-screen bg-[#040404] text-center py-10 md:py-0'>
            <div className='gender relative md:top-[50%] md:translate-y-[-70%] space-y-10 md:space-y-8'>
              {/* <p className="w-[70%] mx-auto text-justify text-[#e0e0e0] font-gruppo">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur tenetur, enim eaque labore sed doloremque architecto eius debitis consequuntur sapiente quisquam ut reprehenderit, quo consequatur ipsa iusto. Ducimus, sit labore.</p> */}
              <h1 className=' font-inter font-[200] text-5xl lg:text-7xl text-[#5e5e5e]'>
                MĘŻCZYZNA
              </h1>
              <div className='w-fit mx-auto group'>
                <div className='buttonBorder w-[40%] h-[2px] bg-yellow-800 mx-auto group-hover:w-4/5 transition-all duration-200'></div>
                <Link to='/men'>
                  <button className='button font-inter text-[#e0e0e0] px-4 md:px-8 py-2 md:py-4 md:text-2xl hover:bg-white/10 rounded-lg hover:tracking-[2px] transition-all duration-200'>
                    PRZEGLĄDAJ
                  </button>
                </Link>
                <div className='buttonBorder w-[40%] h-[2px] bg-[silver] mx-auto group-hover:w-4/5 transition-all duration-200'></div>
              </div>
              {/* <Link to="/men"><button className=" font-sen border-[2px] border-[#74523f] text-[#74523f] px-8 py-4 text-2xl hover:rounded-2xl transition-all duration-200">PRZEGLĄDAJ</button></Link> */}
              <p className='w-[70%] mx-auto text-justify text-[#e0e0e0] font-poppins text-lg'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur tenetur, enim eaque labore sed doloremque architecto
                eius debitis consequuntur sapiente quisquam ut reprehenderit,
                quo consequatur ipsa iusto. Ducimus, sit labore.
              </p>
            </div>
          </div>
          <div className='gendersWrapper h-fit md:h-screen bg-[#e0e0e0] text-center py-10 md:py-0'>
            <div className='gender relative md:top-[50%] md:translate-y-[-30%] space-y-10 md:space-y-8'>
              <h1 className=' font-inter font-[200] text-5xl lg:text-7xl text-[#74523f]'>
                KOBIETA
              </h1>
              <div className='w-fit mx-auto group'>
                <div className='buttonBorder w-[40%] h-[2px] bg-gray-800 mx-auto group-hover:w-4/5 transition-all duration-200'></div>
                <Link to='/women'>
                  <button className='button font-inter text-[#000000] px-4 md:px-8 py-2 md:py-4 md:text-2xl hover:bg-black/10 rounded-lg hover:tracking-[2px] transition-all duration-200'>
                    PRZEGLĄDAJ
                  </button>
                </Link>
                <div className='buttonBorder w-[40%] h-[2px] bg-gray-800 mx-auto group-hover:w-4/5 transition-all duration-200'></div>
              </div>
              <p className='w-[70%] mx-auto text-justify font-poppins text-lg'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
                consectetur! Neque temporibus, laudantium voluptatum illo,
                eligendi libero possimus facere repellendus recusandae officiis
                exercitationem voluptatibus perferendis rem error voluptates
                magnam aut.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=' h-fit bg-black markPasswordWrapper'>
        <div className='markPassword w-[90%] lg:w-[65%] rounded-3xl bg-gradient-to-t from-black to-[rgb(0,5,0)] shadow-[0px_0px_40px_0px] shadow-black mx-auto p-4 relative top-[-30px] lg:top-[-60px]'>
          <h1 className=' mx-auto text-justify text-transparent text-2xl lg:text-4xl font-megrim font-extrabold tracking-[6px] lg:tracking-[10px] leading-9 lg:leading-[40px] opacity-0'>
            "Odkryj magiczną siłę stylu z LGTHNK - ubrania inspirowane
            mitologią, które wzbogacą Twoją garderobę o niezwykłą opowieść.
            Każdy kawałek naszej kolekcji to mistyczna podróż przez legendy i
            mitologie, przekształcająca modę w epicką przygodę. Ubrania LGTHNK -
            łącące nowoczesny design z odwiecznymi historiami, abyś mógł nosić
            nie tylko ubranie, ale również opowieść. Wejdź do świata LGTHNK i
            stwórz swoją legendę modowej ekspresji!"
          </h1>
          <TypeAnimation
            sequence={[
              ' ',
              500,
              '"Odkryj magiczną siłę stylu z LGTHNK - ubrania inspirowane mitologią, które wzbogacą Twoją garderobę o niezwykłą opowieść. Każdy kawałek naszej kolekcji to mistyczna podróż przez legendy i mitologie, przekształcająca modę w epicką przygodę. Ubrania LGTHNK - łącące nowoczesny design z odwiecznymi historiami, abyś mógł nosić nie tylko ubranie, ale również opowieść. Wejdź do świata LGTHNK i stwórz swoją legendę modowej ekspresji!"',
              10000,
              ' ',
              100,
            ]}
            speed={70}
            repeat={Infinity}
            className=' mt-6 markPasswordContent w-[95%] absolute top-0 mx-auto lg:text-justify text-clip text-gray-600 text-2xl lg:text-4xl font-sen tracking-[6px] leading-9 lg:leading-[40px]'
          />
        </div>
      </div>

      <div className='desc w-full bg-white  space-y-[-40px]'>
        <div className=' overflow-hidden'>
          <h1 className=' descTitle text-[70px] md:text-[100px] lg:text-[150px] font-inter font-[200] relative left-[15%]'>
            WYGODA
          </h1>
        </div>
        {/* <div className="bg-[#49332b]"><h1 className="borderedText text-[150px] font-megrim relative left-[35%] text-transparent">JAKOSC</h1></div> */}
        <div className=' overflow-hidden'>
          <h1 className=' descTitle borderedText text-[70px] md:text-[100px] lg:text-[150px] font-megrim relative left-[30%] sm:left-[45%] text-transparent'>
            JAKOSC
          </h1>
        </div>
        <div className=' overflow-hidden'>
          <h1 className=' descTitle text-[70px] md:text-[100px] lg:text-[150px] font-inter font-[100] relative left-[20%] sm:left-[35%]'>
            WYGLAD
          </h1>
        </div>
      </div>
      <div className='lg:min-h-screen bg-black py-8 products'>
        <h1 className='font-megrim text-[#acacac] text-5xl lg:text-7xl xl:text-8xl  ml-[10%] productsTitle'>
          NAJNOWSZE
        </h1>
        <h1 className='font-inter font-[100] text-white text-5xl lg:text-7xl xl:text-8xl  ml-[30%] productsTitle'>
          PRODUKTY
        </h1>
        {/* <h1 className="font-megrim text-[#555555] text-3xl sm:text-5xl lg:text-7xl xl:text-8xl  ml-[5%] productsTitle">NAJNOWSZE PRODUKTY</h1> */}
        <NewProducts />
      </div>

      <div className='bg-black'>
        {/* <div className="w-1/2 mx-auto h-1 rounded-full bg-[#492914]"></div> */}
      </div>

      <div className='lg:min-h-screen bg-white grid md:grid-cols-2 text-black '>
        <div className=' mx-auto w-full'>
          <div className='sticky top-[50%] space-y-7 py-7'>
            {/* <div className="absolute h-[100%] w-1 bg-[#492914] right-0"></div> */}
            <h1 className='text-center text-7xl lg:text-9xl font-inter font-[100] text-gray-900'>
              CUSTOM
            </h1>
            <p className='w-1/2 text-justify mx-auto font-questrial text-xl'>
            Masz bluzę, której chciałbyś nadać nowe życie? Odezwij się do nas !
            </p>
            <div className='w-fit mx-auto group'>
              <div className=' bg-[#854a23] w-1/2 h-[2px] mx-auto group-hover:w-full transition-all duration-200'></div>
              <Link to='/custom'>
                <button className=' text-3xl font-questrial px-4 py-2 group-hover:tracking-[1px] transition-all duration-200'>
                  SPRAWDŹ
                </button>
              </Link>
              <div className=' bg-gray-800 w-1/2 h-[2px] mx-auto group-hover:w-full transition-all duration-200'></div>
            </div>
          </div>
        </div>
        <div className='h-fit md:h-full'>
          {/* <img
            src='https://images.unsplash.com/photo-1512551980832-13df02babc9e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className='h-full'
          /> */}
          <Animation/>
        </div>
      </div>
    </div>
  );
};

export default Header;