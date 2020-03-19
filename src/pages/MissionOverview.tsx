import React from 'react'
import MissionOverviewCard from '../Reusable Component/MissionOverviewCard'
import NavBar from '../NavBar/NavBar'
import { Container } from '@material-ui/core'

const today = new Date().toLocaleString();

export default function MissionOverview() {
  return (
    <>
      <NavBar seed={1}/>
      <Container maxWidth="lg">
      {/* <MissionOverviewCard to= "/mission/1/1" dueDate= {today} imageURL="../assets/sample.jpg"/>
      <MissionOverviewCard to= "/mission/2/1" dueDate= {today} imageURL="../assets/sample.jpg"/>
      <MissionOverviewCard to= "/mission/3/1" dueDate= {today} imageURL="../assets/sample.jpg"/> */}
      </Container>
    </>
  )
}
