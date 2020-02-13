import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";

function LibrarySideList(props) {
  return (
    <div>
      <List>
        <ListItem>
          <IconButton onClick={props.callBack("NONE")}>
            <ListItemText align="right" primary={"NONE"} />
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton onClick={props.callBack("RUNES")}>
            <ListItemText align="right" primary={"RUNES"} />
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton onClick={props.callBack("CURVES")}>
            <ListItemText align="right" primary={"CURVES"} />
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton onClick={props.callBack("SOUNDS")}>
            <ListItemText align="right" primary={"SOUNDS"} />
          </IconButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <IconButton onClick={props.callBack("BINARYTREES")}>
            <ListItemText align="right" primary={"BINARYTREES"} />
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton onClick={props.callBack("PIXNFLIX")}>
            <ListItemText align="right" primary={"PIX&FLIX"} />
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton onClick={props.callBack("MACHINELEARNING")}>
            <ListItemText align="right" primary={"MACHINE LEARNING"} />
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton onClick={props.callBack("ALL")}>
            <ListItemText align="right" primary={"ALL"} />
          </IconButton>
        </ListItem>
      </List>
    </div>
  );
}

export default LibrarySideList;
