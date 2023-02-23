import React from 'react'
import { GrConnect, GrLinkUp } from 'react-icons/gr'
import { IoMdCheckmarkCircleOutline, IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import { BsArrowBarDown, BsChevronDoubleDown, BsChevronDoubleRight } from 'react-icons/bs'

function GitaShort() {

  return (
    <div className='flex flex-col lg:flex-row lg:justify-center items-center w-full h-full py-5  border border-rose-200 bg-[#FFEFD5] rounded-xl overflow-y-auto '>
        <div className=' w-[90%] lg:w-[35%] lg:h-[90%] flex flex-col justify-center items-center'>
            <h1 className='py-[20px] font-semibold text-gray-800 unde text-5xl'>Yoga</h1>
            <BsArrowBarDown size={50} className='mb-5'/>
            <div className="flex ">
                <ul className="space-y-3">
                    <li className="px-3 py-2 bg-green-300 rounded-full border border-green-500 text-md text-gray-900"> <GrConnect size='23' className='inline-block pr-1'/> To Connect with God and Devotees</li>
                    <li className="px-3 py-2 bg-rose-300 rounded-full border border-rose-500 text-md text-gray-900"> <GrLinkUp size='23' className='inline-block pr-1'/> To Linkup with Higher Consciousness</li>
                    <li className="px-3 py-2 bg-blue-300 rounded-full border border-blue-500 text-md text-gray-900"> <IoMdCheckmarkCircleOutline size='23' className='inline-block pr-1'/> To be Honest or True to Oneself</li>
                </ul>
            </div>
        </div>
        <div className='pt-9 w-[90%] lg:w-[65%] '>
            <h1 className='text-center pb-[35px] font-semibold text-gray-900  text-2xl lg:text-3xl'> The Love Message of Gita in the Middle</h1>
            <div className='flex flex-col lg:flex-row justify-center lg:items-baseline lg:space-x-2'>
                <div className='flex lg:flex-col items-center lg:space-y-9'>
                    <p className='px-4 py-2 lg:px-[30px] lg:py-[25px] bg-emerald-300 border border-emerald-500 rounded-lg text-xl'>Work</p>
                    <BsChevronDoubleDown size={30} className='hidden lg:block font-bold text-gray-800'/>
                    <BsChevronDoubleRight className='lg:hidden font-bold text-2xl lg:text-3xl mx-5 lg:mx-0 text-gray-800'/>
                    <p className='lg:text-lg text-gray-800 text-center'>Chapter 1 to 6<br/> KARMA YOGA</p>
                </div>
                <IoIosArrowRoundForward size={35} className='ml-5 lg:ml-0 rotate-90 lg:rotate-0 text-gray-800 '/>
                <div className='flex lg:flex-col items-center lg:space-y-9'>
                    <p className="px-2 py-1 lg:px-[30px] lg:py-[25px] bg-rose-300 border border-rose-500 rounded-lg text-xl">Loving Devotion</p>
                    <BsChevronDoubleDown size={30} className='hidden lg:block font-bold text-gray-800' />
                    <BsChevronDoubleRight className='lg:hidden font-bold text-2xl lg:text-3xl mx-5 lg:mx-0 text-gray-800'/>
                    <p className='lg:text-lg text-gray-800 text-center'>Chapter 7 to 12 <br/> BHAKTI YOGA</p>
                </div>
                <IoIosArrowRoundBack size='35' className='ml-5 lg:ml-0 rotate-90 lg:rotate-0 text-gray-800' />
                <div className='flex lg:flex-col items-center lg:space-y-9'>
                    <p className='px-4 py-2 lg:px-[30px] lg:py-[25px] bg-blue-300 border border-blue-500 rounded-lg text-xl'>Knoweldge</p>
                    <BsChevronDoubleDown size={30} className='hidden lg:block font-bold text-gray-800' />
                    <BsChevronDoubleRight className='lg:hidden font-bold text-2xl lg:text-3xl mx-5 lg:mx-0 text-gray-800'/>
                    <p className='lg:text-lg text-gray-800 text-center'>Chapter 1 to 6<br/> GYAN YOGA</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GitaShort