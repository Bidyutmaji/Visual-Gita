import React from 'react'

function GitaSummary( { data } ) {

    return (
        <div className='flex justify-center items-center w-full h-full bg-yellow-100 rounded-xl'>
            <div className='w-[25%] h-[90%] flex flex-col  justify-center items-center'>
                <h1 className='pb-[25px] font-semibold text-gray-800 underline underline-offset-8 decoration-wavy text-3xl'>{data.title}</h1>
                <img className="w-[80%] mx-auto  rounded-2xl shadow-xl shadow-yellow-300 border border-red-400" src={data.image} />
                <div className='pt-9 flex flex-col  justify-center items-center'>
                    <p className='w-4/5 p-2 text-gray-800 text-lg bg-yellow-200 text-center rounded-lg'>{data.imageCaption}</p>
                </div>
            </div>
            <div className='w-[75%] flex flex-col justify-center items-center'>
            <h1 className='pb-[10px] font-semibold text-gray-800 underline underline-offset-8 decoration-wavy text-2xl'>Chapters: {data.chapters}</h1>
            <table className='p-5 border-separate border-spacing-2'>
                    <thead className=''>
                        <tr className=''>
                            <th className='px-5 py-1 bg-gray-400 rounded-l-full border-x border-gray-400'>Chapter</th>
                            <th className='px-5 py-1 bg-gray-300 rounded-none border border-gray-400'>Name</th>
                            <th className='px-5 py-1 bg-gray-200 rounded-none border border-gray-400'>Verse</th>
                            <th className='px-5 py-1 bg-gray-100 rounded-r-full border border-gray-400'>About</th>
                        </tr>
                    </thead>

                    <tbody className='text-center'>
                        {data.data.map( (item, i) => {
                            console.log()
                            return (
                                <tr className='' key={i}>
                                    <th className={`px-5 py-1 ${item.colorC} border ${item.colorB} rounded-l-full`}>{item.chapter}</th>
                                    <td className={`px-5 py-1 ${item.colorN} border ${item.colorB} rounded-none`}>{item.name}</td>
                                    <td className={`px-5 py-1 ${item.colorV} border ${item.colorB} rounded-none`}>{item.verse}</td>
                                    <td className={`px-5 py-1 ${item.colorA} border ${item.colorB} rounded-r-full`}>{item.about}</td>
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