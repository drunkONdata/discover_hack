import React, { Component } from 'react';
import { Button, Form, Grid, Segment, Label } from 'semantic-ui-react'

export class Offers extends Component {
  state = {
  }

  render(){
    return (
      <Grid centered>
        <Grid.Column stretched computer={3} mobile={14}>
          Offers
        </Grid.Column>
      </Grid>
    );
  }
}


export default Offers;
