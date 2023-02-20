import React from 'react'
import { TfiQuoteRight } from 'react-icons/tfi'

function BlockQuote({ data }) {
    return (
        <div className='flex items-center h-full bg-yellow-200 rounded-xl divide-x-4 divide-red-400 shadow-slate-200 shadow-xl'>
            <div className='w-[45%]'>
                <img className="w-[80%] mx-auto  rounded-2xl shadow-xl shadow-yellow-300 border-2 border-red-400" src={data.image} />
                <div className="flex items-center justify-center mt-6 space-x-3">
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        {data.imageCaption.map( (text, i) => {
                            console.log(text.split(":")[0], text.split(":")[1])
                            return (<cite key={i} className={`px-3 text-lg font-medium ${text.split(":")[1]} text-gray-900 dark:text-white`}>
                                        {text.split(":")[0]}
                                    </cite>)
                        })}
                    </div>
                </div>
            </div>
            <div className='w-[55%]'>
            <figure className="flex flex-col items-center justify-center">
                <h1 className={`pb-5 font-semibold ${data.textTitle.split(':')[1]} underline underline-offset-8 decoration-wavy text-gray-700`}>{data.textTitle.split(':')[0]}</h1>
                {/* <svg aria-hidden="true" className="w-12 h-12  mx-auto mb-3 text-gray-500 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg> */}
                <div className='mb-[-15px] z-0 w-[50] bg-yellow-300 p-2 border border-red-400 rounded-lg'>
                    <TfiQuoteRight size={30} className=' text-gray-700' bord/>
                </div>
                <blockquote className='mx-[50px]'>
                    <div className={`${data.textFontSize} border border-red-400 p-6 font-mplus leading-relaxed bg-yellow-300 rounded-lg italic text-center font-[700] text-gray-800 dark:text-white`}>
                        {data.text.map( (text, i) => {
                            return <p className={`${text.split(':')[1]}`} key={i}>{text.split(':')[0]}</p>
                        })}
                    </div>
                </blockquote>
            </figure>
            </div>

        </div>

    )
}

export default BlockQuote