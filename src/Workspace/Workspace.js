import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

function Workspace(props) {
  //state area
  const [runState, setRunState] = React.useState(false);
  const [code, setCode] = React.useState("");
  const callBackFromRepl = () => {
    setRunState(true);
    console.log("in");
  };
  const callBackFromReplStop = () => {
    setRunState(true);
    console.log("in");
  };

  const callBackFromEditor = childData => {
    setCode(childData);
    console.log(childData);
  };

  return (
    <div>
      <Grid container spacing={1} style={{ marginTop: -40 }}>
        <Grid item md xs={12}>
          {React.cloneElement(props.editor, { callBack: callBackFromEditor })}
        </Grid>
        <Grid item md>
          <Grid container direction="column" spacing={1}>
            <Grid item md>
              {React.cloneElement(props.repl, {
                callBack: callBackFromRepl,
                runState: runState,
                code: code,
                callBackStop: callBackFromReplStop
              })}
            </Grid>
            <Grid item md>
              {props.question}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Workspace;
