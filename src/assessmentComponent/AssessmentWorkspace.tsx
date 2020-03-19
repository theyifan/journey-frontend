import React from 'react';
import Workspace from '../Workspace';
import Question from '../Workspace/Question';
import Editor from "../Workspace/Editor";
import REPL from "../Workspace/REPL";
import NavBar from '../NavBar/NavBar';
import {
    AssessmentCategories,
    AutogradingResult,
    IAssessment,
    IMCQQuestion,
    IProgrammingQuestion,
    IQuestion,
    ITestcase,
    Library,
    QuestionTypes
  } from '../assessment/assessmentShape';


export type StateProps = {
    assessment?: IAssessment;
    autogradingResults: AutogradingResult[];
    editorPrepend: string;
    editorValue: string | null;
    editorPostpend: string;
    editorTestcases: ITestcase[];
    editorHeight?: number;
    editorWidth: string;
    breakpoints: string[];
    highlightedLines: number[][];
    hasUnsavedChanges: boolean;
    isRunning: boolean;
    isDebugging: boolean;
    enableDebugging: boolean;
    replValue: string;
    sideContentHeight?: number;
    storedAssessmentId?: number;
    storedQuestionId?: number;
  };
  
  export type OwnProps = {
    assessmentId: number;
    questionId: number;
    notAttempted: boolean;
    closeDate: string;
  };

class AssessmentWorkspace {
  render() {
  return (
    <>
      <NavBar seed={1}/>
      <Workspace editor = {<Editor callBack = {() => {}} />} repl = {<REPL />} question = {<Question />} />
    </>
  )
  }
}

export default AssessmentWorkspace;
