import React from 'react'

function CodeboxComponents() {
    const numOfDots = new Array(3);
    return (
        <div className='border border-[]'>
            {
                numOfDots.map((item: any, index: number) => (
                    <div key={index} className='bg-[#475569]'></div>
                ))
            }
            <div></div>
        </div>
    )
}

export default CodeboxComponents
