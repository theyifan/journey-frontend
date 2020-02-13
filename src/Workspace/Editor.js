import React from "react";
import TextField from "@material-ui/core/TextField";

function Editor(props) {
  return (
    <TextField
      id="outlined-multiline-static"
      label="Editor"
      multiline
      rows="37"
      PlaceHolder="Code starts here..."
      variant="outlined"
      style={{ width: "100%" }}
      onChange={e => props.callBack(e.target.value)}
      fullWidth
    />
  );
}

export default Editor;
