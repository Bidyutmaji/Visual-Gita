import React from 'react'
import { TypeAnimation } from 'react-type-animation';


function TypingText( { fTime, text, sTime}) {
  return (
    <TypeAnimation
        sequence={
           [ fTime, text, sTime, () => {
                console.log('Done typing!');
              }]
        }
        className=' m-4 text-center font-bold text-slate-500 text-5xl'
        wrapper='h1'
        cursor={false}
        speed='18'
    />
  )
}

export default TypingText