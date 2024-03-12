import React from 'react'
import ProductsInBag from './ProductsInBag'

const Summary = () => {
  return (
    <div className=' h-fit pt-[100px]'>
      <div className=" grid lg:grid-cols-2">

        <div className='w-[90%] mx-auto py-7'>
          <h1 className=' font-inter text-5xl mb-7 text-center'>PODSUMOWANIE</h1>
          <h1 className='text-center text-xl mt-4'>DO ZAPŁATY: 1000PLN</h1>
          <div className=' mx-auto h-[400px] overflow-y-scroll '>
            <ProductsInBag />
          </div>
        </div>

        <div className='w-[60%] mx-auto py-7'>
          <form>
            <div className=' space-y-10'>
              <div className="grid grid-cols-2 gap-4">
                <div className="formWrapper flex space-x-5 justify-center relative h-fit mt-[30px]">
                  <div className="w-full overflow-hidden">
                    <input required='required' type="text" name="name" className=" px-7 relative bg-transparent border-[1px] p-2 rounded-lg border-black w-full focus:outline-none focus:border-[#5a402f] text-lg font-questrial " />
                    <span className=" absolute left-[5px] bottom-3 font-inter text-black text-[12px] bg-[#fff] px-2">IMIĘ</span>
                    <i></i>
                  </div>
                </div>

                <div className="formWrapper flex space-x-5 justify-center relative h-fit mt-[30px]">
                  <div className="w-full overflow-hidden">
                    <input required='required' type="text" name="name" className=" px-7 relative bg-transparent border-[1px] p-2 rounded-lg border-black w-full focus:outline-none focus:border-[#5a402f] text-lg font-questrial " />
                    <span className=" absolute left-[5px] bottom-3 font-inter text-black text-[12px] bg-[#fff] px-2">NAZWISKO</span>
                    <i></i>
                  </div>
                </div>
              </div>

              <div className="formWrapper flex space-x-5 justify-center relative h-fit mt-[30px]">
                <div className="w-full overflow-hidden">
                  <input required='required' type="text" name="name" className=" px-7 relative bg-transparent border-[1px] p-2 rounded-lg border-black w-full focus:outline-none focus:border-[#5a402f] text-lg font-questrial " />
                  <span className=" absolute left-[5px] bottom-3 font-inter text-black text-[12px] bg-[#fff] px-2">ADRES</span>
                  <i></i>
                </div>
              </div>


              <div className="grid grid-cols-2 gap-4">
                <div className="formWrapper flex space-x-5 justify-center relative h-fit ">
                  <div className="w-full overflow-hidden">
                    <input required='required' type="text" name="name" className=" px-7 relative bg-transparent border-[1px] p-2 rounded-lg border-black w-full focus:outline-none focus:border-[#5a402f] text-lg font-questrial " />
                    <span className=" absolute left-[5px] bottom-3 font-inter text-black text-[12px] bg-[#fff] px-2 whitespace-nowrap">KOD POCZTOWY</span>
                    <i></i>
                  </div>
                </div>

                <div className="formWrapper flex space-x-5 justify-center relative h-fit">
                  <div className="w-full overflow-hidden">
                    <input required='required' type="text" name="name" className=" px-7 relative bg-transparent border-[1px] p-2 rounded-lg border-black w-full focus:outline-none focus:border-[#5a402f] text-lg font-questrial " />
                    <span className=" absolute left-[5px] bottom-3 font-inter text-black text-[12px] bg-[#fff] px-2">MIEJSCOWOŚĆ</span>
                    <i></i>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="formWrapper flex space-x-5 justify-center relative h-fit">
                  <div className="w-full overflow-hidden">
                    <input required='required' type="mail" name="name" className=" px-7 relative bg-transparent border-[1px] p-2 rounded-lg border-black w-full focus:outline-none focus:border-[#5a402f] text-lg font-questrial " />
                    <span className=" absolute left-[5px] bottom-3 font-inter text-black text-[12px] bg-[#fff] px-2">E-MAIL</span>
                    <i></i>
                  </div>
                </div>

                <div className="formWrapper flex space-x-5 justify-center relative h-fit">
                  <div className="w-full overflow-hidden">
                    <input required='required' type="text" name="name" className=" px-7 relative bg-transparent border-[1px] p-2 rounded-lg border-black w-full focus:outline-none focus:border-[#5a402f] text-lg font-questrial " />
                    <span className=" absolute left-[10px] bottom-3 font-inter text-black text-[12px] bg-[#fff] px-2 whitespace-nowrap">NUMER TELEFONU</span>
                    <i></i>
                  </div>
                </div>
              </div>

              <div className="mx-auto w-fit"> <button className=' font-questrial bg-gray-800 text-white px-6 py-2 hover:rounded-xl transition-all duration-150'>KONTYNUUJ</button></div>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Summary