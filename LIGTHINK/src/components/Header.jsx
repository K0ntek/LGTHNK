import React from "react";
import Logo from "../../public/lgthnklight.png"
import { gsap } from "gsap";
import { useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {FiInstagram} from 'react-icons/fi'
import {FaFacebook, FaTwitter} from 'react-icons/fa'
import NewProducts from "./NewProducts";
import { Link } from "react-router-dom";

const Header =()=>{

    // useEffect(() => {
	// 	window.scrollTo(0, 0)
	//   }, [])

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo('.headerImage', {y:'300', opacity:0}, {y:0, opacity:1, duration:.5, delay:.5})
        gsap.fromTo('.logo', {y:'-200', opacity:0}, {y:0, opacity:1, ease:'easeIn', delay:.2})
        gsap.fromTo('.socials', {y:'100px', opacity:0}, {y:0, opacity:1, duration:.5})
            if(window.innerWidth>700){
                gsap.fromTo('.descTitle', { y: '100%', opacity:0}, { y:0, opacity:1, stagger:.5, scrollTrigger:{trigger:'.desc', start: 'top 60%', end:'top 20%', scrub: 2}})
                gsap.fromTo('.productsTitle', {x:'60%', opacity:0}, {x:0, opacity:1, scrollTrigger:{trigger:'.products', start:'top 70%', end:'top 20%', scrub:1,}})
            }
        gsap.fromTo('.markPassword', {x:'-300', opacity:0}, {x:0, opacity:1, duration:.5, scrollTrigger:{trigger:'.markPasswordWrapper', start:'top 90%', end:'top 60%', scrub:1}})
        gsap.fromTo('.markPasswordContent', {y:300, opacity:0}, {y:0, opacity:1, duration:.5, delay:.5, scrollTrigger:{trigger:'.markPassword', start:'top 60%', end:'top 50%', scrub:1}})

        let tl = gsap.timeline()
        tl.fromTo('.logoBorder', { width: 0 }, { duration: 0.5, width: "100%", delay: .7 })
            .to(".logoBorder", { width: "40%", marginLeft: "30%", ease: "easeInOut" });
    },[])
    return(
       <div className="bg-[#020202]">
        <div className=" header w-full min-h-screen relative mb-[10%]">

            <div className=" absolute right-2 top-[50%] translate-y-[-50%] h-fit hidden md:block">
               <div className="socials z-[99] space-y-3">
               <FiInstagram className="text-xl text-white hover:text-[silver] transition-all duration-200"/>
                <FaFacebook className="text-xl text-white hover:text-[silver] transition-all duration-200"/>
                <FaTwitter className="text-xl text-white hover:text-[silver] transition-all duration-200"/>
               </div>
                <div className="socialBorder w-[2px] h-[120px] bg-[#25160d] mx-auto relative top-[-100px] z-[-1]"></div>
            </div>

            <div className="h-fit">
                <div className=" w-[70%] xl:w-[55%] mx-auto text-justify relative top-[100px]">
                    <p className="font-gruppo text-transparent md:text-2xl">Vestimenta a mythologia inspirata, quae tuum vestiarium fabula extraordinaria ditabunt. Quisque pars nostrae collectionis est iter mysticum per fabulas et mythologias, transformans modum in aventuram epiceam. Ingredere in mundum LGTHNK et construe tuam legendam expressionis modae!</p>
                <TypeAnimation
                        sequence={[
                                " ",
                                500,
                                'Vestimenta a mythologia inspirata, quae tuum vestiarium fabula extraordinaria ditabunt. Quisque pars nostrae collectionis est iter mysticum per fabulas et mythologias, transformans modum in aventuram epiceam. Ingredere in mundum LGTHNK et construe tuam legendam expressionis modae!',
                                5000,
                                ' ',
                                100,
                        ]}
                        speed={80}
                        repeat={Infinity}
                        className=" absolute top-0 font-gruppo text-white md:text-2xl"
                    />
                    </div>
                </div>
            <div className="relative mt-[200px]">
            <div className="mx-auto absolute top-[-15%] left-[50%] translate-x-[-50%] z-[98]">
               <div className=" w-fit">
               <img src ={Logo}  alt="logo" className="logo mx-auto w-[700px]"/>
               <div className="logoBorder border-b-[4px] border-white w-1/2 mx-auto rounded-full"></div>
               </div>
            </div>
            <div className=" mx-auto z-[1] w-[90%] md:w-[80%] lg:w-[80%] xl:w-[60%]">
            <img src="https://images.unsplash.com/reserve/unsplash_52d3d6f9853e9_1.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2063&q=80" alt="headerImage" className="headerImage rounded-3xl mx-auto"/>
            </div>
            </div>
        </div>
        <div className=" w-full bg-white relative hidden md:block overflow-x-hidden">
            <div className="absolute w-full h-full bg-gradient-to-b from-[rgba(0,0,0,.2)] to-[rgba(17,24,39,.8)] z-[92]"></div>
                        <div className="w-full h-[20px] bg-black absolute top-0">
                            <div className="relative top-[50px] lg:top-[100px] right-10 z-[92]">
                                    {/* <h1 className="z-[91] font-questrial text-8xl text-[rgb(116,200,212)]">NOWA KOLEKCJA</h1> */}
                                    <h1 className=" font-questrial text-3xl md:text-6xl xl:text-8xl text-gray-900 text-right">NOWA KOLEKCJA</h1>
                                        <div className="relative ">
                                            <a href="/collections" className=""><button className="absolute right-0 md:right-10 bg-black text-white md:px-8 py-2 md:py-4 md:text-xl lg:text-3xl font-gruppo hover:rounded-2xl hover:bg-slate-800 transition-all duration-200"> KUP TERAZ</button></a>
                                        </div>
                            </div>
                                    </div>
                <div className=" relative z-[90]">
                    <img src="https://www.wavyboyclothing.com/cdn/shop/products/DSC08024.jpg?v=1666774893" className="w-full aspect-video z-[90] rounded-[20px_20px_0px_0px]"/>
                </div>
        </div>
        {/* <div className="h-[20px] grid grid-cols-2 relative top-[-30px]">
                <div className=" h-screen bg-black"></div>
                <div className=" h-screen bg-[#e0e0e0]"></div>
        </div> */}

       <div className="relative">
        <div className=" hidden md:block absolute font-megrim text-4xl w-fit left-[50%] translate-x-[-50%] top-[50px] z-[90]"><h1 className="text-center bg-[#e0e0e0] text-[#74523f] tracking-[7px] pl-4 rounded-full">LGT<span className="text-gray-600 bg-black px-3 ml-3 rounded-e-full">HNK</span></h1></div>
       
       <div className="md:min-h-screen grid md:grid-cols-2 rounded-3xl relative space-y-0">
                <div className=" h-fit md:h-screen bg-black text-center py-10 md:py-0">
                   <div className=" relative md:top-[50%] md:translate-y-[-70%] space-y-10 md:space-y-8">
                   {/* <p className="w-[70%] mx-auto text-justify text-[#e0e0e0] font-gruppo">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur tenetur, enim eaque labore sed doloremque architecto eius debitis consequuntur sapiente quisquam ut reprehenderit, quo consequatur ipsa iusto. Ducimus, sit labore.</p> */}
                        <h1 className=" font-megrim text-7xl lg:text-8xl text-gray-800">MEZCZYZNA</h1>
                            <Link to="/men"><button className=" font-sen border-[2px] border-[#74523f] text-[#74523f] px-8 py-4 text-2xl hover:rounded-2xl transition-all duration-200">PRZEGLĄDAJ</button></Link>
                            <p className="w-[70%] mx-auto text-justify text-[#e0e0e0] font-gruppo text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur tenetur, enim eaque labore sed doloremque architecto eius debitis consequuntur sapiente quisquam ut reprehenderit, quo consequatur ipsa iusto. Ducimus, sit labore.</p>
                   </div>
                </div>
                <div className=" h-fit md:h-screen bg-[#e0e0e0] text-center py-10 md:py-0">
                   <div className=" relative md:top-[50%] md:translate-y-[-30%] space-y-10 md:space-y-8">
                        <h1 className=" font-megrim text-7xl lg:text-8xl text-[#74523f]">KOBIETA</h1>
                            <Link to="/women"><button className=" font-sen border-[2px] border-gray-950 text-gray-950 px-8 py-4 text-2xl hover:rounded-2xl transition-all duration-200">PRZEGLĄDAJ</button></Link>
                            <p className="w-[70%] mx-auto text-justify font-gruppo text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, consectetur! Neque temporibus, laudantium voluptatum illo, eligendi libero possimus facere repellendus recusandae officiis exercitationem voluptatibus perferendis rem error voluptates magnam aut.</p>
                </div>
                </div>
        </div>
       </div>

        <div className=" h-fit bg-black markPasswordWrapper">
            <div className="markPassword w-[90%] lg:w-3/4 rounded-3xl bg-gradient-to-t from-black to-gray-950 mx-auto p-4 relative top-[-30px] lg:top-[-100px]">
                <h1 className=" mx-auto text-justify text-transparent text-2xl lg:text-5xl font-megrim font-extrabold tracking-[6px] lg:tracking-[10px] leading-9 lg:leading-[60px]">"Odkryj magiczna sile stylu z LGTHNK - ubrania inspirowane mitologia, ktore wzbogaca Twoja garderobe o niezwykla opowiesc. Kazdy kawalek naszej kolekcji to mistyczna podroz przez legendy i mitologie, przeksztalcajaca mode w epicka przygode. Ubrania LGTHNK - laczace nowoczesny design z odwiecznymi historiami, abys mogl nosic nie tylko ubranie, ale rowniez opowiesc. Wejdz do swiata LGTHNK i stworz swoja legende modowej ekspresji!"</h1>
                <TypeAnimation
                sequence={[
                        " ",
                        500,
                        '"Odkryj magiczna sile stylu z LGTHNK - ubrania inspirowane mitologia, ktore wzbogaca Twoja garderobe o niezwykla opowiesc. Kazdy kawalek naszej kolekcji to mistyczna podroz przez legendy i mitologie, przeksztalcajaca mode w epicka przygode. Ubrania LGTHNK - laczace nowoczesny design z odwiecznymi historiami, abys mogl nosic nie tylko ubranie, ale rowniez opowiesc. Wejdz do swiata LGTHNK i stworz swoja legende modowej ekspresji!"',
                        10000,
                        ' ',
                        100,
                ]}
                speed={70}
                repeat={Infinity}
                className=" mt-6 markPasswordContent w-[95%] absolute top-0 mx-auto text-center text-[#864f30] text-2xl lg:text-5xl font-sen tracking-[6px] leading-9 lg:leading-[50px]"
            />
            </div>
        </div>

        <div className="desc w-full bg-white  space-y-[-40px]">
            <div className=" overflow-hidden"><h1 className=" descTitle text-[70px] md:text-[100px] lg:text-[150px] font-megrim font-extrabold relative left-[15%]">WYGODA</h1></div>
            {/* <div className="bg-[#49332b]"><h1 className="borderedText text-[150px] font-megrim relative left-[35%] text-transparent">JAKOSC</h1></div> */}
            <div className=" overflow-hidden"><h1 className=" descTitle borderedText text-[70px] md:text-[100px] lg:text-[150px] font-megrim relative left-[30%] sm:left-[45%] text-transparent">JAKOSC</h1></div>
            <div className=" overflow-hidden"><h1 className=" descTitle text-[70px] md:text-[100px] lg:text-[150px] font-megrim font-extrabold relative left-[20%] sm:left-[35%]">WYGLAD</h1></div>
        </div>
        <div className="min-h-screen bg-black py-8 products">
                <h1 className="font-megrim text-[#acacac] text-5xl lg:text-7xl xl:text-8xl  ml-[10%] productsTitle">NAJNOWSZE</h1>
                <h1 className="font-megrim text-white text-5xl lg:text-7xl xl:text-8xl  ml-[30%] productsTitle"> PRODUKTY</h1>
                {/* <h1 className="font-megrim text-[#555555] text-3xl sm:text-5xl lg:text-7xl xl:text-8xl  ml-[5%] productsTitle">NAJNOWSZE PRODUKTY</h1> */}
               <NewProducts/>
        </div>

       </div>
    )
}

export default Header