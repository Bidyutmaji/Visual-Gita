import React from 'react'
import { TfiQuoteRight } from 'react-icons/tfi'

function BlockQuote({ data }) {
    return (
        <div className='flex flex-col lg:flex-row items-center h-full border border-rose-200 bg-[#FFEFD5] rounded-xl lg:divide-x-4 divide-red-400 shadow-slate-200 shadow-xl overflow-y-auto py-5'>
            <div className='lg:w-[40%] lg:h-full flex flex-col items-center justify-center'>
                <img className="w-[80%] mx-auto rounded-2xl shadow-lg shadow-[#FF7F50] border-2 border-red-400" src={data.image} />
                <div className="flex items-center justify-center mt-6 space-x-3">
                    <div className="flex flex-col lg:flex-row items-center lg:divide-x-2 lg:divide-y-0 divide-y-2 divide-gray-500 ">
                        {data.imageCaption.map( (text, i) => {
                            return (<cite key={i} className={`px-3 text-lg ${text.split(":")[1]} text-gray-900 `}>
                                        {text.split(":")[0]}
                                    </cite>)
                        })}
                    </div>
                </div>
            </div>
            <div className='pt-5 lg:pt-0 lg:w-[60%] lg:h-full flex flex-col items-center justify-center'>
            <figure className="flex flex-col items-center justify-center">
                <h1 className={`pb-5 font-semibold ${data.textTitleFontSize} text-gray-700`}>{data.textTitle}</h1>
                
                <blockquote className='flex flex-col justify-center items-center mx-7'>
                <div className='mb-[-15px] z-0 w-[50] bg-yellow-300 p-2 border border-red-400 rounded-lg'>
                    <TfiQuoteRight size={30} className=' text-gray-700'/>
                </div>
                    <div className={`${data.textFontSize} border border-red-400 p-6 font-mplus leading-relaxed bg-yellow-300 rounded-lg text-center font-[700] text-gray-800 `}>
                        {data.text.map( (text, i) => {
                            return (<span className={`font-normal ${text.split(':')[1]}`} key={i}>{text.split(':')[0]}
                                        {data.textLineBreak ? <br/> : ''}
                                    </span>)
                        })}
                    </div>
                </blockquote>
            </figure>
            </div>

        </div>

    )
}

export default BlockQuote