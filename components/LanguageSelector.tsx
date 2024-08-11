"use client"

import { languages } from '@/utils/utilities';
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react'

interface LanguageSelectorProps{
  language : string;
  setLanguage : (language : string) => void
  setActiveIcon : (icon : string) => void
}

function LanguageSelector({
  language,
  setLanguage,
  setActiveIcon
}) {

  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const handleLanguageChange = (newLanguage : string) => {
    setLanguage(newLanguage)

    const newActiveIcon = languages.find((lang) => lang.name === newLanguage)?.icon

    if (newActiveIcon) {
      setActiveIcon(newActiveIcon)
    }
  }


  return (
    <div onClick = {toggleDropdown}>
      <p className = 'py-[5px] text-sm font-medium'>Language</p>
      <div className = 'dropdown-title capitalize w-[120px]'>
        {language}
        <ChevronDown/> 
      </div>
      {showDropdown && 
        <div className = 'dropdown-menu'>
          {languages.map((lang , index) => {
            return <div key = {index}>
              <button className = 'dropdown-item w-[120px] top-[74px] text-left' onClick = {() => handleLanguageChange(lang.name)}>
                {lang.name}
              </button>
            </div>
          })}
        </div>
      }
    </div>
  )
}

export default LanguageSelector