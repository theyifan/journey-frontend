import React from 'react';
import Workspace from '../Workspace/Workspace';
import Editor from "../Workspace/Editor";
import REPL from "../Workspace/REPL";

function Playground() {
  const preloadedProg = "// Type your program in here\n\n";

  return (
    <Workspace 
      editor = {<Editor 
        currentProgram={preloadedProg}
      />} 
      repl = {<REPL />} />
  )
}

export default Playground;