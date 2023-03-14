import React from 'react'

function SlokaChat( { data } ) {
    // console.log();
    // let data = {
    //     part: [{ image: "https://www.meghnaunni.com/wp-content/uploads/2020/05/dhritharashtra-mahabharat.jpg", BGColor: 'bg-violet-100',
    //                 para: [ {SNo: '1.1', sloka:'(māmakāḥ)', slokaTrans:'my party (sons)', text:' - BG 1.2 to BG 1.13', color:'yellow', textIcon: <BsLink45Deg className='inline-block'/>},
    //                         {SNo: '1.1', sloka:'(pāṇḍavāś)', slokaTrans:' the sons of Pāṇḍu', text:' - BG 1.2 to BG 1.13', color:'indigo', textIcon: <BsLink45Deg className='inline-block'/>},
    //                     ],
    //                 },
                            
    //             { image: "https://www.oshonews.com/wp-content/uploads/2018/04/Sanjay-and-Dhritarashtra.jpg", BGColor: 'bg-fuchsia-100',
    //             para: [ 
    //                     {SNo: '1.2', sloka:'dṛṣṭvā tu', slokaTrans:'pāṇḍavānīkaṁ', text:' - Soldiers of the Pāṇḍavas', color:'lime', textIcon: <GiBattleGear className='inline-block'/>,},
    //                     {SNo: '1.2', sloka:'duryodhanas ... abravīt', slokaTrans:'', text:' - King Duryodhana spoke ...', color:'pink', textIcon: <AiFillCrown className='inline-block'/>,},
    //                 ],
    //             },
            
    //     ]
    //     }
    return (
    <div className='flex flex-col lg:justify-around items-start w-full h-full  border border-rose-200 bg-[#FFEFD5] rounded-xl overflow-y-auto p-5 space-y-4'>
        {data.part.map( (part, i) => {
            return (
                <div className={`flex flex-row  w-full divide-x-2 px-1 divide-emerald-400 rounded-xl ${part.BGColor}`}>
                    
                    {/* author image part*/}
                <div className='w-[10%] h-auto flex justify-center items-center px-2'>
                    <img className='w-20 h-20 rounded-full border-2 border-emerald-500' src={part.image}/>
                </div>

                {/* explaintion part */}
                <div className='w-full h-auto'>
                {part.para.map( (item, i) => {
                return (
                    <div className='w-full h-auto flex justify-start items-center px-3 py-5 space-x-2'>
                        <p className='font-light text-3xl text-gray-700 text-center'> {item.SNo}</p>
                        <p className={`font-light text-3xl text-${item.color}-800 text-center`}>
                            {item.sloka} 
                            <span className='underline decoration-2 pl-2'>{item.slokaTrans}</span></p>
                        {part.arrowIcon}
                        <p className={`font-light text-3xl text-${item.color}-700 px-2 py-1 bg-${item.color}-100 text-center rounded-lg`}> 
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