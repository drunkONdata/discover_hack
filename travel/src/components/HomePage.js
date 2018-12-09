import React, { Component } from 'react';
import { Button, Form, Grid, Segment, Label } from 'semantic-ui-react'
import TimeList from './time/TimeList'
import FlightInfo from './FlightInfo/FlightInfo'
import MerchContainer from './Merch/MerchContainer'

const noMarginStyle = {
  margin: '0px'
}
const marginTopStyle = {
  'margin-top': '20px'
}

export class HomePage extends Component {
  render(){
    return (
      <Grid centered>
        <Grid.Column stretched computer={14} mobile={14}>
          <FlightInfo />
          <TimeList />
          <div style={marginTopStyle}>
            <h3 style={noMarginStyle}>What's Around</h3>
            <h2 style={noMarginStyle}>Discovery Partners</h2>
          </div>
          <MerchContainer />
        </Grid.Column>
      </Grid>
    );
  }
}


export default HomePage;
