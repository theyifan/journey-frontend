import React from "react";
import { createContext } from "react";

const defaultSource: string = "Source";
const defaultLanguage: string = "source";
const defaultLibaray: string = "none";

interface IGlobalState {
  source: string;
  library: string;
  language: string;
}

export interface IGlobalAction {
  type: String;
}

const initialState: IGlobalState = {
  source: defaultSource,
  library: defaultLibaray,
  language: defaultLanguage
};

export const Store = createContext<IGlobalState | any>(initialState);

function reducer(
  globalState: IGlobalState,
  action: IGlobalAction
): IGlobalState {
  switch (action.type) {
    case "CHANGE_TO_SOURCE1":
      return {
        ...globalState,
        source: "Source1"
      };
    case "CHANGE_TO_SOURCE2":
      return {
        ...globalState,
        source: "Source2"
      };
    case "CHANGE_TO_SOURCE3":
      return {
        ...globalState,
        source: "Source3"
      };
    case "CHANGE_TO_SOURCE4":
      return {
        ...globalState,
        source: "Source4"
      };
    default:
      throw new Error();
  }
}

export function StoreProvider(props: any): JSX.Element {
  const [globalState, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ globalState, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}
