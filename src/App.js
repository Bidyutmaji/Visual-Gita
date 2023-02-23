import './App.css';

import {useState, useEffect } from 'react'
import { BrowserRouter as Router } from "react-router-dom";

import VisualPage from './components/VisualPage';
import BGHeader from './components/BGHeader';
import BGSideBar from './components/BGSideBar';
import BGFotter from './components/BGFotter';

import { IntroRoute } from './Route'

function App() {
    const [sideBar, setSideBar] = useState(false)
    const [sideCLass, setSideClass] = useState('')
    // const [Overlay, setOverlay] = useState('')
    const [nextPage, setNextPage] = useState('translate-x-0')
    const [previousPage, setPreviousPage] = useState('')
    const [NFButtonClick, setNFButtonClick] = useState(false)
    const [chapterClick, setChapterClick] = useState(false)

    console.log(chapterClick, sideCLass)
    
    
    useEffect(() => {
        let path_name = window.location.pathname
        setNextPage(IntroRoute[IntroRoute.indexOf(path_name)+1])
        setPreviousPage(IntroRoute[IntroRoute.indexOf(path_name)-1])
        
        // console.log(previousPage, path_name, nextPage)
        // console.log(chapterClick);

        setSideClass(sideBar ? 'translate-x-0' : '-translate-x-full left-0')
        // if (chapterClick && sideCLass == "flex"){
        //     setSideClass('hidden')
        // }
        // console.log(sideBar, sideCLass, chapterClick)
        setNFButtonClick(false)
        // setChapterClick(false)
    }, [sideBar, NFButtonClick])
    
    let show = 'translate-x-0';
    let hidden  = '-translate-x-full left-0' ;

    
    return (
        <Router>
        <div className='p-3 flex flex-row h-screen w-full bg-yellow-50'>

            {/* Sidebar */}
            <div className={`${sideCLass} fixed w-auto lg:relative lg:w-1/5 lg:transform-none z-40 flex h-full mr-3`}>
                <BGSideBar chapterClick={chapterClick} setChapterClick={setChapterClick}/>
                
            </div>

            <div className='h-full w-full flex flex-col mt-3  bg-rgba(0, 0, 0, 0.85)'>
            
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
