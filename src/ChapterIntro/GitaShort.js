import React from 'react'
import { GrConnect, GrLinkUp } from 'react-icons/gr'
import { IoMdCheckmarkCircleOutline, IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import { BsArrowBarDown, BsChevronDoubleDown } from 'react-icons/bs'

function GitaShort() {

  return (
    <div className='flex justify-center items-center w-full h-full border border-rose-200 bg-yellow-200 rounded-xl '>
        <div className='w-[35%] h-[90%] flex flex-col  justify-center items-center'>
            <h1 className='pb-[25px] font-semibold text-gray-800 underline underline-offset-[10px] decoration-wavy text-5xl'>Yoga</h1>
            <BsArrowBarDown size={50} className='mb-5'/>
            <div className="flex ">
                <ul className="space-y-3">
                    <li className="px-3 py-2 bg-green-300 rounded-full border border-green-500 text-md text-gray-900"> <GrConnect size='23' className='inline-block pr-1'/> To Connect with God and Devotees</li>
                    <li className="px-3 py-2 bg-rose-300 rounded-full border border-rose-500 text-md text-gray-900"> <GrLinkUp size='23' className='inline-block pr-1'/> To Linkup with Higher Consciousness</li>
                    <li className="px-3 py-2 bg-blue-300 rounded-full border border-blue-500 text-md text-gray-900"> <IoMdCheckmarkCircleOutline size='23' className='inline-block pr-1'/> To be Honest or True to Oneself</li>
                </ul>
            </div>
        </div>
        <div className='w-[65%] '>
                <h1 className='text-center pb-[35px] font-semibold text-gray-900  text-3xl'> The Love Message of Gita in the Middle</h1>
            <div className='flex justify-center items-baseline space-x-2'>
                <div className='flex flex-col items-center space-y-9'>
                    <p className='px-[30px] py-[25px] bg-emerald-300 border border-emerald-500 rounded-lg text-xl'>Work</p>
                    <BsChevronDoubleDown size={30} className='font-bold text-gray-800'/>
                    <p className='text-lg text-gray-800 text-center'>Chapter 1 to 6<br/> KARMA YOGA</p>
                </div>
                <IoIosArrowRoundForward size={35} className='text-gray-800 '/>
                <div className='flex flex-col items-center space-y-9'>
                    <p className="px-[30px] py-[25px] bg-rose-300 border border-rose-500 rounded-lg text-xl">Loving Devotion</p>
                    <BsChevronDoubleDown size={30} className='font-bold text-gray-800' />
                    <p className='text-lg text-gray-800 text-center'>Chapter 7 to 12 <br/> BHAKTI YOGA</p>
                </div>
                <IoIosArrowRoundBack size='35' className='text-gray-800' />
                <div className='flex flex-col items-center space-y-9'>
                    <p className='px-[30px] py-[25px] bg-blue-300 border border-blue-500 rounded-lg text-xl'>Knoweldge</p>
                    <BsChevronDoubleDown size={30} className='font-bold text-gray-800' />
                    <p className='text-lg text-gray-800 text-center'>Chapter 1 to 6<br/> GYAN YOGA</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GitaShort