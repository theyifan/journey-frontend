import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

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
  const [button, setButton] = useState();

  const handleChange = event => {
    setButton(event.target.value);
  };
  return (
    <div>
      <Button variant="contained" color="primary" href="#contained-buttons">
        <Select
          value={button}
          defaultValue="Playground"
          input={<Input />}
          onChange={handleChange}
          MenuProps={MenuProps}
        >
          <MenuItem value={"Mission"}>Mission</MenuItem>
          <MenuItem value={"Quest"}>Quest</MenuItem>
          <MenuItem value={"Contest"}>Contest</MenuItem>
          <MenuItem value={"Playground"}>Playground</MenuItem>
        </Select>
        {button}
      </Button>
    </div>
  );
}

export default Configuration;
