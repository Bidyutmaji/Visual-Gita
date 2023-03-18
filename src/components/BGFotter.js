import React, { useState, useEffect, useLayoutEffect } from 'react'
import {Link, useLocation } from 'react-router-dom'
import routes from '../Route'

function BGFotter( { } ) {
  const [nextPage, setNextPage] = useState('')
  const [previousPage, setPreviousPage] = useState('')

  const location = useLocation();
  useLayoutEffect(() => {
    let path_name = window.location.hash.split('#')[1]
    setNextPage(routes[routes.indexOf(path_name)+1])
    setPreviousPage(routes[routes.indexOf(path_name)-1])
    console.log('location', location);
    console.log(previousPage, path_name, nextPage)
    }, [location])
  return (

    <div className='bg-yellow-100 h-full flex justify-around items-center rounded-xl shadow-slate-100 shadow-lg p-5'>
        <Link to={previousPage}>
          <button  className='border-yellow-400 active:ring-4 ring-yellow-600 px-3 py-1 border-2 bg-yellow-300 rounded-full text-lg font-medium hover:bg-yellow-500'>
            Previous
          </button>
        </Link>

        <h1 className='text-center text=2xl font-bold  border-l-4 border-r-4 px-5 border-yellow-300 text-gray-900'> Jai Jaipataka Swami</h1>

        <Link to={nextPage}>
          <button className='border-yellow-400 active:ring-4 ring-yellow-600 px-3 py-1 border-2 bg-yellow-300 rounded-full text-lg font-medium hover:bg-yellow-500'>
            Next
          </button>
        </Link>
    </div>
  )
}

export default BGFotter