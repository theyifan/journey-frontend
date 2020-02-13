import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import Battery20Icon from "@material-ui/icons/Battery20";
import Battery50Icon from "@material-ui/icons/Battery50";
import Battery80Icon from "@material-ui/icons/Battery80";
import BatteryFullIcon from "@material-ui/icons/BatteryFull";
import ShareIcon from "@material-ui/icons/Share";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import SourceSideList from "./SourceSideList";
import LibrarySideList from "./LibrarySideList";
import Runner from "../library_function/Runner";
import ModuleLoader from "../library_function/ModuleLoader";
import Box from "@material-ui/core/Box";

function SideBar() {
  //state area
  const [source, setSource] = React.useState("source1");
  const [library, setLibrary] = React.useState("Library");
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right1: false,
    right2: false
  });
  //control state area
  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  //style area
  const useStyles = makeStyles({
    list1: {
      width: 160
    },
    list2: {
      width: 200
    },
    fullList: {
      width: "auto"
    }
  });
  const classes = useStyles();

  //call back function for source bar
  const callBackSource = childData => {
    return () => setSource(childData);
  };
  const callBackLibrary = childData => {
    if (childData === "NONE") {
      return () => setLibrary("Library");
    } else {
      return () => setLibrary(childData);
    }
  };

  //source bar component
  const sourceSideList = side => (
    <div
      className={classes.list1}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <SourceSideList callBack={callBackSource} />
    </div>
  );
  // Library bar component
  const librarySideList = side => (
    <div
      className={classes.list2}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <LibrarySideList callBack={callBackLibrary} />
    </div>
  );

  const sourceIcon =
    source === "source1" ? (
      <Battery20Icon />
    ) : source === "source2" ? (
      <Battery50Icon />
    ) : source === "source3" ? (
      <Battery80Icon />
    ) : (
      <BatteryFullIcon />
    );
  return (
    <div className={classes.toolbar}>
      <Divider />
      <List>
        <ListItem>
          <ListItemIcon>
            <IconButton onClick={toggleDrawer("right1", true)}>
              {sourceIcon}
            </IconButton>
          </ListItemIcon>
          <ListItemText primary={"Source"} />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <IconButton onClick={toggleDrawer("right2", true)}>
              <LibraryBooksIcon />
            </IconButton>
          </ListItemIcon>

          <ListItemText primary={library} />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <IconButton>
              <ShareIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary={"Share"} />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <IconButton onClick={handleDrawerClose}>
              <ChromeReaderModeIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary={"Share"} />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <IconButton onClick={handleDrawerClose}>
              <QuestionAnswerIcon />
            </IconButton>
          </ListItemIcon>

          <ListItemText primary={"Share"} />
        </ListItem>
      </List>
      <Drawer
        anchor="right"
        open={state.right1}
        onClose={toggleDrawer("right1", false)}
      >
        {sourceSideList("right1")}
      </Drawer>
      <Drawer
        anchor="right"
        open={state.right2}
        onClose={toggleDrawer("right2", false)}
      >
        {librarySideList("right2")}
      </Drawer>
    </div>
  );
}

export default SideBar;
