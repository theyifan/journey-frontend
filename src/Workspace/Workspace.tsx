import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./workspace.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export interface IWorkspaceProps {
  repl: React.ReactElement;
  editor: React.ReactElement;
  question: React.ReactElement;
  bottomBar?: React.ReactElement;
}

export interface IWorkspaceState {
  leftPanelWidth: number;
  rightPanelWidth: number;
}

export default function(props: IWorkspaceProps) {
  let [state, setState]: [IWorkspaceState, Function] = React.useState({
    leftPanelWidth: 50,
    rightPanelWidth: 50
  });

  const phoneBreakpoint = 800;
  const inPhoneMode = useMediaQuery(`(max-width:${phoneBreakpoint}px)`);
  React.useEffect(() => {
    if (inPhoneMode) {
      setState({
        ...state,
        leftPanelWidth: 100,
        rightPanelWidth: 100
      });
    } else {
      setState({
        ...state,
        leftPanelWidth: 50,
        rightPanelWidth: 50
      });
    }
  }, [inPhoneMode]);

  const handleResize = () => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResize);
  };

  const resize = (e: MouseEvent) => {
    let editorWidth = (e.clientX * 100) / window.innerWidth;
    if (editorWidth >= 30 && editorWidth <= 60) {
      setState({
        ...state,
        leftPanelWidth: (e.clientX * 100) / window.innerWidth,
        rightPanelWidth: 100 - (e.clientX * 100) / window.innerWidth
      });
    }
  };

  const stopResize = () => {
    window.removeEventListener("mousemove", resize);
  };

  return (
    <div className="root">
      <BrowserRouter>
        <Switch>
          <Route exact path="/playground">
            <div
              className="left-panel"
              style={{ width: `${state.leftPanelWidth}vw` }}
            >
              {props.editor}
            </div>
          </Route>
          <Route exact path="/playground/repl">
            <div
              style={{
                paddingTop: "54px",
                width: `${state.rightPanelWidth}vw`
              }}
            >
              {props.question}
            </div>
          </Route>
          <Route exact path="/playground/description">
            <div>{props.repl}</div>
          </Route>
        </Switch>
      </BrowserRouter>
      <div className="bottomBar">{props.bottomBar}</div>
    </div>
  );
}
