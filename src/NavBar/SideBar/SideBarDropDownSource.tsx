import React, { useContext } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";

import { Store, IGlobalAction } from "./../../Store";

const useStyles = makeStyles({
  list: {
    width: 250,
    height: 700,
    backgroundColor: "#000000",
    fontFamily: "sans-serif"
  },
  fullList: {
    width: "auto"
  }
});

type Anchor = "top";

export default function SideBarDropDownSource() {
  const { globalState, dispatch } = useContext(Store);
  const changeSource = (source: string): IGlobalAction => {
    return dispatch({
      type: source
    });
  };

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem
          button={true}
          onClick={() => changeSource("CHANGE_TO_SOURCE1")}
        >
          <ListItemText
            style={{ color: "white" }}
            primary={"source1"}
          ></ListItemText>
        </ListItem>
        <ListItem
          button={true}
          style={{ color: "white" }}
          onClick={() => changeSource("CHANGE_TO_SOURCE2")}
        >
          <ListItemText primary={"source2"}></ListItemText>
        </ListItem>
        <ListItem
          button={true}
          style={{ color: "white" }}
          onClick={() => changeSource("CHANGE_TO_SOURCE3")}
        >
          <ListItemText primary={"source3"}></ListItemText>
        </ListItem>
        <ListItem
          button={true}
          style={{ color: "white" }}
          onClick={() => changeSource("CHANGE_TO_SOURCE4")}
        >
          <ListItemText primary={"source4"}></ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {(["top"] as Anchor[]).map(anchor => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            style={{ color: "white" }}
          >
            {globalState.source}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
