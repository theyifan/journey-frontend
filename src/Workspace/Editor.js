import React from 'react';
import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
// import "ace-builds/src-noconflict/theme-github";
// import "ace-builds/src-noconflict/theme-solarized_dark.js";
// import "ace-builds/src-noconflict/theme-solarized_light.js";
// import "ace-builds/src-noconflict/theme-tomorrow_night.js";
// import "ace-builds/src-noconflict/theme-xcode.js";
// import EditorSettings from './EditorSettings';
// import EditorContext from '../../context/EditorContext';

class Editor extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: "Code starts here...",
    }
    this.onChange = this.onChange.bind(this);
    this.setMode = this.setMode.bind(this);

  }
  onChange(newValue) {
    this.setState({
      value: newValue
    });
  }

  setMode(e) {
    this.setState({
      mode: e.target.value
    });
  }

  render() {
    return (
      <div>
        {/* <EditorSettings /> */}
        <AceEditor
          mode="javascript"
          theme={this.context.editorTheme}
          height="100vh"
          width="inherit"
          fontSize="14"
          value={this.state.value}
          onChange={this.onChange}
        />   
      </div>
    )
  }
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
