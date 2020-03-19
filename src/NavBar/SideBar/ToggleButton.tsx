import React from "react";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./ToggleButton.css";

/**
 * Props
 */

const ToggleButton: React.FC = toggleButtonProps => {
  return (
    <div>
      <IconButton
        style={{ color: "white" }}
        aria-label="open drawer"
        edge="start"
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
};

export default ToggleButton;
