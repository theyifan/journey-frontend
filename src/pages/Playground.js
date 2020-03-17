import React from "react";
import Workspace from "../Workspace";
import Editor from "../Workspace/Editor";
import REPL from "../Workspace/REPL";
import NavBar from "../NavBar/NavBar2";

function Playground() {
  return (
    <>
      <NavBar version library />
      <Workspace editor={<Editor />} repl={<REPL />} />
    </>
  );
}

export default Playground;
