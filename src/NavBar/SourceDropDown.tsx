import React, { useContext } from "react";
import "./SourceDropDown.css";
import { Store, IGlobalAction } from "./../Store";

/**
 * Props
 */

const SourceDropDown: React.FC = () => {
  const { globalState, dispatch } = useContext(Store);
  const changeSource = (source: string): IGlobalAction => {
    console.log("in");
    return dispatch({
      type: source
    });
  };

  return (
    <div className="dropdown">
      <div className="source">
        <button>{globalState.source}</button>
        <ul>
          <li>
            <button
              onClick={() => {
                console.log("in");
                return changeSource("CHANGE_TO_SOURCE1");
              }}
            >
              Source1
            </button>
          </li>
          <li>
            <button onClick={() => changeSource("CHANGE_TO_SOURCE2")}>
              Source2
            </button>
          </li>
          <li>
            <button onClick={() => changeSource("CHANGE_TO_SOURCE3")}>
              Source3
            </button>
          </li>
          <li>
            <button onClick={() => changeSource("CHANGE_TO_SOURCE4")}>
              Source4
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SourceDropDown;
