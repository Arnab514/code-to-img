"use client"
import React from 'react'
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
  return (
    <Resizable minHeight={466} minWidth={510} maxHeight={1000}>
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
