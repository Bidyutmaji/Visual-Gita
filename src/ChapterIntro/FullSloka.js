import React from 'react'

function FullSloka( { data }) {
  return (
    <div className='flex flex-col lg:flex-row h-full py-5 px-2 border border-rose-200 bg-[#FFEFD5] rounded-xl overflow-y-auto '>
      <div className='flex flex-col items-center justify-start w-[80%]'>
        <h1 className='text-center mb-5 font-normal text-gray-900 text-3xl '>{data.title}</h1>
        <div className='p-4 bg-rose-50  border-l-2 border-r-2  border-red-300'>
        {data.sloka.map( (line, i) => {
          return  <p key={i} className='text-center leading-relaxed font-normal text-gray-800 text-lg py-1 '>{line}</p>
        })}
        </div>
      </div>
      {/* <div className='border border-rose-300 rotate-45'></div> */}
      <div className='flex flex-col items-center justify-end w-[80%]'>
        <h1 className='text-center mb-5 font-normal text-gray-900 text-3xl '>{data.textTitle}</h1>
        <div className='p-4 bg-rose-50 border-l-2 border-r-2  border-red-300'>
        {data.text.map( (line, i) => {
          return  <p key={i} className='text-center  font-normal text-gray-800 text-lg py-1 '>{line}</p>
        })}
        </div>
      </div>
    </div>
  )
}

export default FullSloka