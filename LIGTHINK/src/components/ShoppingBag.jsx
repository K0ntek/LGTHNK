import React from "react";
import {IoMdClose} from 'react-icons/io'
import gsap from "gsap";
const ShoppingBag =()=>{
    const hideBag =()=>{
        gsap.to(<ShoppingBag/>, {right:'-100%'})
    }
    return(
        <div className="relative">
        <div className="bag w-full sm:w-[85%] md:w-[60%] lg:w-[40%] xl:w-[30%] h-screen bg-[#f7f7f7] fixed top-0 right-[-100%] z-[99]">
                <IoMdClose className=" absolute top-2 left-2 text-4xl hover:text-red-600" onClick={hideBag}/>
                <h1 className=" font-questrial text-2xl mt-3 text-center">KOSZYK</h1>
            <div className=" relative top-[50px] px-3">
                <div className="bg-black">
                    dsf
                </div>
            </div>
        <div className="w-full mx-auto justify-center absolute bottom-[5%] left-[10%]">
            <button className="w-[80%] py-4 bg-black text-white text-xl hover:rounded-2xl hover:bg-[#070707] transition-all duration-150">KUP TERAZ</button>
            </div>
        </div>
    </div>
    )
}
export default ShoppingBag;