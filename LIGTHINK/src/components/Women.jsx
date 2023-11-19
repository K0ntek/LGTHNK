import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import CategoryProducts from "./categoryProducts";

const Women =()=>{
    useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])
    return(
       <div className="min-h-screen bg-black py-8">
        <div className=" products mt-[100px]">
        <h1 className="font-megrim text-[#502f1b] text-5xl sm:text-6xl md:text-8xl  ml-[20%] productsTitle">Kobieta</h1>
        <CategoryProducts/>
        </div>
       </div>
    )
}

export default Women;