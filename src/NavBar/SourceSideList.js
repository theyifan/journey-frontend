import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Battery20Icon from "@material-ui/icons/Battery20";
import Battery50Icon from "@material-ui/icons/Battery50";
import Battery80Icon from "@material-ui/icons/Battery80";
import BatteryFullIcon from "@material-ui/icons/BatteryFull";
import IconButton from "@material-ui/core/IconButton";

function SourceSideList(props) {
  console.log(props.callBack);
  return (
    <List>
      <ListItem>
        <IconButton onClick={props.callBack("source1")}>
          <ListItemIcon>
            <Battery20Icon />
          </ListItemIcon>
          <ListItemText align="right" primary={"Source 1"} />
        </IconButton>
      </ListItem>
      <ListItem>
        <IconButton onClick={props.callBack("source2")}>
          <ListItemIcon>
            <Battery50Icon />
          </ListItemIcon>
          <ListItemText align="right" primary={"Source 2"} />
        </IconButton>
      </ListItem>
      <ListItem>
        <IconButton onClick={props.callBack("source3")}>
          <ListItemIcon>
            <Battery80Icon />
          </ListItemIcon>
          <ListItemText align="right" primary={"Source 3"} />
        </IconButton>
      </ListItem>
      <ListItem>
        <IconButton onClick={props.callBack("source4")}>
          <ListItemIcon>
            <BatteryFullIcon />
          </ListItemIcon>
          <ListItemText align="right" primary={"Source 4"} />
        </IconButton>
      </ListItem>
    </List>
  );
}

export default SourceSideList;
