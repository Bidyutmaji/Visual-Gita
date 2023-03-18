import React from 'react'
import { Link } from 'react-router-dom'
import { BiBookmarkHeart } from 'react-icons/bi'

function BGChapterIndex( {data, chapter } ) {
  return (
    <div className='flex flex-col items-center px-[25px] py-[20px] h-full border border-rose-200 bg-[#FFEFD5] rounded-xl shadow-slate-200 shadow-xl overflow-y-auto'>
        <h1 className='text-center font-semibold text-gray-900 text-2xl lg:text-3xl'>{chapter}</h1>
        <div className='flex-1 w-[85%] justify-center items-center mt-9'>
            {data.map( (item, i) => {
                return (<Link to={item} key={i}>
                            <span className='lg:inline-block block text-center px-2 py-[5px] mx-2 my-1 font-mplus lg:font-medium font-normal text-green-800 bg-green-200 border border-emerald-400 rounded-lg lg:text-xl' key={i}>
                                <BiBookmarkHeart className='inline-block mr-2 text-rose-800'/>
                                {item.split('/').pop().split('-').join(' ').toUpperCase()} 
                            </span>
                        </Link>)
            })}

        </div>
    </div>
  )
}

export default BGChapterIndex