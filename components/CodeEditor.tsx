"use client"
import {useEffect, useState} from 'react'
import { Resizable } from "re-resizable";
import AceEditor from 'react-ace'

// languages
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/mode-typescript'
import 'ace-builds/src-noconflict/mode-c_cpp'
import 'ace-builds/src-noconflict/mode-typescript'
import 'ace-builds/src-noconflict/mode-json'

// themes
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/theme-terminal'
import 'ace-builds/src-noconflict/theme-twilight'
import 'ace-builds/src-noconflict/theme-solarized_dark'


interface CodeEditorProps{
    onCodeChange: (code: string) => void;
    language: string;
    theme: string;
    icon: string;
    background?: string;
    currentPadding?: string;

}

function CodeEditor({
    onCodeChange,
    language,
    theme,
    icon,
    background,
    currentPadding
}: CodeEditorProps) {

  const [width, setWidth] = useState(1000)
  const [height, setHeight] = useState<number | null>(500)

  // ts ignore
  const handleResize = (evt, direction, ref, pos) => {
    const newSize = ref.style.height
    setHeight(parseInt(newSize))
  }

  const updateSize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize" , updateSize)
    updateSize()
    return () => window.removeEventListener("resize" , updateSize)
  },[])

  return (
    <Resizable 
    minHeight={466} 
    minWidth={510} 
    maxHeight={1000} 
    defaultSize=
    {{
        width: width ,
        height: height || 500
    }}
    onResize={handleResize}
    className='resize-container relative'>

      <div className="code-block">
        <div className="code-title h-[52px] px-4 flex items-center justify-between bg-black bg-opacity-80">
          <div className="dots flex items-center gap-1">
            <div className='w-3 h-3 rounded-full bg-[#ff5656]'></div>
            <div className='w-3 h-3 rounded-full bg-[#ffbc6a]'></div>
            <div className='w-3 h-3 rounded-full bg-[#67f772]'></div>
          </div>

          <div className="input-control w-full">
            <input type="text" className='w-full text-[hsla(0,0%,100%,0.6)] outline-none font-medium text-center bg-transparent' />
          </div>

          <div className="icon flex justify-center items-center bg-black p-1 bg-opacity-30 rounded-sm">
            <img src={icon} alt="" />
          </div>
        </div>
        <AceEditor 
        value = "function() {return 'Hello Word'; }" 
        fontSize = {16} 
        name = "UNIQUE_ID_OF_DIV"
        theme={theme}
        mode={language.toLowerCase()}
        showGutter = {false} 
        wrapEnabled = {true}
        showPrintMargin = {false}
        highlightActiveLine={false}
        editorProps = {{ $blockScrolling: true }}
        className='ace-editor-container'/>
      </div>                      
    </Resizable>
  )
}

export default CodeEditor
