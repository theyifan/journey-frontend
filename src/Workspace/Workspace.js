import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  repl: {
    display: "flex"
  }
}));

function Workspace(props) {
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
            {props.editor}
          </Grid>
        </Box>

        <Grid direction="column">
          {props.repl}

          <Grid>
            {props.question}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Workspace;
