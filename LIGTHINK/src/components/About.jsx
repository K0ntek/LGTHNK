import React, { useEffect } from "react";
import gsap from "gsap";

const About =()=>{

    useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])

    useEffect (()=>{
        gsap.fromTo('.aboutSection', {y:200, opacity:0}, {y:0, opacity:1, duration:.5, stagger:.2})
    },[])
    return(
        <div className=" min-h-screen bg-[#020202] mt-[60px] py-[50px]">
            <div className=" w-[80%] lg:w-[60%] mx-auto pt-[50px] space-y-3">

           <div className="grid lg:grid-cols-[40%_60%] gap-3">
            
           <div className=" aboutSection  p-7 h-full bg-[#DAE3E5] rounded-3xl">
                <h1 className=" font-megrim text-7xl text-[#3b2516] my-6 text-center">O NAS</h1>
                <p className=" text-justify text-xl font-questrial">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ullam eius impedit perferendis minima eum laboriosam dolorem eaque fugit vero, repellat fugiat atque excepturi ipsam rerum officiis ab, dignissimos vel quod nesciunt sequi odio accusamus. Consectetur at deleniti, error optio dolorem nemo, eum autem aperiam doloremque laborum, praesentium quisquam iusto?</p>
                </div>

               <div className=" overflow-hidden hidden lg:block ">
               <img src="https://images.unsplash.com/reserve/unsplash_52d3d6f9853e9_1.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2063&q=80" alt="aboutImage" className=" headerImage rounded-3xl mx-auto h-full object-cover"/>
               </div>

           </div>
            <div className="grid lg:grid-cols-[60%_40%] gap-3">

                    <div className=" aboutSection p-7 bg-[#080808] rounded-3xl sm:ml-[-40px] sm:mr-[40px] lg:m-0">
                        <h1 className=" font-megrim text-5xl text-[#8d6a52] ml-[10%] my-6">KIM JESTESMY?</h1>
                        <p className=" text-white text-justify text-xl font-questrial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum illo sed veniam, voluptatum ipsa eius natus dolore delectus sit provident. Sapiente deserunt rem ratione? Asperiores beatae veniam quae obcaecati corporis, ea nobis quo porro delectus officia est vitae modi eveniet repudiandae ab adipisci placeat tenetur facilis ullam aperiam itaque sit.</p>
                    </div>

                    <div className=" aboutSection  p-7 bg-[#050914] rounded-3xl sm:ml-[20px] msm:r-[-20px] lg:m-0">
                        <h1 className=" font-megrim text-5xl ml-[10%] text-[#8d6a52] mb-6">NASZE CELE</h1>
                        <p className=" text-justify text-xl font-questrial text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum illo sed veniam, voluptatum ipsa eius natus dolore delectus sit provident. Sapiente deserunt rem ratione? Asperiores beatae veniam quae obcaecati corporis, ea nobis quo porro delectus officia est vitae modi eveniet repudiandae ab adipisci placeat tenetur facilis ullam aperiam itaque sit.</p>
                    </div>



            </div>
            </div>

           
        </div>
    )
}

export default About;