import React, { useEffect }  from 'react'
import { Link } from 'react-router-dom'

function BGSideBar( { chapterClick, setChapterClick } ) {

  const path = window.location.pathname.split('/')
  const ButtonActive = path[path.length-1]
  console.log(ButtonActive)

  
  const handleSideMenu = ( chapterClick ) => {
    if (chapterClick) {
      setChapterClick(false)
    }
    else{
      setChapterClick(true)
    }
}
  return (
    <div className='bg-yellow-100 rounded-xl text-center px-5 h-full shadow-slate-100 shadow-lg overflow-y-auto py-2'>
      
      <div className='sticky top-1 my-1 py-1 px-2 bg-orange-300 rounded-lg border-4 border-rose-300'>
        <p className='text-lg font-semibold text-gray-800'> Bhagabad Gita </p>
      </div>

      <div className='flex flex-col space-y-2'>
        <Link  to={'/Visual-Gita/intro'}>
          <p onClick={() => handleSideMenu(chapterClick)} 
          className={`border border-orange-400 py-1 my-[3px] ${ ButtonActive === "intro" ? 'bg-orange-300' : 'bg-orange-200'} rounded-lg cursor-pointer`}>
            Intro
          </p>
        </Link>

        <Link  to={'/Visual-Gita/one'}>
          <p className='border border-orange-400 py-1 my-[3px] bg-orange-200 rounded-lg cursor-pointer'>Chpater: 1</p>
        </Link>

        <p className='border border-orange-400 py-1 my-[3px] bg-orange-200 rounded-lg cursor-pointer'>Chpater: 2</p>
        <p className='border border-orange-400 py-1 my-[3px] bg-orange-200 rounded-lg cursor-pointer'>Chpater: 3</p>
        <p className='border border-orange-400 py-1 my-[3px] bg-orange-200 rounded-lg cursor-pointer'>Chpater: 4</p>
        <p className='border border-orange-400 py-1 my-[3px] bg-orange-200 rounded-lg cursor-pointer'>Chpater: 5</p>
        <p className='border border-orange-400 py-1 my-[3px] bg-orange-200 rounded-lg cursor-pointer'>Chpater: 6</p>
        <p className='border border-orange-400 py-1 my-[3px] bg-orange-200 rounded-lg cursor-pointer'>Chpater: 7</p>
        <p className='border border-orange-400 py-1 my-[3px] bg-orange-200 rounded-lg cursor-pointer'>Chpater: 8</p>
        <p className='border border-orange-400 py-1 my-[3px] bg-orange-200 rounded-lg cursor-pointer'>Chpater: 9</p>
        <p className='border border-orange-400 py-1 my-[3px] bg-orange-200 rounded-lg cursor-pointer'>Chpater: 10</p>
        <p className='border border-orange-400 py-1 my-[3px] bg-orange-200 rounded-lg cursor-pointer'>Chpater: 11</p>
        <p className='border border-orange-400 py-1 my-[3px] bg-orange-200 rounded-lg cursor-pointer'>Chpater: 12</p>
        <p className='border border-orange-400 py-1 my-[3px] bg-orange-200 rounded-lg cursor-pointer'>Chpater: 13</p>
        <p className='border border-orange-400 py-1 my-[3px] bg-orange-200 rounded-lg cursor-pointer'>Chpater: 14</p>
        <p className='border border-orange-400 py-1 my-[3px] bg-orange-200 rounded-lg cursor-pointer'>Chpater: 15</p>
        <p className='border border-orange-400 py-1 my-[3px] bg-orange-200 rounded-lg cursor-pointer'>Chpater: 16</p>
        <p className='border border-orange-400 py-1 my-[3px] bg-orange-200 rounded-lg cursor-pointer'>Chpater: 17</p>
        <p className='border border-orange-400 py-1 my-[3px] bg-orange-200 rounded-lg cursor-pointer'>Chpater: 18</p>
      </div>
        
    </div>
  )
}

export default BGSideBar