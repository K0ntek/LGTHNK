import React, { useState } from 'react'
import data from '../data.json'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io';
import { formatCurrency } from "../utilities/formatCurrency"


const ProductsInBag = () => {

    const [counter, setCounter] = useState(1);
	const [activeSize, setActiveSize] = useState(-1);
	const changeActiveSize = (id) => {
		setActiveSize(id === activeSize ? -1 : id);
	};

    const increase = () => {
		setCounter((prev) => prev + 1);
		if (counter >= 20) {
			setCounter(20);
		}
	};

	const decrease = () => {
		setCounter((prev) => prev - 1);
		if (counter <= 1) {
			setCounter(1);
		}
	};
    return(
        <div className=''>
             {/* {( CartItems.reduce((total, cartItem) => {
                const item = data.find(i => i.id === cartItem.id)
                return total + (item?.price || 0)
              }, 0))} */}

            {data.map((product)=>{
                return(
                    <div className="w-full">
                        <div key={product.id} className=' my-7 flex space-x-4 relative'>
                        <IoMdClose className="absolute right-2 top-[50%] translate-y-[-50%] hover:text-red-600" />
                        <img src={product.image} alt={product.title} className='w-[60px] h-[60px] aspect-[1/1] rounded-full'/>
                        <div>
                            <div  className=' relative top-[50%] translate-y-[-50%]'>
                                <div className="flex space-x-4">
                                <h1 className='text-lg'>{product.title}</h1>
                                <p className=' text-lg'>{product.price*counter} zł</p>
                                </div>
                                <div className='flex space-x-4'>
                                    <p className='text-lg'> rozmiar: M</p>
                                    <p className='text-lg'> kolor: zielony</p>
                                </div>
                                {/* <div className="flex space-x-2 w-fit">
                                        <button className=" py-2 text-lg hover:bg-gray-100" onClick={decrease}>
                                            <AiOutlineMinus />
                                        </button>
                                        <div className="py-2 text-lg min-w-[30px] text-center">{counter}</div>
                                        <button className=" py-2 text-lg hover:bg-gray-100" onClick={increase}>
                                            <AiOutlinePlus />
                                        </button>
                                    </div> */}
                            </div>
                        </div>
                        </div>

                        <div className="w-2/5 h-[1px] bg-[#ceb423] rounded-full mx-auto"></div>
                    </div>
                )
            })}
            
        </div>
    )
}

export default ProductsInBag