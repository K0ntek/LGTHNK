import React from "react";
import {IoMdClose} from 'react-icons/io'

const ShoppingBag =()=>{
    return(
        <div className=" w-[30%] h-screen bg-[#f7f7f7] fixed right-0 top-[60px] z-[99]">
                <IoMdClose className=" absolute top-2 left-2 text-4xl hover:text-red-600"/>
                <h1 className=" font-questrial text-2xl mt-3 text-center">KOSZYK</h1>
            <div className=" relative top-[50px] px-3">
                <div className="bg-black">
                    dsf
                </div>
                <button className="bg-black">KUP TERAZ</button>
            </div>
        </div>
    )
}
export default ShoppingBag;