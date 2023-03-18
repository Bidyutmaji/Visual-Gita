import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route,useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

import BlockQuote from '../ChapterIntro/BlockQuote';

import * as all from '../ChapterIntro/IntroData'
import * as one from '../ChapterOne/OneData'
import QuestionList from '../ChapterIntro/QuestionList';
import FullSloka from '../ChapterIntro/FullSloka';
import QnAData from '../ChapterIntro/QnAData';

import GitaSummary from '../ChapterIntro/GitaSummary';
import GitaShort from '../ChapterIntro/GitaShort';
import BGChapterIndex from './BGChapterIndex';
import { IntroRoute, OneRoute } from '../Route';
import BGChapterEnd from './BGChapterEnd';
import ImageTitle from '../ChapterOne/ImageTitle';
import SlokaChat from './SlokaChat';
import SlokaImage from '../ChapterIntro/SlokaImage';


function VisualPage() {
  const [progress, setProgress] = useState(100)

  const navigate = useNavigate();

  useEffect(() => {
      if (window.location.hash === '' ) {
        navigate('/intro')
      }
  })
  

  return (
    <div className='h-full bg-white rounded-2xl p-2 '>
        {/* <LoadingBar color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} /> */}
        <Routes>
          <Route exact path='/intro' element={<BGChapterIndex data={IntroRoute} chapter=' Bhagabad Gita: Intro'/>}/>
          <Route exact path='/intro/guru-pronam' element={<SlokaImage data={all.GuruPranam}/>}/>
          <Route exact path='/intro/gita-great-life' element={<BlockQuote data={all.LessonOne}/>}/>
          <Route exact path='/intro/manual-of-life' element={<BlockQuote data={all.LessonTwo}/>}/>
          <Route exact path='/intro/clarity-of-lfe' element={<BlockQuote data={all.LessonThree}/>}/>
          <Route exact path='/intro/puspose-and-important' element={<QuestionList/>}/>
          <Route exact path='/intro/gita-dyanam' element={<FullSloka data={all.GitaDhyanam}/>}/>
          <Route exact path='/intro/gita-fact' element={<QnAData data={all.IntroQnA}/>}/>
          <Route exact path='/intro/gita-love-message' element={<GitaShort/>}/>
          <Route exact path='/intro/chapters-1-to-6' element={<GitaSummary data={all.BGOneToSix}/>}/>
          <Route exact path='/intro/chapters-7-to-12' element={<GitaSummary data={all.BGSevenToTwelve}/>}/>
          <Route exact path='/intro/chapters-13-to-18' element={<GitaSummary data={all.BGthirteenToEighteen}/>}/>
          <Route exact path='/intro/journey-within' element={<BlockQuote data={all.LessonFour}/>}/>
          <Route exact path='/intro/back-to-godhead' element={<BlockQuote data={all.EndPravupadBani}/>}/>
          <Route exact path='/intro/conclusion' element={<BGChapterEnd data={all.EndConclusion}/>}/>
        
        
        <Route exact path='/one' element={<BGChapterIndex data={OneRoute} chapter=' BG : Chpater 1'/>}/>
        <Route exact path='/one/mahabharat' element={<ImageTitle data={one.KuruDynasty}/>}/>
        <Route exact path='/one/mahabharat-map' element={<ImageTitle data={one.MahabharatMap}/>}/>
        <Route exact path='/one/sloka-1' element={<SlokaImage data={one.bg1_1}/>}/>
        <Route exact path='/one/1-translate' element={<BlockQuote data={one.bg1_1_trans}/>}/>
        <Route exact path='/one/lesson-1' element={<BlockQuote data={one.Lesson1One}/>}/>
        <Route exact path='/one/1-2' element={<SlokaChat data={one.One1_2}/>}/>
        <Route exact path='/one/2-3' element={<SlokaChat data={one.One3_6}/>}/>
        <Route exact path='/one/4-11' element={<SlokaChat data={one.One7_11}/>}/>
        <Route exact path='/one/lesson-2' element={<BlockQuote data={one.Lesson1Two}/>}/>
        <Route exact path='/one/sloka-12' element={<BlockQuote data={one.SlokaOne12}/>}/>
        <Route exact path='/one/lesson-3' element={<BlockQuote data={one.Lesson1Three}/>}/>
        <Route exact path='/intro/blew-conchshell' element={<GitaSummary data={one.BGCounchshell}/>}/>
        
        
        </Routes>


    </div>
  )
}

export default VisualPage