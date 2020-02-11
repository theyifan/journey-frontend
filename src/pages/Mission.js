import React from 'react';
import Workspace from '../Workspace/Workspace';
import Question from '../Workspace/Question';
import Editor from "../Workspace/Editor";
import REPL from "../Workspace/REPL";

function Mission() {
  return (
    <Workspace editor = {<Editor />} repl = {<REPL />} question = {<Question />} />
  )
}

export default Mission
