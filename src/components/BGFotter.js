import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

function BGFotter( { previousPage, nextPage, setNFButtonClick } ) {

  return (

    <div className='bg-yellow-100 h-full flex justify-around items-center rounded-xl shadow-slate-100 shadow-lg p-5'>
        <Link to={previousPage}>
          <button onClick={() => setNFButtonClick(true)} className='border-yellow-400 active:ring-4 ring-yellow-600 px-3 py-1 border-2 bg-yellow-300 rounded-full text-lg font-medium hover:bg-yellow-500'>
            Previous
          </button>
        </Link>

        <h1 className='text-center text=2xl font-bold  border-l-4 border-r-4 px-5 border-yellow-300'> Jai Jaipataka Swami</h1>

        <Link to={nextPage}>
          <button onClick={() => setNFButtonClick(true)} className='border-yellow-400 active:ring-4 ring-yellow-600 px-3 py-1 border-2 bg-yellow-300 rounded-full text-lg font-medium hover:bg-yellow-500'>
            Next
          </button>
        </Link>
    </div>
  )
}

export default BGFotter