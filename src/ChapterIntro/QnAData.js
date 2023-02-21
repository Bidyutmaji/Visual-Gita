import React from 'react'

function QnAData( { data }) {
    return (
        <div className='flex flex-col justify-center items-center px-5 '>
            <h1 className='text-center mb-5 font-semibold underline underline-offset-8 decoration-wavy text-gray-700 text-3xl '>GITA FACT</h1>

            <table className=' border-2 border-blue-400 w-[80%] h-[80%] rounded-xl border-separate'>
                {data.data.map( (item, i) => {
                    let qna = item.split(':')[0]
                    return (
                        <tr key={i} className={`${item.split(':')[1]}`}>
                            <td className='px-2 py-1 w-3/5 text-lg'>{qna.split('=')[0]}</td>
                            <td className='px-2 py-1 text-lg'>{qna.split('=')[1]}</td>
                        </tr>
                    )
                })}
            </table>

        </div>
    )
}

export default QnAData