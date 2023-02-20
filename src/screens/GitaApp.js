import React from 'react'
import Fotter from '../components/Fotter';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import VisualPage from '../components/VisualPage';
function GitaApp() {
  return (
    <div className='w-full h-screen bg-slate-500 p-[10px]'>
        <div className='text-center bg-white py-4'>
            <Header/>
        </div>
        
        <div className='flex '>
            <div className='w-1/5 m-[10px] bg-white flex-1 flex overflow-hidden'>
                <SideBar/>
            </div>

            <div className='w-4/5'>
                <div className=' bg-white m-[10px] h-[90%]'>
                    <VisualPage/>
                </div>
                <div className='h-[5%] m-[10px] bg-blue-500 '>
                    <Fotter/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GitaApp