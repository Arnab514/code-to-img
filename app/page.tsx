"use client"
import CodeEditor from "@/components/CodeEditor";
import LanguageSelector from "@/components/LanguageSelector";
import ThemeSelector from "@/components/ThemeSelector";
import { languages, themes } from "@/utils/utilities";
import { useState } from "react";

export default function Home() {

  const [language , setLanguage] = useState(languages[0].name)
  const [activeIcon, setActiveIcon] = useState(languages[0].icon)
  const [theme, setTheme] = useState(themes[0])

  return (
    <main className="h-[100vh] flex flex-col items-center justify-between">
      <header className="mt-6 w-[940px] flex gap-6 p-5 fixed top-0 left-1/2 translate-x-[-50%] z-10 bg-[#191919] rounded border border-[#3C3C3C] shadow-md">
        <LanguageSelector language = {language} setLanguage = {setLanguage} setActiveIcon = {setActiveIcon} />
        <ThemeSelector theme={theme} setTheme = {setTheme}/>
      </header>
      <div className="code-editor-ref mt-[14rem]">
        <CodeEditor language = {language} theme = {theme} icon = {activeIcon}/>
      </div>
    </main>
  );
}
