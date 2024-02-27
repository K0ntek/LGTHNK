import React,{useEffect, useState} from "react";
import CategoryProducts from "./categoryProducts";
import { Link } from "react-scroll";
import gsap from "gsap";

export const categoriesBackgrounds = [
  {
    id: 1,
    "background": "https://images.unsplash.com/photo-1508872528308-297e1dc77d6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "KOLEKCJA EGIPSKA",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi nemo sed, officiis est mollitia.",
    link: "egypt"
  },
  {
    id: 2,
    "background": "https://images.unsplash.com/photo-1508872528308-297e1dc77d6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "KOLEKCJA RZYMSKA",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi nemo sed, officiis est mollitia.",
    link: "rome"
  },
  {
    id: 3,
    "background": "https://images.unsplash.com/photo-1508872528308-297e1dc77d6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "KOLEKCJA NORDYCKA",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi nemo sed, officiis est mollitia.",
    link: "nordic"
  },
  {
    id: 4,
    "background": "https://images.unsplash.com/photo-1508872528308-297e1dc77d6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "KOLEKCJA NIEMIECKA",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi nemo sed, officiis est mollitia.",
    link: "german"
  },
  {
    id: 5,
    "background": "https://images.unsplash.com/photo-1508872528308-297e1dc77d6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "KOLEKCJA AZJATYCKA",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi nemo sed, officiis est mollitia.",
    link: "asian"
  }
]

// const buttonHover =()=>{
//   gsap.to(".buttonBg", {y: "-100%", duration:.5, zIndex:"-10"})
// }

// const buttonHoverLeave =()=>{
//   gsap.to(".buttonBg", {y: "100%", duration:.5, zIndex:"-10"})
// }

const Men=()=>{
    useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])


    const buttons=[
      {
        id: 1,
        name: "KOLEKCJA EGIPSKA",
        link: "egypt",
        color: "rgba(192, 147, 0, .6)",
      },
      {
        id: 2,
        name: "KOLEKCJA RZYMSKA",
        link: "rome",
        color: "rgba(142, 0, 28, .6)",
      },
      {
        id: 3,
        name: "KOLEKCJA NORDYCKA",
        link: "nordic",
        color: "rgba(214, 159, 95, .6)",
      },
      {
        id: 4,
        name: "KOLEKCJA NIEMIECKA",
        link: "german",
        color: "rgba(221, 0, 0, .6)",
      },
      {
        id: 5,
        name: "KOLEKCJA AZJATYCKA",
        link: "asian",
        color: "rgba(188, 0, 45,.6)",
      }
    ]

    const [isHover, setHover] = useState(0)
    const mouseOver = ( i) => {
      setHover(true)
  }

  const mouseOut = ( i) => {
      setHover(false)
  }

    return(
       <div className="min-h-screen bg-[#000] py-8">
          <div className="menBanner relative h-screen bg-center">
            <div className=" mx-auto relative top-[30%] space-y-[10%]">
                  <div className=" space-y-10">
                  <h1 className=" font-michroma text-[silver] text-4xl sm:text-6xl productsTitle text-center">MĘŻCZYZNA</h1>
                    <p className=" w-2/3 lg:w-1/3 mx-auto font-poppins text-justify mt-5 text-lg text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur id obcaecati, accusantium temporibus numquam repellat dolor explicabo earum aspernatur deleniti?</p>
                  </div>

                  <div className=" justify-center mx-auto text-center space-y-8">
                    {/* <h1 className=" text-white text-3xl font-michroma">KOLEKCJE</h1> */}

                    <div className=" grid grid-cols-2 sm:grid-cols-3 lg:flex justify-center">
                      {buttons.map((button, i)=>{
                        return(
                          <div id={i} className=" overflow-hidden z-[90] w-fit  mx-3 my-3">
                            <Link to={button.link} smooth={true} spy={true} className="z-[90] overflow-hidden">
                              <button key={i} onMouseEnter={(i) => {mouseOver(i);}} onMouseLeave={(i) => {mouseOut(i);}}
                              style={{ backgroundColor: isHover ? `${button.color}` : 'transparent',}} id={button.id}
                              className="z-[1] overflow-y-hidden button border-[1px] border-white p-3 text-white hover:border-transparent hover:text-black rounded-full transition-all duration-200">{button.name}</button>
                              <div className=" z-[-1] overflow-hidden buttonBg w-full h-full"></div></Link>
                          </div>
                        )
                      })}
                    </div>
                  </div>
            </div>
          </div>


          <div>
            {categoriesBackgrounds.map((bgElement, i)=>{
              return(
               <div>
                  <div id={bgElement.link} className="h-screen rounded-3xl" style={{background: `url(${bgElement.background})`, backgroundAttachment: "fixed", backgroundPosition:"center"}}>

                    <div className="w-full h-full bg-gradient-to-t from-black/80 to-transparent mx-auto text-center">
                        <div className="relative top-[40%]">
                          <h1 className=" text-white font-megrim text-6xl font-bold">{bgElement.name}</h1>
                          <p className="w-[70%] mx-auto text-white font-lg font-poppins">{bgElement.content}</p>
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

export default Men;