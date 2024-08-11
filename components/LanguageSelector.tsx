"use client"

import React from 'react'
import Dropdown from '@/utils/dropdown';
import { languages } from '@/utils/utilities';

interface LanguageSelectorProps{
  language : string;
  setLanguage : (language : string) => void
  setActiveIcon : (icon : string) => void
}

function LanguageSelector({
  language,
  setLanguage,
  setActiveIcon
} : LanguageSelectorProps) {

  const handleLanguageChange = (newLanguage : string) => {
    setLanguage(newLanguage)

    const newActiveIcon = languages.find((lang) => lang.name === newLanguage)?.icon

    if (newActiveIcon) {
      setActiveIcon(newActiveIcon)
    }
  }


  return(
    <div>
      <p className = 'py-[5px] text-sm font-medium'>Language</p>
      <Dropdown options={languages.map((lang) => lang.name)} selectedOption={language} onOptionSelect={handleLanguageChange} />
    </div>
  )

}

export default LanguageSelector


  // This code is when you use dropdown here 

  // const [showDropdown, setShowDropdown] = useState(false)

  // const toggleDropdown = () => {
  //   setShowDropdown(!showDropdown)
  // }


  // return (
  //   <div onClick = {toggleDropdown}>
  //     <p className = 'py-[5px] text-sm font-medium'>Language</p>
  //     <div className = 'dropdown-title capitalize w-[120px]'>
  //       {language}
  //       <ChevronDown/> 
  //     </div>
  //     {showDropdown && 
  //       <div className = 'dropdown-menu w-[120px] top-[94px]'>
  //         {languages.map((lang , index) => {
  //           return <div key = {index}>
  //             <button className = 'dropdown-item text-left' onClick = {() => handleLanguageChange(lang.name)}>
  //               {lang.name}
  //             </button>
  //           </div>
  //         })}
  //       </div>
  //     }
  //   </div>
  // )
