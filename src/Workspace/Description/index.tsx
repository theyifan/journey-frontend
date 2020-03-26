import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TabContent from "./TabContent";
import { Store } from "./../../Store";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import IntroductionTab from "./IntroductionTab";
import SettingsEthernetIcon from "@material-ui/icons/SettingsEthernet";
import ListVisualizer from "./ListVisualizer";
import VisibilityIcon from "@material-ui/icons/Visibility";
import SubstVisualizer from "./SubstVisualizer";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function Description() {
  const cardClasses = useStyles();
  const { globalState, dispatch } = useContext(Store);
  let tabButtonArr: JSX.Element[];
  let tabContentArr: JSX.Element[];
  if (globalState.source == "Source1") {
    tabButtonArr = [<ImportContactsIcon />, <SettingsEthernetIcon />];
    tabContentArr = [<IntroductionTab />, <ListVisualizer />];
  } else {
    tabButtonArr = [
      <ImportContactsIcon />,
      <VisibilityIcon />,
      <SettingsEthernetIcon />
    ];
    tabContentArr = [
      <IntroductionTab />,
      <ListVisualizer />,
      <SubstVisualizer content={["function", "f(x)"]} />
    ];
  }

  return (
    <Card className={cardClasses.root}>
      <CardContent>
        <TabContent tabButtonArr={tabButtonArr} tabContentArr={tabContentArr} />
      </CardContent>
    </Card>
  );
}
