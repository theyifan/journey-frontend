import React, { useContext } from "react";

import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import DehazeIcon from "@material-ui/icons/Dehaze";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import { SideBarContext, IAction } from "./SideBarContext";
import SourceDropDown from "./SourceDropDown";
import "./NavBar.css";

/**
 * States
 */

const NavBar: React.FC = () => {
  const { state, dispatch } = useContext(SideBarContext);
  const toggleButton = (): IAction =>
    dispatch({
      type: "BUTTON_PRESSED"
    });
  return (
    <div>
      <header className="navBar">
        <nav className="navBar_navigation">
          <div className="toggleButton">
            <IconButton onClick={toggleButton} edge="start">
              <DehazeIcon
                style={{
                  color: "white",
                  height: "45px",
                  alignSelf: "flex-start",
                  display: state.sideDrawerState ? "none" : "flex"
                }}
              />
              <ClearIcon
                style={{
                  color: "white",
                  height: "45px",
                  alignSelf: "flex-start",
                  display: state.sideDrawerState ? "flex" : "none"
                }}
              />
            </IconButton>
          </div>
          <div className="spacer" />
          <div>
            <img src="images/logo.png" className="navBar_logo" />
          </div>
          <div className="navBar_navigation-items">
            <ul>
              <li>
                <SourceDropDown />
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
          <div className="spacer2"></div>
          <div className="playButton">
            <IconButton>
              <DirectionsRunIcon
                style={{
                  color: "white",
                  height: "45px"
                }}
              />
            </IconButton>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
