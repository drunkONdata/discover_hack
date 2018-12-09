import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import './flightPg.css'

import Top from './Top'
import Form from './Form'

export class FlightDetail extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column stretched computer={14} mobile={14}>
          <Top />
          <Form />
        </Grid.Column>
      </Grid>
    )
  }
}

export default FlightDetail 