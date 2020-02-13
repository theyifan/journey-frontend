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

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
const drawerWidth = 140;
const useStylesSide = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
}));
function SideBartry(props) {
  const [source, setSource] = React.useState("source1");
  const [openLibrary, setOpenLibrary] = React.useState(false);
  const [open, setOpen] = React.useState(false);
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
  const classesSide = useStylesSide();
  const theme = useTheme();
  const handleClick1 = () => {
    setSource("source1");
  };
  const handleClick2 = () => {
    setSource("source2");
  };
  const handleClick3 = () => {
    setSource("source3");
  };
  const handleClick4 = () => {
    setSource("source4");
  };

  const sourceSideList = side => (
    <div
      className={classes.list1}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem>
          <IconButton onClick={handleClick1}>
            <ListItemIcon>
              <Battery20Icon />
            </ListItemIcon>
            <ListItemText align="right" primary={"Source 1"} />
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton onClick={handleClick2}>
            <ListItemIcon>
              <Battery50Icon />
            </ListItemIcon>
            <ListItemText align="right" primary={"Source 2"} />
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton onClick={handleClick3}>
            <ListItemIcon>
              <Battery80Icon />
            </ListItemIcon>
            <ListItemText align="right" primary={"Source 3"} />
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton onClick={handleClick4}>
            <ListItemIcon>
              <BatteryFullIcon />
            </ListItemIcon>
            <ListItemText align="right" primary={"Source 4"} />
          </IconButton>
        </ListItem>
      </List>
    </div>
  );

  const librarySideList = side => (
    <div
      className={classes.list2}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem>
          <IconButton>
            <ListItemText align="right" primary={"NONE"} />
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton>
            <ListItemText align="right" primary={"RUNES"} />
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton>
            <ListItemText align="right" primary={"CURVES"} />
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton>
            <ListItemText align="right" primary={"SOUNDS"} />
          </IconButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <IconButton>
            <ListItemText align="right" primary={"BINARYTREES"} />
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton>
            <ListItemText align="right" primary={"PIX&FLIX"} />
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton>
            <ListItemText align="right" primary={"MACHINE LEARNING"} />
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton>
            <ListItemText align="right" primary={"ALL"} />
          </IconButton>
        </ListItem>
      </List>
    </div>
  );

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right1: false,
    right2: false
  });

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

  const sendData = () => {
    props.parentCallback();
  };

  return (
    <Drawer>
      className={classesSide.drawer}
      variant="persistent" anchor="left" open={true}
      {console.log(props.open)}
      classesSide=
      {{
        paper: classesSide.drawerPaper
      }}
      >
      <div className={classesSide.drawerHeader}>
        <IconButton onClick={sendData()}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <div>
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

            <ListItemText primary={"Library"} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <IconButton onClick={handleDrawerClose}>
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
    </Drawer>
  );
}

export default SideBartry;
