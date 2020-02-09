import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

function Editor() {
  return (
    <div>
      <Box width="650px" clone>
        <TextField
          id="outlined-multiline-static"
          label="Editor"
          multiline
          rows="35"
          PlaceHolder="Code starts here..."
          variant="outlined"
        />
      </Box>
    </div>
  );
}

export default Editor;
