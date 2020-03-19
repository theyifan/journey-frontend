import React from "react";
import MissionOverviewCard from "../Reusable Component/MissionOverviewCard";
import NavBar from "../NavBar/NavBar2";
import CompleteNavBar from "./../NavBar/CompleteNavBar";
import { Container } from "@material-ui/core";

const today = new Date().toLocaleString();

export default function MissionOverview() {
  return (
    <>
      <CompleteNavBar />
      <Container maxWidth="lg">
        <MissionOverviewCard
          to="/mission/1/1"
          dueDate={today}
          imageURL="../assets/sample.jpg"
        />
        <MissionOverviewCard
          to="/mission/2/1"
          dueDate={today}
          imageURL="../assets/sample.jpg"
        />
        <MissionOverviewCard
          to="/mission/3/1"
          dueDate={today}
          imageURL="../assets/sample.jpg"
        />
      </Container>
    </>
  );
}
