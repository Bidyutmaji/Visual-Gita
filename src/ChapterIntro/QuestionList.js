import React from 'react'
import { GiBlackBook } from 'react-icons/gi'

function QuestionList() {
    const data = {
        image: "https://www.iskconbangalore.org/wp-content/uploads/2016/05/srila-prabhupada-103.jpg",
        imageCaption : ["Srila Pravupada", "Founder of ISKCON:font-light"],    
    }
    return (
        <div className='flex flex-col lg:flex-row items-center h-full border border-rose-200 bg-[#FFEFD5] rounded-xl lg:divide-x-4 divide-red-400 shadow-slate-200 shadow-xl overflow-y-auto py-5'>
            <div className='lg:w-[40%] lg:h-full flex flex-col items-center justify-center'>
                <img className="w-[80%] mx-auto rounded-2xl shadow-lg shadow-[#FF7F50] border-2 border-red-400" src={data.image} />
                <div className="flex items-center justify-center mt-6 space-x-3">
                    <div className="flex flex-col lg:flex-row items-center lg:divide-x-2 lg:divide-y-none divide-y-2 divide-gray-500 ">
                        {data.imageCaption.map( (text, i) => {
                            return (<cite key={i} className={`px-3 text-lg ${text.split(":")[1]} text-gray-900 `}>
                                        {text.split(":")[0]}
                                    </cite>)
                        })}
                    </div>
                </div>
            </div>
            
            <div className='pt-5 flex flex-col items-center justify-evenly h-full space-y-5 lg:h-[70%] lg:w-[60%] w-[95%] pr-3'>
                <div className='flex flex-row items-center '>
                    <span className='p-3 mx-5 border border-green-400 rounded-full bg-green-100'> 1 </span>
                    <p className='lg:text-4xl text-2xl font-mplus text-green-600'><GiBlackBook className='inline-block'/> : What is the real puspose of Gita ? </p>
                </div>
                
                <div className='flex flex-row items-center'>
                <span className='p-3 mx-5 border border-blue-400 rounded-full bg-blue-100'> 2 </span>
                <p className='lg:text-4xl text-2xl font-mplus text-blue-600'><GiBlackBook className='inline-block'/> : Why this book is important for me?</p>
                </div>
            </div>
        </div>
    )
}

export default QuestionList