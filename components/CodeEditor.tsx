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
    className='resize-container relative'
    style={{backgroundColor:"red"}}>
      <div>
        <AceEditor 
        value = "function() {return 'Hello Word'; }" 
        fontSize = {16} 
        name = "UNIQUE_ID_OF_DIV"
        theme='monokai'
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
