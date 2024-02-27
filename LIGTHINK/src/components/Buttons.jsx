import React from 'react'
import { useState } from 'react'

const Buttons = () => {

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
      const mouseOver = (event, i) => {
        setHover(true)
    }
  
    const mouseOut = (event, i) => {
        setHover(false)
    }
    
  return (
    <>
     {buttons.map((button, i)=>{
                        return(
                          <div id={i} className=" overflow-hidden z-[90] w-fit  mx-3 my-3">
                            <Link to={button.link} smooth={true} spy={true} className="z-[90] overflow-hidden">
                              <button key={i} onMouseEnter={() => {mouseOver(i);}} onMouseLeave={() => {mouseOut(i);}}
                              style={{ backgroundColor: isHover ? `${button.color}` : 'transparent',}} id={button.id}
                              className="z-[1] overflow-y-hidden button border-[1px] border-white p-3 text-white hover:border-transparent hover:text-black rounded-full transition-all duration-200">{button.name}</button>
                              <div className=" z-[-1] overflow-hidden buttonBg w-full h-full"></div></Link>
                          </div>
                        )
                      })}
    </>
  )
}

export default Buttons