import React, {useState} from 'react'
import { RiMenu4Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function BGHeader( {setSideBar, sideBar } ) {
    const handleSideMenu = ( sideBar ) => {
        if (sideBar) {
            setSideBar(false)
        }
        else{
            setSideBar(true)
        }
    }

    return (
    <div className='w-full h-full bg-yellow-100 rounded-xl flex shadow-slate-100 shadow-lg'>
        
      
        <div className='flex items-center justify-center w-full'>
            <Link to={'/'}>
                <p className='text-center text-3xl font-bold text-gray-900'>
                    Visual Gita
                    <span className='text-xs pl-1'>BETA</span>
                </p>
            </Link>
        </div>
        <button onClick={() => handleSideMenu(sideBar)} className='w-auto flex lg:hidden items-center justify-center px-2 lg:py-1 rounded-full bg-yellow-300 my-1 mx-2'>
            <RiMenu4Fill className='font-bold text-2xl'/> MENU
        </button>
    </div>
    )
}

export default BGHeader