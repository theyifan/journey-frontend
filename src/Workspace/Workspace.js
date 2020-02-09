import React from "react";
import Editor from "./Editor";
import REPL from "./REPL";
import Question from "./Question";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  repl: {
    display: "flex"
  }
}));

function Workspace() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex"
        alignItems="center"
      >
        <Box paddingLeft="30px">
          <Grid>
            <Editor />
          </Grid>
        </Box>

        <Grid direction="column">
          <REPL />

          <Grid>
            <Question />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Workspace;
