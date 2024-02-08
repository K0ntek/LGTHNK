import React from "react";
import { Link } from "react-router-dom";
import data from '../data.json'
const CategoryProducts =()=>{

    return(
       <div className="min-h-screen bg-black py-8">
        <div className=" products lg:my-[50px]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-[10px] w-[99%] mx-auto">
            {data.map((element, i)=>{
                return(
                    <>
                        {i%3!=0 &&(
                           <div className="">
                                <Link to={`/product/${element.id}`} id={element.id}>
                                    <div key={element.id} id={element.id} className="my-[1%] bg-[#070707] pb-8 hover:bg-[#0a0a0a] text-center rounded-3xl transition-all duration-100 overflow-hidden">
                                    <img src={element.image} alt="product" className="w-full"/>
                                    <div className=" text-white w-[90%] mx-auto mt-4 overflow-x-hidden">
                                        <h1 className=" font-poppins text-xl whitespace-nowrap">{element.title}</h1>
                                        <p className=" font-poppins text-lg">{element.price} PLN</p>
                                        {/* <div className=" space-y-2 justify-center text-center">
                                            <button className="w-3/4 border-2 border-[#25160d] px-4 py-2 hover:rounded-2xl transition-all duration-100">DO KOSZYKA</button><br />
                                            <button className="w-3/4 border-2 border-[#492914] bg-[#492914] px-4 py-2 hover:rounded-2xl transition-all duration-100">KUP TERAZ</button>
                                        </div> */}
                                    </div>
                                    </div>
                                </Link>
                           </div>
                        )}

                        {i%3==0 &&(
                           <div className=" col-span-2">
                             <Link to={`/product/${element.id}`} id={element.id}>
                            <div key={element.id} id={element.id} className=" my-[1%] bg-[#070707] pb-8 hover:bg-[#0a0a0a] text-center rounded-3xl transition-all duration-100 overflow-hidden">
                            <img src={element.image} alt="product" className="w-full"/>
                            <div className=" text-white w-[90%] mx-auto mt-4 overflow-x-hidden">
                                <h1 className=" font-poppins text-xl whitespace-nowrap">{element.title}</h1>
                                <p className=" font-poppins text-lg">{element.price} PLN</p>
                                {/* <div className=" space-y-2 justify-center text-center">
                                    <button className="w-3/4 border-2 border-[#25160d] px-4 py-2 hover:rounded-2xl transition-all duration-100">DO KOSZYKA</button><br />
                                    <button className="w-3/4 border-2 border-[#492914] bg-[#492914] px-4 py-2 hover:rounded-2xl transition-all duration-100">KUP TERAZ</button>
                                </div> */}
                            </div>
                            </div>
                            </Link>

                            
                           </div>
                        )}
                    </>
                )
            })}
             
        </div>
        </div>
       </div>
    )
}

export default CategoryProducts;