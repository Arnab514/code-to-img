"use client"

import Dropdown from '@/utils/dropdown';
import { themes } from '@/utils/utilities';
import React from 'react'

interface ThemeSelectorProps{
    theme : string;
    setTheme : (theme : string) => void
}

function ThemeSelector({theme , setTheme}:ThemeSelectorProps) {

    const handleThemeChange = (newTheme : string) => {
        setTheme(newTheme)
    }

  return (
    <div className = 'theme-selector'>
        <p className = 'py-[5px] text-sm font-medium'>Code Colors</p>
        <Dropdown options={themes.map((themes) => themes)} selectedOption={theme} onOptionSelect={handleThemeChange} />
    </div>
  )
}

export default ThemeSelector

