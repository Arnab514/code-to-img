"use client"

import React from 'react'

interface PaddingSelectorProps{
    paddings: string[],
    currentPadding: string,
    setCurrentPadding: (padding: string) => void
}

function PaddingSelector({paddings, currentPadding, setCurrentPadding}: PaddingSelectorProps) {

    const changePadding = (newPadding: string) => {
        setCurrentPadding(newPadding)
    }

  return (
    <div>
      <p className = 'py-[5px] text-sm font-medium'>Padding Selector</p>
      <div className='flex gap-6'>
        {paddings.map((padding, index) => {
            return <button key={index} onClick={() => changePadding(padding)} 
            className= {`h-[36px] flex items-center justify-center text-sm px-2 
            ${currentPadding === padding && "bg-[#3C3C3C] rounded-md text-white"} hover:text-white ease-linear transition-all duration-300`}>
                {padding}
            </button>
        })}
      </div>
    </div>
  )
}

export default PaddingSelector
