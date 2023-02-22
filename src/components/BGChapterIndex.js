import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundForward } from 'react-icons/io'

function BGChapterIndex( {data, chapter } ) {
  return (
    <div className='flex flex-col items-center px-[25px] py-[20px] h-full border border-rose-200 bg-yellow-200 rounded-xl shadow-slate-200 shadow-xl'>
        <h1 className='text-center mb-5 font-semibold text-gray-900 text-3xl '>{chapter}</h1>
        <div className='flex-1 w-[85%] justify-center items-center mt-9'>
            {data.map( (item, i) => {
                return (<Link to={item}>
                            <span className='inline-block px-2 py-[5px] mx-2 my-1 font-mplus font-medium text-emerald-900 bg-emerald-300 border border-emerald-500 rounded-lg text-xl' key={i}>{item.split('/').pop().split('-').join(' ').toUpperCase()} </span>
                        </Link>)
                
            })}

        </div>
    </div>
  )
}

export default BGChapterIndex