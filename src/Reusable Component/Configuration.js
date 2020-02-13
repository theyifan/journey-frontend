import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import WebIcon from "@material-ui/icons/Web";
import { Link } from "react-router-dom";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

function Configuration() {
  const [configList, setConfigList] = useState();

  const handleChange = event => {
    setConfigList(event.target.value);
  };
  const handleSelectOpen = () => {
    setConfigList(!configList);
  };
  return (
    <div>
      <Select
        value={configList}
        input={<Input />}
        onChange={handleChange}
        MenuProps={MenuProps}
        IconComponent={props => (
          <div>
            <i {...props} className={`material-icons ${props.className}`}>
              <WebIcon />
            </i>
          </div>
        )}
        style={{ backgroundColor: "inherit" }}
      >
        <MenuItem value={"Mission"}>
          <Link
            to="/content/mission"
            style={{ textDecoration: "none", color: "#795548" }}
          >
            Mission
          </Link>
        </MenuItem>
        <MenuItem
          value={"Quest"}
          style={{ textDecoration: "none", color: "#795548" }}
        >
          Quest
        </MenuItem>
        <MenuItem
          value={"Contest"}
          style={{ textDecoration: "none", color: "#795548" }}
        >
          Contest
        </MenuItem>
        <MenuItem value={"Playground"}>
          <Link
            to="/content/playground"
            style={{ textDecoration: "none", color: "#795548" }}
          >
            Playground
          </Link>
        </MenuItem>
      </Select>
    </div>
  );
}

export default Configuration;
