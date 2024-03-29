import React from "react";
import { Link } from "react-router-dom";
import data from '../data.json'
import { useEffect } from "react";
import Carousel from "react-multi-carousel";

const NewProducts =()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1124 },
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
        <>
       <div className="hidden xl:block">
         <div className=" w-[90%] mx-auto grid lg:grid-cols-5 gap-[10px] mt-10">
                {data.map((element)=>{
                    return(
                        <Link to={`/product/${element.id}`} id={element.id}>
                                    <div key={element.id} id={element.id} className="my-[1%] bg-[#090909] pb-8 hover:bg-[#0a0a0a] text-center rounded-[6%] transition-all duration-100 overflow-hidden">
                                    <img src={element.image} alt="product" className="w-full"/>
                                    <div className=" text-white w-[90%] mx-auto mt-4 overflow-x-hidden">
                                        <h1 className=" font-poppins text-xl whitespace-nowrap">{element.title}</h1>
                                        <p className=" font-poppins text-lg">{element.price} PLN</p>
                                    </div>
                                    </div>
                                </Link>
                    )
                })}
        </div>
       </div>

        <Carousel 
                    responsive={responsive}
                    // showDots={true}
                    swipeable={true}
                    draggable={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    className="xl:hidden">
                        {data.map((element)=>{
                    return(
                        <Link to={`/product/${element.id}`}>
                            <div id={element.id} className=" mx-auto w-[95%] rounded-3xl my-[10%] bg-[#070707] pb-8 hover:bg-[#0a0a0a] hover:rounded-xl transition-all duration-100 overflow-hidden">
                            <img src={element.image} alt="product" className="w-full"/>
                            <div className=" text-white w-[90%] mx-auto mt-4">
                                <h1 className=" font-poppins font-bold text-3xl">{element.title}</h1>
                                <p className=" ml-4 font-gruppo text-3xl">{element.price} zł</p>
                                <div className=" flex space-x-8 justify-center">
                                    <button className=" border-2 border-[#25160d] px-4 py-2 hover:rounded-2xl transition-all duration-100">DO KOSZYKA</button>
                                    <button className=" border-2 border-[#492914] bg-[#492914] px-4 py-2 hover:rounded-2xl transition-all duration-100">KUP TERAZ</button>
                                </div>
                            </div>
                        </div>
                        </Link>
                    )
                })}
                    </Carousel>;
        </>
    )
}

export default NewProducts;
