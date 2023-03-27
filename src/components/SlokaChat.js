import React from 'react'

function SlokaChat( { data } ) {
    return (
    <div className='flex flex-col lg:justify-around items-start w-full h-full  border border-rose-200 bg-[#FFEFD5] rounded-xl overflow-y-auto p-5 space-y-4'>
        {data.part.map( (part, i) => {
            return (
                <div className={`flex flex-row  w-full divide-y-2 lg:divide-y-0 lg:divide-x-0 px-1 divide-emerald-400 rounded-xl ${part.BGColor}`}>
                    
                    {/* author image part*/}
                <div className='hidden w-[10%] h-auto lg:flex justify-center items-center px-2 border-r-2 border-emerald-400'>
                    <img className='w-20 h-20 rounded-full border-2 border-emerald-500' src={part.image}/>
                </div>

                {/* explaintion part */}
                <div className='w-full h-auto'>
                {part.para.map( (item, i) => {
                return (
                    <div className='w-full h-auto flex flex-col lg:flex-row justify-start items-center px-3 py-5 space-x-2'>
                        <p className='font-light text-2xl lg:text-3xl  text-gray-700 text-center mb-2'> {item.SNo}</p>
                        <p className={`font-light text-2xl lg:text-3xl text-${item.color}-800 text-center`}>
                            {item.sloka} 
                            <span className='underline decoration-2 pl-2'>{item.slokaTrans}</span></p>
                        {part.arrowIcon}
                        <p className={`font-light text-2xl lg:text-3xl text-${item.color}-700 mt-3 lg:mt-0 px-2 py-1 bg-${item.color}-100 text-center rounded-lg`}> 
                            {item.textIcon}{item.text}</p>
                    </div>
                )
                })}
                </div>
                <p></p>
            </div>
            )
        })}

    </div>
    )
}

export default SlokaChat