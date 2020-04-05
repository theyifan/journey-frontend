import React, { useState, useContext } from "react";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import TextsmsIcon from "@material-ui/icons/Textsms";

import "./index.css";

interface completeNavBarProps {}

const BottomBar: React.FC<completeNavBarProps> = completeNavBarProps => {
  return (
    <div>
      <div className="buttomBar">
        <ul>
          <li>
            <a href="/playground">
              <SportsEsportsIcon
                style={{
                  marginTop: "10px",
                  fontSize: "30px"
                }}
              />
            </a>
          </li>
          <li>
            <a href="/playground/repl">
              <DeveloperModeIcon
                style={{
                  marginTop: "10px",
                  fontSize: "30px"
                }}
              />
            </a>
          </li>
          <li>
            <a href="/playground/description">
              <TextsmsIcon
                style={{
                  marginTop: "10px",
                  fontSize: "30px"
                }}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomBar;
