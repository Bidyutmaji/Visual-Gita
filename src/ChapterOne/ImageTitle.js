import React from 'react'

function ImageTitle( { data } ) {
    return (
        <div className='flex flex-col lg:flex-row items-center h-full border  border-rose-200 bg-[#FFEFD5] rounded-xl lg:divide-x-4 divide-red-400 shadow-slate-200 shadow-xl overflow-y-auto py-5'>
            
            <div className='w-[90%] lg:w-[15%] h-full flex justify-center items-center'>
                <p className={`text-center mb-5 font-semibold text-gray-900  ${data.titleTextSize} bg-orange-200 px-5 py-2 lg:-rotate-90 rounded-lg`}>{data.title}</p>
            </div>
            
            <div className='flex items-center justify-center lg:w-[85%] h-full'>
                <img className=' h-[95%] rounded-2xl shadow-lg shadow-[#FF7F50] border-2 border-red-400' src={data.image}/>
            </div>
        </div>
    )
}

export default ImageTitle