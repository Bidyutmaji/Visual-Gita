import React from 'react'

function QnAData( { data }) {
    return (
        <div className='flex flex-col lg:justify-center items-center px-5 h-full border border-rose-200 bg-[#FFEFD5] rounded-xl overflow-y-auto'>
            <h1 className='text-center mt-[10px] font-semibold text-gray-700 text-3xl '>GITA FACT</h1>

            <table className=' border-2 border-rose-400 lg:w-[85%] lg:h-[85%] my-[25px] rounded-xl border-separate'>
                {data.data.map( (item, i) => {
                    let qna = item.split(':')[0]
                    return (
                        <tr key={i} className={`${item.split(':')[1]}`}>
                            <td className='pl-2 py-[2px] w-3/5 font-light'>{qna.split('=')[0]}</td>
                            <td className='p-1 py-[2px] font-light'>{qna.split('=')[1]}</td>
                        </tr>
                    )
                })}
            </table>

        </div>
    )
}

export default QnAData