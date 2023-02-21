import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlockQuote from '../ChapterIntro/BlockQuote';
import CoverPage from './CoverPage';
import TypingText from './TypingText';

import * as all from '../ChapterIntro/IntroData'
import QuestionList from '../ChapterIntro/QuestionList';
import FullSloka from '../ChapterIntro/FullSloka';
import QnAData from '../ChapterIntro/QnAData';

import GitaSummary from '../ChapterIntro/GitaSummary';
import GitaShort from '../ChapterIntro/GitaShort';


function VisualPage() {
  return (
    <div className='h-full bg-white rounded-2xl p-5 '>
      <Router>
        <Routes>
          <Route exact path='/intro/page-1' element={<BlockQuote data={all.GuruPranam}/>}/>
          <Route path='/intro/page-2' element={<BlockQuote data={all.LessonOne}/>}/>
          <Route path='/intro/page-3' element={<BlockQuote data={all.LessonTwo}/>}/>
          <Route path='/intro/page-4' element={<BlockQuote data={all.LessonThree}/>}/>
          <Route path='/intro/page-5' element={<QuestionList/>}/>
          <Route path='/intro/page-6' element={<FullSloka data={all.GitaDhyanam}/>}/>
          <Route path='/intro/page-7' element={<QnAData data={all.IntroQnA}/>}/>
          <Route path='/intro/page-8' element={<GitaShort/>}/>
          <Route path='/intro/page-9' element={<GitaSummary data={all.BGOneToSix}/>}/>
          <Route path='/intro/page-10' element={<GitaSummary data={all.BGSevenToTwelve}/>}/>
          <Route path='/intro/page-11' element={<GitaSummary data={all.BGthirteenToEighteen}/>}/>
          <Route path='/intro/page-12' element={<BlockQuote data={all.LessonFour}/>}/>
          <Route path='/intro/page-13' element={<BlockQuote data={all.EndPravupadBani}/>}/>
        </Routes>
    </Router>
    </div>
  )
}

export default VisualPage