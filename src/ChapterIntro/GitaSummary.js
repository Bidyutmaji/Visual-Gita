import React from 'react'

function GitaSummary( { data } ) {

    return (
        <div className='flex flex-col lg:flex-row lg:justify-center items-center w-full h-full  border border-rose-200 bg-[#FFEFD5] rounded-xl overflow-y-auto'>
            <div className='w-[90%] lg:w-[25%] lg:h-[90%] flex flex-col justify-center items-center lg:pl-2 pt-2'>
                <h1 className='pb-[20px] font-semibold text-gray-800 text-3xl'>{data.title}</h1>
                <img className="w-[80%] mx-auto  rounded-2xl shadow-xl shadow-yellow-300 border border-red-400" src={data.image} />
                <div className='pt-9 flex flex-col  justify-center items-center'>
                    <p className='w-4/5 p-2 text-gray-800 text-lg bg-yellow-200 text-center rounded-lg'>{data.imageCaption}</p>
                </div>
            </div>
            <div className='py-9 lg:pt-0 w-[90%] lg:w-[75%] lg:max-h-[95%] lg:h-[95%] flex flex-col lg:justify-center lg:items-center'>
            <h1 className='pb-[15px] font-semibold text-gray-800 text-2xl text-center'>Chapters: {data.chapters}</h1>
            <table className='lg:p-5 border-separate lg:border-spacing-2'>
                    <thead className=''>
                        <tr className=''>
                            {data.header.map( (item, i) => {
                                return <th className={`px-2 lg:px-5 py-1 ${item.split(':')[1]} border-x border-gray-300`}>{item.split(':')[0]}</th>
                            })}
                            
                        </tr>
                    </thead>

                    <tbody className='text-center'>
                        {data.data.map( (item, i) => {
                            console.log(item, i)
                            return (
                                <tr className='' key={i}>
                                    <th className={`px-1 lg:px-5 py-1 ${item.color1} border ${item.colorB} rounded-l-full ${data.textSize} font-light`}>{item.item1}</th>
                                    <td className={`px-1 lg:px-5 py-1 ${item.color2} border ${item.colorB} rounded-none ${data.textSize}  font-light`}>{item.item2}</td>
                                    <td className={`px-1 lg:px-5 py-1 ${item.color3} border ${item.colorB} rounded-none  ${data.textSize} font-light`}>{item.item3}</td>
                                    <td className={`px-1 lg:px-5 py-1 ${item.color4} border ${item.colorB} rounded-r-full  ${data.textSize} font-light`}>{item.item4}</td>
                                </tr>
                                )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default GitaSummary