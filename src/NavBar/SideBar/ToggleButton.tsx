import React from "react";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./ToggleButton.css";

/**
 * Props
 */

interface toggleButtonProps {}

const ToggleButton: React.FC<toggleButtonProps> = toggleButtonProps => {
  //state area
  const [open, setOpen] = React.useState(false);
  //handle the openness and closeness of sidebar
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <IconButton
        style={{ color: "white" }}
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
};

export default ToggleButton;
