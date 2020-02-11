import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  paper: {
    paadding: "2vw"
  }
}));

function Workspace(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={1} style={{ marginTop: -40 }}>
        <Grid item md xs={12}>
          {props.editor}
        </Grid>
        <Grid item md>
          <Grid container direction="column" spacing={1}>
            <Grid item md>
              {props.repl}
            </Grid>
            <Grid item md>
              <Paper style={{ padding: 180 }}></Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Workspace;
