import React from "react";
import { Link } from "react-router-dom";
import data from '../data.json'
const CategoryProducts =()=>{

    return(
       <div className="min-h-screen bg-black py-8">
        <div className=" products lg:mt-[100px]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[2%] w-[90%] mx-auto my-10">
            {data.map((element, i)=>{
                return(
                    <Link to={`/product/${element.id}`}>
                    <div className="my-[10%] bg-[#070707] pb-8 hover:bg-[#0a0a0a] hover:rounded-3xl transition-all duration-100 overflow-hidden">
                    <img src={element.image} alt="product" className="w-full"/>
                    <div className=" text-white w-[90%] mx-auto mt-4">
                        <h1 className=" font-questrial font-light text-2xl">{element.title}</h1>
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
        </div>
        </div>
       </div>
    )
}

export default CategoryProducts;