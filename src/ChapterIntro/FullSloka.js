import React from 'react'

function FullSloka( { data }) {
  return (
    <div className='flex flex-col justify-center items-center h-full  border border-rose-200 bg-[#FFEFD5] rounded-xl overflow-y-auto '>
      <div className='flex flex-col items-center justify-center w-[80%]'>
        <h1 className='text-center mb-5 font-semibold text-gray-900 text-3xl '>{data.title}</h1>
        <div className='p-4 bg-rose-100 border-l-2 border-r-2  border-red-300 '>
        {data.sloka.map( (line, i) => {
          return  <p key={i} className='text-center leading-relaxed font-medium text-gray-800 text-lg lg:text-2xl py-1 '>{line}</p>
        })}
        </div>
      </div>
    </div>
  )
}

export default FullSloka