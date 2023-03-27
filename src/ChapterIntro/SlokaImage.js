import React from 'react'
import { TfiQuoteRight } from 'react-icons/tfi'

function SlokaImage({ data }) {

    return (
        <div className='flex flex-col lg:flex-row items-center h-full border border-rose-200 bg-[#FFEFD5] rounded-xl lg:divide-x-4 divide-emerald-400 shadow-slate-200 shadow-xl overflow-y-auto py-5'>
            <div className='lg:w-[40%] lg:h-full flex flex-col items-center justify-center'>
                <img className="w-[80%] mx-auto rounded-2xl shadow-lg shadow-green-100 border-2 border-emerald-400" src={data.image} />
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
                    <div className={`${data.textFontSize} border border-teal-400 p-6 font-mplus leading-relaxed bg-green-50 rounded-lg text-center font-[700] text-gray-800 space-y-2`}>
                        {data.text.map( (text, i) => {
                            return (<p className={`px-2 font-light ${text.split(':')[1]} bg-rose-100 rounded-full`} key={i}>{text.split(':')[0]}
                                        {data.textLineBreak ? <br/> : ''}
                                    </p>)
                        })}
                    </div>
                </blockquote>
            </figure>
            </div>

        </div>

    )
}

export default SlokaImage