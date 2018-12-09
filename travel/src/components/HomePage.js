import React, { Component } from 'react';
import { Button, Form, Grid, Segment, Label } from 'semantic-ui-react'
import TimeList from './time/TimeList'
import FlightInfo from './FlightInfo/FlightInfo'

export class HomePage extends Component {
  state = {
  }

  render(){
    return (
      <Grid centered>
        <Grid.Column stretched computer={14} mobile={14}>
          <FlightInfo />
          <TimeList />
        </Grid.Column>
      </Grid>
    );
  }
}


export default HomePage;
