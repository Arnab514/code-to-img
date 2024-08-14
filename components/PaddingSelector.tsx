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
            return <button key={index}>
                {padding} // 1hr 56min
            </button>
        })}
      </div>
    </div>
  )
}

export default PaddingSelector
