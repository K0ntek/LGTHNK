import React, {useEffect} from 'react';
import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Link, useParams } from "react-router-dom";
import data from '../data.json'
import addToBag from '../App';
import Carousel from 'react-multi-carousel';

const Product = () => {
	
	useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])

	  const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1124 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1124, min: 714 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 714, min: 0 },
          items: 1
        }
      };

	const sizes = [
		{
			size: 'xs',
			id: 0,
		},
		{
			size: 's',
			id: 1,
		},
		{
			size: 'm',
			id: 2,
		},
		{
			size: 'l',
			id: 3,
		},
		{
			size: 'xl',
			id: 4,
		},
		{
			size: 'xxl',
			id: 5,
		},
	];

	const sizeTable =[
		{
			size: 'ROZMIAR',
            width : 'SZEROKOSC',
            length : 'DLUGOSC',
			arm: "REKAW"
        },
		{
			size: 'xs',
            width : '62.5',
            length : '66',
			arm: "60"
        },
		{
			size: 's',
            width : '64.5',
            length : '67',
			arm: "61"
        },
		{
			size: 'm',
            width : '66.5',
            length : '68.5',
			arm: "62"
        },
        {
			size: 'l',
            width : '68.5',
            length : '71.5',
			arm: "63.5"
        },
        {
			size: 'xl',
            width : '70.5',
            length : '72.5',
			arm: "64.5"
        },
    ]

	const delivery=[
		{
			deliveryElement : 'Szybka Wysyłka'
		},

		{
			deliveryElement : 'Bezpieczne Opakowanie'
		},

		{
			deliveryElement : 'Opcje Dostawy'
		},

		{
			deliveryElement : 'Gwarancja Zadowolenia'
		},
	]


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

   	const { id } = useParams();
	const [product, setProduct] = useState();
	useEffect(() => {
		setProduct(data.find((product) => product.id === parseInt(id)));
	}, [])

	return (
		<div className=" w-full min-h-screen mt-[100px]">
			{product && (
				<div>
				<div className="grid lg:grid-cols-2 w-[80%] mx-auto">
				<div>
				<Carousel 
                    responsive={responsive}
                    // showDots={true}
                    swipeable={true}
                    draggable={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    >
						{product["images"].map((element)=>{
							return(
								<img src={element.imageElement} alt='productImage' className=' rounded-xl w-full px-1'/>
							)
						})}
                    </Carousel>
					{/* <img src={product.image} alt='productImage' className=' rounded-xl w-full'/> */}
				</div>

			<div>
				<div className=" relative top-[10%] ml-[10%]">
					<h1 className=" font-gruppo text-4xl">{product.title}</h1>
					<p className=" ml-4 font-gruppo text-3xl">{product.price * counter} zł</p>

					<div className=" mt-6">
						<p className="font-megrim font-bold text-xl ml-3">LICZBA SZTUK</p>
						<div className="flex space-x-2 border-[1px] w-fit border-black">
							<button className=" px-6 py-2 text-lg hover:bg-gray-100" onClick={decrease}>
								<AiOutlineMinus />
							</button>
							<div className="py-2 text-lg min-w-[30px] text-center">{counter}</div>
							<button className=" px-6 py-2 text-lg hover:bg-gray-100" onClick={increase}>
								<AiOutlinePlus />
							</button>
						</div>
					</div>

					<div className="my-6">
						<h1 className=" font-megrim font-bold text-xl ml-3">ROZMIAR</h1>
						<div className=" flex space-x-3">
							{sizes.map((element) => {
								return (
									<div key={element.id} className={``}>
										<div
											className={`${
												activeSize == element.id ? 'activeSize' : ''
											} size  w-[40px] border-2 border-[silver] text-center cursor-pointer hover:border-black`}
											onClick={() => changeActiveSize(element.id)}>
											<button className={`font-megrim font-extrabold text-center`}>
												{element.size}
											</button>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					<div className=" flex space-x-8 mb-12">
						<button className=" border-2 border-[#58321b] px-4 py-2 hover:rounded-2xl transition-all duration-100" onclick={addToBag}>
							DO KOSZYKA
						</button>
						<button className=" border-2 border-[#58321b] bg-[#58321b] text-white px-4 py-2 hover:rounded-2xl transition-all duration-100">
							KUP TERAZ
						</button>
					</div>
				</div>
			</div>
		</div>


		<div className="w-full min-h-fit bg-[#000000] mt-[10%] relative">
			<div className="md:w-[70%] bg-gradient-to-b from-[#010101] to-black shadow-[0px_0px_20px_0px] shadow-white rounded-3xl h-fit relative md:left-[15%] md:top-[-80px] sm:top-[-50px] top-[-30px]">

				<div className="relative w-full">
				<div className=' w-fit mx-auto rounded-full'>
					<h1 className=' text-5xl font-megrim text-white text-center py-3'>O PRODUKCIE</h1>
				</div>
				</div>

				<div className='mt-8'>
					<h1 className=' font-megrim text-white text-3xl my-5 ml-[10%]'>TABELA ROZMIAROW</h1>
					{/* {sizeTable.map((element, i)=>{ */}
						{/* return( */}
							<div className='grid grid-cols-4 text-white text-center mx-auto w-[95%]'>
								
								<div className='bg-[#030303]'>
								{sizeTable.map((element, i)=>{
									return(
									<>
										{i==0&&(
												<p className=' font-megrim text-lg md:text-2xl bg-[#030201]'>{element.size}</p>
										)}
										{(i!=0 &&i%2==0)&&(
												<p className='md:text-xl bg-black'>{element.size}</p>
										)}
										{(i!=0 &&i%2!=0)&&(
												<p className='md:text-xl bg-[#090909]'>{element.size}</p>
										)}
									</>
									)
								})}
								</div>

								<div className='bg-[#000]'>
								{sizeTable.map((element, i)=>{
									return(
									<>
										{i==0&&(
												<p className=' font-megrim text-lg md:text-2xl bg-[#030201]'>{element.width}</p>
										)}
										{(i!=0 &&i%2==0)&&(
												<p className='md:text-xl bg-black'>{element.width}</p>
										)}
										{(i!=0 &&i%2!=0)&&(
												<p className='md:text-xl bg-[#090909]'>{element.width}</p>
										)}
									</>
									)
								})}
								</div>

								<div className='bg-[#030303]'>
								{sizeTable.map((element, i)=>{
									return(
									<>
										{i==0&&(
												<p className=' font-megrim text-lg md:text-2xl bg-[#030201]'>{element.length}</p>
										)}
										{(i!=0 &&i%2==0)&&(
												<p className='md:text-xl bg-black'>{element.length}</p>
										)}
										{(i!=0 &&i%2!=0)&&(
												<p className='md:text-xl bg-[#090909]'>{element.length}</p>
										)}
									</>
									)
								})}
								</div>

								<div className='bg-[#000]'>
								{sizeTable.map((element, i)=>{
									return(
									<>
										{i==0&&(
												<p className=' font-megrim text-lg md:text-2xl bg-[#030201]'>{element.arm}</p>
										)}
										{(i!=0 &&i%2==0)&&(
												<p className='md:text-xl bg-black'>{element.arm}</p>
										)}
										{(i!=0 &&i%2!=0)&&(
												<p className='md:text-xl bg-[#090909]'>{element.arm}</p>
										)}
									</>
									)
								})}
								</div>
							</div>
						{/* ) */}
					{/* })} */}
				</div>

				<div className="grid lg:grid-cols-2 text-white w-[100%] mx-auto gap-5 mt-8 relative lg:top-[20px] ">
						<div className='w-[95%] mx-auto p-6 bg-white text-black rounded-3xl z-[5]'>
							<h1 className=' text-3xl font-megrim ml-[10%] font-bold'>SKLAD</h1>
							<div className="font-questrial">
									<div>
									<p className=' mt-4 text-2xl'>MATERIAŁ:</p>
										{product["composition "].map((element, i)=>{
											return(
												<li className='ml-5 text-xl'>{element.compositionElement}</li>
											)
										})}
									</div>

									<div>
									</div>
							</div>
						</div>
						<div className='w-[95%] mx-auto p-6 bg-[#051109] rounded-3xl relative md:left-[50px] lg:left-0 lg:top-[50%] z-[5]'>
							<h1 className=' text-3xl font-megrim ml-[10%]'>O PRODUKCIE</h1>
							<p className='text-justify mt-4 font-questrial text-xl' >{product.description}</p>
						</div>

						<div className='w-[95%] mx-auto p-6 bg-[#030303] md:shadow-[-20px_20px_37px_-26px] md:shadow-white rounded-3xl relative md:left-[-40px] z-[5]'>
							<h1 className=' text-3xl font-megrim ml-[10%]'>DOSTAWA</h1>
								<div className=" font-questrial text-xl">
									<p className='text-justify mt-4'>Dbamy o to, aby Twoja bluza dotarła do Ciebie szybko, bezpiecznie i z pełnym zadowoleniem. Oto szczegóły dotyczące dostawy:</p>
										{delivery.map((element)=>{
											return(
												<li className='ml-6'>{element.deliveryElement}</li>
											)
										})}
								</div>
						</div>
					</div>

					{/* <p className='text-[#090909] font-megrim text-3xl absolute top-0 z-[1] animatedBackgroundText hidden lg:block'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid accusantium recusandae ratione incidunt doloribus quam ex illum unde modi dignissimos fugit qui hic doloremque cumque necessitatibus esse quasi iusto placeat assumenda ab, saepe illo? Sunt adipisci consequatur excepturi voluptatibus magnam. Sit, cumque. Odio, officiis! Quis ullam officiis nam, dolores vero omnis aspernatur? Sit qui dicta eius at soluta, dignissimos eveniet accusamus cumque possimus eum iusto molestias earum delectus unde saepe laboriosam, tempora error officia nulla minima sint obcaecati dolor. Nam sed aliquid culpa tempora incidunt deleniti consectetur, repellat obcaecati. Quod iusto, in, recusandae cum cumque error voluptas nesciunt quam ut consequuntur corrupti libero, a quia aliquid fugit! Iste ab perferendis vero sequi delectus officiis dolor tenetur porro expedita? Quas provident reprehenderit atque! Illum, blanditiis? Eum quia reprehenderit quisquam nulla. Pariatur laborum fugit illo sint similique exercitationem tenetur nesciunt! Enim, unde a facere corrupti sequi perspiciatis dolorem eaque non sed explicabo, aut nam earum nobis nostrum labore dolorum? Dicta, facere temporibus dolorum minus iusto expedita amet molestiae nesciunt eaque quam, doloribus pariatur sit? Praesentium impedit quaerat, in illum corporis repellendus nam sed voluptas consectetur autem deleniti.</p>
					<p className='text-[#090909] font-megrim text-3xl absolute top-0 z-[1] animatedBackgroundText lg:hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dignissimos delectus sequi voluptates beatae tempora itaque sunt nemo laudantium aperiam soluta, maxime veritatis obcaecati porro rerum distinctio, consequatur repellendus voluptas labore? Minus debitis tempore corporis quasi, iste in placeat. Facilis nostrum amet, porro omnis odit, totam velit officiis iure quidem beatae aperiam. Nesciunt facilis ratione rerum, obcaecati repudiandae debitis ipsam velit maiores, enim odit praesentium ex modi esse tempora ad nulla nostrum molestias nam? Doloribus beatae totam alias consequuntur molestiae architecto ad quo minima exercitationem vero, dolorum inventore culpa omnis dolore cum harum asperiores iste! Velit fugit quod ullam in?</p> */}
			</div>
		</div>
			</div>
			)}
		</div>
	);
};

export default Product;
