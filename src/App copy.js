import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VisualPage from './components/VisualPage';

import BlockQuote from './ChapterIntro/BlockQuote';

import * as all from './ChapterIntro/IntroData'
import QuestionList from './ChapterIntro/QuestionList';
import FullSloka from './ChapterIntro/FullSloka';
import QnAData from './ChapterIntro/QnAData';

import GitaSummary from './ChapterIntro/GitaSummary';
import GitaShort from './ChapterIntro/GitaShort';
import BGHeader from './components/BGHeader';
import BGSideBar from './components/BGSideBar';
import BGFotter from './components/BGFotter';


function App() {
    return (
        <div className='p-3 flex flex-col h-screen w-full bg-yellow-50'>

            {/* Header */}
            <div className='h-[8%] w-full'>
                <BGHeader/>
            </div>

            {/* Body */}
            <div className='h-[90%] w-full flex mt-3'>

                {/* Sidebar */}
                <div className='w-1/5 h-full  mr-3'>
                    <BGSideBar/>
                </div>


                <div className='w-4/5 h-full flex flex-col'>

                    {/* Visual screen */}
                    <div className='w-full h-[90%] mb-3'>
                        <VisualPage/>
                    </div>

                    {/* Footer with button */}
                    <div className='w-full h-[10%]'>
                        <BGFotter/>
                    </div>

                </div>
            </div>
            
        </div>
                
    );
}

export default App;
