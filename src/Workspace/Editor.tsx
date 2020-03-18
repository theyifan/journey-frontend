import React from "react";
import TextField from "@material-ui/core/TextField";

export interface IEditorProps {
  callBack: (inputCode: string) => void;
}


function Editor(props: IEditorProps) {
  return (
    <TextField
      id="outlined-multiline-static"
      label="Editor"
      multiline
      rows="37"
      placeholder="Code starts here..."
      variant="outlined"
      style={{ width: "100%" }}
      onChange={e => props.callBack(e.target.value)}
      fullWidth
    />
  );
}
// function Editor(props) {
//   return (
//   <TextField
//   id="outlined-multiline-static"
//   label="Editor"
//   multiline
//   rows="37"
//   placeholder="Code starts here..."
//   variant="outlined"
//   style={{ width: "100%" }}
//   onChange={e => props.callBack(e.target.value)}
//   fullWidth
// />

//   )
// }

// Editor.contextType = EditorContext;

export default Editor;
