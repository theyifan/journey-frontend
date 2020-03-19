import React from "react";
import Workspace from "../Workspace";
import Question from "../Workspace/Question";
import Editor from "../Workspace/Editor";
import REPL from "../Workspace/REPL";
import CompleteNavBar from "../NavBar/CompleteNavBar";

function Mission() {
  return (
    <>
      <CompleteNavBar />
      <Workspace
        editor={<Editor callBack={() => {}} />}
        repl={<REPL />}
        question={<Question />}
      />
    </>
  );
}

export default Mission;
