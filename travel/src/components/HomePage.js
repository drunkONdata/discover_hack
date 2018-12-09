import React, { Component } from 'react';
import { Button, Form, Grid, Segment, Label } from 'semantic-ui-react'

export class HomePage extends Component {
  state = {
  }

  render(){
    return (
      <Grid centered>
        <Grid.Column stretched computer={3} mobile={14}>
          HomePage
        </Grid.Column>
      </Grid>
    );
  }
}


export default HomePage;
