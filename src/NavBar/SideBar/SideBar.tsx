import React from "react";

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
