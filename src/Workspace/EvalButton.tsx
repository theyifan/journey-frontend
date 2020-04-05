import React, { useContext } from "react";
import { Store, IGlobalAction } from "../reducers/store";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import IconButton from "@material-ui/core/IconButton";
import Runner from "./../library_function/Runner";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";

/**
 * Props
 */
interface evalButtonProps {
  code: string;
}

const EvalButton: React.FC<evalButtonProps> = props => {
  //subscribe to the context
  const { globalState, dispatch } = useContext(Store);
  const handleRun = () => {
    return dispatch({
      type: "UPDATE_AND_EVAL",
      replValue: props.code
    });
  };
  function conbineCode(): string {
    return (
      globalState.playgroundEditorValue +
      globalState.replValue.reduce(
        (sum: string, current: string) => sum + current
      )
    );
  }

  const runEval = (): IGlobalAction => {
    const code: string = conbineCode();
    const newComponent: React.ReactElement = <Runner code={code} />;
    return dispatch({
      type: "RUN_EVAL",
      replComponents: newComponent
    });
  };

  return (
    <div>
      <IconButton onClick={handleRun}>
        <LabelImportantIcon />
      </IconButton>
      <IconButton onClick={runEval}>
        <DirectionsRunIcon />
      </IconButton>
    </div>
  );
};

export default EvalButton;
