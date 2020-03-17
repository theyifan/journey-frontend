import React from "react";

import ToggleButton from "./SideBar/ToggleButton";
import "./NavBar.css";

/**
 * Props
 */

interface navBarProps {
  source: string;
  library: string;
}

const NavBar: React.FC<navBarProps> = () => {
  return (
    <div>
      <header className="navBar">
        <nav className="navBar_navigation">
          <div>
            <ToggleButton />
          </div>
          <div className="spacer" />
          <div>
            <img src="images/logo.png" className="navBar_logo" />
          </div>
          <div className="navBar_navigation-items">
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
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
