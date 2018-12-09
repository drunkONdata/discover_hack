import React, { Component } from 'react';
import { Button, Form, Grid, Segment, Label } from 'semantic-ui-react'
import airplane from '../../assets/airplane.png'

export class Top extends Component {
  render() {
    return (
      <Segment className='top'>
        <Grid centered>
          <Grid.Row>
            <Grid.Column stretched computer={3} mobile={14}>
              <img src={airplane} alt='airplane_icon' />
              <Grid.Row>
                ADD
              </Grid.Row>
              <Grid.Row>
                Flight Details
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column stretched computer={3} mobile={14}>
              <p className='heading'>? DAYS UNTIL DEPATURE</p>
              {/* <h1>Departure Time: {this.state.departureTime}</h1> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default Top;
