import React from 'react'

function BGChapterEnd( { data } ) {
  return (
    <div  className='flex flex-col justify-center items-center px-[25px] py-[20px] h-full border border-rose-200 bg-[#FFEFD5] rounded-xl shadow-slate-200 shadow-xl'>
        <h1 className='text-center lg:mb-9 mb-5 font-semibold text-gray-900 lg:text-5xl text-4xl'>{data.title}</h1>
        <p className=' w-4/5  text-center lg:text-xl text-gray-900'>{data.text}</p>
    </div>
  )
}

export default BGChapterEnd