import React from 'react'
import ProductsInBag from './ProductsInBag'

const Summary = () => {
  return (
    <div className=' min-h-screen pt-[200px]'>
        <div className="grid grid-cols-2">
          <div className='w-[80%] mx-auto'>
            <ProductsInBag />
          </div>

          <div className='w-[60%]'>
            <form>
              <div className=' space-y-10'>
                  <div className="grid grid-cols-2">
                        <div className="formWrapper flex space-x-5 justify-center relative w-[96%] mx-auto">
                          <input required='required' type="text" name="mail" className="relative bg-transparent border-b-[1px] border-black w-full focus:outline-none focus:border-[#5a402f] text-xl font-questrial "/>
                          <span className=" absolute left-[10px] bottom-1 font-megrim font-bold text-black text-md">IMIE</span>
                        <i></i>
                        </div>

                        <div className="formWrapper flex space-x-5 justify-center relative w-[96%] mx-auto">
                            <input required='required' type="text" name="mail" className="relative bg-transparent border-b-[1px] border-black w-full focus:outline-none focus:border-[#5a402f] text-xl font-questrial "/>
                            <span className=" absolute left-[10px] bottom-1 font-megrim font-bold text-black text-md">NAZWISKO</span>
                        <i></i>
                        </div>
                  </div>

                    <div className="formWrapper flex space-x-5 justify-center relative w-[98%] mx-auto">
                          <input required='required' type="text" name="mail" className="relative bg-transparent border-b-[1px] border-black w-full focus:outline-none focus:border-[#5a402f] text-xl font-questrial "/>
                          <span className=" absolute left-[10px] bottom-1 font-megrim font-bold text-black text-md">ADRES</span>
                      <i></i>
                    </div>


                    <div className="grid grid-cols-2">
                        <div className="formWrapper flex space-x-5 justify-center relative w-[96%] mx-auto">
                          <input required='required' type="text" name="mail" className="relative bg-transparent border-b-[1px] border-black w-full focus:outline-none focus:border-[#5a402f] text-xl font-questrial "/>
                          <span className=" absolute left-[10px] bottom-1 font-megrim font-bold text-black text-md">KOD POCZTOWY</span>
                        <i></i>
                        </div>

                        <div className="formWrapper flex space-x-5 justify-center relative w-[96%] mx-auto">
                            <input required='required' type="text" name="mail" className="relative bg-transparent border-b-[1px] border-black w-full focus:outline-none focus:border-[#5a402f] text-xl font-questrial "/>
                            <span className=" absolute left-[10px] bottom-1 font-megrim font-bold text-black text-md">MIEJSCOWOSC</span>
                        <i></i>
                        </div>
                  </div>

                  <div className="grid grid-cols-2">
                        <div className="formWrapper flex space-x-5 justify-center relative w-[96%] mx-auto">
                          <input required='required' type='email' name="mail" className="relative bg-transparent border-b-[1px] border-black w-full focus:outline-none focus:border-[#5a402f] text-xl font-questrial "/>
                          <span className=" absolute left-[10px] bottom-1 font-megrim font-bold text-black text-md">E-MAIL</span>
                        <i></i>
                        </div>

                        <div className="formWrapper flex space-x-5 justify-center relative w-[96%] mx-auto">
                            <input required='required' type="text" name="mail" className="relative bg-transparent border-b-[1px] border-black w-full focus:outline-none focus:border-[#5a402f] text-xl font-questrial "/>
                            <span className=" absolute left-[10px] bottom-1 font-megrim font-bold text-black text-md">NUMER TELEFONU</span>
                        <i></i>
                        </div>
                  </div>

                  <button className=' font-questrial bg-gray-800 text-white px-6 py-2 hover:rounded-xl transition-all duration-150'>KONTYNUUJ</button>
              </div>
            </form>
          </div>

        </div>
    </div>
  )
}

export default Summary