import React from "react";
import Workspace from "../Workspace";
import Editor from "../Workspace/Editor";
import REPL from "../Workspace/REPL";
import Navbar from "../NavBar";

function Mission() {
  return (
    <>
      <Navbar />
      {/* <Workspace
        editor={<Editor preloadedProg={""} callBack={() => {}} />}
        repl={<REPL />}
        question={<Question />}
      /> */}
    </>
  );
}

export default Mission;
