import React from "react";
import Workspace from "../Workspace";
import Editor from "../Workspace/Editor";
import REPL from "../Workspace/REPL";
import NavBar from "../NavBar/NavBar2";
import CompleteNavBar from "../NavBar/CompleteNavBar";

function Playground() {
  const preloadedProg = "// Type your program in here\n\n";

  return (
    <>
      <CompleteNavBar />
      <Workspace
        editor={<Editor preloadedProg={preloadedProg} />}
        repl={<REPL />}
      />
    </>
  );
}

export default Playground;
