import './App.css';

import {useState, useEffect } from 'react'
import { HashRouter as Router } from "react-router-dom";

import VisualPage from './components/VisualPage';
import BGHeader from './components/BGHeader';
import BGSideBar from './components/BGSideBar';
import BGFotter from './components/BGFotter';

import routes from './Route'

function App() {
    const [sideBar, setSideBar] = useState(false)
    const [sideClass, setSideClass] = useState('')
    const [chapterClick, setChapterClick] = useState(false)

    useEffect(() => {
        if (sideClass==='translate-x-0'){
            setSideClass('-translate-x-full left-0')
        }
        else {
            setSideClass('translate-x-0')
        }
    }, [sideBar, chapterClick])
    
    let show = 'translate-x-0';
    let hidden  = '-translate-x-full left-0' ;

    
    return (
        <Router>
        <div className='p-3 flex flex-row h-screen max-h-screen w-full bg-yellow-50'>

            {/* Sidebar */}
            <div className={`${sideClass} transition duration-500 fixed w-auto lg:relative lg:w-1/5 lg:transform-none z-40 flex h-full mr-2`}>
                <BGSideBar chapterClick={chapterClick} setChapterClick={setChapterClick}/>
                
            </div>

            <div className='h-full w-full flex flex-col bg-rgba(0, 0, 0, 0.85)'>
            
                {/* Header */}
                <div className='h-[7%] w-full'>
                    <BGHeader setSideBar={setSideBar} sideBar={sideBar}/>
                </div>

                {/* Body */}

                {/* Visual screen */}
                <div className='w-full h-[82%]'>
                    <VisualPage/>
                </div>

                {/* Footer with button */}
                <div className='fixed bottom-1 w-full lg:w-4/5'>
                    <BGFotter/>
                </div>
            
            </div>
        </div>
        </Router>
    );
}

export default App;
