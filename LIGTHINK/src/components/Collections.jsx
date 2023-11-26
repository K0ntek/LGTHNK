import React, {useEffect} from "react";
import { Link } from "react-router-dom";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import data from '../data.json'

const Collections =()=>{

    useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])

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
        <div className=" min-h-screen bg-black py-8">
            <div className=" mt-[100px] w-[80%] mx-auto">
            <h1 className=" font-megrim text-[#502f1b] text-5xl md:text-8xl my-10">KOLEKCJE</h1>
                <div>
                    <h1 className=" font-megrim text-[#e0e0e0] text-5xl ml-[10%]">RZYMSKA</h1>

                    <Carousel 
                    responsive={responsive}
                    showDots={true}
                    swipeable={true}
                    draggable={false}
                    infinite={true}
                    autoPlay={true}
                    focusOnSelect={true}
                    autoPlaySpeed={4000}
                    ssr={true}>
                        {data.map((element, i)=>{
                            return(
                                <Link to={`/product/${element.id}`} draggable="false">
                                <div className="my-[10%] bg-[#070707] pb-8 hover:bg-[#0a0a0a] hover:rounded-3xl transition-all duration-100 overflow-hidden mx-3">
                                <img draggable="false" src={element.image} alt="product" className="w-full"/>
                                <div className=" text-white w-[90%] mx-auto mt-4">
                                    <h1 className=" font-gruppo text-4xl">{element.title}</h1>
                                    <p className=" ml-4 font-gruppo text-3xl">{element.price} zł</p>
                                    <div className=" flex space-x-8 justify-center">
                                        <button className=" border-2 border-[#25160d] px-4 py-2 hover:rounded-2xl transition-all duration-100">DO KOSZYKA</button>
                                        <button className=" border-2 border-[#25160d] bg-[#25160d] px-4 py-2 hover:rounded-2xl transition-all duration-100">KUP TERAZ</button>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            )
                        })}
                    </Carousel>;
                </div>

                <div>
                    <h1 className=" font-megrim text-[#e0e0e0] text-5xl ml-[10%]">EGIPSKA</h1>

                    <Carousel 
                    responsive={responsive}
                    // showDots={true}
                    swipeable={true}
                    draggable={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}>
                        {data.map((element, i)=>{
                            return(
                                <Link to={`/product/${element.id}`} draggable="false">
                                <div className="my-[10%] bg-[#070707] pb-8 hover:bg-[#0a0a0a] hover:rounded-3xl transition-all duration-100 overflow-hidden mx-3">
                                <img draggable="false" src={element.image} alt="product" className="w-full"/>
                                <div className=" text-white w-[90%] mx-auto mt-4">
                                    <h1 className=" font-gruppo text-4xl">{element.title}</h1>
                                    <p className=" ml-4 font-gruppo text-3xl">{element.price} zł</p>
                                    <div className=" flex space-x-8 justify-center">
                                        <button className=" border-2 border-[#25160d] px-4 py-2 hover:rounded-2xl transition-all duration-100">DO KOSZYKA</button>
                                        <button className=" border-2 border-[#25160d] bg-[#25160d] px-4 py-2 hover:rounded-2xl transition-all duration-100">KUP TERAZ</button>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            )
                        })}
                    </Carousel>;
                </div>

                <div>
                    <h1 className=" font-megrim text-[#e0e0e0] text-5xl ml-[10%]">GRECKA</h1>

                    <Carousel 
                    responsive={responsive}
                    // showDots={true}
                    swipeable={true}
                    draggable={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}>
                        {data.map((element, i)=>{
                            return(
                                <Link to={`/product/${element.id}`} draggable="false">
                                <div className="my-[10%] bg-[#070707] pb-8 hover:bg-[#0a0a0a] hover:rounded-3xl transition-all duration-100 overflow-hidden mx-3">
                                <img draggable="false" src={element.image} alt="product" className="w-full"/>
                                <div className=" text-white w-[90%] mx-auto mt-4">
                                    <h1 className=" font-gruppo text-4xl">{element.title}</h1>
                                    <p className=" ml-4 font-gruppo text-3xl">{element.price} zł</p>
                                    <div className=" flex space-x-8 justify-center">
                                        <button className=" border-2 border-[#25160d] px-4 py-2 hover:rounded-2xl transition-all duration-100">DO KOSZYKA</button>
                                        <button className=" border-2 border-[#25160d] bg-[#25160d] px-4 py-2 hover:rounded-2xl transition-all duration-100">KUP TERAZ</button>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            )
                        })}
                    </Carousel>;
                </div>

            </div>
        </div>
    )
}

export default Collections