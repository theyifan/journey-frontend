import React from "react";
import { createContext } from "react";

interface IState {
  sideDrawerState: boolean;
}

export interface IAction {
  type: String;
}

const initialState: IState = {
  sideDrawerState: false
};

export const SideBarContext = createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
  console.log("on");
  switch (action.type) {
    case "BUTTON_PRESSED":
      return {
        ...state,
        sideDrawerState: !state.sideDrawerState
      };
    default:
      throw new Error();
  }
}

export function SideBarContextProvider(props: any): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, {
    sideDrawerState: false
  });
  return (
    <SideBarContext.Provider value={{ state, dispatch }}>
      {props.children}
    </SideBarContext.Provider>
  );
}
