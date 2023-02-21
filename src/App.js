import './App.css';

import {useState, useEffect } from 'react'

import VisualPage from './components/VisualPage';
import BGHeader from './components/BGHeader';
import BGSideBar from './components/BGSideBar';
import BGFotter from './components/BGFotter';


function App() {
    const [sideBar, setSideBar] = useState(false)
    const [sideCLass, setSideClass] = useState('flex')
    console.log(sideBar, sideCLass);
    useEffect(() => {
        setSideClass(sideBar ? 'flex' : 'hidden')
    }, [sideBar])
    
    
    return (
        <div className='p-3 flex flex-row h-screen w-full bg-yellow-50'>

            {/* Sidebar */}
            <div className={`w-1/5 h-full ${sideCLass} flex-col mr-3`}>
                <BGSideBar/>
            </div>

            <div className='h-full w-full flex flex-col mt-3'>
            
                {/* Header */}
                <div className='h-[8%] w-full'>
                    <BGHeader setSideBar={setSideBar} sideBar={sideBar}/>
                </div>

                {/* Body */}

                {/* Visual screen */}
                <div className='w-full h-[82%] mb-3'>
                    <VisualPage/>
                </div>

                {/* Footer with button */}
                <div className='w-full h-[10%]'>
                    <BGFotter/>
                </div>
            
            </div>
        </div>
    );
}

export default App;
