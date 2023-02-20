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


function App() {
    return (
        <div className='p-3 flex flex-col h-screen w-full'>

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
                    <div className='w-full h-[90%] bg-teal-400 mb-2 rounded-xl'>

                    </div>

                    {/* Footer with button */}
                    <div className='w-full h-[10%] bg-violet-400 rounded-xl'>

                    </div>

                </div>
            </div>
            
        </div>
                
    );
}

export default App;
