import React from "react";
import { Link } from "react-router-dom";
import data from '../data.json'
import { useEffect } from "react";

const NewProducts =()=>{
    return(
        <div className=" w-[90%] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-x-[5%] mt-10">
                {data.map((element)=>{
                    return(
                        <Link to={`/product/${element.id}`}>
                            <div id={element.id} className="my-[10%] bg-[#070707] pb-8 hover:bg-[#0a0a0a] hover:rounded-3xl transition-all duration-100 overflow-hidden">
                            <img src={element.image} alt="product" className="w-full"/>
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
        </div>
    )
}

export default NewProducts;
