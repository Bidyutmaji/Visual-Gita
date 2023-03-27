import React, {useState} from 'react'
import { RiMenu4Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

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
            <Link to={'/intro'}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, x:-5}}
                    animate={{ opacity: 1, scale: 1, x:0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.1}}
                >
                <p className='text-center text-3xl font-bold text-gray-800 hover:text-gray-900'>
                    Visual Gita
                    <span className='text-xs pl-1'>BETA</span>
                </p>
                </motion.div>
            </Link>
        </div>
        <button onClick={() => setSideBar(!sideBar)} className='w-auto flex lg:hidden items-center justify-center px-2 lg:py-1 rounded-full bg-yellow-300 my-2 mx-2'>
            <RiMenu4Fill className='font-bold text-2xl'/> MENU
        </button>
    </div>
    )
}

export default BGHeader