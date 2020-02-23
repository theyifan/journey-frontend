import React from 'react';
import Workspace from '../Workspace';
import Editor from "../Workspace/Editor";
import REPL from "../Workspace/REPL";

function Playground() {
  return (
    <Workspace editor = {<Editor />} repl = {<REPL />} />
  )
}

export default Playground;