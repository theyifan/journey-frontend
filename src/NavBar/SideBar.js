import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import Battery20Icon from "@material-ui/icons/Battery20";
import ShareIcon from "@material-ui/icons/Share";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

function SideBar() {
  return (
    <div>
      <Divider />
      <List>
        <ListItem>
          <ListItemIcon>
            <LibraryBooksIcon />
          </ListItemIcon>
          <ListItemText primary={"Source"} />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <Battery20Icon />
          </ListItemIcon>
          <ListItemText primary={"Library"} />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <ShareIcon />
          </ListItemIcon>
          <ListItemText primary={"Share"} />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <ChromeReaderModeIcon />
          </ListItemIcon>
          <ListItemText primary={"Share"} />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <QuestionAnswerIcon />
          </ListItemIcon>
          <ListItemText primary={"Share"} />
        </ListItem>
      </List>
    </div>
  );
}

export default SideBar;
