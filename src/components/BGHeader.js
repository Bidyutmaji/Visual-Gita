import React, {useState} from 'react'
import { RiMenu4Fill } from 'react-icons/ri'

function BGHeader( {setSideBar, sideBar } ) {
    console.log(sideBar)
    const handleSideMenu = ( sideBar ) => {
        if (sideBar) {
            setSideBar(false)
        }
        else{
            setSideBar(true)
        }
    }

    return (
    <div className=' h-full bg-yellow-100 rounded-xl flex shadow-slate-100 shadow-lg'>
        <button onClick={() => handleSideMenu(sideBar)} className='w-[5%] flex items-center justify-center p-2 rounded-full bg-yellow-300 m-2'>
            <RiMenu4Fill className='font-bold text-2xl'/>
        </button>

        <div className='flex items-center justify-center w-full'>
            <p className='text-center text-2xl font-bold '>
                Visual Gita
            </p>
        </div>
    </div>
    )
}

export default BGHeader