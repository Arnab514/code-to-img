"use client"

import React from 'react'

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
  return (
    <div>
      <p>Language</p>
    </div>
  )
}

export default LanguageSelector