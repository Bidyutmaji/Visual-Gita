import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route,useNavigate } from "react-router-dom";
import BlockQuote from '../ChapterIntro/BlockQuote';

import * as all from '../ChapterIntro/IntroData'
import QuestionList from '../ChapterIntro/QuestionList';
import FullSloka from '../ChapterIntro/FullSloka';
import QnAData from '../ChapterIntro/QnAData';

import GitaSummary from '../ChapterIntro/GitaSummary';
import GitaShort from '../ChapterIntro/GitaShort';


function VisualPage() {

  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === '/' || window.location.pathname === '/Visual-Gita/') {
      navigate('/Visual-Gita/intro/guru-pronam')
  }
  })
  

  return (
    <div className='h-full bg-white rounded-2xl p-5 '>
        <Routes>
          <Route exact path='/Visual-Gita/intro/guru-pronam' element={<BlockQuote data={all.GuruPranam}/>}/>
          <Route exact path='/Visual-Gita/intro/gita-great-life' element={<BlockQuote data={all.LessonOne}/>}/>
          <Route exact path='/Visual-Gita/intro/manual-of-life' element={<BlockQuote data={all.LessonTwo}/>}/>
          <Route exact path='/Visual-Gita/intro/clarity-of-lfe' element={<BlockQuote data={all.LessonThree}/>}/>
          <Route exact path='/Visual-Gita/intro/puspose-and-important' element={<QuestionList/>}/>
          <Route exact path='/Visual-Gita/intro/gita-dyanam' element={<FullSloka data={all.GitaDhyanam}/>}/>
          <Route exact path='/Visual-Gita/intro/gita-fact' element={<QnAData data={all.IntroQnA}/>}/>
          <Route exact path='/Visual-Gita/intro/gita-love-message' element={<GitaShort/>}/>
          <Route exact path='/Visual-Gita/intro/chapters-1-6' element={<GitaSummary data={all.BGOneToSix}/>}/>
          <Route exact path='/Visual-Gita/intro/chapters-7-12' element={<GitaSummary data={all.BGSevenToTwelve}/>}/>
          <Route exact path='/Visual-Gita/intro/chapters-13-18' element={<GitaSummary data={all.BGthirteenToEighteen}/>}/>
          <Route exact path='/Visual-Gita/intro/journey-within' element={<BlockQuote data={all.LessonFour}/>}/>
          <Route exact path='/Visual-Gita/intro/back-to-godhead' element={<BlockQuote data={all.EndPravupadBani}/>}/>
        </Routes>
    </div>
  )
}

export default VisualPage