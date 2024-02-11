import React from "react";
import logo from "../../public/lgthnklight.png"
import {FiInstagram} from 'react-icons/fi'
import {FaFacebook, FaTwitter} from 'react-icons/fa'
import {BsTelephoneFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

const Footer =()=>{
    return(
        <div className="w-full bg-black">
            <div className=" w-full h-[6px] bg-gradient-to-r from-black to-[#25160d]"></div>
            <div className="rounded-b-3xl bg-black w-full">
                <div className="bg-black py-[100px] w-[80%] mx-auto md:grid-cols-3 grid space-y-10 text-white justify-center">
                <div className=" mx-auto">
                    <h1 className=" font-questrial text-center text-2xl mb-3 text-gray-500">KONTAKT</h1>
                        <p className=" font-questrial text-xl flex "><AiOutlineMail className=" mt-1 mr-3"/> ligthink@gmail.com</p>
                        <p className=" font-questrial text-xl flex "> <BsTelephoneFill className=" mt-1 mr-3"/> 123 456 789</p>
                    </div>


                    <div>
                        <div className=" w-fit mb-6 mx-auto">
                            <img src={logo} className="w-[250px]"/>
                            <div className=" w-[40%] h-[2px] bg-white mx-auto"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2">
                        <div className=" mx-auto">
                        <h1 className=" font-questrial text-2xl text-gray-500">Kobieta</h1>
                        <p className=" text-xl font-gruppo hover:text-gray-400"> bluzy</p>
                        <p className=" text-xl font-gruppo hover:text-gray-400">koszulki</p>
                         <p className=" text-xl font-gruppo hover:text-gray-400">dresy</p>
                        </div>
                        <div className=" mx-auto">
                        <h1 className=" font-questrial text-2xl text-gray-500">Mężczyzna</h1>
                        <p className=" text-xl font-gruppo hover:text-gray-400"> bluzy</p>
                        <p className=" text-xl font-gruppo hover:text-gray-400">koszulki</p>
                         <p className=" text-xl font-gruppo hover:text-gray-400">dresy</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="text-center py-3 space-y-2 bg-gradient-to-t from-[#020101] to-black">
                    {/* <h1 className=" text-xl font-questrial text-[silver]">OBSERWUJ NAS</h1> */}
                    <div className="flex space-x-3 justify-center">
                        <FiInstagram className="text-2xl text-[silver] hover:text-gray-500 transition-all duration-200"/>
                        <FaFacebook className="text-2xl text-[silver] hover:text-gray-500 transition-all duration-200"/>
                        <FaTwitter className="text-2xl text-[silver] hover:text-gray-500 transition-all duration-200"/>
                    </div>
                    <p className="text-white"> © <span className=" font-gruppo">LGTHNK 2023</span></p>
                </div>
        </div>
    )
}

export default Footer;