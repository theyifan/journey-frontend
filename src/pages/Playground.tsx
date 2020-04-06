import React, { useEffect, useContext } from "react";
import Workspace from "../Workspace";
// import WorkspaceCom from "../Workspace/WorkspaceCom";
import Editor from "../Workspace/Editor";
import Description from "../Workspace/Description/index";
import CompleteNavBar from "../NavBar";
import { saveState } from "../reducers/localStorage";
import { Store } from "../reducers/Store";
import "./Playground.css";
import Repl2 from "../Workspace/REPL";

const Playground: React.FC = () => {
  const { globalState, dispatch } = useContext(Store);

  useEffect(() => {
    saveState(globalState);
  });
  const editorProps = {
    preloadedProg: "",
    callBack: () => {},
    editorSessionId: "",
    handleEditorValueChange: () => {},
  };
  return (
    <div>
      <CompleteNavBar />
      {/* <div className="playgroundPhone"> */}
        <Workspace
          editor={<Editor {...editorProps} />}
          repl={<Description />}
          question={<Repl2 />}
          // bottomBar={<BottomBar />}
        />
      {/* </div> */}
      {/* <div className="playgroundComputer">
        <WorkspaceCom
          editor={<Editor {...editorProps} />}
          repl={<Description />}
          question={<Repl2 />}
        />
      </div> */}
    </div>
  );
};

export default Playground;
