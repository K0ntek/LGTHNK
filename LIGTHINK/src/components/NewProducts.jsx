import React from "react";
import { Link } from "react-router-dom";
import data from '../data.json'
import { useEffect } from "react";
import Carousel from "react-multi-carousel";

const NewProducts =()=>{
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1800 },
          items: 4
        },
        desktopMini: {
          breakpoint: { max: 1799, min: 1124 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1124, min: 714 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 714, min: 0 },
          items: 1
        }
      };
    return(
        <div className=" w-[90%] mx-auto gap-[10px] mt-10">

                <Carousel 
                    responsive={responsive}
                    // showDots={true}
                    swipeable={true}
                    draggable={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    
                    className="">
                        {data.map((element)=>{
                    return(
                       <Link to={`/product/${element.id}`} id={element.id}>
                                    <div key={element.id} id={element.id} className=" mx-[10px] my-[1%] bg-[#090909] pb-8 hover:bg-[#0a0a0a] text-center rounded-[6%] transition-all duration-100 overflow-hidden">
                                    <img src={element.image} alt="product" className="w-full"/>
                                    <div className=" text-white w-[90%] mx-auto mt-4 overflow-x-hidden">
                                        <h1 className=" font-poppins text-xl whitespace-nowrap">{element.title}</h1>
                                        <p className=" font-poppins text-lg">{element.price} PLN</p>
                                    </div>
                                    </div>
                                </Link>
                    )
                })}
                    </Carousel>;
        </div>
    )
}

export default NewProducts;
