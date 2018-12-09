import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import './flightPg.css'
import moment from 'moment'
import airplane from '../../assets/airplane.png'

const daysRemaining = (depart) => {
  var depart = moment(depart)
  var today = moment()
  return depart.diff(today)
}


const splitStr = (str) => {
  return str.split('=')
}
const FlightFound = (props) => {
  console.log(props.history.location.search)
  var arr = (splitStr(props.history.location.search))
  const date = arr[4]
  const flightNum = arr[1].slice(0,2)+arr[1].slice(5,7)
  const airport = arr[3].slice(0,3)
  console.log(date, flightNum, airport)
  let days = daysRemaining(date)
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
                  <h1>Departure Time: {date}</h1>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Grid.Row>
        <Grid.Row>
          <div>
            <p>Flight {flightNum} is departing {airport} on {date}</p>
          </div>
        </Grid.Row>
      </Grid.Column>
    </Grid>
  )
}

export default FlightFound 