import React from 'react';
import Workspace from '../Workspace';
import Question from '../Workspace/Question';
import Editor from "../Workspace/Editor";
import REPL from "../Workspace/REPL";
import NavBar from '../NavBar/NavBar';

function Mission() {
  return (
    <>
      <NavBar seed={1}/>
      <Workspace 
        editor = {<Editor preloadedProg = "mission" callBack = {() => {}} />} 
        repl = {<REPL />} 
        question = {<Question />} />
    </>
  )
}

export default Mission
