import React from "react";
import Paper from "@material-ui/core/Paper";
import question from "./question.png";
const style = {
  height: 365
};

function Question() {
  return (
    <div>
      <Paper style={style}>
        <img src={question} width="100%" />
      </Paper>
    </div>
  );
}

export default Question;
