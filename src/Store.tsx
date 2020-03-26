import React from "react";
import { createContext } from "react";

const defaultSource: string = "Source";
const defaultLanguage: string = "Language";
const defaultLibaray: string = "Library";

interface IGlobalState {
  source: string | undefined;
  library: string | undefined;
  language: string | undefined;
}

export interface IGlobalAction {
  type: String;
  source?: string;
  library?: string;
  language?: string;
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
    case "CHANGE_SOURCE":
      return {
        ...globalState,
        source: action.source
      };
    case "CHANGE_LIBRARY":
      console.log(action.library);
      return {
        ...globalState,
        library: action.library
      };
    case "CHANGE_LANGUAGE":
      return {
        ...globalState,
        language: action.language
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
