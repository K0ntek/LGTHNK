import React, { useEffect } from "react";
import CategoryProducts from "./categoryProducts";
import CategoryButtons from "./CategoryButtons";
import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";
import { Link } from "react-scroll";

const CategoryWrapper =({header, content, categoriesBackgrounds, backgroundImage})=>{

    const buttons = [
    {
      id: 1,
      name: "KOLEKCJA EGIPSKA",
      link: "egypt",
      color: "rgba(255,199,44,.9)"
    },
    {
      id: 2,
      name: "KOLEKCJA RZYMSKA",
      link: "rome",
      color: "rgba(142, 0, 28, .9)"
    },
    {
      id: 3,
      name: "KOLEKCJA NORDYCKA",
      link: "nordic",
      color: "rgba(214, 159, 95, .9)"
    },
    {
      id: 4,
      name: "KOLEKCJA NIEMIECKA",
      link: "german",
      color: "rgba(204, 0, 0, .9)"
    },
    {
      id: 5,
      name: "KOLEKCJA AZJATYCKA",
      link: "asian",
      color: "rgba(188, 0, 45, .9)"
    }
  ]

  useEffect(()=>{
    gsap.fromTo('.header', {y:200, opacity:0}, {y:0, opacity:1, duration:.5})
  },[])

    useEffect(()=>{
      let collectionButton = document.querySelector('.button');
    let collectionButtonHover = gsap.to('.buttonBorder', {
      width: '100%',
      paused: true,
      duration: 0.2,
    });

    collectionButton.addEventListener('mouseenter', () => collectionButtonHover.play());
    collectionButton.addEventListener('mouseleave', () => collectionButtonHover.reverse());
    },[])

    // const scrollToCategory=()=>{
    //   gsap.to('.category', {scrollTo})
    // }

     return (
    <div className="min-h-screen bg-[#000] py-8">
      <div className=" relative h-screen bg-center" style={{background: `linear-gradient(0deg, black, rgba(0,0,0,.3)), url(${backgroundImage})`, backgroundPosition:"center"}}>
        <div className=" mx-auto relative top-[30%] space-y-[10%]">
          <div className=" space-y-10">
            <h1 className="header font-inter text-[#d4d4d4] text-5xl sm:text-7xl tracking-[5px] productsTitle text-center">{header}</h1>
            <div className=" w-1/3 mx-auto text-justify mt-5">
            <TypeAnimation
              sequence={[' ', 200, `${content}`]}
              speed={80}
              delay={200}
              className=' font-poppins text-lg text-white'
            />
            </div>
          </div>

          <div className=" justify-center mx-auto text-center space-y-8">
            {/* <h1 className=" text-white text-3xl font-michroma">KOLEKCJE</h1> */}

            <div className=" flex gap-3 justify-center flex-wrap">
              {buttons.map((button, i) => <CategoryButtons button={button} />)}
            </div>
          </div>
        </div>
      </div>


      <div>
        {categoriesBackgrounds.map((bgElement, i) => {
          return (
            <div>
              <div id={bgElement.link} className=" category h-screen rounded-3xl" style={{ background: `url(${bgElement.background})`, backgroundAttachment: "fixed", backgroundPosition: "center" }}>

                <div className="w-full h-full bg-gradient-to-t from-black/80 to-transparent mx-auto text-center">
                    <div className="relative top-[40%] space-y-6 w-fit mx-auto bg-black/40 py-7">
                      <h1 className=" text-[#ccc] font-inter text-6xl font-[200]">{bgElement.name}</h1>
                      <p className="w-[70%] mx-auto text-white text-lg font-poppins">{bgElement.content}</p>
                      <div className='w-fit mx-auto'>
                        <div className='buttonBorder w-[40%] h-[2px] bg-yellow-500 mx-auto'></div>
                        {/* <Link to={i} smooth={true}> */}
                          <button onClick={scroll(0, 100)} className='button font-sen text-[#fff] bg-black/30 hover:bg-black/50 px-4 md:px-6 py-2 md:py-4 md:text-2xl hover:tracking-[2px] transition-all duration-200'>
                            SPRAWDŹ
                          </button>
                        {/* </Link> */}
                        <div className='buttonBorder w-[40%] h-[2px] bg-[silver] mx-auto'></div>
                      </div>
                    </div>
                </div>
              </div>
              {/* <div className=" md:row-span-2 md:col-span-2 m-0 p-0 overflow-hidden rounded-[40px]">
                        <img src={bgElement.startImage} alt="dasasd" className="rounded-[40px]"/>
                    </div> */}
              <CategoryProducts id={i}/>
              {/* <div className=" row-span-1 col-span-1 m-0 p-0 overflow-hidden rounded-[40px]">
                      <img src={bgElement.endImage} alt="dasasd" className="rounded-[40px]"/>
                    </div> */}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryWrapper