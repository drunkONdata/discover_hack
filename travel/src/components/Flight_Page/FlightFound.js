import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import './flightPg.css'

const FlightFound = ({ date, flightNum, airport, departTime }) => {
  // calculate days let days = 
  return (
    <Grid centered>
      <Grid.Column stretched computer={14} mobile={14}>
        <Grid.Row>
          <Segment className='top'>
            <Grid centered>
              <Grid.Row>
                <Grid.Column stretched computer={3} mobile={14}>
                  <img src={airplane} alt='airplane_icon' />
                  <Grid.Row>
                    {date}
                  </Grid.Row>
                  <Grid.Row>
                    {flightNum}
                  </Grid.Row>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column stretched computer={3} mobile={14}>
                  <p className='heading'>{days} DAYS UNTIL DEPATURE</p>
                  {/* <h1>Departure Time: {this.state.departureTime}</h1> */}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Grid.Row>
        <Grid.Row>
          <div>
            <p>Flight {flightNum} is departing {airport} at {departTime} on {date}</p>
          </div>
        </Grid.Row>
      </Grid.Column>
    </Grid>
  )
}

export default FlightFound 