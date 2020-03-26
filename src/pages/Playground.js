import React from "react";
import Workspace from "../Workspace";
import Editor from "../Workspace/Editor";
import Description from "./../Workspace/Description/index";
import CompleteNavBar from "../NavBar/CompleteNavBar";

function Playground() {
  const preloadedProg = "// Type your program in here\n\n";

  return (
    <>
      <CompleteNavBar />
      <Workspace
        editor={<Editor preloadedProg={preloadedProg} />}
        repl={<Description />}
      />
    </>
  );
}

export default Playground;
