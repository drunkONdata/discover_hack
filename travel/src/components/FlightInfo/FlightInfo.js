import React, { Component } from 'react';
import { Button, Form, Grid, Segment, Label } from 'semantic-ui-react'
import model from '../../models/requests'

export class FlightInfo extends Component {
  state = {
    flightNumber:'UA 32',
    departureTime: "2018-12-10T10:40:00"
  }

  // async componentDidMount(){
  //   const res = await model.getFlightInfo('ua', 32, 20181210)
  //   this.setState({
  //     ...this.state,
  //     departureTime: res.FLSDepartureDateTime
  //   })
  // }

  render(){
    return (
      <Segment>
        <Grid centered>
          <Grid.Row>
            <Grid.Column stretched computer={3} mobile={14}>
              Dec 2 Flight 789
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
          <Grid.Column stretched computer={3} mobile={14}>
            <h1>Departure Time: {this.state.departureTime}</h1>
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
export default FlightInfo;
