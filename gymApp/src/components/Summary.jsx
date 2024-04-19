import React from 'react'
import SummaryBar from './SummaryBar'

const Summary = () => {
  return (
    <div className=' w-[96%] mx-auto  bg-[#d36f31] p-6 mb-[2%] rounded-3xl'>
        <h1 className=' text-6xl font-[600] text-black'>Podsumowanie</h1>
        <div className='grid xl:grid-cols-2 gap-8'>
            <div className='mx-auto'>
                    <div className='sticky top-5'>
                        <SummaryBar/>
                    </div>
            </div>

            <div className=' bg-[#090909] w-full rounded-3xl text-[silver] p-8'>
                    <p className=' text-3xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat accusantium culpa sit illo laudantium autem pariatur dicta exercitationem reiciendis a.</p>
            </div>
        </div>
    </div>
  )
}

export default Summary