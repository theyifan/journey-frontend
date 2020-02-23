import React from "react";
import Grid from "@material-ui/core/Grid";

export interface IWorkspaceProps {
  repl: React.ReactElement;
  editor: React.ReactElement;
  question: React.ReactElement;
}

export interface IWorkspaceState {
  runState: boolean;
  editorInput: string;
}

export default class Workspace extends React.Component<IWorkspaceProps, IWorkspaceState> {
  public constructor(props:IWorkspaceProps) {
    super(props);
    this.state = {
      runState: false,
      editorInput: ""  // initially named code
    };
  }

  private callBackFromRepl = () => {
    this.setState({
      runState: true
    });
  };
  callBackFromReplStop = () => {
    this.setState({
      runState: true
    });
  };

  callBackFromEditor = (childData: string) => {
    this.setState({
      editorInput: childData
    });
  };


  public render() {
    return(
    <div>
      <Grid container spacing={1} style={{ marginTop: -40 }}>
        <Grid item md xs={12}>
          {React.cloneElement(this.props.editor, { callBack: this.callBackFromEditor })}
        </Grid>
        <Grid item md>
          <Grid container direction="column" spacing={1}>
            <Grid item md>
              {React.cloneElement(this.props.repl, {
                callBack: this.callBackFromRepl,
                runState: this.state.runState,
                editorInput: this.state.editorInput,
                callBackStop: this.callBackFromReplStop
              })}
            </Grid>
            <Grid item md>
              {this.props.question}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
    )
  };

} 