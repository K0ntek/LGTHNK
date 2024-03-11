import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import data from '../data.json'
import Carousel from "react-multi-carousel";
import { categoriesBackgrounds } from "./Men";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const categoryImages=[
  {
      id: 1,
      startImage: "https://images.unsplash.com/photo-1629468855534-450d7c4c5f72?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      endImage:"https://images.unsplash.com/photo-1707343848610-16f9afe1ae23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    },
  {
      id: 2,
      startImage: "https://images.unsplash.com/photo-1612011349250-8fb6e0027ef8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      endImage:"https://images.unsplash.com/photo-1491566102020-21838225c3c8?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    },
  {
      id: 3,
      startImage: "https://images.unsplash.com/photo-1580990625649-092b7bfaee15?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      endImage:"https://images.unsplash.com/photo-1475066392170-59d55d96fe51?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    },
  {
      id: 4,
      startImage: "https://images.unsplash.com/photo-1573803621309-2e2c10679ccd?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      endImage:"https://images.unsplash.com/photo-1506760610100-1af6025cf0c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGdlcm1hbnl8ZW58MHx8MHx8fDA%3D",
    
    },
  {
    id: 5,
    startImage: "https://images.unsplash.com/photo-1524069615294-e50725f94a26?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    endImage:"https://images.unsplash.com/photo-1682159316144-8c3552d685b6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

}
]
const CategoryProducts =({id})=>{

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

      useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

       let imagePrdoducts = document.querySelectorAll(".image")
      //  let startImage = document.querySelectorAll(".startImage")
       imagePrdoducts.forEach(image => {
        gsap.fromTo(image, {scale:1.7}, {scale:1, duration:.5, scrollTrigger:{trigger:image, start:'top 60%', end: 'top ', scrub:2}})
       });


        let products = document.querySelectorAll('.productElement')
        products.forEach(product => {
            // gsap.set(product, {opacity:0, scrollTrigger:{trigger:product, start:'top 150%'}})
            gsap.fromTo(product, {y:200, opacity:0}, {y:0, opacity:1, duration:.4, delay:.5, scrollTrigger:{trigger:product, start:'top 80%'}}) 
        });

        let images = document.querySelectorAll(['.startImage', '.endImage'])
        images.forEach(image => {
            // gsap.set(image, {opacity:0, scrollTrigger:{trigger:image, start:'top 150%', toggleActions:'restart'}})
            gsap.fromTo(image, {x:'-400px', opacity:0}, {x:0, opacity:1, duration:.5, stagger:.4, delay:.2, scrollTrigger:{trigger:image, start:'top 80%'}})
        });
    },[])

      const startImage=[]
      const endImage=[]

          categoryImages.forEach((image, i) => {
            if(id+1 == image.id){
              startImage.push(
                    <img src={image.startImage} alt="dasasd" className="image rounded-[40px] hover:scale-125 transition-all duration-150"/>
              )
              endImage.push(
                    <img src={image.endImage} alt="dasasd" className="rounded-[40px] object-cover h-full w-full hover:scale-125 transition-all duration-150"/>
              )
            }
          });

          console.log(id)

    return(
       <div className="products lg:min-h-screen bg-[#000] py-10 lg:py-8">
        <div className="  lg:my-[50px]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] w-[99%] mx-auto aspect-video">

            <div className="startImage md:row-span-2 md:col-span-2 m-0 p-0 overflow-hidden rounded-[40px]">
                {startImage}
            </div>


            {data.map((element, i)=>{
                return(
                    <>
                            <div className="h-full productElement group">
                                <Link to={`/product/${element.id}`} id={element.id}>
                                    <div key={element.id} id={element.id} className=" rounded-[35px] my-[1%] bg-[#090909] pb-8 hover:bg-[#0a0a0a] text-center transition-all duration-100 overflow-hidden">
                                    <div className=" overflow-hidden"> <img src={element.image} alt="product" className="w-full group-hover:scale-125 transition-all duration-150"/></div>
                                    <div className=" text-white w-[90%] mx-auto mt-4 overflow-x-hidden">
                                        <h1 className=" font-poppins text-xl whitespace-nowrap">{element.title}</h1>
                                        <p className=" font-poppins text-lg">{element.price} PLN</p>
                                    </div>
                                    </div>
                                </Link>
                           </div>
                    </>
                )
            })}

                <div className="endImage row-span-1 col-span-1 m-0 p-0 overflow-hidden rounded-[40px]">
                    {endImage}
                </div>
        </div>

        </div>
       </div>
    )
}

export default CategoryProducts;
