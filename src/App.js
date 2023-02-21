import './App.css';

import {useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import VisualPage from './components/VisualPage';
import BGHeader from './components/BGHeader';
import BGSideBar from './components/BGSideBar';
import BGFotter from './components/BGFotter';

import { IntroRoute } from './Route'

function App() {
    const [sideBar, setSideBar] = useState(false)
    const [sideCLass, setSideClass] = useState('flex')
    const [nextPage, setNextPage] = useState('')
    const [previousPage, setPreviousPage] = useState('')
    const [NFButtonClick, setNFButtonClick] = useState(false)
    
    console.log(NFButtonClick);
    
    
    useEffect(() => {
        let path_name = window.location.pathname
        setNextPage(IntroRoute[IntroRoute.indexOf(path_name)+1])
        setPreviousPage(IntroRoute[IntroRoute.indexOf(path_name)-1])

        console.log(previousPage, path_name, nextPage)

        setSideClass(sideBar ? 'flex' : 'hidden')
        setNFButtonClick(false)
    }, [sideBar, NFButtonClick])
    
    
    return (
        <Router>
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
                    <BGFotter previousPage={previousPage} nextPage={nextPage} setNFButtonClick={setNFButtonClick}/>
                </div>
            
            </div>
        </div>
        </Router>
    );
}

export default App;
