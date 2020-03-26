import React from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import "./workspace.css";

export interface IWorkspaceProps {
  repl: React.ReactElement;
  editor: React.ReactElement;
  question: React.ReactElement;
}

export interface IWorkspaceState {
  runState: boolean;
  editorInput: string;
  leftPanelWidth: number;
  rightPanelWidth: number;
}

export default function(props: IWorkspaceProps){
  let [state, setState] : [IWorkspaceState, Function] = React.useState({
      runState: false,
      editorInput: "", // initially named code
      leftPanelWidth: window.innerWidth < 800 ? 100 : 50,
      rightPanelWidth: window.innerWidth < 800 ? 100 : 50,
    });

  const phoneBreakpoint = 800;
  const inPhoneMode = useMediaQuery(`(max-width:${phoneBreakpoint}px)`);
  React.useEffect(() => {
    if(inPhoneMode) {
      setState({
        ...state,
        leftPanelWidth: 100,
        rightPanelWidth: 100,
      })
    } else {
      setState({
        ...state,
        leftPanelWidth: 50,
        rightPanelWidth: 50,
      })
    }
  }, [inPhoneMode])

  const callBackFromRepl = () => {
    setState({
      runState: true
    });
  };
  
  const callBackFromReplStop = () => {
    setState({
      runState: true
    });
  };

  const callBackFromEditor = (childData: string) => {
    setState({
      editorInput: childData
    });
  };
  
  const handleMouseDown = () => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResize);
  }

  const resize = (e: MouseEvent) => {
    let editorWidth = e.clientX * 100 / window.innerWidth;
    if(editorWidth >= 30 && editorWidth <= 60){
      setState({
        ...state,
        leftPanelWidth: e.clientX * 100 / window.innerWidth,
        rightPanelWidth : 100 - e.clientX * 100 / window.innerWidth
      });
    }
  }

  const stopResize = () => {
    window.removeEventListener('mousemove', resize);
  }

  return (
    <div className="root">
      <div className="left-panel" style={{width: `${state.leftPanelWidth}vw`}}>
        {React.cloneElement(props.editor, {
          callBack: callBackFromEditor,
        })}
        <div className="resizer" onMouseDown={handleMouseDown}></div>
      </div>
      <div style={{width: `${state.rightPanelWidth}vw` }}>
        {React.cloneElement(props.repl, {
          callBack: callBackFromRepl,
          runState: state.runState,
          editorInput: state.editorInput,
          callBackStop: callBackFromReplStop
        })}
        {props.question}
      </div>
    </div>
  );
}
