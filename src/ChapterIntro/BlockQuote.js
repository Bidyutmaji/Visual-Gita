import React from 'react'
import { TfiQuoteRight } from 'react-icons/tfi'

function BlockQuote({ data }) {
    return (
        <div className='flex items-center h-full border border-rose-200 bg-yellow-200 rounded-xl divide-x-4 divide-red-400 shadow-slate-200 shadow-xl'>
            <div className='w-[45%]'>
                <img className="w-[80%] mx-auto  rounded-2xl shadow-xl shadow-yellow-300 border-2 border-red-400" src={data.image} />
                <div className="flex items-center justify-center mt-6 space-x-3">
                    <div className="flex items-center divide-x-2 divide-gray-500 ">
                        {data.imageCaption.map( (text, i) => {
                            return (<cite key={i} className={`px-3 text-lg ${text.split(":")[1]} text-gray-900 `}>
                                        {text.split(":")[0]}
                                    </cite>)
                        })}
                    </div>
                </div>
            </div>
            <div className='w-[55%]'>
            <figure className="flex flex-col items-center justify-center">
                <h1 className={`pb-5 font-semibold ${data.textTitle.split(':')[1]} underline underline-offset-8 decoration-wavy text-gray-700`}>{data.textTitle.split(':')[0]}</h1>
                
                <blockquote className='flex flex-col justify-center items-center w-[80%]'>
                <div className='mb-[-15px] z-0 w-[50] bg-yellow-300 p-2 border border-red-400 rounded-lg'>
                    <TfiQuoteRight size={30} className=' text-gray-700'/>
                </div>
                    <div className={`${data.textFontSize} border border-red-400 p-6 font-mplus leading-relaxed bg-yellow-300 rounded-lg italic text-center font-[700] text-gray-800 `}>
                        {data.text.map( (text, i) => {
                            return <span className={`${text.split(':')[1]}`} key={i}>{text.split(':')[0]}</span>
                        })}
                    </div>
                </blockquote>
            </figure>
            </div>

        </div>

    )
}

export default BlockQuote