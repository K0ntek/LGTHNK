import React from "react";
import { Link } from "react-router-dom";
import data from '../data.json'
import Carousel from "react-multi-carousel";
import { categoriesBackgrounds } from "./Men";
const CategoryProducts =()=>{

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

      const categoryImages=[
        {
            id: 1,
            startImage: "https://images.unsplash.com/photo-1629468855534-450d7c4c5f72?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            endImage:"https://images.unsplash.com/photo-1682159316144-8c3552d685b6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        // {
        //     id: 2,
        //     startImage: "https://images.unsplash.com/photo-1612011349250-8fb6e0027ef8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //     endImage:"https://images.unsplash.com/photo-1682159316144-8c3552d685b6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        // },
        // {
        //     id: 3,
        //     startImage: "https://images.unsplash.com/photo-1682159316144-8c3552d685b6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //     endImage:"https://images.unsplash.com/photo-1682159316144-8c3552d685b6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        // },
        // {
        //     id: 4,
        //     startImage: "https://images.unsplash.com/photo-1682159316144-8c3552d685b6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //     endImage:"https://images.unsplash.com/photo-1682159316144-8c3552d685b6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        // },

      ]

    return(
       <div className="lg:min-h-screen bg-[#000] py-10 lg:py-8">
        <div className=" products lg:my-[50px]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] w-[99%] mx-auto aspect-video">
        {/* {categoryImages.map((image, i)=>{
              return(
                 <>
                 {categoriesBackgrounds.map((category, i)=>{
                    return(
                        <div key={i}>
                        {image.id == category.id&&(
                            <div className=" md:row-span-2 md:col-span-2 m-0 p-0 overflow-hidden rounded-[40px]">
                                <img src={image.startImage} alt="dasasd" className="rounded-[40px]"/>
                            </div>
                    )}
                    </div>
                    )
                })}</>
              )
        })} */}


        {categoryImages.map((image, i)=>{
              return(
                //  <>
                //      {image.id == categoriesBackgrounds.id&&(
                        <div className=" md:row-span-2 md:col-span-2 m-0 p-0 overflow-hidden rounded-[40px]">
                            <img src={image.startImage} alt="dasasd" className="rounded-[40px]"/>
                        </div>
                // )}
                // </>
              )
        })}


            {data.map((element, i)=>{
                return(
                    <>
                            <div className="h-full">
                                <Link to={`/product/${element.id}`} id={element.id}>
                                    <div key={element.id} id={element.id} className="product rounded-[35px] my-[1%] bg-[#090909] pb-8 hover:bg-[#0a0a0a] text-center transition-all duration-100 overflow-hidden">
                                    <img src={element.image} alt="product" className="w-full"/>
                                    <div className=" text-white w-[90%] mx-auto mt-4 overflow-x-hidden">
                                        <h1 className=" font-poppins text-xl whitespace-nowrap">{element.title}</h1>
                                        <p className=" font-poppins text-lg">{element.price} PLN</p>
                                    </div>
                                    </div>
                                </Link>
                           </div>

                         {/* {i%3!=0 &&(
                           <div className=" h-1/2">
                                <Link to={`/product/${element.id}`} id={element.id}>
                                    <div key={element.id} id={element.id} className="my-[1%] bg-[#131313] pb-8 hover:bg-[#0a0a0a] text-center rounded-[45px] transition-all duration-100 overflow-hidden">
                                    <img src={element.image} alt="product" className="w-full"/>
                                    <div className=" text-white w-[90%] mx-auto mt-4 overflow-x-hidden">
                                        <h1 className=" font-poppins text-xl whitespace-nowrap">{element.title}</h1>
                                        <p className=" font-poppins text-lg">{element.price} PLN</p>
                                    </div>
                                    </div>
                                </Link>
                           </div>
                        )}

                        {i%3==0 &&(
                           <div className=" col-span-2 h-auto">
                             <Link to={`/product/${element.id}`} id={element.id}>
                            <div key={element.id} id={element.id} className=" my-[1%] bg-[#131313] pb-8 hover:bg-[#0a0a0a] text-center rounded-[45px] transition-all duration-100 overflow-hidden">
                            <img src={element.image} alt="product" className="w-full"/>
                            <div className=" text-white w-[90%] mx-auto mt-4 overflow-x-hidden">
                                <h1 className=" font-poppins text-xl whitespace-nowrap">{element.title}</h1>
                                <p className=" font-poppins text-lg">{element.price} PLN</p>
                            </div>
                            </div>
                            </Link>

                            
                           </div>
                        )} */}

                    </>
                )
            })}

        {categoryImages.map((image, i)=>{
            return(
                <div className=" row-span-1 col-span-1 m-0 p-0 overflow-hidden rounded-[40px]">
                    <img src={image.endImage} alt="dasasd" className="rounded-[40px]"/>
                </div>
            )
        })}
        </div>

        </div>
       </div>
    )
}

export default CategoryProducts;