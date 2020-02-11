import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

function Editor() {
  return (
    <TextField
      id="outlined-multiline-static"
      label="Editor"
      multiline
      rows="37"
      PlaceHolder="Code starts here..."
      variant="outlined"
      style={{ width: "100%" }}
      fullWidth
    />
  );
}

export default Editor;
