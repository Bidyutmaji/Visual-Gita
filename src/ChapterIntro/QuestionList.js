import React from 'react'
import { GiBlackBook } from 'react-icons/gi'

function QuestionList() {
    const data = {
        image: "https://www.iskconbangalore.org/wp-content/uploads/2016/05/srila-prabhupada-103.jpg",
        imageCaption : ["Srila Pravupada", "Founder of ISKCON:font-light"],    
    }
    return (
        <div className='flex items-center  h-full'>
            <div className='w-[40%] '>
                    <img className="w-[80%] mx-auto  rounded-2xl shadow-xl shadow-yellow-300 border-2 border-red-400" src={data.image} />
                    <div className="flex items-center justify-center mt-6 space-x-3">
                        <div className="flex items-center divide-x-2 divide-gray-500 ">
                            {data.imageCaption.map( (text, i) => {
                                console.log(text.split(":")[0], text.split(":")[1])
                                return (<cite key={i} className={`px-3 text-lg font-medium ${text.split(":")[1]} text-gray-900 `}>
                                            {text.split(":")[0]}
                                        </cite>)
                            })}
                        </div>
                    </div>
                </div>
            
            <div className='flex flex-col justify-evenly h-[70%] '>
                <div className='flex flex-row items-center '>
                    <span className='p-3 mx-5 border border-green-400 rounded-full bg-green-100'> 1 </span>
                    <p className='text-4xl font-mplus text-green-600'><GiBlackBook className='inline-block'/> : What is the real puspose of Gita ? </p>
                </div>
                
                <div className='flex flex-row items-center'>
                <span className='p-3 mx-5 border border-blue-400 rounded-full bg-blue-100'> 2 </span>
                <p className='text-4xl font-mplus text-blue-600'><GiBlackBook className='inline-block'/> : Why this book is important for me?</p>
                </div>
            </div>
        </div>
    )
}

export default QuestionList