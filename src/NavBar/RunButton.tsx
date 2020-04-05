import React, { useContext } from "react";
import { Store, IGlobalAction } from "../reducers/store";
import Runner from "./../library_function/Runner";
import { runInContext } from "js-slang";
import createContext from "js-slang/dist/createContext";
import { Context, Environment } from "js-slang/dist/types";
import { Result } from "js-slang/dist/types";
import { TypeError } from "js-slang/dist/utils/rttc";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import "./NavBar.css";

/**
 * States
 */

const context: Context = createContext(4);

const RunButton: React.FC = () => {
  const { globalState, dispatch } = useContext(Store);

  //runInContext takes in (string code, context, {})
  const evaluate = async () => {
    return await runInContext(globalState.playgroundEditorValue, context, {
      scheduler: "preemptive",
      originalMaxExecTime: 2000,
      useSubst: false
    });
  };
  const handleRun = async () => {
    const result: Result = await evaluate();
    let newComponent: React.ReactElement;
    if (result.status === "error") {
      newComponent = (
        <Card>
          <CardContent>
            <div style={{ color: "red" }}>
              {context.errors.map(x => x.explain()).reduce((x, y) => x + y)}
            </div>
          </CardContent>
        </Card>
      );
    } else if (result.status === "finished") {
      newComponent = <Runner value={result.value} />;
    } else {
      newComponent = <div></div>;
    }

    return dispatch({
      type: "RUN",
      runComponent: newComponent
    });
  };
  return (
    <div>
      <a onClick={handleRun}>Run</a>
    </div>
  );
};

export default RunButton;
