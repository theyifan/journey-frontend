import React from "react";

import ClearIcon from "@material-ui/icons/Clear";
import "./SideBar.css";

/**
 * Props
 */

interface sideBarProps {}

const SideBar: React.FC<sideBarProps> = sideBarProps => {
  return (
    <div>
      <nav className="side-drawer">
        <ul>
          <li>
            <ClearIcon
              style={{
                color: "white",
                height: "45px",
                alignSelf: "flex-start"
              }}
            />
            <img src="images/logo.png" style={{ width: "45px" }} />
          </li>
          <li>
            <a href="/">Source</a>
          </li>
          <li>
            <a href="/">Library</a>
          </li>
          <li>
            <a href="/">Language</a>
          </li>
          <li>
            <a href="/">TextBook</a>
          </li>
          <li>
            <a href="/">Run</a>
          </li>
          <li>
            <a href="/">Share</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
