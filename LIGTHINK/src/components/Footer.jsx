import React from "react";
import logo from "../../public/lgthnklight.png"
import {FiInstagram} from 'react-icons/fi'
import {FaFacebook, FaTwitter} from 'react-icons/fa'
import {BsTelephoneFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import { Link } from "react-router-dom";

const Footer =()=>{

    const categoryLinks = [
        {
            name: 'bluzy',
            menLink: '/men',
            womenLink: '/women'
        },
        {
            name: 'koszulki',
            menLink: '/men',
            womenLink: '/women'
        },
        {
            name: 'dresy',
            menLink: '/men',
            womenLink: '/women'
        },
    ]

    const helpLinks =[
        {
            name: 'Uzyskaj pomoc'
        },
        {
            name: 'Wysyłka i dostawa'
        },
        {
            name: 'Zwroty'
        },
    ]

    const brandLinks =[
        {
            name: 'Informacje o LGTHNK'
        },
        {
            name: 'Polityka prywatności'
        },
        {
            name: 'Zasady dotyczące plików cookie'
        },
        {
            name: 'Warunki korzystania'
        }
    ]

    return(
        <div className="w-full bg-black">
            <div className=" w-full h-[6px] bg-gradient-to-r from-black to-gray-900"></div>
            <div className="rounded-b-3xl bg-black w-full">
                <div className="bg-black py-[100px] w-[80%] mx-auto md:grid-cols-[40%_60%] grid space-y-10 text-white justify-center">
                <div className=" mx-auto">

                <div className=" w-fit mb-6 mx-auto">
                            <img src={logo} className="w-[250px]"/>
                            {/* <div className=" w-[40%] h-[2px] bg-white mx-auto"></div> */}
                        </div>

                    <h1 className=" font-inter text-center text-xl mb-3 text-gray-600">SKONTAKTUJ SIĘ Z NAMI</h1>
                        <p className=" font-questrial text-xl flex "><AiOutlineMail className=" mt-1 mr-3"/> ligthink@gmail.com</p>
                        <p className=" font-questrial text-xl flex "> <BsTelephoneFill className=" mt-1 mr-3"/> 123 456 789</p>

                    <form className="space-y-3 mt-6">
                        <input type="e-mail" placeholder="E-MAIL" className=" text-md font-inter placeholder:text-[silver] w-full bg-transparent focus:outline-none border-[1px] border-gray-700 rounded-lg px-3 py-1"/><br />
                        <textarea name="" id="" cols="30" rows="3" placeholder="WIADOMOŚĆ" className=" text-md font-inter placeholder:text-[silver] w-full bg-transparent focus:outline-none border-[1px] border-gray-700 rounded-lg px-3 py-1"></textarea><br />
                        <div className="justify-center mx-auto text-center">
                            {/* <input type="submit" value="PRZEŚLIJ" className=""/> */}
                            <button className="bg-gray-900 px-4 py-2 font-inter border-2 border-gray-900 hover:bg-black transition-all duration-200">PRZEŚLIJ</button>
                            </div>
                    </form>
                    </div>


                    <div className=" w-[95%] mx-auto flex gap-10 flex-wrap relative md:top-[50%] md:translate-y-[-50%]">
                       
                       <div className=" mx-auto text-center">
                        <h1 className=" font-inter text-xl text-gray-600 font-[400]">Kobieta</h1>
                        {categoryLinks.map((link, i)=>{
                            return(
                                <Link to={link.womenLink}><p className="font-inter font-[200] my-1 hover:text-[silver] cursor-pointer">{link.name}</p></Link>
                            )
                        })}
                        </div>
                        <div className=" mx-auto text-center">
                        <h1 className=" font-inter text-xl text-gray-600 font-[400]">Mężczyzna</h1>
                        {categoryLinks.map((link, i)=>{
                            return(
                                <Link to={link.menLink}><p className="font-inter font-[200] my-1 hover:text-[silver] cursor-pointer">{link.name}</p></Link>
                            )
                        })}
                        </div>

                        <div className=" mx-auto text-center">
                        <h1 className=" font-inter text-xl text-gray-500">Centrum pomocy</h1>
                        {helpLinks.map((link, i)=>{
                            return(
                               <p className="font-inter font-[200] my-1 hover:text-[silver] cursor-pointer">{link.name}</p>
                            )
                        })}
                        </div>
                        <div className=" mx-auto text-center">
                        <h1 className=" font-inter text-xl text-gray-500">Firma</h1>
                        {brandLinks.map((link, i)=>{
                            return(
                                <p className="font-inter font-[200] my-1 hover:text-[silver] cursor-pointer">{link.name}</p>
                            )
                        })}
                        </div>
                    </div>

                </div>
            </div>

            <div className="text-center py-3 space-y-2 bg-gradient-to-t from-[#020203] to-black">
                    {/* <h1 className=" text-xl font-questrial text-[silver]">OBSERWUJ NAS</h1> */}
                    <div className="flex space-x-3 justify-center">
                        <FiInstagram className="text-2xl text-[silver] hover:text-gray-600 transition-all duration-200"/>
                        <FaFacebook className="text-2xl text-[silver] hover:text-gray-600 transition-all duration-200"/>
                        <FaTwitter className="text-2xl text-[silver] hover:text-gray-600 transition-all duration-200"/>
                    </div>
                    <p className="text-white"> © <span className=" font-inter font-[100] text-sm">LGTHNK 2023 designed by <a href="https://jakubkontekcv.onrender.com" className="text-gray-600 font-[800]">Jakub Kontek</a></span></p>
                </div>
        </div>
    )
}

export default Footer;