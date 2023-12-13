import React, { useState } from 'react'
import data from '../data.json'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'


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
        <div className=' overflow-y-scroll'>
            {data.length ===0 && (
                <h1 className=' text-5xl font-questrial mt-[20%]'>Twój koszyk jest pusty</h1>
            )}
            {data.map((product)=>{
                return(
                    <div key={product.id} className=' my-7 flex space-x-4'>
                        <img src={product.image} alt={product.title} className='w-[60px] aspect-square rounded-full'/>
                        <div>
                            <div  className=' flex space-x-4 relative top-[50%] translate-y-[-50%]'>
                                <h1 className='text-lg'>{product.title}</h1>
                                <p className=' text-lg'>{product.price*counter} zł</p>
                                        <div className="flex space-x-2 w-fit">
                                        <button className=" py-2 text-lg hover:bg-gray-100" onClick={decrease}>
                                            <AiOutlineMinus />
                                        </button>
                                        <div className="py-2 text-lg min-w-[30px] text-center">{counter}</div>
                                        <button className=" py-2 text-lg hover:bg-gray-100" onClick={increase}>
                                            <AiOutlinePlus />
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
}

export default ProductsInBag