import React, { useContext } from "react";
import "./SourceDropDown.css";
import { Store, IGlobalAction } from "./../Store";
import IconButton from "@material-ui/core/IconButton";

/**
 * Props
 */

const SourceDropDown: React.FC = () => {
  const { globalState, dispatch } = useContext(Store);
  const changeSource = (source: string): IGlobalAction => {
    return dispatch({
      type: source
    });
  };

  return (
    <div className="dropdown">
      <div className="source">
        <button>{globalState.source}</button>
        <ul
          onClick={() => {
            console.log("in");
            return;
          }}
        >
          <li
            onClick={() => {
              console.log("in");
              return;
            }}
          >
            <IconButton>Source1</IconButton>
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
